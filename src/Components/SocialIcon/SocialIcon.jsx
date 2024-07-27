import React from 'react'
import GitHubIcon from '../../assets/img/Icones/GitHub.svg';
import GitHubIconHovered from '../../assets/img/Icones/GitHubB.svg';
import InstagramIcon from '../../assets/img/Icones/Instagram.svg';
import InstagramIconHovered from '../../assets/img/Icones/InstagramB.svg';
import LinkedinIcon from '../../assets/img/Icones/Linkedin.svg';
import LinkedinIconHovered from '../../assets/img/Icones/LinkedinB.svg';



const SocialIcon = () => {
    const icons = [
        { default: GitHubIcon, hover: GitHubIconHovered, alt: 'Facebook', url: 'https://www.github.com' },
        { default: InstagramIcon, hover: InstagramIconHovered, alt: 'Instagram', url: 'https://www.instagram.com' },
        { default: LinkedinIcon, hover: LinkedinIconHovered, alt: 'Twitter', url: 'https://www.linkedin.com' },
    ]

    return (
        <div className="fixed flex flex-col right-4 bottom-20 bg-transparent z-20">
            {icons.map((icon, index) => (
                <a key={index} href={icon.url} target="_blank" rel="noopener noreferrer" className="relative group w-[20px] h-[30px] mr-[0.25vh] sm:w-[25px] sm:h-[40px] md:w-[30px] md:h-[45px] md:mr-[0.5vh] lg:w-[35px] lg:h-[55px]  ">
                    <img className="absolute inset-0 transform group-hover:opacity-0 hover:rotate-[-6deg] hover:scale-150 transition duration-300"
                        src={icon.default} alt={icon.alt} />
                    <img className="absolute inset-0 transform opacity-0 group-hover:opacity-100 hover:rotate-[-6deg] hover:scale-150 transition duration-300"
                        src={icon.hover} alt={`${icon.alt} Hover`} />
                </a>
            ))}
        </div>
    );
}

export default SocialIcon