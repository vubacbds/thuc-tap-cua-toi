import { Row, Col, Divider, Carousel, Input, Button, Checkbox, Pagination, Spin  } from 'antd';  //Spin để loading khi tải trang
import { useState, useEffect, useRef } from 'react'
import { SearchOutlined, LoadingOutlined} from '@ant-design/icons';

//Slide ảnh
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

function PostManagement() {
    //Phân trang
    const objPage = {
        data: [],
        totalPage: 0,
        current: 1,
        minIndex: 0,
        maxIndex: 10,
        size: 10
    }
    const [pages, setPages] = useState(objPage)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        //Lấy API
        fetch('https://jsonplaceholder.typicode.com/photos')
          .then(res => res.json())
          .then(posts => {
            //Giảm số lượng data
            // var posts = posts.filter(function(p) {  
            //     return p.id < 101;
            // })
            setPages({
                ...pages,
                data: posts,
                totalPage: posts.length / 10
            })
          } )
          .catch((err) => {
              console.log(err)
          })
          .finally(() => {
            setLoading(false)
          })
    },[])
    //Xử lý khi chọn trang
    const handleChange = (page, size) => {
        setPages({
          ...pages,
          current: page,
          minIndex: (page - 1) * size,
          maxIndex: page * size,
          size: size
        });
    };

    const { Search } = Input;

    //Xử lý khi tìm kiếm 
    const onSearch = value => {
        const newdata = pages.data.find((d) => parseInt(value) === d.id)
            if(newdata !== undefined){
                setPages(
                    {
                        ...pages,
                        data: [newdata]
                    }
                )
            }
        } 

    const [checked, setChecked] = useState([])
    const [ischeckAll, setIscheckAll] = useState(false)

    //arrCheck là Mảng chứa tất cả các phần tử là id của data từ API
    const arrCheck = []
    for (var i = 0; i < pages.data.length; i++){
        arrCheck.push(pages.data[i].id)
    }
    
    //Xử lý khi check vào checkbox
    const handleCheck = (id) => {
        setChecked(prev => {
            //Prev là giá trị trước đó của state
            //Kiểm tra phần tử id vừa chọn có index trong mảng checked chưa
          const isChecked = checked.includes(id)
          if(isChecked) {
            //Nếu id đó đã check thì bỏ chọn check nên ischeckAll = false
            setIscheckAll(false)
            //Trả về mảng chứa các phần tử đã check còn lại
            return checked.filter(f => f!==id)
          } 
          else
          {
              //Nếu id đó chưa check, xét số phần tử của mảng tổng có bằng tổng phần tử của mảng đã check không
            if(arrCheck.length === [...prev,id].length){{
                //Nếu bằng thì check all = true
                setIscheckAll(true)
            }}
            //Set mảng đã check mới
            return [...prev,id]
          }
        })
      }

      //Xử lý khi check all
      const handleCheckAll = () => {
        if(arrCheck.length === checked.length){{
            //Nếu đã check all rồi, khi bấm lại vào check all thì set mảng đã check thành rỗng và Ischeckall = false để bỏ dấu tích chỗ checkall
            setChecked([])
            setIscheckAll(false)
        }}
        
        else {
            //Nếu chưa check all thì set mảng đã check là tất cả
            setChecked(arrCheck)
            //Hiện dấu tích chỗ check all
            setIscheckAll(true)
        }
      }
    
    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
    
    return(
        <>
            <Row>
                    <Col span={6} >
                        <h2>Tin chờ duyệt </h2> 
                        <h4 style={{ fontWeight: 'inherit', fontStyle: 'italic' }}>Có {pages.data.length} tin đang chờ duyệt</h4>
                    </Col>

                    <Col span={12}></Col>
                   
                    <Col span={6} >
                        <Search placeholder="Mã tin ..." onSearch={onSearch} enterButton />
                        <div style={{ marginTop: 10 }}>
                            <Checkbox onChange={handleCheckAll} checked= {ischeckAll} >
                                Chọn tất cả
                            </Checkbox>
                            <Button type="primary" style={{ background: "green", borderColor: "green", marginLeft: 5 }}>Duyệt</Button>
                            <Button type="primary" danger style={{ marginLeft: 5, width: 68 }}>Xóa</Button>
                            <p style={{fontSize: 12 }}>(Đã chọn: {checked.length})</p>
                        </div>                       
                    </Col>
            </Row>
            
            {loading && <Spin indicator={antIcon} /> }
            <ul>
            {pages.data?.map((post, index) => 
                index >= pages.minIndex &&
                index < pages.maxIndex && 
                (
                <Row key={post.id} style={{ marginTop: 20}}>
                    <Col span={6} style={{background: 'blue', width: '100%'}}>
                        <Carousel autoplay style={{height: '100%'}}>
                            <div>
                                <img src={post.thumbnailUrl} style={{width: '100%', height: 200, contentStyle}}/>
                            </div>
                            <div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiwh2UjjSVjcR4LDbTyPk1KuTZ2QUVIRlbQ&usqp=CAU' style={{width: '100%', height: 200, contentStyle}}/>
                            </div>
                            <div>
                                <img src='https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-6.jpg' style={{width: '100%', height: 200, contentStyle}}/>
                            </div>
                            <div>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLfA2IIbtcNDJ-78hnENVHvfYmWKZ7tNnxA&usqp=CAU' style={{width: '100%', height: 200, contentStyle}}/>
                            </div>
                        </Carousel>
                    </Col>
                   
                    <Col span={16} style={{background: '#d2f7cd4d'}}>
                        {post.title}
                    </Col>

                    <Col span={2} style={{background: '#f59dcd4d', textAlign: 'center'}}>
                        <Checkbox 
                            onChange={() => handleCheck(post.id)} 
                            style={{marginTop: 90}}
                            checked= {checked.includes(post.id)}
                        ></Checkbox>
                    </Col>
                    
                </Row>
            ))}
            </ul>
            <Pagination
                pageSize={pages.size}
                current={pages.current}
                total={pages.data.length}
                onChange={handleChange}
                style={{ bottom: "0px", textAlign: 'center', marginTop: 50 }}
                showSizeChanger={true}
                pageSizeOptions={[10,15,20]}
                // onShowSizeChange={handleShowSizeChange}
            />
        </> 
    )
}
export default PostManagement













