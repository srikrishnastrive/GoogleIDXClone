import { QueryClient } from "@tanstack/react-query";
import { create } from "zustand";
import { getProjectTreeApi } from "../apis/projects";



export const useTreeStructureStore = create((set,get)=>{
    const queryClient = new QueryClient();
    return {
        treeStructure : null,
        projectId:null,
        setTreeStructure : async () => {
            const id = get().projectId;
            console.log(id);
            const data = await queryClient.fetchQuery({
              
                queryKey:[`projecttree-${id}`],
                queryFn : () => getProjectTreeApi(id)
            });
            console.log(data);
            set({
                treeStructure:data
            })
        },
        setProjectId :(projectId) =>{
            set ({
                projectId:projectId
            })
        }
     }
})
