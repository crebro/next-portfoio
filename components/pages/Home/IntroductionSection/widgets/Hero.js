import React from 'react'
import { AiFillGithub, AiFillYoutube } from "react-icons/ai"
import { MdOutgoingMail } from "react-icons/md"
import { FaTwitter } from "react-icons/fa"

function Hero() {
    return (
        <div className='w-[80%] xl:w-[55%] flex justify-between mt-10 items-center'>
            <div>
                <div className='font-extrabold text-5xl'> Duwal Kreation</div>
                <div className='font-semibold text-lg'> Software Developer <span className='font-normal'> and </span> Content Creator</div>
                <div className='mt-4 text-sm'> 14 year old student, developing software in public, posting development tips and hacks, and helping others grow </div>
                <div className='flex items-center mt-4'> 
                    <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> <AiFillYoutube size={30} /></div>
                    <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> <AiFillGithub size={30} /></div>
                    <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> <MdOutgoingMail size={30} /></div>
                    <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> <FaTwitter size={30} /></div>
                </div>
            </div>
            <div className='min-h-[125px] min-w-[125px] h-[125px] w-[125px] lg:h-[140px] lg:w-[140px] xl:h-[150px] xl:w-[150px]'>
                <img className='hover:cursor-pointer rounded-2xl aspect-square border-white transition duration-150 hover:scale-110 hover:-translate-y-3' src="https://avatars.githubusercontent.com/crebro" />
            </div>
        </div>
    )
}

export default Hero
