import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main";
import About from "./pages/about/About";
import Post from "./pages/post/Post";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/post" element={<Post />} />
    </Routes>
  );
}

export default App;
