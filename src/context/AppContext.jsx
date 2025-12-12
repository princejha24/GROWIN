import { createContext } from "react";
import { baseUrl} from "../baseUrl";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export const AppContext=createContext();

//children by default props
//[]-> empty array as start mein koi value nhi rahega hamare passs
function AppContextProvider({children}) {

    const [loading,setLoading]=useState(false);
    const[posts,setPosts]=useState([]);
    const[page,setPage]=useState(1);
    const[totalPages,setTotalPages]=useState(null);
    const navigate=useNavigate();
    async function fetchPosts(page=1,tag=null,category=null) {
        setLoading(true);
        let url=`${baseUrl}?page=${page}`;//page with url
          if(tag){
            url+=`&tag=${tag}`;
            console.log("Fetching posts with tag:", tag, "URL:", url);
          }
          if(category){
            url+=`&category=${category}`;
            console.log("Fetching posts with category:", category, "URL:", url);
          }
           try {
      const res = await fetch(url);
      const data = await res.json();
      console.log("API Response for tag/category:", data);
      if (!data.posts || data.posts.length === 0)
        throw new Error("Something Went Wrong");
      console.log("Api Response", data);
      setPage(data.page);
      setPosts(data.posts);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error in Fetching BlogPosts", error);
      setPage(1);
      setPosts([]);
      setTotalPages(null);
    }
    setLoading(false);
        
    }
    function handlePageChange(page) {
      navigate({search:`?page=${page}`});
        setPage(page);
         

    }

  
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchPosts,
        handlePageChange
    };
    return <AppContext.Provider value={value}>{children}
    </AppContext.Provider>;
}
//context api provide kar raha hai
export default AppContextProvider;