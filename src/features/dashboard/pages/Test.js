// import { Switch } from "antd"
// import PostWaitManagement from './PostManagement/PostWait'
// import PostManagement from './PostManagement/Post'
// import { useEffect, useState } from "react"

// const data = [
//     {
//       id: 1,
//       tieude: 'Phòng trọ vip',
//       diachi: 'Quy Nhơn, Bình Định',
//       gia: 600,
//       donvi: 'nghìn vnđ/tháng',
//       mota: 'Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm.',
//       nguoidang: 'bacvu',
//       img1: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg',
//       img2: 'https://xinhstar.vn/wp-content/uploads/2020/08/21.jpg',
//       img3: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-chibi-superman-dep.jpg',
//       img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU',
//       trangthai: 0
//     },
//     {
//       id: 2,
//       tieude: 'Phòng trọ mini',
//       diachi: 'BMT, Đắk Lắk',
//       gia: 500,
//       donvi: 'nghìn vnđ/tháng',
//       mota: 'Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm.',
//       nguoidang: 'thonguyen',
//       img1: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg',
//       img2: 'https://xinhstar.vn/wp-content/uploads/2020/08/21.jpg',
//       img3: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-chibi-superman-dep.jpg',
//       img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU',
//       trangthai: 1
//     },
//     {
//       id: 3,
//       tieude: 'Phòng trọ BMT',
//       diachi: 'BMT, Đắk Lắk',
//       gia: 600,
//       donvi: 'nghìn vnđ/tháng',
//       mota: 'Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm.',
//       nguoidang: 'diepdang',
//       img1: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg',
//       img2: 'https://xinhstar.vn/wp-content/uploads/2020/08/21.jpg',
//       img3: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-chibi-superman-dep.jpg',
//       img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU',
//       trangthai: 1
//     },
//     {
//       id: 4,
//       tieude: 'Phòng trọ giá tốt',
//       diachi: 'Q12, Hồ Chí Minh',
//       gia: 800,
//       donvi: 'nghìn vnđ/tháng',
//       mota: 'Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm.',
//       nguoidang: 'anhthu',
//       img1: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg',
//       img2: 'https://xinhstar.vn/wp-content/uploads/2020/08/21.jpg',
//       img3: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-chibi-superman-dep.jpg',
//       img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU',
//       trangthai: 0
//     }
//   ];
// function Test() {
//     const [dataSource, setDataSource] = useState([])
//     useEffect(() => {
//         setDataSource(data)
//     },[])
   
//     const dataDaDang = dataSource.filter( item => {  
//         return item.trangthai === 1;
//     })

//     const dataChoDuyet = dataSource.filter( item => {  
//         return item.trangthai === 0;
//     })

    
//     const [trueFalse, setTrueFalse] = useState(true)
//     const handleSwitch = (bool) => setTrueFalse(!trueFalse)
//     return (
//         <>
//             <Switch
//                 checkedChildren={<h2>Tin đã đăng</h2>}
//                 unCheckedChildren={<h2>Tin chờ duyệt</h2>}
//                 defaultChecked
//                 onChange={handleSwitch}
//                 style={{marginBottom: 20}}
//             />
//             {trueFalse ? <PostManagement dataSource={dataDaDang} dataSourceTotal ={dataSource} setDataSource={setDataSource} /> : 
//                 <PostWaitManagement dataSource={dataChoDuyet} dataSourceTotal ={dataSource} setDataSource={setDataSource} />
//             }
//         </>
//     )
    
// }

// export default Test




















// import { Typography, Carousel, Col, Checkbox, Button, Row, Popover, Table } from 'antd';
// import Search from 'antd/lib/transfer/search';
// import { useEffect, useState } from 'react';

