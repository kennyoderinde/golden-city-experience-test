
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GoldenCityLogo from '../../Assets/Sample Logo.svg'
import { FaAlignJustify, FaTimes } from "react-icons/fa";



const Navbar = () => {

  const [activeItem, setActiveItem] = useState('/')

  const [nav, setNav] = useState(false)

  


  const navItems = [
    { id: 1, label: 'Home', path: '/' },
    { id: 2, label: 'Our Projects', path: '/our-projects' },
    { id: 3, label: 'About Us', path: '/about-us' },
    { id: 4, label: 'Contact Us', path: '/contact-us' },
   
  ];


  const handleOptionClick = (path) => {
    setActiveItem(path)
  }

  return (
    <>
    <header class='bg-white fixed top-0 z-20 flex justify-center w-full sm:h-[100px] border-b border-black px-4'>
      <div class='flex items-center sm:justify-between  sm:w-[90%] mx-auto '>
        <img src={GoldenCityLogo} alt='Golden-City' class='lg:w-[199px] md:w-48 md:h-12 sm:h-8 w-full h-full sm:p-0 p-1 sm:-ml-12 md:-ml-4'/>
        <ul className='hidden sm:flex space-x-14'>
          {navItems.map(item => (
            <li 
            key={item.id}
            onClick={() => handleOptionClick(item.path)}
            className={`cursor-pointer font-poppins whitespace-nowrap ${
              activeItem === item.path
              ? 'text-[#753FF6] font-bold font-poppins lg:text-[30px] md:text-lg'
              : 'text-[#753FF6] font-medium font-poppins lg:text-[30px]  md:text-lg'
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

      <div 
        onClick={() => setNav (!nav)} className=' z-20 cursor-pointer  ml-auto mr-4 sm:hidden flex items-center p-4 '>
          { nav ?  <FaTimes className='text-gray-600 w-12 h-12 p-2'/> : <FaAlignJustify className=' text-gray-600 w-12 h-12 p-2' />}
      </div>

      { nav && (
        <div className='flex flex-col justify-center items-center absolute top-0
        left-0 w-full h-screen bg-gradient-to-b from-white to-gray-300 text-white'>

        <img src={GoldenCityLogo} alt='Golden-City' class=' w-1/3 h-auto  p-4'/>

        {navItems.map(item => (
            <li 
            key={item.id}
            onClick={() => handleOptionClick(item.path)}
            className={`cursor-pointer font-poppins whitespace-nowrap list-none text-2xl leading-relaxed ${
              activeItem === item.path
              ? 'text-[#753FF6] font-bold font-poppins text-[30px]'
              : 'text-[#753FF6] font-medium font-poppins text-[30px]'
            }`}
            >
              <Link 
                to={item.path} 
                className=' '>
                {item.label}
              </Link>

            </li>
            ))}
        </div>
      )}
    </header>
    </>
  );
};

export default Navbar;
