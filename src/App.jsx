import React from 'react';
import Header from './Components/Header.jsx';
import Blogs from './Components/Blogs.jsx';
import Pagination from './Components/Pagination.jsx';
import { useContext } from 'react';
import { AppContext } from './context/AppContext.jsx';
import { useEffect } from 'react';
import './App.css';
import {Route,Routes, useLocation, useSearchParams} from "react-router-dom"
import Home from './Pages/Home.jsx';
import BlogPage from './Pages/BlogPage.jsx';
import TagPage from './Pages/tagPage.jsx';
import CategoryPage from './Pages/CategoryPage.jsx';

export default function App() {

  const{fetchPosts}=useContext(AppContext);
 const[searchParams,setSearchParams]=useSearchParams({});
 const location=useLocation();
  useEffect(()=>{
    const page=searchParams.get("page")??1;
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/tags/").at(-1).replace(/-/g," ");
      fetchPosts(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/categories/").at(-1).replace("-"," ");
      fetchPosts(Number(page),null,category);
    }
    else{
      fetchPosts(Number(page));
    }
  },[location.pathname,location.search]);

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/blog/:blogId" element={<BlogPage />}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<CategoryPage/>}/>
    </Routes>
  );
}