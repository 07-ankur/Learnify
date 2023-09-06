import React from "react";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Landing_pg from "./pages/Landing/Landing_pg";
import Home_pg from "./pages/Home/Home_pg";
import Tutorials_pg from "./pages/Tutorials/Tutorials_pg";
import Signup_pg from "./pages/Authentication/Signup_pg";
import Login_pg from "./pages/Authentication/Login_pg";
import Blog_pg from "./pages/Blog/Blog_pg";
import { Blogs } from "./utils/content";
import Blogsarea_pg from "./pages/Blog/Blogsarea_pg";

const {ITEMS} = Blogs;

const App = () => {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing_pg />} />
        <Route path="/home" element={<Home_pg />} />
        <Route path="/tutorials" element={<Tutorials_pg />} />
        <Route path="/signup" element={<Signup_pg />} />
        <Route path="/login" element={<Login_pg />} />
        <Route path="/blog" element={<Blog_pg />} />
        <Route path="*" element={<Landing_pg />} />
        {ITEMS.map((item)=>(
          <Route 
            key={item.key} 
            path={`/blog/${item.title.replace(/ /g, '-')}`} element={<Blogsarea_pg/>}/>
          ))}
      </Routes>
    </div>
  );
};

export default App;
