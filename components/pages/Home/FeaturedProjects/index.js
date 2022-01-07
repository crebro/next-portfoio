import React from 'react'
import ProjectItem from './widgets/ProjectItem'

function FeaturedProjects() {
    return (
        <div style={{clipPath: "polygon(0 10%, 100% 0, 100% 90%, 0 100%)"}} className='py-20 bg-[#EDEAA3] -translate-y-[4.5rem] flex items-center justify-center'>
            <div className='w-[80%] xl:w-[55%] flex-col justify-between items-center'> 
                <div className='text-3xl font-extrabold'> Featured Works </div>
                <div> Here are some projects of mine that you may want to view</div>
                <div className='mt-4 flex justify-around items-center'>
                    <ProjectItem image={'/assets/images/projects/pgntogif.JPG'} name={'Pgn to Gif Converter'} description={'Convert the pgn of your chess games into gif!'} />
                    <ProjectItem image={'/assets/images/projects/discoforum.JPG'} name={'DiscoForum Bot'} description={'Answer and Ask Questions on a discord server!'} />
                    <ProjectItem image={'/assets/images/projects/brainstorm.JPG'} name={'Brainstorm App'} description={'Play a bunch of mind games and improve your skills'} />
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects
