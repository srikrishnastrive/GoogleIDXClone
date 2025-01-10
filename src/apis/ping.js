import axios from "axios";
import axiosInstance from "../config/axiosConfig";


export  const  getPingMessage = async () =>{
    try {
        const response = await axiosInstance.get('/api/v1/ping');
        console.log(response);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}


