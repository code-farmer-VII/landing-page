import React from 'react'
import Image from 'next/image';

const About=() => {
  return (
        <div id='aboutUs' className="about px-6 introduction flex flex-col md:flex-row  items-center justify-around overflow-hidden">
        <div className="right-side flex-1 flex flex-col items-center gap-4">
        <h1 className='text-start self-start text-3xl font-bold my-10'>About Us</h1>
                <div className='flex-1 '>
                <Image 
                    src="/images/download.jpg" 
                    alt="Description of image" 
                    width={300} 
                    height={300}
                    objectFit='cover'
                    className='rounded-[50%]'
                /> 
                </div>
            </div>
            <div className="left-side flex-1 flex  flex-col justify-center items-center">
                <div className='text-xl md:text-xl lg:text-3xl font-bold '>WELCOME TO ORTODOX RELIGEN </div>
                <div className='text-center px-10'>
                <span className='font-bold text-xl text-orange-700'>Jesus Christ</span> is the divine Son of God, whose teachings and sacrifice have profoundly transformed the world. As the embodiment of God’s love and grace, Jesus offered Himself as a means of redemption and salvation for humanity. Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that He is both the Savior and the ultimate source of spiritual guidance and hope.
                </div>
            </div>

        </div>
  )
}

export default About;
