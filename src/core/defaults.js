// @flow

export const defaults = {
    labels: {
        "search.placeholder": "Search ..."
    },
    css: {
        TreeView:           "TreeView",
        opener:             "opener",
        depth:              "depth",
        selected:           "selected",
        category:           "category",
        folded:             "folded",
        disabled:           "disabled",
        async:              "async",
        loading:            "loading",
        nodrop:             "nodrop",
        dragover:           "dragover",
        search:             "search",
        item:               "item"
    },
    strategies: {
        selection: ["single"],
        click: ["select"],
        fold: [ "not-selected", "no-child-selection" ]
    },
    display: (_: Object) => _.toString(),
    async: (_: Function) => _(),
    openerOpts: { position: "right" },
    dragndrop: {
        draggable: false,
        droppable: false
    }
}
