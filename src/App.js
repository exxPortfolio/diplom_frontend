import React from 'react';
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Index from "./pages/index";
import Layout from "./layout";
import Services from "./apps/services/services";
import View from "./apps/html-viewer/view";
import EditorMain from "./apps/editor-advanced/editor-main";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer} from "react-notifications";
import {RenderP_1, RenderP_2} from "./apps/editor-advanced/elements/popup/popup-object";
import EditorContextMan from "./apps/editor-advanced/elements/editor_context-man";

function useQuery() {
    const {search} = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

function App() {
    localStorage.getItem('editor-tabs') === null
        ? localStorage.setItem('editor-tabs', [].toString())
        : ''

    const IndexHeader = () => (
        <>
            <a href="/exceditor"> htmleditor </a>
        </>
    )

    const Routing = () => {
        const query = useQuery()
        return (
            <>
                <Routes>
                    <Route exact path='/' element={
                        <Layout inner={<Index/>}
                                Head={<IndexHeader/>}
                        />}/>
                    <Route path='/view' element={
                        <View project_id={query.get("content")}
                              project_name={query.get("name")}/>
                    }/>
                    <Route path='/exceditor' element={<EditorContextMan />}/>
                    <Route path='/services/*' element={<Services />}/>
                    <Route path='*' element={<> not found </>}/>
                </Routes>
            </>
        )
    }

    return (
        <BrowserRouter>
            <Routing/>
            <NotificationContainer/>
        </BrowserRouter>
    );
}

export default App;