// function Test() {
//     const rowSelection = {
//         onChange: (selectedRowKeys, selectedRows) => {
//             console.log(
//                 `selectedRowKeys: ${selectedRowKeys}`,
//                 "selectedRows: ",
//                 selectedRows
//             );
//             if(pageSize == selectedRowKeys.length)
//                 setIsCheckedAll({all: true, part: false, amount: selectedRowKeys.length})
//             else if(selectedRowKeys.length > 0 && selectedRowKeys.length < pageSize) setIsCheckedAll({all: false, part: true, amount: selectedRowKeys.length})
//             else setIsCheckedAll({all: false, part: false, amount: selectedRowKeys.length})
//         },  
//         getCheckboxProps: record => {
//             return {
//                 disabled: record.working != null,
//                 name: record.name
//             };
//         }
//     };
//     const contentStyle = {
//         height: '160px',
//         color: 'black',
//         lineHeight: '160px',
//         textAlign: 'center',
//         background: '#364d79',
//     };
//     const columns = [
//         { title: 'Mã tin', dataIndex: 'id', key: 'id',
//             sorter: (a, b) => a.id - b.id,
//             sortDirections: ['descend']
//         },
//         Table.EXPAND_COLUMN,
//         { title: 'Tiêu đề', dataIndex: 'url', key: 'url' },
//         Table.SELECTION_COLUMN,
//         { title: 'Địa chỉ', dataIndex: 'albumId', key: 'albumId', filters: [
//             {
//             text: '1',
//             value: '1',
//             },
//             {
//             text: '2',
//             value: '2',
//             },
//         ],
//         onFilter: (value, record) => record.albumId == value,
//         filterSearch: true },
//         {
//             title: 'operation',
//             dataIndex: 'operation',
//             render: (_, record) => {
//                 return (
//                     <Popover 
//                         content={
//                             <Carousel autoplay autoplaySpeed={1000} style={{width: 200, height: 200}} >
//                                 <div>
//                                     <img src={record.thumbnailUrl} style={{width: '100%', height: '100%', contentStyle}}  />
//                                 </div>
//                                 <div>
//                                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyiwh2UjjSVjcR4LDbTyPk1KuTZ2QUVIRlbQ&usqp=CAU' style={{width: '100%', height: 200, contentStyle}}/>
//                                 </div>
//                                 <div>
//                                     <img src='https://meta.vn/Data/image/2022/01/13/anh-dep-thien-nhien-6.jpg' style={{width: '100%', height: 200, contentStyle}}/>
//                                 </div>
//                                 <div>
//                                     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTLfA2IIbtcNDJ-78hnENVHvfYmWKZ7tNnxA&usqp=CAU' style={{width: '100%', height: 200, contentStyle}}/>
//                                 </div>
//                             </Carousel>
//                         } 
//                         title="Title" 
//                         trigger="click"
//                     >
//                         <Typography.Link>
//                             <img src='https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg' width={50} height={40}/>
//                         </Typography.Link>
//                     </Popover>
                    
//                 )     
//             },
//         }
//     ];
//     const [dataSource, setDataSource] = useState([])
//     const [loading, setLoading] = useState(false)
//     useEffect(() => {
//         setLoading(true)
//         //Lấy API
//         fetch('https://jsonplaceholder.typicode.com/photos')
//           .then(res => res.json())
//           .then(posts => {
//             //Giảm số lượng data
//             // var posts = posts.filter(function(p) {  
//             //     return p.id < 101;
//             // })
//             setDataSource(posts)
//           } )
//           .catch((err) => {
//               console.log(err)
//           })
//           .finally(() => {
//             setLoading(false)
//           })
//     },[])
    
//     const [pageSize, setPageSize] = useState(10)
//     const [isCheckedAll, setIsCheckedAll] = useState({all: false, part: false, amount: 0})
//     return (
//         <>
//             <Row>
//                     <Col span={6} >
//                         <h2>Tin chờ duyệt </h2> 
//                         <h4 style={{ fontWeight: 'inherit', fontStyle: 'italic' }}>Có {dataSource.length} tin đang chờ duyệt</h4>
//                     </Col>

//                     <Col span={14}></Col>
                   
//                     <Col span={4} >
//                         <div style={{ marginTop: 10 }}>

//                             <Checkbox checked={isCheckedAll.all} indeterminate={isCheckedAll.part} disabled />
//                             <span style={{width: 40}}>{` Đã chọn: ${isCheckedAll.amount} `}</span><br/>
//                             <Button type="primary" style={{ background: "green", borderColor: "green"}}>Duyệt</Button>
//                             <Button type="primary" danger style={{ marginLeft: 5, width: 68 }}>Xóa</Button>
                            
//                         </div>                       
//                     </Col>
//             </Row>
//             <Table
//                 pagination={{
//                     onChange: (page, pageSize) => {
//                         setPageSize(pageSize)
//                     },
//                     pageSizeOptions: [10,20,40,100]
//                 }}
//                 rowKey={record => record.id}
//                 columns={columns}
//                 rowSelection={rowSelection}
//                 expandable={{
//                 expandedRowRender: record => <p style={{ margin: 0 }}>{record.title}</p>,
//                 }}
//                 dataSource={dataSource}
//                 loading={loading}
//             />
//         </>
//     )
// }




//Cái chỉnh sửa từ cái cũ

// import React, { Component, useState } from 'react';
// import { Table, Input, Button, Space } from 'antd';
// import Highlighter from 'react-highlight-words';
// import { SearchOutlined } from '@ant-design/icons';

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Joe Black',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Jim Green',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Jim Red',
//     age: 32,
//     address: 'London No. 2 Lake Park',
//   },
// ];


