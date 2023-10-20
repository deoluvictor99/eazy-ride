"use client"

import Image from 'next/image'
import React from 'react'
import CustomButton from './CustomButton'



const Hero = () => {    
    const handleScroll = () => {
        
    }

    return (
        <main>
            <div className=' mt-[4rem] lg:flex sm:p-6 max-w-screen-2xl'>
                <div className='p-4 pr-7 font-sora lg:max-w-[45%]'>
                    <h1 className='font-bold text-3xl lg:text-[3rem] lg:leading-[3.7rem] '>Get on the road with our <span className='text-[#ffcb74]'>Quick and easy</span> car rental</h1>
                    <p className='text-primary sm:text-xl lg:mt-4 '>Find the perfect car for your needs today!</p>
                    <CustomButton
                        title='Explore Cars'
                        containerStyle='text-white self-start bg-dark hover:bg-primary mt-5 sm:mt-7 lg:mt-10 rounded-lg text-sm sm:text-normal lg:text-xl px-5 py-2.5 text-center'
                        handleClick={handleScroll}
                    />
                </div>
                <div className=' '>
                    <Image src={"/hero.png"} alt='car' width={1000} height={1000} />
                </div>
            </div>
        </main>
    )
}

export default Hero
