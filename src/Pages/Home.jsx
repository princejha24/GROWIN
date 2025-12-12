import React from "react";
import Header from "../Components/Header.jsx";
import Blogs from "../Components/Blogs.jsx";
import Pagination from "../Components/Pagination.jsx";

const Home=()=>{
    return(
         <div>
              <Header/>
              <div className='py-24 mx-auto max-w-[720px] px-[25px] '>
                <Blogs/>
              </div>
              <Pagination/>
            </div>
    )
}
export default Home;