// function Test() {
//     const [searchText, setSearchText] = useState('')
//     const [searchedColumn, setSearchedColumn] = useState('')

//     const getColumnSearchProps = dataIndex => ({
//       filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//         <div style={{ padding: 8 }}>
//           <Input
//             // ref={node => {
//             // //   this.searchInput = node;
//             // console.log(node)
//             // }}
//             placeholder={`Search ${dataIndex}`}
//             value={selectedKeys[0]}
//             onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//             onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             style={{ marginBottom: 8, display: 'block' }}
//           />
//           <Space>
//             <Button
//               type="primary"
//               onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//               icon={<SearchOutlined />}
//               size="small"
//               style={{ width: 90 }}
//             >
//               Search
//             </Button>
//             <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//               Reset
//             </Button>
//             <Button
//               type="link"
//               size="small"
//               onClick={() => {
//                 confirm({ closeDropdown: false });
//                 setSearchText(selectedKeys[0])
//                 setSearchedColumn(dataIndex)
//               }}
//             >
//               Filter
//             </Button>
//           </Space>
//         </div>
//       ),
//       filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
//       onFilter: (value, record) =>
//         record[dataIndex]
//           ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
//           : '',
//       onFilterDropdownVisibleChange: visible => {
//         // if (visible) {
//         //   setTimeout(() => this.searchInput.select(), 100);
//         // }
//       },
//       render: text =>
//         searchedColumn === dataIndex ? (
//           <Highlighter
//             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//             searchWords={[searchText]}
//             autoEscape
//             textToHighlight={text ? text.toString() : ''}
//           />
//         ) : (
//           text
//         ),
//     });
  
//     const handleSearch = (selectedKeys, confirm, dataIndex) => {
//       confirm();
//         setSearchText(selectedKeys[0])
//         setSearchedColumn(dataIndex)
//     };
  
//     const handleReset = clearFilters => {
//       clearFilters();
//       setSearchText('')
//     };
  
    
//       const columns = [
//         {
//           title: 'Name',
//           dataIndex: 'name',
//           key: 'name',
//           width: '30%',
//           ...getColumnSearchProps('name'),
//         },
//         {
//           title: 'Age',
//           dataIndex: 'age',
//           key: 'age',
//           width: '20%',
//           ...getColumnSearchProps('age'),
//         },
//         {
//           title: 'Address',
//           dataIndex: 'address',
//           key: 'address',
//           ...getColumnSearchProps('address'),
//           sorter: (a, b) => a.address.length - b.address.length,
//           sortDirections: ['descend', 'ascend'],
//         },
//       ]
//       return (
//         <Table columns={columns} dataSource={data} />
//       )
//     }
  


// Cái cũ

// class Test extends React.Component {
//   state = {
//     searchText: '',
//     searchedColumn: '',
//   };

//   getColumnSearchProps = dataIndex => ({
//     filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//       <div style={{ padding: 8 }}>
//         <Input
//           ref={node => {
//             this.searchInput = node;
//           }}
//           placeholder={`Search ${dataIndex}`}
//           value={selectedKeys[0]}
//           onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//           onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//           style={{ marginBottom: 8, display: 'block' }}
//         />
//         <Space>
//           <Button
//             type="primary"
//             onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
//             icon={<SearchOutlined />}
//             size="small"
//             style={{ width: 90 }}
//           >
//             Search
//           </Button>
//           <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//             Reset
//           </Button>
//           <Button
//             type="link"
//             size="small"
//             onClick={() => {
//               confirm({ closeDropdown: false });
//               this.setState({
//                 searchText: selectedKeys[0],
//                 searchedColumn: dataIndex,
//               });
//             }}
//           >
//             Filter
//           </Button>
//         </Space>
//       </div>
//     ),
//     filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
//     onFilter: (value, record) =>
//       record[dataIndex]
//         ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
//         : '',
//     onFilterDropdownVisibleChange: visible => {
//       if (visible) {
//         setTimeout(() => this.searchInput.select(), 100);
//       }
//     },
//     render: text =>
//       this.state.searchedColumn === dataIndex ? (
//         <Highlighter
//           highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//           searchWords={[this.state.searchText]}
//           autoEscape
//           textToHighlight={text ? text.toString() : ''}
//         />
//       ) : (
//         text
//       ),
//   });

//   handleSearch = (selectedKeys, confirm, dataIndex) => {
//     confirm();
//     this.setState({
//       searchText: selectedKeys[0],
//       searchedColumn: dataIndex,
//     });
//   };

