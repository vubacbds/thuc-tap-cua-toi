import { Layout, Menu, Breadcrumb, Avatar, Badge, Popover } from 'antd';
import { GitlabFilled, FileDoneOutlined, NotificationOutlined, BellOutlined, MailOutlined, UsergroupAddOutlined, LaptopOutlined } from '@ant-design/icons';
import '../index.scss';
import React, { Suspense } from "react";
import { Routes, Route, Link, useParams, Outlet, useNavigate } from 'react-router-dom';
import { Spin } from "antd";
import PrivateOutlet, {Login} from '../../../PrivateOutlet'
import { useState, useContext } from 'react'
import {DataContext} from './DataContext'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function AdminPage() {
  const dataSource = useContext(DataContext).dataChoDuyet
  const {id} = useParams();
  const [crumb, setCrumb] = useState({})
  const navigate = useNavigate()
  // console.log(navigate)
  return(
   
    <Layout>
          <Header className="site-layout-background" style={{ padding: 0, background: '#0f4d92', color:'#fff', textAlign: 'right', display: 'flex'}}>
               <div className="logo" >TM</div>
               <div style={{float: 'left', marginRight: 15}}>
                  <span className="avatar-item">
                    <Popover content={<span>Tính năng đang được phát triển...</span>} title="Tin nhắn" trigger="click">
                      <Badge count={'!'}>
                          <a><Avatar shape="square" icon={<MailOutlined />} style={{background: '#0f4d92', fontSize: 24}}/></a>
                      </Badge>
                    </Popover>
                  </span>
                  &ensp; &nbsp;
                  <span className="avatar-item">
                    <Popover content={<span>Có {dataSource.length} tin đăng mới đang chờ duyệt</span>} title="Thông báo" trigger="click">
                      <Badge count={dataSource.length}>
                          <a><Avatar shape="square" icon={<BellOutlined />} style={{background: '#0f4d92', fontSize: 24}}/></a>
                      </Badge>
                    </Popover>
                  </span>
               </div>
         </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <Menu.Item key="1" icon={<GitlabFilled />}><Link to="home" onClick={() => setCrumb({})}>ADMIN</Link></Menu.Item>
            <Menu.Item key="2" icon={<UsergroupAddOutlined />}><Link to="quan-ly-nguoi-dung" 
              onClick={() => 
                setCrumb({
                  cha: 'Quản lý người dùng'
                })
              }
            >Quản lý người dùng</Link></Menu.Item>
             
            <Menu.Item key="3"icon={<FileDoneOutlined />}><Link to="quan-ly-tin-dang" 
                onClick={() => {
                  // navigate('../')
                  setCrumb({
                    cha: 'Quản lý tin đăng'
                  })
                }
                }
              >Quản lý tin đăng</Link>
            </Menu.Item>
              
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="Khác">
              <Menu.Item key="4"><Link to="giao-dien">Giao diện</Link></Menu.Item>
              <Menu.Item key="5"><Link to="tu-khoa-hot">Từ khóa hot</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Trang chủ</Breadcrumb.Item>
            <Breadcrumb.Item>{crumb.cha && crumb.cha}</Breadcrumb.Item>
            <Breadcrumb.Item>{crumb.con && crumb.con}</Breadcrumb.Item> 
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            
            {/* {(type === 'home') ? <Home /> : <h3>No data</h3> } */}
           {/* <Outlet /> */}
           {/* <button onClick={()=>navigate("/room-social-network/admin")}>About</button> */}
           <PrivateOutlet /> {id}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default AdminPage