//Cái cũ
// import React, { useEffect, useState } from 'react'
// import { Table } from 'antd';
// import { Popconfirm } from 'antd';
// import { Row } from 'antd';
// import { Col } from 'antd';
// import { Input, Space } from 'antd';
// import { AudioOutlined } from '@ant-design/icons';

// const PostManagement = () => {
//     const [dataSource, setDataSource] = useState([])
//     const [loading, setLoading] = useState(false)
//     useEffect(() => {
//         setLoading(true)
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(res => res.json())
//             .then(data => {
//                 setDataSource(data)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//             .finally(() => {
//                 setLoading(false)
//             })
//     },[])

//     const del = (idvao) => {
//       try {
//         const newData = [...dataSource];
//         //findIndex để tìm vị trí của hàng đang sửa
//         const index = newData.findIndex((item) => idvao === item.id);
    
//         //Trường hợp tìm thấy nên index từ 0 trở đi
//         if (index > -1) {
//           //splice để xóa từ vị trí tìm được, và thay thế bằng giá trị hàng mới, trả về mảng mới đã xóa và thay thế
//           newData.splice(index, 1);
//           setDataSource(newData);
//         } 
//       }
//         catch (errInfo) {
//         console.log('Validate Failed:', errInfo);
//       }
//     }

//     const columns = [
//       { title: 'Mã tin', dataIndex: 'id', key: 'id' },
//       { title: 'Tiêu đề', dataIndex: 'title', key: 'title' },
//       { title: 'ID người dùng', dataIndex: 'userId', key: 'userId' },
//       {
//         title: 'Action',
//         dataIndex: '',
//         key: 'x',
//         render: (_, record) => 
//           <Popconfirm title="Sure to Delete?" onConfirm={() => del(record.id)} >
//           <a>Delete</a>
//           </Popconfirm>,
//       },
//     ];

//     const { Search } = Input;
//     const onSearch = value => {
//       console.log(value)  
//     } 
//   return (
//     <div>

//       <Row>
//           <Col span={6} >
//             <h2>Tin đã đăng </h2> 
//             <h4 style={{ fontWeight: 'inherit', fontStyle: 'italic' }}>Có {dataSource.length} tin đã đăng</h4>
//           </Col>
//           <Col span={12}></Col>
//           <Col span={6} >
//               <Search placeholder="Mã tin ..." onSearch={onSearch} enterButton />
//           </Col>
//       </Row>

//       <Row>
//         <Col span={24}>
//         <Table
//           columns={columns}
//           rowKey={record => record.id}
//           expandable={{
//             expandedRowRender: record => <p style={{ margin: 0 }}>{record.body}</p>,
//             // expandedRowRender: (record, index, indent, expaned) => expaned ? <p style={{ margin: 0 }}>{record.body}</p> : null,
//             rowExpandable: record => record.id !== '',
//           }}
//           dataSource={dataSource}
//         />
//         </Col>
//       </Row>
//     </div>
//   )
// }

// export default PostManagement









