import { useCreateProject } from "../hooks/apis/mutation/useCreateproject"



export const CreateProject = () => {
    const {createProjectMutation} = useCreateProject();


    async function handleCreateProject() {
        try {
            await createProjectMutation();
        } catch (error) {
            console.log('error creating project',error);
        }
    }
   return (
    <div>
            <h1>Create the new Project</h1>
            <button onClick={handleCreateProject}>Create Project</button>
        </div>
   )
}
