import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

function DesignInspirations() {
    const [showInspirations, setShowInspirations] = useState(false);

    return (
        <div className='flex items-center w-[50%] justify-between'>
            <div onClick={() => setShowInspirations(!showInspirations)} className='flex items-center'>
                <div className='text-sm underline-animation hover:text-gray-700 transition duration-150'> Design Inspirations </div> &nbsp; <span> <AiOutlineArrowRight /> </span> 
            </div>
            {
                showInspirations ? 
                <> <span className='text-xs'> <Link href="https://www.saviomartin.com" ><a target="_blank" rel="noreferrer"> saviomartin.com </a></Link></span>
                <span className='text-xs'> <Link href="https://www.leerob.io" ><a target="_blank" rel="noreferrer"> leerob.io </a></Link></span> </> : ""
            }

        </div>
    )
}

export default DesignInspirations
