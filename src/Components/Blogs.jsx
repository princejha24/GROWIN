import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext.jsx'
import Spinner from './Spinner.jsx'
import Header from './Header.jsx'
import BlogDetails from './BlogDetails.jsx'

const Blogs = () => {
//consume the blog data from context api
const{posts,loading}=useContext(AppContext);


  return (


   <div className="flex flex-col gap-y-10 max-w-2xl mx-auto  ">
      {loading ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="min-h-[80vh] w-full flex justify-center items-center">
          <p className="text-center font-bold text-3xl">No Blogs Found !</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post}/>
        ))
      )}
    </div>
    
  )
}

export default Blogs