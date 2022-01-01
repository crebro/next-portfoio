import React from 'react'
import { AiFillGithub, AiFillYoutube } from "react-icons/ai"
import { MdOutgoingMail } from "react-icons/md"
import { FaTwitter } from "react-icons/fa"

function Hero() {
    return (
        <div className='w-[60%] flex justify-around mt-10 items-center'>
            <div>
                <div className='font-extrabold text-5xl'> Duwal Kreation</div>
                <div className='font-semibold text-lg'> Software Developer and Content Creator</div>
                <div className='mt-4'> Developing useful products and posting development tips and hacks, creating content for others to learn</div>
                <div className='flex items-center mt-2'> 
                    <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> <AiFillYoutube size={30} /></div>
                    <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> <AiFillGithub size={30} /></div>
                    <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> <MdOutgoingMail size={30} /></div>
                    <div className='mx-2 transition duration-150 hover:scale-110 cursor-pointer'> <FaTwitter size={30} /></div>
                </div>
            </div>
            <div>
                <img className='hover:cursor-pointer w-48 h-48 border-4 border-white rounded-full transition duration-150 hover:scale-110 hover:-translate-y-3' src="/assets/images/me.jpg" />
            </div>
        </div>
    )
}

export default Hero
