import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useNavigate, Navigate, Link , Redirect} from "react-router-dom";
import { Spin } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import NotFound from "./components/not-found";
import {Home, UserManagement, PostManagement, Test} from './features/dashboard'

//Lazy loading
const HomePage = React.lazy(() => import("./features/main"));
const AdminPage = React.lazy(() => import("./features/dashboard"));

function App() {
  
  return (
    <div className="app">
      <Suspense
        fallback={
          <div className="app__spin">
            <Spin tip="Loading..." />
          </div>
        }
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/room-social-network" replace />} />
            <Route path="/room-social-network/*" element={<HomePage/>} />
            <Route path="*" element={<NotFound/>} />

            {/* <Route path="/room-social-network/admin/:type" element={<AdminPage />} /> */}

            {/* <Route path="/room-social-network/admin" element={<AdminPage />} >
              <Route index element={<Navigate to="/room-social-network/admin/home" />} />
              <Route path="home" element={<Home />} />
            </Route> */}

            <Route path="/room-social-network/admin" element={<AdminPage />}>           
              <Route index element={<Navigate to="home" replace/>}/>
              <Route path="home" element={<Home />} />
              
              {/* <Route path="tin-chua-duyet" element={<PostWaitManagement />} >
                <Route index element={<PostWaitManagement />}/>
                <Route path=":id" element={<PostWaitManagement />}/>
              </Route> */}

              {/* <Route path="tin-da-dang" element={<Test />} /> */}

              <Route path="quan-ly-nguoi-dung" element={<UserManagement />} />
              <Route path="quan-ly-tin-dang" element={<PostManagement />} />
              <Route path="giao-dien" element={<span>Tính năng đang được phát triển...</span>} />
              <Route path="tu-khoa-hot" element={<span>Tính năng đang được phát triển...</span>} />
           </Route>

            <Route path="/room-social-network/admin/*" element={<NotFound />} />  
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
} 

export default App;

//Chứa dấu * là khi không tìm thấy đường dẫn nào phù hợp
//index là khi mặc định phần đuôi không thêm gì