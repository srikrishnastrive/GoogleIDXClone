import React, { useEffect, useState } from 'react'

import './App.css'
import { PingComponent } from './components/atoms/PingComponent';
import { CreateProject } from './pages/CreateProject';
import { Button, Flex, Layout } from 'antd';
import { useCreateProject } from './hooks/apis/mutation/useCreateproject';
const { Header, Footer, Sider, Content } = Layout;

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#4096ff',
};

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#4096ff',
};


function App() {
  const {createProjectMutation} = useCreateProject();

  async function handleCreateProject(){
    try {
      await createProjectMutation();

    } catch (error) {
      console.log("Errorr creating project",error);
    }
  }

  return (
    <>
        <Layout style={layoutStyle}>
        <Header style={headerStyle} >
          <h1>Create project</h1>
        </Header>
        <Content style={contentStyle}>
          <Button 
          onClick={handleCreateProject} type="primary">
          Create Playground</Button>
        </Content>
        
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </>
  )
}

export default App
