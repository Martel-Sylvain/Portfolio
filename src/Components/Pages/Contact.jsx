import React from 'react'
import EmailButton from '../EmailButton/EmailButton'
import SocialIcon from '../SocialIcon/SocialIcon'



const Contact = () => {
    return (
        <div className="w-screen h-screen flex items-start justify-start flex-col bg-customBlack">
            <div className='mt-48 mx-10 mb-10 text-customWhite'>
                <h2 className='flex flex-col text-9xl font-font30'><span>Want to <span className='font-font15'>discuss</span> </span>
                    <span className='font-font2 text-7xl'>a new <span className='text-customBlue text-9xl font-font14'>project</span></span>
                    <span className='text-customBlue font-font25'>?</span></h2>
            </div>
            <div className='ml-24 mt-10'>
                <EmailButton />
            </div>
            <div className='text-3xl text-customWhite font-font23 mt-60 mx-10 leading-loose'>
                <p>"Thank <span className='font-font30 text-customBlue'>you</span> for visiting my <span className='underline underline-offset-4'>portfolio!</span> I hope <span className='font-font30 text-customBlue'>you</span>  found the projects <span className='font-font15'>inspiring</span> and <span className='font-font15'>relevant</span>. Should <span className='font-font30 text-customBlue'>you</span>  have any queries or require further information, please feel free to contact me.</p>
            </div>
            <div className='text-4xl text-customWhite font-font23 mx-10 leading-loose'>
                <p>Let's create something <span className='font-font15'>great</span> <span className='text-customBlue'>together</span> !"</p>
            </div>
            <div>
                <SocialIcon />
            </div>
        </div>

    )
}

export default Contact