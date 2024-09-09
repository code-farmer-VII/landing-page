"use client"
import React, { useEffect, useState } from 'react'
import All_blog_posts from '@/public/db';
import Link from 'next/link';

export default function NavBar({id}) {
    const [date, setDate ]= useState();
    const Back = "<-"

    useEffect(()=>{
        const schdule = new Date().toUTCString()
        setDate(schdule)
    })
  return (
    <div className='navBar flex bg-purple-700 flex-col md:flex-row justify-between items-center text-white space-x-6 fixed top-0 left-0 right-0 z-20'>
        <div className='back text-3xl text-center font-extrabol'>
           <Link href={"/"} >{Back} </Link>
        </div>
        <div>
            {date}
        </div>
    </div>
  )
}
