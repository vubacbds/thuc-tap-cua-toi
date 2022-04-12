import { Switch } from "antd"
import PostWait from './PostWait'
import Post from './Post'
import { useEffect, useState } from "react"

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
function PostManagement() {
    // const [dataSource, setDataSource] = useState([])
    // useEffect(() => {
    //     setDataSource(data)
    // },[])
   
    // const dataDaDang = dataSource.filter( item => {  
    //     return item.trangthai === 1;
    // })

    // const dataChoDuyet = dataSource.filter( item => {  
    //     return item.trangthai === 0;
    // })

    
    const [trueFalse, setTrueFalse] = useState(true)
    const handleSwitch = (bool) => setTrueFalse(!trueFalse)
    return (
        <>
            <Switch
                checkedChildren={<h2 style={{color: '#fff'}}>Tin chờ duyệt</h2>}
                unCheckedChildren={<h2 style={{color: '#fff'}}>Tin đã đăng</h2>}
                defaultChecked
                onChange={handleSwitch}
                style={{marginBottom: 20, height: 30}}
            />
            { trueFalse ? <PostWait/> : <Post/> }
        </>
    )
    
}

export default PostManagement