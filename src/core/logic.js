import { css, array, tree } from "../tools"
import { selectionStrategies, foldStrategies, clickStrategies } from "./strategies"
import { defaults } from "./defaults"

/* Boilerplate  for framework class adapters */
class Core {

    constructor(inputs, outputs, state, refresh) {
        this.inputs = inputs
        this.outputs = outputs
        this.state = state
        this.refresh = refresh
    }

}

/* A tree node */
export class Node extends Core {

    /* Various checks */

    isSelected = item => array(this.inputs.get().selection).contains(item)
    isFolded = item =>
        (!this.inputs.get().searched || this.isAsync(item)) &&
        (this.inputs.get().strategies.fold || [])
                    .map(strat => (foldStrategies[strat] || strat).bind(this))
                        .reduce((last, curr) => last && curr(item), true)
    hasChildren = item => item[this.inputs.get().category] && item[this.inputs.get().category] instanceof Array
    isAsync = item => item[this.inputs.get().category] && typeof item[this.inputs.get().category] === "function"
    isDisabled = item => this.inputs.get().disabled && this.inputs.get().disabled(item)
    isDraggable = item =>
            item &&
            this.inputs.get().dragndrop.draggable && (
            typeof this.inputs.get().dragndrop.draggable === "function" ?
                this.inputs.get().dragndrop.draggable(item) :
                true
            )
    isDroppable = item =>
            this.inputs.get().dragndrop.droppable && (
            typeof this.inputs.get().dragndrop.droppable === "function" ?
                this.inputs.get().dragndrop.droppable(item) :
                true
            )

    /* Styles calculation */

    ulCss = () =>
        css.classes({
            [`${this.inputs.get().css.depth || defaults.css.depth}-${this.inputs.get().depth || 0}`]: true
        })

    liCss = item => {
        const get = prop => this.inputs.get().css[prop] || defaults.css[prop]

        return css.classes({
            [get("selected")]:  this.isSelected(item),
            [get("category")]:  this.hasChildren(item) || this.isAsync(item),
            [get("folded")]:    this.isFolded(item),
            [get("disabled")]:  this.isDisabled(item),
            [get("async")]:     this.isAsync(item) && this.isFolded(item),
            [get("loading")]:   this.isAsync(item) && !this.isFolded(item)
        })
    }

    /* Promises */

    // Pending promises
    pending = []

    // Unwrap a promise and mutate the model to add the results
    unwrapPromise = item => {
        this.pending.push(item)
        return this.inputs.get().async(item[this.inputs.get().category])
            .then(res => {
                item[this.inputs.get().category] = res
                this.refresh()
            })
            .catch(err => {
                /* eslint-disable */
                throw err
                /* eslint-enable */
            })
            .then(() => this.pending = this.pending.filter(e => e !== item))
    }

    /* Events */

    // On item click
    onClick = item => event => {
        if(this.isDisabled(item))
            return
        (this.inputs.get().strategies.click || [])
                    .map(strat => (clickStrategies[strat] || strat).bind(this))
                        .forEach(strat => strat(item))
        this.inputs.get().onSelect(item, this.inputs.get().ancestors, this.inputs.get().model)
        event.stopPropagation()
    }

    // On opener click
    onOpener = item => event => {
        const newVal = this.state.get().unfolded.filter(i => i !== item)
        if(newVal.length === this.state.get().unfolded.length)
            newVal.push(item)
        this.state.set({ unfolded: newVal })
        event.stopPropagation()
    }

    // Drag'n'drop //

