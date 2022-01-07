import React from 'react'

function ProjectItem({image, name, description}) {
    return (
        <div className='bg-[#C5C05B] p-4 rounded-l w-full mx-4 transition duration-150 hover:scale-110 cursor-pointer'>
            <img className='rounded-lg w-full object-cover' src={image} /> <br/>
            <div className='font-bold text-lg'> {name} </div>
            <div className='font-light text-sm'> {description} </div>
        </div>
    )
}

export default ProjectItem