//   handleReset = clearFilters => {
//     clearFilters();
//     this.setState({ searchText: '' });
//   };

//   render() {
//     const columns = [
//       {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         width: '30%',
//         ...this.getColumnSearchProps('name'),
//       },
//       {
//         title: 'Age',
//         dataIndex: 'age',
//         key: 'age',
//         width: '20%',
//         ...this.getColumnSearchProps('age'),
//       },
//       {
//         title: 'Address',
//         dataIndex: 'address',
//         key: 'address',
//         ...this.getColumnSearchProps('address'),
//         sorter: (a, b) => a.address.length - b.address.length,
//         sortDirections: ['descend', 'ascend'],
//       },
//     ];
//     return <Table columns={columns} dataSource={data} />;
//   }
// }

// export default Test



// import React, { useState, useEffect } from 'react';
// import '../index.scss';
// import { Table, Input, InputNumber, Popconfirm, Form, Typography, Space, Row, Col} from 'antd';
// import { AudioOutlined, SearchOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
// import Highlighter from 'react-highlight-words';
// import { Popover } from 'antd';

// const EditableCell = ({
//   editing,
//   dataIndex,
//   title,
//   inputType,
//   record,
//   index,
//   children,
//   ...restProps
// }) => {
//   const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
//   return (
//     <td {...restProps}>
//       {editing ? (
//         <Form.Item
//           name={dataIndex}
//           style={{
//             margin: 0,
//           }}
//           rules={[
//             {
//               required: true,
//               message: `Please Input ${title}!`,
//             },
//           ]}
//         >
//           {inputNode}
//         </Form.Item>
//       ) : (
//         children
//       )}
//     </td>
//   );
// };

// const data = [
//     {
//       id: 1,
//       hovaten: 'Vũ Xuân Bắc',
//       tendangnhap: 'bacvu',
//       tuoi: 22,
//       gioitinh: 'nam',
//       diachi: 'Đắk Lắk',
//       gmail: 'vubacbds@gmail.com',
//       sdt: '0868609878',
//       quyen: 1,
//       img: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg',
//       fb: 'https://fb.com/profiles?id=bac',
//     },
//     {
//       id: 2,
//       hovaten: 'Đặng Thị Diệp',
//       tendangnhap: 'diepdang',
//       tuoi: 22,
//       gioitinh: 'nu',
//       diachi: 'Hà Nội',
//       gmail: 'diepdang@gmail.com',
//       sdt: '0936785671',
//       quyen: 0,
//       img: 'https://xinhstar.vn/wp-content/uploads/2020/08/21.jpg',
//       fb: '',
//     },
//     {
//         id: 3,
//         hovaten: 'Nguyễn Đình Thọ',
//         tendangnhap: 'thonguyen',
//         tuoi: 22,
//         gioitinh: 'nam',
//         diachi: 'Đắk Lắk',
//         gmail: 'ndtho@gmail.com',
//         sdt: '098785686',
//         quyen: 1,
//         img: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-chibi-superman-dep.jpg',
//         fb: 'https://fb.com/profiles?id=tho',
//     },
//     {
//         id: 4,
//         hovaten: 'Anh Thư',
//         tendangnhap: 'thonguyen',
//         tuoi: 18,
//         gioitinh: 'nu',
//         diachi: 'Hồ Chí Minh',
//         gmail: 'anhthu@gmail.com',
//         sdt: '0987856666',
//         quyen: 0,
//         img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU',
//         fb: 'https://fb.com/profiles?id=thu',
//     }
//   ];
// const UserManagement = () => {
//   const [dataSource, setDataSource] = useState([])
// //   const [loading, setLoading] = useState(false)
//   useEffect(() => {
//     setDataSource(data)
//   },[])
//   const [form] = Form.useForm();

//   //editingKey sẽ so sánh với isEditing, mục đích để disible các hàng không sửa
//   const [editingKey, setEditingKey] = useState('');

//   //Hàm xử lý khi bấm vào edit, sẽ trả về record là giá trị của hàng đó
//   const isEditing = (record) => record.id === editingKey;

//   const edit = (record) => {
//     form.setFieldsValue({
//       userId: '',
//       IdleDeadline: '',
//       title: '',
//       ...record,
//     });
//     setEditingKey(record.id);
//   };

//   const cancel = () => {
//     setEditingKey('');
//   };
//   // const DelCancel = () => {
//   //   setEditingKey('');
//   // };

//   const save = async (idvao) => {
//     try {
//       //row là giá trị của hàng đó chỉ hiện ở form, chưa lưu
//       const row = await form.validateFields();
//       const newData = [...data];
//       //findIndex để tìm vị trí của hàng đang sửa
//       const index = newData.findIndex((item) => idvao === item.id);

