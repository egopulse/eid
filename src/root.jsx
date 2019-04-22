import quip from "quip";
import App from "./App.jsx";

import {allMenuCommands, getToolbarCommandIds} from "./menus";

class CollapsableShape extends quip.apps.RootRecord {
    static getProperties() {
        return {
            content: quip.apps.RichTextRecord
        };
    }
}
quip.apps.registerClass(CollapsableShape, "root");

quip.apps.initialize({
    initializationCallback: function(rootNode, params) {
        let rootRecord = quip.apps.getRootRecord();
        
        init("content", {
            RichText_placeholderText: "Oh... no content",
        });
        
        ReactDOM.render(
            <App 
                content={rootRecord.get("content")} 
            />,
            rootNode,
        );
    }
});

function init(field, value) {
    const record = quip.apps.getRootRecord();
    record.has(field) || record.set(field, value);
}