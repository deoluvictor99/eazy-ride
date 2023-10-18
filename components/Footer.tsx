import React from 'react'
import { footerLinks } from '@/constants'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <footer className='bg-primary w-full hover:text-main '>
            <div className='md:flex justify-between p-8 '>
                <div className='w-[50%] space-y-2 mb-8'>
                    <Link href={"/"} className='flex gap-2 items-center'>
                            <Image src={"/car-logo.svg"} alt='logo' width={100} height={100} className='w-[1.5rem] lg:w-[2.2rem]'/>
                            <span className='text-light text-[1.1rem] font-bold lg:text-[1.3rem]'>Eazy Ride</span>
                    </Link>
                    <p className='text-base text-gray-200'>Eazy Ride 2023<br />All rights reserved &copy;  </p>
                </div>
                <div className=' lg:w-[50%] flex flex-wrap gap-20 md:justify-between'>
                    {footerLinks.map(link => (
                        <div key={link.title} className='flex flex-col gap-6 text-base text-light'>
                            <h3 className='font-bold '>{link.title}</h3>
                            {
                                link.links.map((item) => (
                                    <Link key={item.title} href={item.url} className='hover:text-main' >
                                        {item.title}
                                    </Link>
                                ))
                            }
                        </div>
                    ))}
                </div>
            </div>
            <div className='border-t whitespace-nowrap gap-4  flex-wrap p-8 text-light flex justify-between'>
                <Link href={"/"} className='hover:border-b border-light' >
                    @2023 Eazy Ride. All rights reserved
                </Link>
                <div className='flex gap-6'>
                    <Link href="/" className='hover:border-b border-light' >
                        Privacy policy
                    </Link>
                    <Link href={"/"} className='hover:border-b border-light'>
                        Terms of use
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
