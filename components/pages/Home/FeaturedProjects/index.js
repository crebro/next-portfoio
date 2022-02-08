import React from 'react'
import ProjectItem from './widgets/ProjectItem'
import homeStyles from "../../../../styles/Home.module.css";
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';

function FeaturedProjects() {
    return (
        <div className={`${homeStyles['parallelogram']} py-32 bg-[#EDEAA3] -translate-y-[70px] flex items-center justify-center`}>
            <div data-aos={'fade-up'}  className='w-[80%] xl:w-[55%] flex-col justify-between items-center'> 
                <div className='text-3xl font-extrabold'> Featured Works </div>
                <div> Here are some projects of mine that you may want to view</div>
                <div className='w-[100%] xl:w-[90%] mt-4 flex flex-col md:flex-row justify-center items-center'>
                    <ProjectItem link={'https://github.com/crebro/chesspgn-gif'} image={'/assets/images/projects/pgntogif.JPG'} name={'Pgn to Gif Converter'} description={'Convert the pgn of your chess games into gif!'} />
                    <ProjectItem link={'https://github.com/crebro/discoforum'} image={'/assets/images/projects/discoforum.JPG'} name={'DiscoForum Bot'} description={'Answer and Ask Questions on a discord server!'} />
                    <ProjectItem link={'https://github.com/crebro/brainstorm'} image={'/assets/images/projects/brainstorm.JPG'} name={'Brainstorm App'} description={'Play a bunch of mind games and improve your skills'} />
                </div>
                <Link href={"https://github.com/crebro"}>
                    <a target="_blank" rel="noreferrer">
                        <div className='flex items-center mt-4'>
                            <div className='text-sm underline-animation hover:text-gray-700 transition duration-150'> More Projects </div> &nbsp; <span> <AiOutlineArrowRight /> </span> 
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default FeaturedProjects
