import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext.jsx';
import { baseUrl } from '../baseUrl.jsx';
import BlogDetails from '../Components/BlogDetails.jsx';
import Header from '../Components/Header.jsx';
import Spinner from '../Components/Spinner.jsx';
const BlogPage = () => {
     const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const[blog,setBlog]=useState(null);
    const[relatedblogs,setRelatedBlogs]=useState([]);
    const location=useLocation();
    const navigation=useNavigate();
const {setLoading,loading}=useContext(AppContext);

     const blogId=location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
           setLoading(true); 
           let url=`${newBaseUrl}get-blog?blogId=${blogId}`;
        try{
            const res=await fetch(url);
            const data=await res.json();

            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
            setLoading(false);
        } 
        catch(error){  
            console.log("Error fetching related blogs");
            setLoading(false);
            setBlog(null);
            setRelatedBlogs([]);

    }
  }
  React.useEffect(()=>{
    if(blogId)
        fetchRelatedBlogs();
  },[blogId]);
  return (
     <div className='py-24 max-w-2xl mx-auto'>
            <Header />
            <div className='max-w-[720px] px-[25px] '>
                <div>
                    <button className='mb-6 border-2 rounded-md border-[#dfdfdf] py-1 px-4 hover:bg-[#efefef] transition-all'
                        onClick={() => navigation(-1)}
                    >
                        Back
                    </button>
                </div>
                {
                    loading ?
                        (<div>
                            <p> Loading</p>
                        </div>) :
                        blog ?
                            (<div className='flex flex-col gap-y-10'>
                                <BlogDetails post={blog} />
                                <h2 className='text-3xl font-bold'> Related Blogs </h2>
                                {
                                    relatedblogs.map((post) => (
                                        <div key={post.id}>
                                            <BlogDetails post={post} />
                                        </div>
                                    ))
                                }

                            </div>) :
                            (<div>
                                <p>No Blog Found </p>
                            </div>)

                }

            </div>

        </div>
  )
}
export default BlogPage