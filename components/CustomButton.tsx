import { customButtonProps } from '@/types'
import React from 'react'

const CustomButton = ({title, containerStyle, handleClick, btnType}: customButtonProps) => {
    return (
        <button
            disabled={false}
            className={`${containerStyle} transition-all duration-300`}
            onClick={handleClick}
            type={btnType || "button"}
        >
            <span className='flex justify-between'>
                {title}
            </span>
        </button>
    )
}

export default CustomButton
