
import React, { useState, useEffect, useContext } from 'react';
import '../index.scss';
import { Table, Input, InputNumber, Popconfirm, Form, Typography, Space, Row, Col} from 'antd';
import { AudioOutlined, SearchOutlined, FormOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import Highlighter from 'react-highlight-words';
import { Popover } from 'antd';
import { Radio } from 'antd';
import {DataContext} from './DataContext'

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

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
const UserManagement = () => {
  const dataSource = useContext(DataContext).dataSourceUser
  const setDataSource = useContext(DataContext).setDataSourceUser
//   const [dataSource, setDataSource] = useState([])
// //   const [loading, setLoading] = useState(false)
//   useEffect(() => {
//     setDataSource(data)
//   },[])
  const [form] = Form.useForm();

  //editingKey sẽ so sánh với isEditing, mục đích để disible các hàng không sửa
  const [editingKey, setEditingKey] = useState('');

  //Hàm xử lý khi bấm vào edit, sẽ trả về record là giá trị của hàng đó
  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      userId: '',
      IdleDeadline: '',
      title: '',
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey('');
  };
  // const DelCancel = () => {
  //   setEditingKey('');
  // };

  const save = async (idvao) => {
    try {
      //row là giá trị của hàng đó chỉ hiện ở form, chưa lưu
      const row = await form.validateFields();
      const newData = [...dataSource];
      //findIndex để tìm vị trí của hàng đang sửa
      const index = newData.findIndex((item) => idvao === item.id);

      //Trường hợp tìm thấy nên index từ 0 trở đi
      if (index > -1) {
        const item = newData[index];
        //splice để xóa từ vị trí tìm được, và thay thế bằng giá trị hàng mới, trả về mảng mới đã xóa và thay thế
        newData.splice(index, 1, { ...item, ...row });
        setDataSource(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setDataSource(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  const del = (idvao) => {
    console.log(idvao)
    try {
      
      const newData = [...dataSource];
      //findIndex để tìm vị trí của hàng đang sửa
      const index = newData.findIndex((item) => idvao === item.id);

      //Trường hợp tìm thấy nên index từ 0 trở đi
      if (index > -1) {
        //splice để xóa từ vị trí tìm được, và thay thế bằng giá trị hàng mới, trả về mảng mới đã xóa và thay thế
        newData.splice(index, 1);
        setDataSource(newData);
      } 
    }
      catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  }

    //Xử lý tìm kiếm (mở)
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    const getColumnSearchProps = dataIndex => ({
      filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
        <div style={{ padding: 8 }}>
          <Input
            // ref={node => {
            // //   this.searchInput = node;
            // console.log(node)
            // }}
            placeholder={`Search ${dataIndex}`}
            value={selectedKeys[0]}
            onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
            onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
            style={{ marginBottom: 8, display: 'block' }}
          />
          <Space>
            <Button
              type="primary"
              onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
              icon={<SearchOutlined />}
              size="small"
              style={{ width: 90 }}
            >
              Search
            </Button>
            <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
              Reset
            </Button>
            <Button
              type="link"
              size="small"
              onClick={() => {
                confirm({ closeDropdown: false });
                setSearchText(selectedKeys[0])
                setSearchedColumn(dataIndex)
              }}
            >
              Filter
            </Button>
          </Space>
        </div>
      ),
      filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
      onFilter: (value, record) =>
        record[dataIndex]
          ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
          : '',
      onFilterDropdownVisibleChange: visible => {
        // if (visible) {
        //   setTimeout(() => this.searchInput.select(), 100);
        // }
      },
      render: text =>
        searchedColumn === dataIndex ? (
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        ) : (
          text
        ),
    });
  
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
      confirm();
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    };
  
    const handleReset = clearFilters => {
      clearFilters();
      setSearchText('')
    };
    //Xử lý tìm kiếm (đóng)

    const columns = [
        {
          title: 'ID',
          dataIndex: 'id',
          key: 'id',
          editable: false,
          sorter: (a, b) => a.id - b.id,
          sortDirections: ['descend']
        },
        {
          title: 'Họ và tên',
          dataIndex: 'hovaten',
          key: 'hovaten',
          editable: true,
          ...getColumnSearchProps('hovaten')
        },
        {
          title: 'Username',
          dataIndex: 'tendangnhap',
          key: 'tendangnhap',
          editable: false,
          ...getColumnSearchProps('tendangnhap')
        },
        {
          title: 'Giới tính',
          dataIndex: 'gioitinh',
          key: 'gioitinh',
          editable: true,
          render: (_, record) => {
            return <p>{record.gioitinh=='nam'?'Nam':'Nữ'}</p>
            },
          filters: [
            {
            text: 'Nam',
            value: 'nam',
            },
            {
            text: 'Nữ',
            value: 'nu',
            },
            ],
            onFilter: (value, record) => record.gioitinh == value,
            filterSearch: false
        },
        {
          title: 'Tuổi',
          dataIndex: 'tuoi',
          key: 'tuoi',
          editable: true
        },
        // {
        //   title: 'Gmail',
        //   dataIndex: 'gmail',
        //   key: 'gmail',
        //   editable: true
        // },
        {
          title: 'Liên hệ',
          dataIndex: 'sdt',
          key: 'sdt',
          editable: true,
          ...getColumnSearchProps('sdt')
        },
        Table.EXPAND_COLUMN,
        // {
        //   title: 'FB',
        //   dataIndex: 'fb',
        //   key: 'fb',
        //   editable: false,
        //   render: (_, record) => {
        //     return <p>{record.fb == '' ? '(Trống)' : <a href='record.fb'>Link</a>}</p>
        //     },
        // },
        {
          title: 'Quyền',
          dataIndex: 'quyen',
          key: 'quyen',
          editable: true,
          render: (_, record) => {
            return <p>{record.quyen==1?'Chủ trọ':'Thường'}</p>
            },
          filters: [
            {
                text: 'Chủ trọ',
                value: 1
            },
            {
                text: 'Thường',
                value: 0
            },
            ],
            onFilter: (value, record) => record.quyen == value,
            filterSearch: false  
        },
        {
            title: 'Ảnh',
            dataIndex: 'operation',
            render: (_, record) => {
                return (
                    <Popover
                        content={
                            <div>
                                <img src={record.img} style={{width: 200, height: 200}}  />
                            </div>
                        } 
                        title="Avartar" 
                        trigger="click"
                    >
                        <Typography.Link>
                            <img src='https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg' width={50} height={40}/>
                        </Typography.Link>
                    </Popover>
                    
                )     
            },
        },
        {
            title: 'Xử lý',
            dataIndex: 'operation',
            render: (_, record) => {
              const editable = isEditing(record);
              return editable ? (       //Nếu hàng đó đang sửa nó hiện cái cancel với save, ngược lại thì không
                <span>
                  <Typography.Link
                    onClick={() => save(record.id)}
                    style={{
                      marginRight: 8,
                    }}
                  >
                    Save
                  </Typography.Link>
                  <Popconfirm title="Sure to Cancel?" onConfirm={cancel}>
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
              ) : (
                <>
                  <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                    <FormOutlined />
                  </Typography.Link>
                  &ensp; 
                  <Popconfirm disabled={editingKey !== ''} title="Sure to Delete?" onConfirm={() => del(record.id)} >
                    <a><DeleteOutlined /></a>
                  </Popconfirm>
                </>
              );
            },
        }
      ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: (col.dataIndex === 'tuoi' || col.dataIndex === 'quyen') ? 'number' : 'text', //Cài sẽ nhập chữ hoặc số, col.dataIndex trả về kiểu số và id cũng số nên kiểu sẽ số, ngược lại là chữ
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const { Search } = Input; 
  return (
    <>
      <Row>
          <Col span={6} >
            <h1>Quản lý người dùng</h1>
            <h4 style={{ fontWeight: 'inherit', fontStyle: 'italic' }}>Có tổng {dataSource.length} người dùng</h4>
          </Col>
          <Col span={12}></Col>
          <Col span={6} ></Col>
      </Row>

      <Row>
        <Col span={24}>
        <Form form={form} component={false} >
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={dataSource}
            columns={mergedColumns}
            rowClassName="editable-row"
            // loading={loading}
            pagination={{
              onChange: cancel,
              pageSizeOptions: [10,20,40,100],
              showSizeChanger: true
            }}
            rowKey={record => record.id}
            expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{record.gmail} || <a href={record.fb}>{record.fb}</a></p>,
                }}
          />
        </Form>
        </Col>
      </Row>
    </>
  );
};

export default UserManagement












//Bản cũ
// import React, { useState, useEffect } from 'react';
// import '../index.scss';
// import { Table, Input, InputNumber, Popconfirm, Form, Typography, Space, Row, Col} from 'antd';
// import { AudioOutlined, SearchOutlined } from '@ant-design/icons';
// import { Button } from 'antd';
// import Highlighter from 'react-highlight-words';

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

// const UserManagement = () => {
//   const [data, setData] = useState([])
//   const [loading, setLoading] = useState(false)
//   useEffect(() => {
//     setLoading(true)
//     fetch("https://jsonplaceholder.typicode.com/todos")
//         .then(res => res.json())
//         .then(data => {
//           setData(data)
//         })
//         .catch(err => {
//             console.log(err)
//         })
//         .finally(() => {
//           setLoading(false)
//       })
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
//         setData(newData);
//         setEditingKey('');
//       } else {
//         newData.push(row);
//         setData(newData);
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
//         setData(newData);
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

//   const columns = [
//     {
//       title: 'User ID',
//       dataIndex: 'userId',
//       width: '25%',
//       editable: true,
      
//       // ...getColumnSearchProps('userId'),
//       filters: [
//         {
//           text: '1',
//           value: '1',
//         },
//         {
//           text: '2',
//           value: '2',
//         },
//       ],
//       onFilter: (value, record) => record.userId == value,
//       filterSearch: true,
//     },
//     {
//       title: 'ID',
//       dataIndex: 'id',
//       width: '15%',
//       editable: false,
//       ...getColumnSearchProps('id')
//     },
//     {
//       title: 'Title',
//       dataIndex: 'title',
//       width: '40%',
//       editable: true,
//       ...getColumnSearchProps('title'),
//       sorter: (a, b) => a.title.length - b.title.length,
//           sortDirections: ['descend', 'ascend'],
//     },
//     {
//       title: 'operation',
//       dataIndex: 'operation',
//       render: (_, record) => {
//         const editable = isEditing(record);
//         return editable ? (       //Nếu hàng đó đang sửa nó hiện cái cancel với save, ngược lại thì không
//           <span>
//             <Typography.Link
//               onClick={() => save(record.id)}
//               style={{
//                 marginRight: 8,
//               }}
//             >
//               Save
//             </Typography.Link>
//             <Popconfirm title="Sure to Cancel?" onConfirm={cancel}>
//               <a>Cancel</a>
//             </Popconfirm>
//           </span>
//         ) : (
//           <>
//             <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
//               Edit
//             </Typography.Link>
//             &ensp; 
//             <Popconfirm disabled={editingKey !== ''} title="Sure to Delete?" onConfirm={() => del(record.id)} >
//               <a>Delete</a>
//             </Popconfirm>
//           </>
//         );
//       },
//     },
//   ];
//   const mergedColumns = columns.map((col) => {
//     if (!col.editable) {
//       return col;
//     }

//     return {
//       ...col,
//       onCell: (record) => ({
//         record,
//         inputType: col.dataIndex === 'id' ? 'number' : 'text', //Cài sẽ nhập chữ hoặc số, col.dataIndex trả về kiểu số và id cũng số nên kiểu sẽ số, ngược lại là chữ
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
//             <h4 style={{ fontWeight: 'inherit', fontStyle: 'italic' }}>Có tổng {data.length} người dùng</h4>
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
//             dataSource={data}
//             columns={mergedColumns}
//             rowClassName="editable-row"
//             loading={loading}
//             pagination={{
//               onChange: cancel,
//             }}
//           />
//         </Form>
//         </Col>
//       </Row>
//     </>
//   );
// };

// export default UserManagement