    onDragStart = item => event => {
        event.stopPropagation()
        this.inputs.get().dragndrop.dragStart(item, event, this.inputs.get().ancestors, this.inputs.get().model)
    }
    onDragOver = item => event => {
        event.preventDefault()
        event.stopPropagation()

        if(this.dragGuard(item)) {
            event.dataTransfer.dropEffect = "none"
            css.addClass(event.currentTarget, "nodrop")
            return
        }

        css.addClass(event.currentTarget, "dragover")
    }
    onDragEnter = item => event => {
        event.preventDefault()
        event.stopPropagation()
        // If dragging over an opener
        if(item && !this.dragGuard(item) && (this.hasChildren(item) || this.isAsync(item)) && css.hasClass(event.target, "ItemTree-opener")) {
            const newVal = this.state.get().unfolded.filter(i => i !== item)
            newVal.push(item)
            this.state.set({ unfolded: newVal })
        }
    }
    onDragLeave = event => {
        event.stopPropagation()
        css.removeClass(event.currentTarget, "dragover")
        css.removeClass(event.currentTarget, "nodrop")
    }
    onDrop = item => event => {
        event.stopPropagation()
        css.removeClass(event.currentTarget, "dragover")
        css.removeClass(event.currentTarget, "nodrop")
        if(this.dragGuard(item))
            return
        const target = item ?
            this.hasChildren(item) ?
                item :
                array(this.inputs.get().ancestors).last() :
            null
        this.inputs.get().dragndrop.onDrop(target, event)
    }

    // Guard against bad drop
    dragGuard = item => {
        // Prevent drop when not droppable
        if(!this.isDroppable(item)) return false
        // Prevent drop on self
        const selfDrop = item && array(this.inputs.get().selection).contains(item)
        // Prevent drop on child
        const childDrop = this.inputs.get().ancestors &&
                this.inputs.get().ancestors.reduce((prev, curr) =>
                    prev || array(this.inputs.get().selection).contains(curr), false)

        return selfDrop || childDrop
    }

    getDragEvents = (item, condition = true) => {
        if(!condition) return {}
        const result = {
            draggable:      this.isDraggable(item),
            onDragStart:    this.isDraggable(item) && this.onDragStart(item).bind(this),
            onDragOver:     this.onDragOver(item).bind(this),
            onDragEnter:    this.onDragEnter(item).bind(this),
            onDragLeave:    this.onDragLeave.bind(this),
            onDrop:         this.isDroppable(item) && this.onDrop(item).bind(this)
        }
        for(const key in result)
            if(!result[key])
                delete result[key]
        return result
    }

}

/* Root node of the tree */
export class RootNode extends Core {


    /* Events */

    // Keyboard modifiers list
    modifiers = {}
    onKey = function(event) {
        this.modifiers = {
            control: event.getModifierState("Control"),
            meta: event.getModifierState("Meta"),
            shift: event.getModifierState("Shift")
        }
    }.bind(this)

    // When new element(s) are selected
    onSelect = function(item, ancestors, neighbours) {
        const selectionStrategy = this.inputs.get().strategies.selection || []
        const newSelection = selectionStrategy
                                .map(strat => (selectionStrategies[strat] || strat).bind(this))
                                    .reduce((last, curr) => curr(item, last, neighbours, ancestors), this.inputs.get().selection)
        return this.outputs.onSelect(newSelection)
    }.bind(this)

    // Drag start
    onDragStart = function(target, event, ancestors, neighbours) {
        event.dataTransfer.setData("application/json", JSON.stringify(target))
        event.dataTransfer.dropEffect = "move"

        if(!array(this.inputs.get().selection).contains(target)) {
            this.onSelect(target, ancestors, neighbours)
        }
        this.outputs.onStart(target, event, ancestors, neighbours)
    }.bind(this)

    // Drop event
    onDrop = function(target, event) {
        const jsonData = event.dataTransfer.getData("application/json")
        if(!jsonData)
            return
        const data = JSON.parse(jsonData)

        this.outputs.onDrop(target, data)
    }.bind(this)

    // Framework input wrapper
    wrapDragNDrop = () => ({
        ...this.inputs.get().dragndrop,
        dragStart: this.onDragStart,
        onDrop: this.onDrop
    })

    // Filters the tree on a search
    filterTree = input =>
        !input.trim() ? null :
            tree(this.inputs.get().model, this.inputs.get().category)
                .treeFilter(this.inputs.get().search(input.trim()))

}