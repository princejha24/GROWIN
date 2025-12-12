import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const{page,handlePageChange,totalPages,setLoading}=useContext(AppContext)

  return (
    
    <div className='w-full flex justify-center items-center border-1 fixed bottom-0 bg-[#002455] '>
       {
        setLoading===true?(<div></div>):(<div className='flex justify-between w-11/12 max-w-[670px] py-2  ' ><div className=' flex gap-[10px]'>{ page>1 && 
          <button className=" rounded-md border px-4 py-1  bg-white font-bold" onClick={() =>handlePageChange(page-1)}>
              Previous
          </button>
        }
        {page<totalPages &&
        (
          <button className=" rounded-md border px-4 py-1 bg-white font-bold" onClick={()=>handlePageChange(page+1)}>
            Next
          </button>
        )
        }</div>
        <p className='font-bold text-sm  bg-white border px-4 py-1 rounded-md'>
          Page {page} of {totalPages}
        </p>
    </div>)
}
        
    </div>
  )
}


export default Pagination
//curly brace ka use issliye kiya hua hai kyuki conditions ka use humne kiya hai
