import Editor from "@monaco-editor/react";
import {useContext, useEffect, useRef, useState} from "react";
import {EditorContext} from "../elements/editor_context-man";
import {linkClasses} from "@mui/material";

export function CodeEditor() {
    const {
        editorCode, setEditorCode,
        fileName,setFileExt, fileExt,
        projectFiles, setProjectFiles
    } = useContext(EditorContext)

    const [code, setCode] = useState(editorCode);
    const [language, setLanguage] = useState('javascript')
    const val = useRef(null);


    const supportedLanguages = {
        js: "javascript",
        html: "html",
        css: "css",
        ts: "typescript",
        msql: "mysql",
        sql: "sql",
        scss: "scss",
        less: "less",
        json: "json"
    }

    useEffect(() => {
        Object.keys(supportedLanguages).forEach((lang,i) => {
            if (fileName.split('.')[1] === lang)
                setFileExt(Object.values(supportedLanguages)[i])
        })
    },[editorCode, fileExt])

    function autoSaveFile_frontend() { // always enabled
        // editor_code, file_name
        let files = projectFiles;
        console.log(fileName)
        Object.keys(files).forEach((key, index) => {
            if (key === fileName){
                files[key] = editorCode // Works only in root directory
                // Object.values(files)[index] = editorCode;
                // console.log(files)
            }
        })
    }

    function autoSaveFile_backend() { // enabled ?

    }

    function saveFile_frontend() {

    }

    function saveFile_backend() {

    }

    function saveAll_backend() {

    }

    return (
        <>
            {
                editorCode === undefined
                    ?
                    <>
                        <div className='editor-no-editor-value'>
                            No file opened
                        </div>
                    </>
                    :
                    <Editor height="100%"
                        defaultLanguage={"javascript"}
                        theme={"vs-dark"}
                        defaultValue={"asd"}
                        language={fileExt}
                        value={editorCode}
                        onChange={(value,ev) => {
                            setEditorCode(value)
                            autoSaveFile_frontend()
                        }}
                    />
            }
        </>
    );
}