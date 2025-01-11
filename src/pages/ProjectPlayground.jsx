import { useParams } from "react-router-dom"
import { EditorComponent } from "../components/molecules/EditorComponent";



export const ProjectPlayground = () =>{
    const {projectId} = useParams();
    return (
        <>
            <h1>ProjectId is : {projectId}</h1>
            <EditorComponent/>
        </>
    )
}
