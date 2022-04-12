import { Typography, Carousel, Col, Checkbox, Button, Row, Popover, Table, Popconfirm, Input, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { useEffect, useState, useContext } from 'react';
import { DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import {DataContext} from '../DataContext'

function Post() {
    const dataSource = useContext(DataContext).dataDaDang
    const dataSourceTotal = useContext(DataContext).dataSource
    const setDataSource = useContext(DataContext).setDataSource
  // console.log(d)
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
    const contentStyle = {
        height: '160px',
        color: 'black',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
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
        {
            title: 'Xử lý',
            dataIndex: 'operation',
            render: (_, record) => {
              return (
                <Popconfirm  title="Sure to Delete?" onConfirm={() => del(record.id)} >
                    <a><DeleteOutlined /></a>
                </Popconfirm> 
              )    
            }
        }
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
    // },[])
    
    const [pageSize, setPageSize] = useState(10)
    const [isCheckedAll, setIsCheckedAll] = useState({all: false, part: false, amount: 0})
    return (
        <>
            <Row>
                    <Col span={6} >
                        <h4 style={{ fontWeight: 'inherit', fontStyle: 'italic' }}>Có {dataSource.length} tin đã đăng</h4>
                    </Col>
                    <Col span={14}></Col>
                    <Col span={4}></Col>
            </Row>
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
                expandable={{
                expandedRowRender: record => <p style={{ margin: 0 }}>{record.mota}</p>,
                }}
                dataSource={dataSource}
                style={{ marginTop: 9 }}
                // loading={loading}
            />
        </>
    )
}
export default Post