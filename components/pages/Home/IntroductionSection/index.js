import React from 'react'
import Hero from './widgets/Hero'
import Navigation from './widgets/Navigation'
import homeStyles from "../../../../styles/Home.module.css"

function IntroductionSection() {
    return (
        <div className={`${homeStyles['bottomSlant']} py-10 bg-gradient-to-br from-[#5E51CE] to-[#306CD1] w-screen text-white flex flex-col items-center`}>
            <Navigation />
            <Hero />
        </div>
    )
}

export default IntroductionSection
