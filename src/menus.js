import quip from "quip";

export function allMenuCommands() {
    return [
        {
            id: "collapse",
            label: quiptext("Collapse"),
            handler: () => {
                quip.apps.getRootRecord().set("collapsed", true);
            }
        },
        {
            id: "expand",
            label: quiptext("Expand"),
            handler: () => {
                quip.apps.getRootRecord().set("collapsed", false);
            }
        },
        {
            id: "editing",
            label: quiptext("Editting"),
            handler: () => {
                quip.apps.getRootRecord().set("editMode", true);
            }
        }
    ]
}


export function getToolbarCommandIds() {
    let toolbarCommandIds = ["collapse", "expand", "editing"];
    return toolbarCommandIds;
}