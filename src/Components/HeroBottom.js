import React from 'react'
import the_tiny_dragon from "./assets/images/the_tiny_dragon.jpg"
import the_metropolist from "./assets/images/the_metropolist.jpg"
import {MdOutlineBookmarkBorder} from "react-icons/md"
const HeroBottom = () => {
  return (
    <div>
            <p className='text-xl font-semibold mb-3'>Suggested for you</p>
        <div className="cards flex flex-col gap-4">
            <BottomCard img={the_tiny_dragon} name="The Tiny Dragon" author="Rupert Carter"/>
            <BottomCard img={the_metropolist} name="The Metropolist" author="Robert Macfarlane"/>
        </div>
    </div>
  )
}

export default HeroBottom

const BottomCard=(props)=>{
    return (
        <>
        <div className='flex justify-evenly'>
            <div className='left'>
                <img src={props.img} alt="" className=' rounded-md w-28 h-36'/>
            </div>
            <div className="right flex flex-col justify-between">
                <div className='flex justify-between items-center gap-6'>
                    <div>
                        <p className='font-medium'>{props.name}</p>
                        <p className='mt-1'>{props.author}</p>
                    </div>
                    <div>
                        <MdOutlineBookmarkBorder className='self-center w-6 h-6'/>
                    </div>
                </div>
                <div className="tags flex gap-1">
                    <div className="drama bg-[#22263D] text-xs text-[#4D53E0] w-max px-2 py-1 rounded-md">Drama</div>
                    <div className="Romance bg-[#332833] text-xs text-[#F26372] w-max px-2 py-1 rounded-md">Romance</div>
                    <div className="Romance bg-[#223432] text-xs text-[#45C062] w-max px-2 py-1 rounded-md">Romance</div>
                </div>
            </div>
        </div>
        </>
    )
}