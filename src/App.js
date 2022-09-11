
import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';
import AppRoutes from "./Common/AppRoutes";
import NavBar from './Components/NavBar';

function App() {
  const { Header, Content, Footer, } = Layout;

  return (
    <Layout className="layout" >
      <Header>
        <NavBar></NavBar>
      </Header>
      <Content
        style={{
          padding: '10px',
        }}
      >
        <div className="site-layout-content">
          <AppRoutes />
        </div>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Priyank Dholakiya
      </Footer>
    </Layout>
  );
}

export default App;
