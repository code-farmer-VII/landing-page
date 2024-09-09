"use client"
import React, { useState } from 'react'
import Image from 'next/image'

export default function Authentication() {
    const [auth, setAuth] = useState("Sign in")
  return (
          <div className='auth flex justify-center flex-col space-y-6 h-dvh items-center relative'>
                            <Image src={require("../../public/images/flower-top-right.png")} width={200} height={200} className='absolute top-0 right-0 z-[-1]'/>
                <div className={`border-2 shadow-sm p-[5%] rounded-xl space-y-6 ${auth ==="Sign in" ? ("bg-gray-100"):("bg-white")}`}>
                    <div className='flex justify-between border w-full'>
                        <h1 onClick={()=>setAuth("Sign in")} className={`cursor-pointer border-e-2 flex-1 px-4 ${auth ==="Sign in" ? ("bg-blue-100"):("bg-white")} text-xl py-2`}>Sign in</h1>
                        <h1 onClick={()=>setAuth("Sign out")} className={`cursor-pointer border-e-2 flex-1 px-4  ${auth ==="Sign out" ? ("bg-blue-100"):("bg-white")} text-xl py-2`}>Sign out</h1>
                    </div>
                    <div className='flex justify-center gap-10'>
                        <form action="" className='flex flex-col gap-6'>
                            {auth ==="Sign out" && <input type="text" placeholder='Enter Username' className='px-4 py-1 rounded outline-blue-200 border' />
                            }
                                <input type="Email" placeholder='Enter Email' className='px-4 py-1 rounded outline-blue-200'/>
                                <input type="password" placeholder='Enter password' className='px-4 py-1 rounded outline-blue-200'/>
                                <button className='flex-1 bg-blue-600 ring-1 ring-offset-1 ring-blue-700 rounded text-white py-1 hover:bg-blue-500'>{auth==="Sign in" ? ("Sign in"): "Sign out"}</button>
                        </form>
                    </div>
                </div>
          </div>
  )
}
