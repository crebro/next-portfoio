import React from 'react'
import Hero from './widgets/Hero'
import Navigation from './widgets/Navigation'

function IntroductionSection() {
    return (
        <div style={{clipPath: "polygon(0 0, 100% 0, 100% 90%, 0 100%)"}} className='pt-10 pb-20 bg-gradient-to-br from-[#5E51CE] to-[#306CD1] w-screen text-white flex flex-col items-center'>
            <Navigation />
            <Hero />
        </div>
    )
}

export default IntroductionSection
