import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CustomButton } from '.'

const Navbar = () => {
    return (
        <header className='w-full fixed z-10 top-0'>
            <nav className='flex justify-between mx-auto p-4 lg:px-10 bg-primary opacity-90'>
                <Link href={"/"} className='flex gap-2 items-center'>
                    <Image src={"/car-logo.svg"} alt='logo' width={100} height={100} className='w-[1.5rem] lg:w-[2.2rem]'/>
                    <span className='text-light font-bold text-[1.1rem] lg:text-[1.3rem]'>Eazy Ride</span>
                </Link>
                <CustomButton
                    title='Sign In'
                    btnType = "button"
                    containerStyle='text-main hover:text-white lg:border border-main lg:hover:bg-main lg:rounded-lg lg:px-4 lg:py-2'
                />
            </nav>
        </header>
    )
}

export default Navbar
