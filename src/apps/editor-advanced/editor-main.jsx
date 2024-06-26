import {CodeEditor} from "./core/code-editor";
import {NavMenu} from "./elements/nav-menu";
//import FileTreeView from "./elements/file-tree";
import {RenderAllPopups} from "./elements/popup/popup-object";
import {getCookie, getProjectData, getProjectFiles} from "../../server-api/using";
import {createNotification} from "../../elements/notify-component";
import {styled, alpha} from '@mui/material/styles';
import {SimpleTreeView} from '@mui/x-tree-view/SimpleTreeView';
import {TreeItem, treeItemClasses} from '@mui/x-tree-view/TreeItem';
import React, {useEffect, useRef, useState} from "react";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import IndeterminateCheckBoxRoundedIcon from "@mui/icons-material/IndeterminateCheckBoxRounded";
import DisabledByDefaultRoundedIcon from "@mui/icons-material/DisabledByDefaultRounded";
import FileTreeView from "./elements/file-tree";
import {EditorContext} from "./elements/editor_context-man";

export default function EditorMain() {
    const [projectState, setProjectState] = useState([]);
    const [projectFiles, setProjectFiles] = useState([]);
    const [projectName, setProjectName] = useState([]);
    const [editorCode, setEditorCode] = useState("no code right now opened")
    const [fileName, setFileName] = useState("")
    const [fileExt, setFileExt] = useState("js")
    const compileMode = useRef('start');

    useEffect(() => {
        getProjectData(function (projData) {
            setProjectName(projData.project.name);
        }).catch((err) => {})
        getProjectFiles(function (projFiles) {
            setProjectFiles(projFiles.result)
            console.log(projFiles.result)
        }).then((v) => {
        }).catch((err) => {})

    },[])

    const genId = () => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < 10) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return `${result}`;
    }

    return (
        <>
            <EditorContext.Provider value={{
                projectFiles, setProjectFiles,
                editorCode, setEditorCode,
                fileName, setFileName,
                fileExt, setFileExt
            }}>
                <div className='z-1-upper-panel'>
                    <div className='z-1-upper-panel-nav'>
                        <span className='z-1-upper-panel-title'>UniJS-WebEditor</span>
                        <NavMenu/>
                    </div>
                    <div className='z-1-upper-panel-func'>
                        <select className='z-3' ref={compileMode}>
                            <option>Compile</option>
                            <option>View</option>
                        </select>
                        <input type='button' value='Start' onClick={createNotification('1', 'title', 'info')}
                               className='z-4 z-4-start'/>
                        <input type='button' value='Stop' className='z-4 z-4-stop'/>
                    </div>
                </div>
                <div className='z-1'>
                    <div className='z-1-upper'>
                        <div className='z-2-wrapper'>
                            <div className='z-2-left'>
                                <FileTreeView projectNameMain={projectName} />
                            </div>
                            <div className='z-2-center'>
                                <CodeEditor source={editorCode}/>
                            </div>
                            <div className='z-2-right'/>
                        </div>
                    </div>
                    <div className='z-1-lower'>

                    </div>
                </div>
            </EditorContext.Provider>
        </>
    )
}