//       //Trường hợp tìm thấy nên index từ 0 trở đi
//       if (index > -1) {
//         const item = newData[index];
//         //splice để xóa từ vị trí tìm được, và thay thế bằng giá trị hàng mới, trả về mảng mới đã xóa và thay thế
//         newData.splice(index, 1, { ...item, ...row });
//         setDataSource(newData);
//         setEditingKey('');
//       } else {
//         newData.push(row);
//         setDataSource(newData);
//         setEditingKey('');
//       }
//     } catch (errInfo) {
//       console.log('Validate Failed:', errInfo);
//     }
//   };

//   const del = (idvao) => {
//     console.log(idvao)
//     try {
      
//       const newData = [...data];
//       //findIndex để tìm vị trí của hàng đang sửa
//       const index = newData.findIndex((item) => idvao === item.id);

//       //Trường hợp tìm thấy nên index từ 0 trở đi
//       if (index > -1) {
//         //splice để xóa từ vị trí tìm được, và thay thế bằng giá trị hàng mới, trả về mảng mới đã xóa và thay thế
//         newData.splice(index, 1);
//         setDataSource(newData);
//       } 
//     }
//       catch (errInfo) {
//       console.log('Validate Failed:', errInfo);
//     }
//   }

//     //Xử lý tìm kiếm (mở)
//     const [searchText, setSearchText] = useState('')
//     const [searchedColumn, setSearchedColumn] = useState('')
//     const getColumnSearchProps = dataIndex => ({
//       filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//         <div style={{ padding: 8 }}>
//           <Input
//             // ref={node => {
//             // //   this.searchInput = node;
//             // console.log(node)
//             // }}
//             placeholder={`Search ${dataIndex}`}
//             value={selectedKeys[0]}
//             onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//             onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             style={{ marginBottom: 8, display: 'block' }}
//           />
//           <Space>
//             <Button
//               type="primary"
//               onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//               icon={<SearchOutlined />}
//               size="small"
//               style={{ width: 90 }}
//             >
//               Search
//             </Button>
//             <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//               Reset
//             </Button>
//             <Button
//               type="link"
//               size="small"
//               onClick={() => {
//                 confirm({ closeDropdown: false });
//                 setSearchText(selectedKeys[0])
//                 setSearchedColumn(dataIndex)
//               }}
//             >
//               Filter
//             </Button>
//           </Space>
//         </div>
//       ),
//       filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
//       onFilter: (value, record) =>
//         record[dataIndex]
//           ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
//           : '',
//       onFilterDropdownVisibleChange: visible => {
//         // if (visible) {
//         //   setTimeout(() => this.searchInput.select(), 100);
//         // }
//       },
//       render: text =>
//         searchedColumn === dataIndex ? (
//           <Highlighter
//             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//             searchWords={[searchText]}
//             autoEscape
//             textToHighlight={text ? text.toString() : ''}
//           />
//         ) : (
//           text
//         ),
//     });
  
//     const handleSearch = (selectedKeys, confirm, dataIndex) => {
//       confirm();
//         setSearchText(selectedKeys[0])
//         setSearchedColumn(dataIndex)
//     };
  
//     const handleReset = clearFilters => {
//       clearFilters();
//       setSearchText('')
//     };
//     //Xử lý tìm kiếm (đóng)

