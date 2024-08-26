"use client"
import { useState } from "react";
import SideBar from "./SideBar";

const Header=()=>{
    const [display, setDisplay] = useState(false)
    
    return(
        <div>
            <div className="Header bg-black flex justify-between items-center">
                <div className="logo  flex-1 py-3 pl-4 flex justify-between">
                    <div className="text-white cursor-pointer text-5xl font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">jesus</div>                
                    <div className="md:hidden pr-6"><button onClick={(prev)=>{setDisplay(prev=>!prev)}} className="cursor-pointer text-5xl text-white hover:font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">=</button></div>                
                </div>   
                <div className="hidden md:flex-1 md:flex space-x-10 justify-end pr-9 ">
                    <a className="cursor-pointer text-white hover:font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out ">Home</a>
                    <a className="cursor-pointer text-white hover:font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">Save</a>
                    <a className="cursor-pointer text-white hover:font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">Happines</a>
                    <a className="cursor-pointer text-white hover:font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">Love</a>
                    <a className="cursor-pointer text-white hover:font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">Trust</a>
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