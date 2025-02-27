import axiosInstance from "../config/axiosConfig"


export const createProjectApi = async () => {
    try {
        const response = await axiosInstance.post('/api/v1/projects');
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}


export const getProjectTreeApi = async (projectId) =>{
    try {
        const response = await axiosInstance.get(`api/v1/projects/${projectId}/tree`);
        return response?.data?.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
