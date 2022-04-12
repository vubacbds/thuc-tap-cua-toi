import React from "react";
import { Layout } from 'antd';
import '../index.scss';
import { Button } from 'antd';
import { PhoneOutlined,MailOutlined, FacebookOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function Main() {
    return (
              <> <Layout style={{color: 'blue'}}>
                    <Header className="head">
                      <div class ='left_head'>
                      <h1 style={{color:'white', textAlign:'center',position:"relative",left:200,paddingLeft:40,height:20,fontFamily:"Times New Roman"}}>CHO THUÊ PHÒNG TRỌ</h1>
                          <h1 style={{color:'aqua', fontSize: '50px',width: 30}}>TMA</h1>
                            <div> 
                                <li>Trang chủ</li>
                                <li>Giới thiệu</li>
                                <li>Thông tin phòng trọ</li>
                                <li>Liên hệ</li>
                            </div>

                            <div className="right_head">
                            <Button type="primary">Đăng tin</Button>
                            <li>Đăng nhập</li>
                            <li>Đăng kí</li>
                            </div>
                        </div>
                    </Header>
                    <Content className="content">Content</Content>
                    <Footer className="foot">
                      <div className="title">
                        <div className="foot1">
                            <p style={{fontSize:'20px',color:'white',textAlign:'center',color:'yellow'}}>CHO THUÊ PHÒNG TRỌ</p> 
                            <p>Website cho thuê phòng trọ, nhà trọ nhanh chóng và hiệu quả<br/>
                            <PhoneOutlined /><>       </>
                            Hotline: 0234242442 <br/>
                            <MailOutlined /><>       </>
                            Email: chothuephongtro@gmail.com</p>
                        </div>

                        <div className="foot2">
                          <p style={{fontSize:'20px',color:'white',textAlign:'center',color:'yellow'}}>THÔNG TIN</p> 
                          <p>Giới thiệu<br/>
                              Blog <br/>
                              Chính sách bảo mật <br/>
                              Quy định sử dụng <br/>
                              Quy chế hoạt động 
                          </p>
                        </div>

                        <div className="foot3">
                              <p style={{fontSize:'20px',color:'white',textAlign:'center',color:'yellow'}}>KẾT NỐI VỚI CHÚNG TÔI</p> 
                              
                              <FacebookOutlined style={{color:"white",fontSize:40}}/>
                              <span style={{paddingLeft: '30px'}}>
                                <InstagramOutlined style={{color:"white",fontSize:40}}/>
                                </span>  {/*Tạo khoảng trắng giữa 2 phần tử */} 
                              <span style={{paddingLeft: '30px'}}><TwitterOutlined style={{color:"white",fontSize:40}}/>
                              </span>
                              <span style={{paddingLeft: '20px'}}> <MailOutlined style={{color:"white",fontSize:40}}/></span>
                       </div>
                        
                        <div className="foot4">
                          <hr></hr>
                          <h3>Copyright © 2022 - 2030 Thuephongtro.com.</h3>
                        </div>
                        
                      </div>
                    </Footer>
                </Layout>
              </>
    );
  }

export default Main;