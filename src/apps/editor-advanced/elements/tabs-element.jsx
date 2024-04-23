import React, {useContext} from "react";
import {EditorContext} from "../editor-main";
import {CodeEditor} from "../core/code-editor";

export default function TabsElement() {
    const { tabs, file } = useContext(EditorContext)
    const TabsObject = ({ tabsArray, openEvent,deleteEvent }) => tabsArray.map((v,i) => (
        <>
            <div className='t-tab' key={i}>
                <div className='t-tab-title' onClick={(e) => { openEvent(e) }}>
                    {v[0]}
                </div>
                <div className='t-close-tab' onClick={(e) => {
                    deleteEvent(e)
                }}>
                    x
                </div>
            </div>
        </>
    ))
    const TabElem = ({ _editorCode, _fileType }) => (
        <>
            <div className='t-wrapper'>
                <div className='t-tabs-holder'>
                    <TabsObject tabsArray={tabsArray} openEvent={openEvent} deleteEvent={deleteEvent} />
                </div>
                <div className='t-tabs-element'>
                    {/*<CodeEditor*/}
                    {/*    // source={_editorCode} */}
                    {/*    // fileEnd={_fileType} */}
                    {/*    // fileStart={fileName}*/}
                    {/*/>*/}
                </div>
            </div>
        </>
    )

    return(
        <TabElem _editorCode={file.fileName} _fileType={file.fileType} />
    );
}