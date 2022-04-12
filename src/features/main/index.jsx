import React from "react";
import { Route, Routes} from "react-router-dom";
import Main from "./pages/main";
import "./index.scss";

function HomePage() {
  return (
    <Routes>
      <Route path="/" element={<Main/>} />
    </Routes>
  );
}

export default HomePage;