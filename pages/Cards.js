import Image from "next/image"
import All_blog_posts from "@/public/db"
import Card from "./Card"

const Cards =()=>{
    return(

        <div className="flex flex-col">
            {/* <div className="row-1 flex flex-col md:flex-row gap-x-11 gap-y-28 justify-evenly items-center mt-40 px-12">
                <div className="card-1 bg-red-400 flex-1 rounded-xl relative">
                <div>
                    <Image 
                        src="/images/download.jpg" 
                        alt="Description of image" 
                        width={100} 
                        height={100}
                        objectFit='cover'
                        className='absolute top-[-35%] rounded-[50%] hover:scale-y-105 transition-all ease-in-out cursor-pointer'
                    />
                    <h1 className="text-center">ORTODOX RELIGEN</h1>
                    <p className="pt-20 pb-10 px-7 text-center">
                    Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that 
                    </p>

                    <p className="text-right pr-3 pb-2 text-gray-600 hover:text-black cursor-pointer">Read more ...</p>
                </div>
                </div>

                <div className="card-1 bg-red-400 flex-1 rounded-xl relative">
                    <div>
                        <Image 
                            src="/images/download.jpg" 
                            alt="Description of image" 
                            width={100} 
                            height={100}
                            objectFit='cover'
                            className='absolute top-[-35%] rounded-[50%] hover:scale-y-105 transition-all ease-in-out cursor-pointer'
                        />
                        <h1 className="text-center">ORTODOX RELIGEN</h1>
                        <p className="pt-20 pb-10 px-7 text-center">
                        Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that 
                        </p>
                        <p className="text-right pr-3 pb-2 text-gray-600 hover:text-black cursor-pointer">Read more ...</p>

                    </div>
                </div>

                <div className="card-1 bg-red-400 flex-1 rounded-xl relative">
                    <div>
                        <Image 
                            src="/images/download.jpg" 
                            alt="Description of image" 
                            width={100} 
                            height={100}
                            objectFit='cover'
                            className='absolute top-[-35%] rounded-[50%] hover:scale-y-105 transition-all ease-in-out cursor-pointer'
                        />
                        <h1 className="text-center">ORTODOX RELIGEN</h1>
                        <p className="pt-20 pb-10 px-7 text-center">
                        Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that 
                        </p>
                        <p className="text-right pr-3 pb-2 text-gray-600 hover:text-black cursor-pointer">Read more ...</p>

                    </div>
                </div>
            </div>

            <div className="row-2 flex flex-col md:flex-row gap-x-11 gap-y-28 justify-center items-center mt-40 px-12 md:px-[15%]">

                <div className="card-1 bg-red-400 flex-1 rounded-xl relative">
                    <div>
                        <Image 
                            src="/images/download.jpg" 
                            alt="Description of image" 
                            width={100} 
                            height={100}
                            objectFit='cover'
                            className='absolute top-[-35%] rounded-[50%] hover:scale-y-105 transition-all ease-in-out cursor-pointer'
                        />
                        <h1 className="text-center">ORTODOX RELIGEN</h1>
                        <p className="pt-20 pb-10 px-7 text-center">
                        Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that 
                        </p>
                        <p className="text-right pr-3 pb-2 text-gray-600 hover:text-black cursor-pointer">Read more ...</p>
                    </div>
                </div>

                <div className="card-1 bg-red-400 flex-1 rounded-xl relative">
                    <div>
                        <Image 
                            src="/images/download.jpg" 
                            alt="Description of image" 
                            width={100} 
                            height={100}
                            objectFit='cover'
                            className='absolute top-[-35%] rounded-[50%] hover:scale-y-105 transition-all ease-in-out cursor-pointer'
                        />
                        <h1 className="text-center">ORTODOX RELIGEN</h1>
                        <p className="pt-20 pb-10 px-7 text-center">
                        Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that 
                        </p>
                        <p className="text-right pr-3 pb-2 text-gray-600 hover:text-black cursor-pointer">Read more ...</p>
                    </div>
                </div>
            </div> */}
            <div className="text-center text-3xl font-bold pt-5">FIVE PILARS OF CHURCH </div>
            <div  className="row-1 flex flex-col md:flex-row gap-x-11 gap-y-28 justify-evenly items-center mt-40 px-12">

            {
                All_blog_posts.map((post,index)=>{
                    return(
                            index < 3 && (
                                    <Card key={index} title={post.title} image={post.img} description={post.description}/> 
                            )
                        )                    
                })
            }
            </div>
            <div  className="row-2 flex flex-col md:flex-row gap-x-11 gap-y-28 justify-center items-center mt-40 px-12 md:px-[15%]">
              { 
                All_blog_posts.map((post,index)=>{
                    return(
                        index > 3 && index < 6) && (
                            <Card key={index} title={post.title} image={post.img} description={post.description}/>    
                    )
                                            
                })
            }
             </div>
        
    </div> 


    )
}

export default Cards