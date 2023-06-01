import React from 'react'
import HeroNav from './HeroNav'
import Heronavroute from './Heronavroute'
import otherword from "./assets/images/other_words_for_home.jpg"
import the_tiny_dragon from "./assets/images/the_tiny_dragon.jpg"
import the_metropolist from "./assets/images/the_metropolist.jpg"
import { BiTimeFive } from "react-icons/bi"
import { MdOutlineContentCopy } from "react-icons/md"
import HeroBottom from './HeroBottom'
const Hero = () => {
  return (
    <div className='text-white bg-[#1D212B] flex flex-col gap-6 px-4 pt-10'>
      <HeroNav />
      <Heronavroute />
      <div className="myBooks">
        <p className='text-xl font-medium mb-3'>
          My Books
        </p>
        <BookCard />
      </div>
      <div className="heroBottom">
        <HeroBottom />
      </div>
    </div>
  )
}

export default Hero

const BookCard = () => {
  return (
    <div className='w-[100%] overflow-x-scroll'>
      <div className='flex gap-4 w-max overflow-x-scroll'>
        <div className=''>
          <img src={otherword} alt="" className=' rounded-lg h-44 object-cover' />
          <div className="btm flex gap-3 mt-2">
            <div className='flex gap-1'>
              <BiTimeFive className='' />
              <p className='text-xs font-medium'>3d 5h</p>
            </div>
            <div className='flex gap-1'>
              <MdOutlineContentCopy className='' /><p className='text-xs font-medium'>75%</p>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={the_tiny_dragon} alt="" className=' rounded-lg h-44 object-cover' />
          <div className="btm flex gap-3 mt-2">
            <div className='flex gap-1'>
              <BiTimeFive className='' />
              <p className='text-xs font-medium'>10d 5h</p>
            </div>
            <div className='flex gap-1'>
              <MdOutlineContentCopy className='' /><p className='text-xs font-medium'>22%</p>
            </div>
          </div>
        </div>
        <div className=''>
          <img src={the_metropolist} alt="" className=' rounded-lg h-44 object-cover' />
          <div className="btm flex gap-3 mt-2">
            <div className='flex gap-1'>
              <BiTimeFive className='' />
              <p className='text-xs font-medium'>6d 10h</p>
            </div>
            <div className='flex gap-1'>
              <MdOutlineContentCopy className='' /><p className='text-xs font-medium'>29%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}