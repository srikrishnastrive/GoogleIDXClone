import { useEffect } from "react";
import { useTreeStructureStore } from "../../../store/treeStructureStore"
import { TreeNodeFile } from "../../molecules/TreeNode/TreeNode";




export const TreeStructure = () =>{

    const {treeStructure,setTreeStructure} = useTreeStructureStore();
   
    useEffect(()=>{
        setTreeStructure();
    },[setTreeStructure])
    return (
        <>
        
        <TreeNodeFile fileFolderData={treeStructure}/>
        </>
      
    )
}
 