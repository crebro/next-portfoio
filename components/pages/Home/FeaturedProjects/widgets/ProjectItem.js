import Link from 'next/link'
import React from 'react'

function ProjectItem({link, image, name, description}) {
    return (
        <div className='bg-[#C5C05B] p-4 my-2 rounded-lg w-[90%] sm:w-[50%] md:w-[60%] lg:w-full xl:w-80 mx-4 transition duration-150 hover:scale-110 cursor-pointer'>
            <Link href={link}>
                <a target="_blank" rel="noreferrer">
                    <div className=''>
                        <img className='rounded-lg w-full object-cover aspect-square' src={image} /> <br/>
                        <div className='font-bold text-lg'> {name} </div>
                        <div className='font-light text-sm'> {description} </div>
                    </div>
                </a>
            </Link>
        </div>
    )
}

export default ProjectItem