//     const columns = [
//         {
//           title: 'ID',
//           dataIndex: 'id',
//           key: 'id',
//           editable: false,
//           sorter: (a, b) => a.id - b.id,
//           sortDirections: ['descend']
//         },
//         {
//           title: 'Họ và tên',
//           dataIndex: 'hovaten',
//           key: 'hovaten',
//           editable: true,
//           ...getColumnSearchProps('hovaten')
//         },
//         {
//           title: 'Username',
//           dataIndex: 'tendangnhap',
//           key: 'tendangnhap',
//           editable: false,
//           ...getColumnSearchProps('tendangnhap')
//         },
//         {
//           title: 'Giới tính',
//           dataIndex: 'gioitinh',
//           key: 'gioitinh',
//           editable: true,
//           filters: [
//             {
//             text: 'Nam',
//             value: 'nam',
//             },
//             {
//             text: 'Nữ',
//             value: 'nu',
//             },
//             ],
//             onFilter: (value, record) => record.gioitinh == value,
//             filterSearch: true
//         },
//         {
//           title: 'Tuổi',
//           dataIndex: 'tuoi',
//           key: 'tuoi',
//           editable: true
//         },
//         {
//           title: 'Địa chỉ',
//           dataIndex: 'diachi',
//           key: 'diachi',
//           editable: true
//         },
//         // {
//         //   title: 'Gmail',
//         //   dataIndex: 'gmail',
//         //   key: 'gmail',
//         //   editable: true
//         // },
//         {
//           title: 'Liên hệ',
//           dataIndex: 'sdt',
//           key: 'sdt',
//           editable: true,
//           ...getColumnSearchProps('sdt')
//         },
//         Table.EXPAND_COLUMN,
//         // {
//         //   title: 'FB',
//         //   dataIndex: 'fb',
//         //   key: 'fb',
//         //   editable: false,
//         //   render: (_, record) => {
//         //     return <p>{record.fb == '' ? '(Trống)' : <a href='record.fb'>Link</a>}</p>
//         //     },
//         // },
//         {
//           title: 'Quyền',
//           dataIndex: 'quyen',
//           key: 'quyen',
//           editable: true,
//           render: (_, record) => {
//             return <p>{record.quyen==1?'Chủ trọ':'Thường'}</p>
//             },
//           filters: [
//             {
//                 text: 'Chủ trọ',
//                 value: 1
//             },
//             {
//                 text: 'Thường',
//                 value: 0
//             },
//             ],
//             onFilter: (value, record) => record.quyen == value,
//             filterSearch: true  
//         },
//         {
//             title: 'Ảnh',
//             dataIndex: 'operation',
//             render: (_, record) => {
//                 return (
//                     <Popover
//                         content={
//                             <div>
//                                 <img src={record.img} style={{width: 200, height: 200}}  />
//                             </div>
//                         } 
//                         title="Title" 
//                         trigger="click"
//                     >
//                         <Typography.Link>
//                             <img src='https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg' width={50} height={40}/>
//                         </Typography.Link>
//                     </Popover>
                    
//                 )     
//             },
//         },
//         {
//             title: 'Xử lý',
//             dataIndex: 'operation',
//             render: (_, record) => {
//               const editable = isEditing(record);
//               return editable ? (       //Nếu hàng đó đang sửa nó hiện cái cancel với save, ngược lại thì không
//                 <span>
//                   <Typography.Link
//                     onClick={() => save(record.id)}
//                     style={{
//                       marginRight: 8,
//                     }}
//                   >
//                     Save
//                   </Typography.Link>
//                   <Popconfirm title="Sure to Cancel?" onConfirm={cancel}>
//                     <a>Cancel</a>
//                   </Popconfirm>
//                 </span>
//               ) : (
//                 <>
//                   <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
//                     <FormOutlined />
//                   </Typography.Link>
//                   &ensp; 
//                   <Popconfirm disabled={editingKey !== ''} title="Sure to Delete?" onConfirm={() => del(record.id)} >
//                     <a><DeleteOutlined /></a>
//                   </Popconfirm>
//                 </>
//               );
//             },
//         }
//       ];

//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }

//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         inputType: (col.dataIndex === 'tuoi' || col.dataIndex === 'quyen') ? 'number' : 'text', //Cài sẽ nhập chữ hoặc số, col.dataIndex trả về kiểu số và id cũng số nên kiểu sẽ số, ngược lại là chữ
//         dataIndex: col.dataIndex,
//         title: col.title,
//         editing: isEditing(record),
//       }),
//     };
//   });

//   const { Search } = Input;
//   const onSearch = value => {
//     console.log(value)  
//   } 
//   return (
//     <>
//       <Row>
//           <Col span={6} >
//             <h1>Quản lý người dùng</h1>
//             <h4 style={{ fontWeight: 'inherit', fontStyle: 'italic' }}>Có tổng {dataSource.length} người dùng</h4>
//           </Col>
//           <Col span={12}></Col>
//           <Col span={6} >
//               <Search placeholder="Username..." onSearch={onSearch} enterButton />
//           </Col>
//       </Row>

//       <Row>
//         <Col span={24}>
//         <Form form={form} component={false} >
//           <Table
//             components={{
//               body: {
//                 cell: EditableCell,
//               },
//             }}
//             bordered
//             dataSource={dataSource}
//             columns={mergedColumns}
//             rowClassName="editable-row"
//             // loading={loading}
//             pagination={{
//               onChange: cancel,
//             }}
//             rowKey={record => record.id}
//             expandable={{
//                 expandedRowRender: record => <p style={{ margin: 0 }}>{record.gmail} || <a href={record.fb}>{record.fb}</a></p>,
//                 }}
//           />
//         </Form>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default UserManagement







//Tin đã đăng
// import { Typography, Carousel, Col, Checkbox, Button, Row, Popover, Table, Popconfirm, Input, Space } from 'antd';
// import Highlighter from 'react-highlight-words';
// import { useEffect, useState } from 'react';
// import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';

