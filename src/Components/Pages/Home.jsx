import React from 'react'
import TextAnimate from '../TextAnimate/TextAnimate'
import TextDisplay from '../TextDisplay/TextDisplay'
import TextDisplay2 from '../TextDisplay/TextDisplay2'
import TextDisplay3 from '../TextDisplay/textDisplay3'
import SocialIcon from '../SocialIcon/SocialIcon'




const Home = () => {
    return (
        <div>
            <div className="w-screen h-screen flex flex-col items-center justify-center bg-customBlack">
                <h1 className='text-customBlue text-6xl font-bold font-font30'>Sylvain<span className='text-customWhite text-6xl font-font14'> Martel</span></h1>

                <div>
                    <TextAnimate />
                </div>
                <div className='overflow-hidden'>
                    <TextDisplay />
                </div>
                <div className='overflow-hidden'>
                    <TextDisplay2 />
                </div>
                <div className='overflow-hidden'>
                    <TextDisplay3 />
                </div>
                <div>
                    <SocialIcon />
                </div>
            </div>
        </div>
    )
}

export default Home