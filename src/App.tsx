import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Post from "./pages/post/Post";
import Seo from "./components/seo/Seo";

function App() {
  return (
    <>
      <Seo
        title="Jae Hyup Blog"
        url="https://jaehyup0504.github.io"
        desc="Jae Hyup Blog에 오신걸 환영합니다."
      />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Post />} />
      </Routes>
    </>
  );
}

export default App;
