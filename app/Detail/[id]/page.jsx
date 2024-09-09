"use client"

import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { BlogContext } from '@/context/BlogContext'
import NavBar from '../../../components/NavBar'
import All_blog_posts from '@/public/db'
import Image from 'next/image'
import Coments from '@/components/coments'
import MessageComment from '@/components/Message'
export default function page({params}) {
    const id = params.id
      const DetailPost = All_blog_posts.filter(post=>
           post.id == id
      )[0]






  return (
    <div className=''>
      <NavBar id={id} />
      <div className='flex flex-col md:flex-row justify-center items-center space-x-10 pb-16 '>
        <div className=' pt-32 md:self-start inline pl-12 '>
          <Image 
          src={DetailPost.img}
          width={300} 
          height={300}
          objectFit='cover'
          className='rounded-[50%] name'
          />
        </div>
        <div className='flex-1 overflow-auto pt-20 pr-12 overflow-x-auto inline-block' >
          <h1 className='text-center text-5xl py-6 font-extrabold'>{DetailPost.title}</h1>
          <div className='text-justify text-gray-700'>
          {DetailPost.description}
          Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating thatlife, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that
          </div>
          <MessageComment />
           </div>
      </div>
      <Coments />
    </div>
  )
}
