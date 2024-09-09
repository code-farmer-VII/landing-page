import MessageComment from '@/components/Message'
import React, { useState } from 'react'

export default function Coments() {
  const [replay,setReplay] = useState(false)

  return (
    <div>
        <h1 className='comment-area font-bold text-5xl text-gray-700 px-7'>Comments</h1>
        <div className='comment-box'>
            <div className='comment-border border-s-4 border-purple-700 relative'>
                <h1 className={`comment-auther comment-auther-${Math.floor(Math.random()*4)} cursor-pointer bg-red-700`}>T</h1>
                <div className='comment-section'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam dolore? Hic beatae voluptatem natus cupiditate, laborum sed accusamus. Corporis quas vel et esse eligendi possimus tenetur voluptates nobis rem.</p>
                <div className='flex justify-between w-[50%] like'>
                    <p className=''>like</p>
                    <p className=''>unlike</p>
                    <p className='cursor-pointer hover:scale-105 transition-all ease-in-out' onClick={()=>setReplay(!replay)}>replay</p>
                </div>
                {
                    replay && <MessageComment />
                }
                </div>
            </div>
        </div>
        <div className='comment-box'>
            <div className='comment-border border-s-4 border-purple-700 relative'>
                <h1 className={`comment-auther comment-auther-${Math.floor(Math.random()*4)} cursor-pointer bg-red-700`}>T</h1>
                <div className='comment-section'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ipsam dolore? Hic beatae voluptatem natus cupiditate, laborum sed accusamus. Corporis quas vel et esse eligendi possimus tenetur voluptates nobis rem.</p>
                <div className='flex justify-between w-[50%] like'>
                    <p>like</p>
                    <p>unlike</p>
                    <p>replay</p>
                </div>
                {
                    replay && <MessageComment />
                }
                </div>
            </div>
        </div>
    </div>
  )
}
