import { useQuery } from "@tanstack/react-query";
import {getPingMessage} from '../../../apis/ping.js';


export default function usePing(){
    const {isLoading,isError,data,error} = useQuery({
        queryFn :getPingMessage,
        queryKey:'ping',
        staleTime:10000
    });

    return {
        isLoading,
        isError,
        data,
        error
    }

}
