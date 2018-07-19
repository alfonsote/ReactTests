
import React from "react";
import { Layout, Menu, Breadcrumb, Input } from 'antd';
var signo = prompt('que signo tu eres');
alert ('verificando tu fortuna manito');
switch (signo){
    case 'aries': 
    alert('eres el mas duro de todos los astros');
    break;
    case 'tauro': 
    alert('Tienes los cachos siempre manito');
    break;
    case 'virgo':
    alert('chakra es el caballero del zodiaco mas OP');
    break
};




const { Header, Content, Footer } = Layout;
  export const Gato = () => {
    return   <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      Las funciones
      <Input id="respuesta" placeholder="Basic usage" />
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©2016 Created by Ant UED

    </Footer>
  </Layout>
    }

