import Image from 'next/image'; 

const Introduction = () => {
    return (
        <div className="introduction flex h-dvh items-center justify-around">
            <div className="left-side flex-1 flex flex-col justify-center items-center">
                <div className='text-xl md:text-xl lg:text-3xl'>WELCOME TO ORTODOX RELIGEN </div>
                <div className='text-center'>
             Jesus Christ is the divine Son of God, whose teachings and sacrifice have profoundly transformed the world. As the embodiment of God’s love and grace, Jesus offered Himself as a means of redemption and salvation for humanity. Through His life, death, and resurrection, He provided a path to eternal life and reconciled humanity with God, demonstrating that He is both the Savior and the ultimate source of spiritual guidance and hope.
                </div>
            </div>
            <div className="right-side flex-1  flex-col items-center justify-center ">
                <div className='flex-1'>
                <Image 
                    src="/images/download.jpg" 
                    alt="Description of image" 
                    width={300} 
                    height={300}
                    objectFit='cover'
                    className='img'
                /> 
                </div>
            </div>
        </div>
    );
};

export default Introduction;
