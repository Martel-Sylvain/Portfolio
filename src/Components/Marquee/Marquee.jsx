import React from 'react';
import './marquee.css'

const Marquee = () => {
    return (

        <div className="flex border border-customBlue overflow-hidden w-[250px] rounded-full">
            <p className='marquee inline-block whitespace-nowrap text-white'>AVAILABLE FOR FREELANCE WORK <span className='text-customBlue'>●</span></p>
        </div>

    );
};

export default Marquee;