import React from 'react'
import TextAnimate from '../TextAnimate/TextAnimate'
import HoveredText from '../HoveredText/HoveredText'
import Marquee from '../Marquee/Marquee'


const Home = () => {
    return (
        <div>
            <div className="w-screen h-screen flex flex-col items-center justify-center bg-customBlack">
                <h1 className='text-customBlue text-6xl font-bold font-font1'>Sylvain<span className='text-customWhite text-6xl font-font1'> Martel</span></h1>

                <div>
                    <TextAnimate />
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Home