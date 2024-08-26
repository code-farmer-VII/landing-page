import Image from "next/image"

const Cards =()=>{
    return(
        <div className="flex flex-col md:flex-row md:justify-evenly gap-x-11 px-10 pt-32 overflow-auto space-y-20 md:space-y-0">
            <div className="card-1 bg-red-400 flex-1 rounded-xl relative">
                <div>
                    <Image 
                        src="/images/download.jpg" 
                        alt="Description of image" 
                        width={100} 
                        height={100}
                        objectFit='cover'
                        className='card-img'
                    />
                    <p className="pt-28 pb-6 px-7 text-center">
                    Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that 
                    </p>
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
                        className='card-img'
                    />
                    <p className="pt-28 pb-6 px-7 text-center">
                    Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that 
                    </p>
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
                        className='card-img'
                    />
                    <p className="pt-28 pb-6 px-7 text-center">
                    Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that 
                    </p>
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
                        className='card-img'
                    />
                    <p className="pt-28 pb-6 px-7 text-center">
                    Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that 
                    </p>
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
                        className='card-img'
                    />
                    <p className="pt-28 pb-6 px-7 text-center">
demonstrating that He is both the Savior and the ultimate source of spiritual guidance and hope.                    </p>
                </div>
            </div>
        </div>
    )
}

export default Cards