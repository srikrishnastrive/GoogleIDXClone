import { useParams } from "react-router-dom"
import { EditorComponent } from "../components/molecules/EditorComponent/EditorComponent";
import { TreeStructure } from "../components/organisms/TreeStructure/TreeStructure";
import { useTreeStructureStore } from "../store/treeStructureStore";
import { useEffect } from "react";



export const ProjectPlayground = () =>{
    const {projectId : projectIdFromUrl} = useParams();

    const {projectId,setProjectId} = useTreeStructureStore();

    useEffect(()=>{
        setProjectId(projectIdFromUrl);
    },[setProjectId,projectIdFromUrl]);
    return (
        <>
           <div style={{display:'flex', height:"99.7vh"}}>
            {projectId &&(<div style={{
                backgroundColor:'#333254',
                paddingRight:"10px",
                paddingTop:"0.3vh",
                minWidth:"250px",
                maxWidth:"25%",
                height:"99.7vh"
            }}>
                <TreeStructure/>
            </div>)
             }
            <EditorComponent/>
            </div>
           
        </>
    )
}
