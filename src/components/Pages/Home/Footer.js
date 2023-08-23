import React from 'react'
import GoldenCityLogo from '../../Assets/Sample Logo.svg'
import LinkedIn from '../../Assets/linkedin.svg'
import Twitter from '../../Assets/twitter.svg'
import Facebook from '../../Assets/facebook.svg'
import Instagram from '../../Assets/instagram.svg'

const Footer = () => {
  return (
    <>
      <div className='md:mt-0 mt-16'>
        <div className='md:flex  mx-auto  md:w-full w-full lg:space-x-48 md:space-x-16 mb-7 md:flex-none md:flex-row flex flex-col justify-center'>
          <img src={GoldenCityLogo} alt='Golden-City' className='md:w-[199px] md:h-8 md:ml-14 w-auto h-auto md:px-0 px-24   '/>
          <div className=' md:w-full w-10/12 font-poppins font-bold lg:text-4xl md:text-2xl text-lg text-[#753FF6] md:flex flex mx-auto lg:space-x-32 md:space-x-10 space-x-6 md:mt-0 mt-6  '>
            <p className= ''>Contact us</p>
            <p className= ''>Blog</p> 
            <p className= ''>Testimonials</p>
          </div>
        </div>
      </div>

    <div className='flex justify-center'>
    <div className='hidden md:flex md:w-[92%] border-b border-gray-500 mb-10 justify-center'></div>
    </div>
    <div className='flex flex-col justify-center items-center space-y-8 mb-24'>
        <div className=' w-auto h-70px bg-[#753FF6] md:px-6 md:py-4 px-4 py-3 flex space-x-6 justify-center items-center rounded-full'>
            <img src={LinkedIn} alt='' className=' md:w-11 w-8 md:h-11 h-8  '/>
            <img src={Twitter} alt='' className=' md:w-11 w-8 md:h-11 h-8 '/>
            <img src={Instagram} alt='' className=' md:w-11 w-8 md:h-11  h-8 '/>
            <img src={Facebook} alt='' className=' md:w-11 w-8 md:h-11  h-8 '/>

        </div>
        <span>© 2022. All rights reserved</span>

    </div>
    
    </>
   
  )
}

export default Footer