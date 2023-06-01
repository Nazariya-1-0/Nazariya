import React from 'react'
import {AiOutlineThunderbolt} from "react-icons/ai"
const HeroNav = () => {
  return (
    <div className=' flex items-start flex-col w-[100%] gap-2'>
        <p>Good Morning</p>
        <div className='flex items-center justify-between w-[100%] '>
          <p className='text-xl font-bold'>Nishant Ola</p>
          <div className="butttton flex items-center gap-2 justify-between bg-orange-500 px-2 py-1 rounded-2xl">
            <AiOutlineThunderbolt className='self-center rounded-[50%] bg-orange-700 p-[0.1rem]'/>
            <p><span className='font-semibold'>248</span> points</p>
          </div>
        </div>
    </div>
  )
}

export default HeroNav