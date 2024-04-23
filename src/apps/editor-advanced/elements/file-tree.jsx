import IndeterminateCheckBoxRoundedIcon from '@mui/icons-material/IndeterminateCheckBoxRounded';
import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { styled, alpha } from '@mui/material/styles';
import { SimpleTreeView } from '@mui/x-tree-view/SimpleTreeView';
import { TreeItem, treeItemClasses } from '@mui/x-tree-view/TreeItem';
import React, {useContext, useEffect, useState} from "react";
import {getProjectData, getProjectFiles, getProjectsById} from "../../../server-api/using";
import {EditorContext} from "./editor_context-man";


const CustomTreeItem = styled(TreeItem)(({ theme }) => ({
    [`& .${treeItemClasses.content}`]: {
        padding: theme.spacing(0.5, 1),
        margin: theme.spacing(0.2, 0),
    },
    [`& .${treeItemClasses.iconContainer}`]: {
        '& .close': {
            opacity: 0.3,
        },
    },
    [`& .${treeItemClasses.groupTransition}`]: {
        marginLeft: 15,
        paddingLeft: 18,
        borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
    },
}));

function ExpandIcon(props) {
    return <AddBoxRoundedIcon {...props} sx={{ opacity: 0.8 }} />;
}

function CollapseIcon(props) {
    return <IndeterminateCheckBoxRoundedIcon {...props} sx={{ opacity: 0.8 }} />;
}

function EndIcon(props) {
    return <DisabledByDefaultRoundedIcon {...props} sx={{ opacity: 0.3 }} />;
}

export default function FileTreeView({ projectNameMain }) {
    const { projectFiles, setProjectFiles, editorCode, setEditorCode, setFileName } = useContext(EditorContext)

    useEffect(() => {

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

    const FileTree = ({data}) => {
        return (
            <div>
                {data && Object.entries(data).map((item, i) => (
                    typeof item[1] === "object"
                        ? <CustomTreeItem key={i++} itemId={genId()} label={item[0]}>
                            {item[0] && <FileTree data={item[1]}/>}
                        </CustomTreeItem>
                        : <CustomTreeItem key={i++} itemId={genId()} label={item[0]}
                        onClick={() => {
                            setEditorCode(item[1])
                            setFileName(item[0])
                        }}
                        onContextMenu={ (e) => {
                            e.preventDefault(); // prevent the default behaviour when right clicked
                            console.log("Right Click");
                        }}/>
                ))}
            </div>
        );
    }

    const FileTreeFrame = ({ dataObject }) => (
        <CustomTreeItem itemId="1" label={projectNameMain || 'newProject'}>
            <FileTree data={dataObject}/>
        </CustomTreeItem>
    )

    return (
        <SimpleTreeView
            aria-label="customized"
            defaultExpandedItems={['1', '3']}
            slots={{
                expandIcon: ExpandIcon,
                collapseIcon: CollapseIcon,
                endIcon: EndIcon,
            }}
            sx={{ overflowX: 'hidden', minHeight: 270, flexGrow: 1, maxWidth: 300 }}
        >
            <FileTreeFrame dataObject={projectFiles}/>
        </SimpleTreeView>
    );
}