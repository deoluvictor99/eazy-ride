"use client"

// hooks
import { useState } from 'react'

// next
import Image from 'next/image'

// types
import { carProps } from '@/types'

// components
import { CustomButton } from '.'

// utility functions
import { calculateCarRent } from '@/utils';


interface carCardProps{
    car: carProps
}



const CarCard = ({car}: carCardProps) => {
    const {city_mpg, 
            drive, 
            make, 
            model, 
            transmission,
            year
        } = car;

    const carRentPrice = calculateCarRent(city_mpg, year);

    return (
        <>
            <div className='flex flex-col p-6 justify-center items-start text-dark bg-blue-100 hover:bg-white hover:shadow-md rounded-3xl group '>
                <div className='w-full flex justify-between items-start gap-2'>
                    <h2 className='text-[1.375rem] leading-[1.625rem] font-bold capitalize'>
                        {make} {model}
                    </h2>
                </div>

                <p>
                    <span>
                    U+020A6{carRentPrice}
                    </span>
                </p>
                
            </div>
        </>
    )
}

export default CarCard
