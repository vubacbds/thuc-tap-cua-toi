import { Space, Typography, Carousel, Col, Checkbox, Button, Row, Popover, Table, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import Search from 'antd/lib/transfer/search';
import { useEffect, useState, useContext } from 'react';
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { DataContext } from '../DataContext'

function PostWait() {
    const dataSource = useContext(DataContext).dataChoDuyet
    const dataSourceTotal = useContext(DataContext).dataSource
    const setDataSource = useContext(DataContext).setDataSource
  
    const [selectedRowKeys, setSelectedRowKeys] = useState([])
    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setSelectedRowKeys(selectedRowKeys)
            console.log(
                `selectedRowKeys: ${selectedRowKeys}`,
                "selectedRows: ",
                selectedRows
            );
            if(pageSize == selectedRowKeys.length)
                setIsCheckedAll({all: true, part: false, amount: selectedRowKeys.length})
            else if(selectedRowKeys.length > 0 && selectedRowKeys.length < pageSize) setIsCheckedAll({all: false, part: true, amount: selectedRowKeys.length})
            else setIsCheckedAll({all: false, part: false, amount: selectedRowKeys.length})
        },  
        getCheckboxProps: record => {
            return {
                disabled: record.working != null,
                name: record.name
            };
        }
    };
    const contentStyle = {
        height: '160px',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
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
          sorter: (a, b) => a.id - b.id,
          sortDirections: ['descend'],
          ...getColumnSearchProps('id')
        },
        {
          title: 'Tiêu đề',
          dataIndex: 'tieude',
          key: 'tieude'
        },
        Table.EXPAND_COLUMN,
        {
          title: 'Địa chỉ',
          dataIndex: 'diachi',
          key: 'diachi',
          ...getColumnSearchProps('diachi')
        },
        {
          title: 'Giá',
          dataIndex: 'gia',
          key: 'gia',
          sorter: (a, b) => a.gia - b.gia,
          sortDirections: ['descend','ascend'],
          ...getColumnSearchProps('gia')
        },
        {
          title: 'Đơn vị',
          dataIndex: 'donvi',
          key: 'donvi'
        },
        {
          title: 'Người đăng',
          dataIndex: 'nguoidang',
          key: 'nguoidang',
          ...getColumnSearchProps('nguoidang')
        },
     {
        title: 'Ảnh',
        dataIndex: 'operation',
        render: (_, record) => {
            return (
                <Popover 
                    content={
                        <Carousel autoplay autoplaySpeed={1000} style={{width: 200, height: 200}} >
                            <div>
                                <img src={record.img1} style={{width: '100%', height: 200, contentStyle}}  />
                            </div>
                            <div>
                                <img src={record.img2} style={{width: '100%', height: 200, contentStyle}}/>
                            </div>
                            <div>
                                <img src={record.img3} style={{width: '100%', height: 200, contentStyle}}/>
                            </div>
                            <div>
                                <img src={record.img4} style={{width: '100%', height: 200, contentStyle}}/>
                            </div>
                        </Carousel>
                    } 
                    title="Ảnh phòng trọ" 
                    trigger="click"
                >
                    <Typography.Link>
                        <img src='https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1-600x600.jpg' width={50} height={40}/>
                    </Typography.Link>
                </Popover>
                
            )     
        }  
    },
    Table.SELECTION_COLUMN
    ];
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
    //       img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU'
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
    //       img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU'
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
    //       img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU'
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
    //       img4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dwgCJqfs9Gp3SR7D0TQ87kLrpM6CYr1Viw&usqp=CAU'
    //     }
    //   ];
    // const [dataSource, setDataSource] = useState([])
    // // const [loading, setLoading] = useState(false)
    // useEffect(() => {
    //     setDataSource(d)
    //     //Lấy API
    //     // fetch('https://jsonplaceholder.typicode.com/photos')
    //     //   .then(res => res.json())
    //     //   .then(posts => {
    //         //Giảm số lượng data
    //         // var posts = posts.filter(function(p) {  
    //         //     return p.id < 101;
    //         // })
    //     //     setDataSource(posts)
    //     //   } )
    //     //   .catch((err) => {
    //     //       console.log(err)
    //     //   })
    //     //   .finally(() => {
    //     //     setLoading(false)
    //     //   })
    // },[])
    
    const [pageSize, setPageSize] = useState(10)
    const [isCheckedAll, setIsCheckedAll] = useState({all: false, part: false, amount: 0})

    const del = () => {
      const newData = [...dataSourceTotal];
      selectedRowKeys.forEach( id => {  
        const index = newData.findIndex((item) => id === item.id);
        newData.splice(index, 1);
        
      })
      setDataSource(newData)
    }
    const checkOk = () => {
      const newData = [...dataSourceTotal];
      selectedRowKeys.forEach( id => {  
        const index = newData.findIndex((item) => id === item.id);
        const tin = newData[index];
        newData.splice(index, 1, { ...tin, trangthai: 1 });
      })
      // console.log(newData)
      setDataSource(newData)
    }
    return (
        <>
            <Row>
                    <Col span={6} >
                        <h4 style={{ fontWeight: 'inherit', fontStyle: 'italic' }}>Có {dataSource.length} tin đang chờ duyệt</h4>
                    </Col>

                    <Col span={12}></Col>
                   
                    <Col span={6} >
                        <div>

                            <Checkbox checked={isCheckedAll.all} indeterminate={isCheckedAll.part} disabled />
                            <span style={{width: 40}}>{` Đã chọn: ${isCheckedAll.amount} `}</span>          
                            <Popconfirm title="Sure to OK?" onConfirm={() => checkOk()} >
                              <Button type="primary" style={{ background: "green", borderColor: "green"}}>Duyệt</Button>
                            </Popconfirm>
                            <Popconfirm title="Sure to Delete?" onConfirm={() => del()} >
                              <Button type="primary" danger style={{ marginLeft: 5, width: 68 }}>Xóa</Button>
                            </Popconfirm>
                            
                            
                        </div>                       
                    </Col>
            </Row>
            <Row>
              <Col span={24} >
                <Table
                    pagination={{
                        onChange: (page, pageSize) => {
                            setPageSize(pageSize)
                        },
                        pageSizeOptions: [10,20,40,100],
                        showSizeChanger: true
                    }}
                    rowKey={record => record.id}
                    columns={columns}
                    rowSelection={rowSelection}
                    expandable={{
                    expandedRowRender: record => <p style={{ margin: 0 }}>{record.mota}</p>
                    }}
                    dataSource={dataSource}
                    style={{ marginTop: 6 }}
                    // loading={loading}
                />
              </Col>
            </Row>
        </>
    )
}
export default PostWait


//Bản cũ
// import { Typography, Carousel, Col, Checkbox, Button, Row, Popover, Table } from 'antd';
// import Search from 'antd/lib/transfer/search';
// import { useEffect, useState } from 'react';

// function PostWaitManagement() {
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
//             title: 'Ảnh',
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
//                         title="Ảnh phòng trọ" 
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
// export default PostWaitManagement