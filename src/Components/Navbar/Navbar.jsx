import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import hamburger from '../../assets/img/Icones/Hamburger.svg';
import hamburgerHovered from '../../assets/img/Icones/HamburgerY.svg';
import cross from '../../assets/img/Icones/Cross.svg';
import crossHovered from '../../assets/img/Icones/CrossY.svg';
import Marquee from '../Marquee/Marquee';
import HoveredText from '../HoveredText/HoveredText';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isHoveredHamburger, setIsHoveredHamburger] = useState(false);

    const getActiveLinkColor = (isActive) => `${isActive ? "text-customBlue" : "text-customWhite"} lg:text-xl xl:text-2xl font-font1 drop-shadow-custom hover:text-customBlue transition duration-300 py-2 md:py-0`;
    const getHamburgerIcon = (isHoveredHamburger) => isHoveredHamburger ? hamburgerHovered : hamburger;
    const getCrossIcon = (isHoveredHamburger) => isHoveredHamburger ? crossHovered : cross;

    return (
        <nav className='fixed top-0 w-full flex justify-between items-center z-50 border-b-2 border-customWhite'>
            <div className={`${showMenu ? "flex" : "hidden"} flex-col items-center w-full absolute top-full py-2 md:flex md:relative md:flex-row md:pb-2 md:justify-around`}>
                <NavLink to="/" className={({ isActive }) => getActiveLinkColor(isActive)}>
                    {({ isActive }) => <HoveredText text="Home" isActive={isActive} />}
                </NavLink>
                <Marquee />
                <NavLink to="/Projects" className={({ isActive }) => getActiveLinkColor(isActive)}>
                    {({ isActive }) => <HoveredText text="Projects" isActive={isActive} />}
                </NavLink>
                <NavLink to="/About" className={({ isActive }) => getActiveLinkColor(isActive)}>
                    {({ isActive }) => <HoveredText text="About" isActive={isActive} />}
                </NavLink>
                <NavLink to="/Contact" className={({ isActive }) => getActiveLinkColor(isActive)}>
                    {({ isActive }) => <HoveredText text="Contact" isActive={isActive} />}
                </NavLink>
            </div>
            <button onClick={() => setShowMenu(!showMenu)} className='ml-auto md:hidden' onMouseEnter={() => setIsHoveredHamburger(true)}
                onMouseLeave={() => setIsHoveredHamburger(false)} >
                <img className='w-10 sm:w-12 p-2' src={showMenu ? getCrossIcon(isHoveredHamburger) : getHamburgerIcon(isHoveredHamburger)} alt={showMenu ? "Hide Menu" : "Show Menu"} />
            </button>
        </nav>
    );
}

export default Navbar;





