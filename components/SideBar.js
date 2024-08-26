"use client"

const SideBar=({setDisplay})=>{
    return(
            <div className="md:hidden want bg-black flex flex-col w-[30%] pr-6 py-3 absolute right-0 top-0 items-center h-[100%] space-y-20 rounded-tl-xl border border-white">
                <div className="flex-1 space-y-24">
                    <button onClick={() => setDisplay(prev => !prev)} className="  cursor-pointer text-orange-500 font-extrabold hover:text-white text-3xl transition-all duration-500 ease-in-out">X</button>
                    <div className="flex flex-col space-y-10 items-start ">
                    <a className="text-start cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">Home</a>
                    <a className="text-start  cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">Save</a>
                    <a className="text-start  cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">Happines</a>
                    <a className="text-start  cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">Love</a>
                    <a className="text-start  cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">Trust</a>
                    </div>
                </div>
                <div className=" cursor-pointer text-white font-extrabold hover:text-orange-500 transition-all duration-500 ease-in-out">
                    Senbet
                </div>
            </div>         
                
    )
}

export default SideBar;