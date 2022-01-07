import Link from 'next/link'
import React from 'react'
import DesignInspirations from './widgets/DesignInspirations'

function Footer() {
    return (
        <div style={{clipPath: "polygon(0 10%, 100% 0, 100% 100%, 0 100%)"}} className='py-20 bg-[#EDEAA3] flex items-center justify-center'>
            <div className='w-[80%] xl:w-[55%] flex-col items-center justify-center'> 
                <div className='text-3xl font-extrabold'> Links </div>
                <div> Get in touch with me, here are some links to my socials </div>
                <div className='flex mt-4 justify-around'>
                    <div>
                        <Link href={"https://www.twitch.tv/kodingdesires"}><a target={"_blank"} rel={'noreferrer'}> <div className='text-sm my-2 underline-animation'> Twitch </div> </a></Link> <br/>
                        <Link href={"https://www.youtube.com/channel/UCliXIi69MBphGgsxN693p0g"}><a target={"_blank"} rel={'noreferrer'}> <div className='text-sm my-2 underline-animation'> Youtube </div> </a></Link> <br/>
                        <Link href={"https://twitter.com/duwalkreation"}><a target={"_blank"} rel={'noreferrer'}> <div className='text-sm my-2 underline-animation'> Twitter </div> </a></Link> <br/>
                        <div className='text-sm my-2 underline-animation'> Blogs Coming soon </div> <br />
                    </div>
                    <div>

                        <Link href={"https://github.com/crebro"}><a target={"_blank"} rel={'noreferrer'}> <div className='text-sm my-2 underline-animation'> Github </div> </a></Link> <br/>
                        <Link href={"mailto:creationduwal@gmail.com"}><a target={"_blank"} rel={'noreferrer'}> <div className='text-sm my-2 underline-animation'> Email </div> </a></Link> <br/>
                        <Link href={"https://ko-fi.com/duwalkreation"}><a target={"_blank"} rel={'noreferrer'}> <div className='text-sm my-2 underline-animation'> Support ME </div> </a></Link> <br/>
                        <Link href={"https://github.com/crebro/next-portfolio"}><a target={"_blank"} rel={'noreferrer'}> <div className='text-sm my-2 underline-animation'> Get this Template </div> </a></Link> <br/>
                    </div>
                    <div>
                        <div className='text-sm my-2 underline-animation'> Get My C.V. </div>
                    </div>
                </div>

                <div className='w-1/2 mt-4 bg-gray-700 h-0.5' />
                <div className='text-sm mt-4'>
                    Built by <span className='underline'> Kreation Duwal </span> using <span className='underline'> Next.js </span> <br/>
                    <div className='font-bold'> Feel free to copy and change </div>
                </div>

                <div className='mt-4'>
                    <DesignInspirations />                
                </div>

            </div>
        </div>
    )
}

export default Footer
