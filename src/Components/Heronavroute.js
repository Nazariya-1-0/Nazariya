import React from 'react'
import {FiSearch} from "react-icons/fi"
const Heronavroute = () => {
  return (
    <div>
        <div className='flex px-5 justify-between items-center w-[100%] bg-[#D9D9D930] rounded-md'>
            <input type="search" name="" id="" className=' bg-transparent px-3 py-2 w-[70%] focus:outline-none outline-none placeholder:text-[#ffffff30] placeholder:text-xs placeholder:self-center' placeholder='Search for a book'/>
            <FiSearch/>
        </div>
    </div>
  )
}

export default Heronavroute