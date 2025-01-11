

import { Button, Col, Flex, Layout, Row } from 'antd';
import { useCreateProject } from '../hooks/apis/mutation/useCreateproject';
import { useNavigate } from 'react-router-dom';






export const  CreateProject =() => {
  const {createProjectMutation} = useCreateProject();
  const navigate = useNavigate();

  async function handleCreateProject(){
    try {
      const response = await createProjectMutation();
      const projectId = response.data;
      navigate(`project/${projectId}`);
      

    } catch (error) {
      console.log("Errorr creating project",error);
    }
  }

  return (
    <>
        <Row>
            <Col span={24}>
                <Flex justify='center' align='center'>
                <Button 
                    onClick={handleCreateProject} type="primary">
                    Create Playground</Button>
                </Flex>
            </Col>
        </Row>
       
    </>
  )
}


