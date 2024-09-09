"use client"
import { useState } from "react";
import SideBar from "./SideBar";
import Link from "next/link";

const Header=()=>{
    const [display, setDisplay] = useState(false)
    
    return(
        <div>
            <div className="Header bg-purple-700 flex justify-between items-center fixed right-0 left-0 z-30">
                
                <div className="logo  flex-1 py-3 pl-4 flex justify-between">
                    <div className="text-white cursor-pointer text-5xl font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">A_A</div>  
                    <div className="align-middle pt-4 w-[50%] md:w-[60%] hidden md:flex md:pl-16"><input type="text" className="rounded-s-lg outline-none h-8 bg-slate-200 px-3 flex-1 w-[80%] hover:bg-white " placeholder="Search ..."/><button className="text-white w-[20%] h-8 outline-none border-white border rounded-e-lg bg-purple-600 hover:bg-purple-800">search</button></div>               
                    <div className="md:hidden pr-6"><button onClick={(prev)=>{setDisplay(prev=>!prev)}} className="cursor-pointer text-5xl text-white hover:font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">=</button></div>                
                </div>  
                <div className="hidden md:flex-1 md:flex space-x-10 justify-end pr-9 ">
                    <a className="cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out " href="#home">Home</a>
                    <a className="cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out" href="#blog">Blog</a>
                    <a className="cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out" href="#aboutUs">About Us</a>
                    <a className="cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out" href="#ContactUs">Contact Us</a>
                    <p className="cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out"><Link href={"/auth"}>login/signUp</Link></p>
                </div>      
            </div>
            <div>
               {
                display &&
                    <div>
                         <SideBar setDisplay={setDisplay} />
                    </div>
}
            </div>
        </div>

    )
}

export default Header;