// export function ___EditorMain() {
//     const [editorTabs, setEditorTabs] = useState(null);
//     const [editorCode,setEditorCode] = useState(null);
//     const [fileName, setFileName] = useState(null);
//     const [fileType, setFileType] = useState(null);
//
//     useEffect(() => {
//         if (!getCookie('user-id'))
//             createNotification('No cookie found', 'Error','info')
//
//         const items = JSON.parse(localStorage.getItem('editor-tabs'));
//         setEditorTabs(items)
//     },[localStorage.getItem('editor-tabs')])
//
//     function deleteTab (e, index, id) {
//         let store = JSON.parse(localStorage.getItem('editor-tabs'))
//         function deleteFromStorage() {
//             store[index] = null;
//             store = store.filter(v => v);
//             console.log(store)
//             localStorage.setItem('editor-tabs', JSON.stringify(store))
//             e.target.parentElement.remove()
//         }
//         function getTabCode() {
//             let i = 0
//             for (const tab of store) {
//                 console.log(i)
//                 console.log(store.length)
//                 if (tab[2] === id && store[index-1] !== undefined){
//                     setEditorCode(store[index-1][1])
//                     setFileType(store[index-1][0].split('.').splice(-1)[0])
//                     deleteFromStorage()
//                     break;
//                 }else if (tab[2] === id && store[index+1] !== undefined) {
//                     setEditorCode(store[index+1][1])
//                     setFileType(store[index+1][0].split('.').splice(-1)[0])
//                     deleteFromStorage()
//                     break;
//                 } else {
//                     if (store.length === (i+=1)){
//                         setEditorCode(undefined)
//                         setFileType(undefined)
//                         deleteFromStorage()
//                         break;
//                     }
//                 }
//                 i+=1;
//             }
//         }
//         getTabCode()
//     }
//
//     function openTab(e,index,id) {
//         e.target.parentElement.parentElement.childNodes.forEach((node) =>
//             node.classList.remove('t-tab-active'))
//
//         e.target.parentElement.classList.add('t-tab-active')
//
//         function getTabCode() {
//             editorTabs.forEach((tab) => {
//                 if (tab[2] === id){
//                     setEditorCode(tab[1])
//                     setFileName(tab[0].split('.')[0])
//                     setFileType(tab[0].split('.').splice(-1)[0])
//                 }
//             })
//         }
//         getTabCode()
//     }
//
//     const TabsObject = ({ tabsArray }) => tabsArray.map((v,i) => (
//         <>
//             <div className='t-tab' key={i}>
//                 <div className='t-tab-title' onClick={(e) => {
//                     openTab(e, i, v[2])
//                 }}>
//                     {v[0]}
//                 </div>
//                 <div className='t-close-tab' onClick={(e) => {
//                     deleteTab(e, i, v[2])
//                 }}>
//                     x
//                 </div>
//             </div>
//         </>
//     ))
//
//     const TabsElement = ({ _editorCode, _fileType }) => (
//         <>
//             <div className='t-wrapper'>
//                 <div className='t-tabs-holder'>
//                     <TabsObject tabsArray={editorTabs || []} />
//                 </div>
//                 <div className='t-tabs-element'>
//                     <CodeEditor source={_editorCode} fileEnd={_fileType} fileStart={fileName}/>
//                 </div>
//             </div>
//         </>
//     )
//
//     const ElementFrame = () => (
//         <>
//             <div className='z-1-upper-panel'>
//                 <div className='z-1-upper-panel-nav'>
//                     <span className='z-1-upper-panel-title'>UniJS-WebEditor</span>
//                     <NavMenu />
//                 </div>
//                 <div className='z-1-upper-panel-func'>
//                     <select className='z-3'>
//                         <option>Compile</option>
//                         <option>View</option>
//                     </select>
//                     <input type='button' value='Start' onClick={createNotification('1', 'title', 'info')}
//                            className='z-4 z-4-start'/>
//                     <input type='button' value='Stop' className='z-4 z-4-stop'/>
//                 </div>
//             </div>
//             <div className='z-1'>
//                 <div className='z-1-upper'>
//                     <div className='z-2-wrapper'>
//                         <div className='z-2-left'>
//                             <FileTreeView />
//                         </div>
//                         <div className='z-2-center'>
//                             <TabsElement _editorCode={editorCode} _fileType={fileType}/>
//                         </div>
//                         <div className='z-2-right'/>
//                     </div>
//                 </div>
//                 <div className='z-1-lower'>
//
//                 </div>
//             </div>
//         </>
//     )
//     return (
//         <>
//             <ElementFrame />
//             <RenderAllPopups />
//         </>
//     )
// }