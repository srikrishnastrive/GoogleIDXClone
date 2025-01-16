import { useQuery } from "@tanstack/react-query";
import { getProjectTreeApi } from "../../../apis/projects";


export default function getProjectTreeApi(projectId)  {
    const {isLoading,isError,data:projectTree,error} = useQuery({
      
        queryFn: () => getProjectTreeApi({projectId}),
    });
    return {
        isLoading,
        isError,
        projectTree,
        error
    }
}
