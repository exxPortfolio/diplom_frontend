import React from "react";
import {getProjectFiles} from "../../../server-api/using";
import EditorMain from "../editor-main";

export const EditorContext = React.createContext(null)

export default class EditorContextMan extends React.Component {
    render() {
        return (
            <EditorMain />
        );
    }
}