// function PostWaitManagement() {
//     const del = (idvao) => {
//         console.log(idvao)
//         try {
          
//           const newData = [...data];
//           //findIndex để tìm vị trí của hàng đang sửa
//           const index = newData.findIndex((item) => idvao === item.id);
    
//           //Trường hợp tìm thấy nên index từ 0 trở đi
//           if (index > -1) {
//             //splice để xóa từ vị trí tìm được, và thay thế bằng giá trị hàng mới, trả về mảng mới đã xóa và thay thế
//             newData.splice(index, 1);
//             setDataSource(newData);
//           } 
//         }
//           catch (errInfo) {
//           console.log('Validate Failed:', errInfo);
//         }
//       }
//     //Xử lý tìm kiếm (mở)
//     const [searchText, setSearchText] = useState('')
//     const [searchedColumn, setSearchedColumn] = useState('')
//     const getColumnSearchProps = dataIndex => ({
//       filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
//         <div style={{ padding: 8 }}>
//           <Input
//             // ref={node => {
//             // //   this.searchInput = node;
//             // console.log(node)
//             // }}
//             placeholder={`Search ${dataIndex}`}
//             value={selectedKeys[0]}
//             onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
//             onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
//             style={{ marginBottom: 8, display: 'block' }}
//           />
//           <Space>
//             <Button
//               type="primary"
//               onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
//               icon={<SearchOutlined />}
//               size="small"
//               style={{ width: 90 }}
//             >
//               Search
//             </Button>
//             <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
//               Reset
//             </Button>
//             <Button
//               type="link"
//               size="small"
//               onClick={() => {
//                 confirm({ closeDropdown: false });
//                 setSearchText(selectedKeys[0])
//                 setSearchedColumn(dataIndex)
//               }}
//             >
//               Filter
//             </Button>
//           </Space>
//         </div>
//       ),
//       filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
//       onFilter: (value, record) =>
//         record[dataIndex]
//           ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
//           : '',
//       onFilterDropdownVisibleChange: visible => {
//         // if (visible) {
//         //   setTimeout(() => this.searchInput.select(), 100);
//         // }
//       },
//       render: text =>
//         searchedColumn === dataIndex ? (
//           <Highlighter
//             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
//             searchWords={[searchText]}
//             autoEscape
//             textToHighlight={text ? text.toString() : ''}
//           />
//         ) : (
//           text
//         ),
//     });
  
//     const handleSearch = (selectedKeys, confirm, dataIndex) => {
//       confirm();
//         setSearchText(selectedKeys[0])
//         setSearchedColumn(dataIndex)
//     };
  
//     const handleReset = clearFilters => {
//       clearFilters();
//       setSearchText('')
//     };
//     //Xử lý tìm kiếm (đóng)
//     const contentStyle = {
//         height: '160px',
//         color: 'black',
//         lineHeight: '160px',
//         textAlign: 'center',
//         background: '#364d79',
//     };
//     const columns = [
//             {
//               title: 'ID',
//               dataIndex: 'id',
//               key: 'id',
//               sorter: (a, b) => a.id - b.id,
//               sortDirections: ['descend'],
//               ...getColumnSearchProps('id')
//             },
//             {
//               title: 'Tiêu đề',
//               dataIndex: 'tieude',
//               key: 'tieude'
//             },
//             Table.EXPAND_COLUMN,
//             {
//               title: 'Địa chỉ',
//               dataIndex: 'diachi',
//               key: 'diachi',
//               ...getColumnSearchProps('diachi')
//             },
//             {
//               title: 'Giá',
//               dataIndex: 'gia',
//               key: 'gia',
//               sorter: (a, b) => a.gia - b.gia,
//               sortDirections: ['descend','ascend'],
//               ...getColumnSearchProps('gia')
//             },
//             {
//               title: 'Đơn vị',
//               dataIndex: 'donvi',
//               key: 'donvi'
//             },
//             {
//               title: 'Người đăng',
//               dataIndex: 'nguoidang',
//               key: 'nguoidang',
//               ...getColumnSearchProps('nguoidang')
//             },
//          {
//             title: 'Ảnh',
//             dataIndex: 'operation',
//             render: (_, record) => {
//                 return (
//                     <Popover 
//                         content={
//                             <Carousel autoplay autoplaySpeed={1000} style={{width: 200, height: 200}} >
//                                 <div>
//                                     <img src={record.img1} style={{width: '100%', height: 200, contentStyle}}  />
//                                 </div>
//                                 <div>
//                                     <img src={record.img2} style={{width: '100%', height: 200, contentStyle}}/>
//                                 </div>
//                                 <div>
//                                     <img src={record.img3} style={{width: '100%', height: 200, contentStyle}}/>
//                                 </div>
//                                 <div>
//                                     <img src={record.img4} style={{width: '100%', height: 200, contentStyle}}/>
//                                 </div>
//                             </Carousel>
//                         } 
//                         title="Ảnh phòng trọ" 
//                         trigger="click"
//                     >
//                         <Typography.Link>
//                             <img src='https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg' width={50} height={40}/>
//                         </Typography.Link>
//                     </Popover>
                    
