import React from 'react'
import SocialIcon from '../SocialIcon/SocialIcon'


const About = () => {
    return (
        <div className="w-screen h-screen flex items-center justify-center bg-customBlack ">
            <div className='mx-10 text-customWhite text-6xl font-font26 leading-relaxed'>
                <p><span className='text-7xl font-font10'>Hi!
                </span> I'm <span className='text-customBlue font-font13 text-8xl'>Sylvain</span>,</p>
                <p className=''> a passionate <span className='underline underline-offset-8'>web developer</span>, specialized in creating <span className='font-font15'>dynamic</span> and <span className='font-font15'>aesthetically</span> pleasing websites, with a strong focus on user experience.</p>
                <p>Discover how I can <span className='font-font15'>transform</span> <span className="text-customBlue">your</span> vision into <span className='font-font30'>digital reality</span>.</p>

            </div>
            <SocialIcon />
        </div>
    )
}

export default About