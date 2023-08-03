
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoldenCityLogo from '../../Assets/Sample Logo.svg'


const Navbar = () => {

  const [activeItem, setActiveItem] = useState('/')
  


  const navItems = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Our Projects', path: '/our-projects' },
    { id: 3, label: 'About Us', path: '/about-us' },
    { id: 4, label: 'Contact Us', path: '/contact-us' },
   
  ];


  const handleOptionClick = (path) => {
    setActiveItem(path)
  }

  // md:space-x-[38rem]
  return (
    <>
    <div class='fixed top-0 z-20 flex justify-center w-full'>
      <div class='bg-white flex w-full max-w-[1680px] h-[100px] border-b border-black items-center '>
      <img src={GoldenCityLogo} alt='Golden-City' class='w-[199px] h-8 md:ml-14'/>
        <ul className='flex space-x-14'>
          {navItems.map(item => (
            <li 
            key={item.id}
            onClick={() => handleOptionClick(item.path)}
            className={`cursor-pointer font-poppins whitespace-nowrap ${
              activeItem === item.path
              ? 'text-[#753FF6] font-bold font-poppins text-[30px]'
              : ' text-[#753FF6] font-medium font-poppins text-[30px]'
            }`}
            >
            <Link 
              to={item.path} 
              className=' '>
              {item.label}
            </Link>

            </li>
          ))}
        </ul>
    </div>
    </div>
    </>
  );
};

export default Navbar;
