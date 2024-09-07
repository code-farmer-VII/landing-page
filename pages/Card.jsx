import React from "react";
import Image from "next/image";

const Card = ({title, description, image})=>{
    return(
        <div className="card-1 bg-red-400 flex-1 rounded-xl relative">
        <div>
            <Image 
                src={image} 
                alt="Description of image" 
                width={100} 
                height={100}
                objectFit='cover'
                className='absolute top-[-35%] rounded-[50%] hover:scale-y-105 transition-all ease-in-out cursor-pointer'
            />
            <h1 className="text-center">{title}</h1>
            <p className="pt-20 pb-10 px-7 text-center">
                {description}
            </p>

            <div className="flex justify-center gap-4 ">
            <p className="pl-3 text-gray-500 border-spacing-3 border-gray-400 border-2 w-[20%] rounded-xl bg-white">#Tag1</p>
            <p className="pl-3 text-gray-500 border-spacing-3 border-gray-400 border-2 w-[20%] rounded-xl bg-white">#Tag2</p>
            <p className="pl-3 text-gray-500 border-spacing-3 border-gray-400 border-2 w-[20%] rounded-xl bg-white">#Tag3</p>

            </div>
            <p className="text-right pr-3 pb-2 text-gray-600 hover:text-black cursor-pointer">Read more ...</p>
        </div>
        </div>
    )
}


export default Card;