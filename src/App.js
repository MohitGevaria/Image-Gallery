import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Layout } from 'antd';

import Cards from './Cards';
import NavBar from './NavBar';
import Recents from './Recents';
import BeforeAfter from './BeforeAfter';
import Pictures from './Pictures';


function App() {
  const { Header, Content, Footer, } = Layout;

  return (
    <Layout className="layout" >
      <Header>
        <NavBar></NavBar>
      </Header>
      <Content
        style={{
          padding: '0 10px',
        }}
      >
        <div className="site-layout-content">
          <Router>
            <div className="App" >
              <Routes>
                <Route path='/home' element={<Cards />}></Route>
              </Routes>
              <Routes>
                <Route path='/recents' element={<Recents />}></Route>
              </Routes>
              <Routes>
                <Route path='/befaft' element={<BeforeAfter />}></Route>
              </Routes>
              <Routes>
                <Route path='/pictures' element={<Pictures />}></Route>
              </Routes>
            </div>
          </Router>
        </div>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
