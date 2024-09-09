"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


export default function Contact() {
    const [date, setDate] = useState();
    useEffect(()=>{
        var d = new Date();
        setDate(d.toUTCString())
    })
    
  return (
    <div id='ContactUs' className='container-contact flex flex-col md:flex-row justify-between gap-6 align-middle items-center content-center justify-items-center pb-10 '>
        <div className='left flex-1 pl-6 content-center'>
            <h1 className='text-3xl font-bold mb-6 my-10' >Contact Us</h1>
            <p className='text-center text-gray-700  mb-10 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam illo ratione recusandae maiores, quasi, minima laborum iusto dolorem, expedita dolores cupiditate quidem eum vel quam perferendis omnis voluptatum. Consectetur, similique!</p>
            <p className='text-violet-700 mb-4 italic '>apostolicanswers@gmail.com </p>
            <p className='text-violet-700 mb-4 italic '>{date}</p>
            <div className=' flex gap-4 justify-center flex-col md:flex-row items-center px-12 md:px-0'>
                <div className='card-2 bg-white p-4 rounded shadow-lg'>
                    <h4 className='text-center py-4 '>
                    Question & Answers
                    </h4>
                    <p className='text-sm text-gray-400 hover:text-gray-500 cursor-pointer '>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis enim sint ratione! Autem ratione, perspiciatis qui cum officiis fuga a eos assumenda, est rerum velit asperiores nemo minus aut eius!
                    </p>
                </div>
                <div className='card-2 bg-white p-4 rounded shadow-lg'>
                    <h4 className='text-center py-4 '>
                    Question & Answers
                    </h4>
                    <p className='text-sm text-gray-400 hover:text-gray-500 cursor-pointer '>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis enim sint ratione! Autem ratione, perspiciatis qui cum officiis fuga a eos assumenda, est rerum velit asperiores nemo minus aut eius!
                    </p>
                </div>
                <div className='card-2 bg-white p-4 rounded shadow-lg'>
                    <h4 className='text-center py-4 '>
                    Question & Answers
                    </h4>
                    <p className='text-sm text-gray-400 hover:text-gray-500 cursor-pointer '>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis enim sint ratione! Autem ratione, perspiciatis qui cum officiis fuga a eos assumenda, est rerum velit asperiores nemo minus aut eius!
                    </p>
                </div>
            </div>
            <div className='flex justify-around mt-6 gap-x-4'>
                <p className='cursor-pointer py-1 hover:ring-1 ring-offset-1 ring-black  bg-black text-white flex-1 text-center rounded '>tiktok</p>
                <p className='cursor-pointer py-1 hover:ring-1 ring-offset-1 ring-red-700   flex-1 bg-red-700 text-white text-center rounded'>Youtube</p>
                <p className='cursor-pointer py-1 hover:ring-1 ring-offset-1  ring-blue-700 flex-1 bg-blue-700 text-white text-center rounded'>Facebook</p>
                <p className='cursor-pointer py-1 hover:ring-1 ring-offset-1 ring-blue-400  flex-1 bg-blue-400 text-center text-white rounded'>telegram</p>

            </div>
        </div>

        <div className='right flex-1 pl-10  md:pl-0'>
            <div className='card p-6 bg-white flex-1 flex-col shadow-xl shadow-cyan-300 mx-10 rounded-lg w-[70%] relative'>
                <h1 className='text-2xl font-bold pb-6 text-violet-600'>Get in Touch</h1>
                <Image src={require("../public/images/flower-top-right.png")} width={100} height={100} className='absolute top-0 right-0 '/>
                <p className='text-center font-medium italic text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <input type="text" className='border w-full mt-4 rounded py-2 px-2 outline-slate-200 placeholder:italic' placeholder='Full Name ...'/>
                <input type="text" className='border w-full mt-4 rounded py-2 px-2 outline-slate-200 placeholder:italic ' placeholder='Phone ...'/>
                <input type="text" className='border w-full mt-4 rounded py-2 px-2 outline-slate-200 placeholder:italic' placeholder='Email ...'/>
                <textarea name="" id="" className='border w-full mt-4 rounded py-2 px-2 outline-slate-200 placeholder:italic' placeholder='Message ...'></textarea>
                <button className='bg-cyan-400 hover:bg-cyan-500 text-white w-full rounded mt-4 py-1 text-lg ring-2 ring-offset-2 ring-cyan-400'>Submit</button>
                <p className='text-center pt-5'> <span className='text-gray-300'>Lorem ipsum dolor sit amet consectetur</span> adipisicing elit.</p>
                <p className='text-center'>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>

    </div>
  )
}