//                 )     
//             }  
//         },
//         {
//             title: 'Xử lý',
//             dataIndex: 'operation',
//             render: (_, record) => {
//               return (
//                 <Popconfirm  title="Sure to Delete?" onConfirm={() => del(record.id)} >
//                     <a><DeleteOutlined /></a>
//                 </Popconfirm> 
//               )    
//             }
//         }
//     ];
//     const data = [
//         {
//           id: 1,
//           tieude: 'Phòng trọ vip',
//           diachi: 'Quy Nhơn, Bình Định',
//           gia: 600,
//           donvi: 'nghìn vnđ/tháng',
//           mota: 'Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm.',
//           nguoidang: 'bacvu',
//           img1: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg',
//           img2: 'https://xinhstar.vn/wp-content/uploads/2020/08/21.jpg',
//           img3: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-chibi-superman-dep.jpg',
//           img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU'
//         },
//         {
//           id: 2,
//           tieude: 'Phòng trọ mini',
//           diachi: 'BMT, Đắk Lắk',
//           gia: 500,
//           donvi: 'nghìn vnđ/tháng',
//           mota: 'Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm.',
//           nguoidang: 'thonguyen',
//           img1: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg',
//           img2: 'https://xinhstar.vn/wp-content/uploads/2020/08/21.jpg',
//           img3: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-chibi-superman-dep.jpg',
//           img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU'
//         },
//         {
//           id: 3,
//           tieude: 'Phòng trọ BMT',
//           diachi: 'BMT, Đắk Lắk',
//           gia: 600,
//           donvi: 'nghìn vnđ/tháng',
//           mota: 'Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm.',
//           nguoidang: 'diepdang',
//           img1: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg',
//           img2: 'https://xinhstar.vn/wp-content/uploads/2020/08/21.jpg',
//           img3: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-chibi-superman-dep.jpg',
//           img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU'
//         },
//         {
//           id: 4,
//           tieude: 'Phòng trọ giá tốt',
//           diachi: 'Q12, Hồ Chí Minh',
//           gia: 800,
//           donvi: 'nghìn vnđ/tháng',
//           mota: 'Google Dịch là một công cụ dịch thuật trực tuyến do Google phát triển. Nó cung cấp giao diện trang web, ứng dụng trên thiết bị di động cho hệ điều hành Android và iOS và giao diện lập trình ứng dụng giúp nhà phát triển xây dựng tiện ích mở rộng trình duyệt web và ứng dụng phần mềm.',
//           nguoidang: 'anhthu',
//           img1: 'https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg',
//           img2: 'https://xinhstar.vn/wp-content/uploads/2020/08/21.jpg',
//           img3: 'https://phunugioi.com/wp-content/uploads/2021/10/Hinh-anh-chibi-superman-dep.jpg',
//           img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU'
//         }
//       ];
//     const [dataSource, setDataSource] = useState([])
//     // const [loading, setLoading] = useState(false)
//     useEffect(() => {
//         setDataSource(data)
//     },[])
    
//     const [pageSize, setPageSize] = useState(10)
//     const [isCheckedAll, setIsCheckedAll] = useState({all: false, part: false, amount: 0})
//     return (
//         <>
//             <Row>
//                     <Col span={6} >
//                         <h2>Tin đã đăng </h2> 
//                         <h4 style={{ fontWeight: 'inherit', fontStyle: 'italic' }}>Có {dataSource.length} tin đã đăng</h4>
//                     </Col>
//                     <Col span={14}></Col>
//                     <Col span={4}></Col>
//             </Row>
//             <Table
//                 pagination={{
//                     onChange: (page, pageSize) => {
//                         setPageSize(pageSize)
//                     },
//                     pageSizeOptions: [10,20,40,100],
//                     showSizeChanger: true
//                 }}
//                 rowKey={record => record.id}
//                 columns={columns}
//                 expandable={{
//                 expandedRowRender: record => <p style={{ margin: 0 }}>{record.mota}</p>,
//                 }}
//                 dataSource={dataSource}
//                 // loading={loading}
//             />
//         </>
//     )
// }
// export default PostWaitManagement
  
 