import React, { useState } from 'react'
import HomeBgImg from '../../Assets/home-bg-img.svg'

import DownArrow from '../../Assets/downarrow.svg'
import HomeIcon from '../../Assets/dollar-sign 1.svg'
import DollarIcon from '../../Assets/$.svg'
import BlockIcon from '../../Assets/block 1.svg'
import HouseIcon from '../../Assets/Frame-house.svg'

import LocationInput from './LocationInput'
import MultiRangeSlider from './MultiRangeSlider'
import SuccessReport from './SuccessReport'
import Locations from './Locations'
import RecentlyAdded from './RecentlyAdded'
import Testimonial from './Testimonial'
import Footer from './Footer'
import HomeMobile from '../../Pages/HomeMobile/HomeMobile'


const Home = () => {

// range slider state
  const [range, setRange] = useState([2600, 10000]);
 
  const handleSliderChange = (newRange) => {
    setRange(newRange);
  };

  const formatCurrency = (value) => {
    // Convert the value from cents to dollars and format as currency
    return (value / 100).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };


  return (
    <>
    <div className='sm:hidden'>
      <HomeMobile />
    </div>
    <div className='md:flex md:flex-col flex-col justify-center '>
      <div className=' md:flex justify-center mx-auto hidden'>
        <div className=' h-full md:w-full md:h-full flex flex-col justify-center md:flex md:mx-auto'>
          <div className=' md:w-auto mx-auto md:h-full md:mx-auto lg:mx-auto md:mt-24'>
            <img src={HomeBgImg} alt=''className='lg:w-full h-full md:w-full md:full '/>
          </div>

          <div className=' lg:-mt-38rem -mt-23rem ml-20 text-white font-poppins flex flex-col space-y-5 mb-20'>
            <p className='lg:w-8/12 md:w-10/12 lg:text-6xl md:text-5xl  font-bold leading-snug '>The finest properties brought easily to you</p>
            <span className=' lg:w-5/12 md:w-10/12 text-[28px] font-normal leading-normal '>We provide a complete service for the sale,
                purchase or rental of real estate.
            </span>
          </div>

            {/* note */}
          <div className=' z-0 hidden relative lg:left-20 w-auto h-auto bg-white shadow-md rounded-2xl sm:flex flex-row mr-auto px-2 pr-6 py-4 ' style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
            
            {/* part one */}
            <div className='flex flex-col justify-center space-y-10 sm:space-y-0 -mt-2'>
              {/* first   */}
              <div className='flex sm:flex-row flex-col  space-x-7'>
                {/* REnt dropdown */}
                <div className='flex space-x-4 w-120px h-42px bg-[#F4F4F4] rounded-2xl mt-6 ml-7 items-center justify-center' style={{ boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)' }}>
                  <img src={HomeIcon} alt='down-arrow' className=' w-4 h-4'/>
                  <span className='font-poppins text-base font-medium'>Rent</span>
                  <img src={DownArrow} alt='down-arrow' className='w-3 h-3'/>
                </div>

                {/* input location */}
                <div>
                  <LocationInput />
                </div>  

                {/* House dropdown */}

                <div className='flex space-x-4 w-158px h-42px bg-[#F4F4F4] rounded-2xl mt-7  items-center justify-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                  <img src={HouseIcon} alt='down-arrow' className=' w-4 h-4'/>
                  <span className='font-poppins text-base font-medium'>House</span>
                  <img src={DownArrow} alt='down-arrow' className='w-3 h-3'/>
                </div>
              </div>

              {/*  second  */}
              <div className='flex sm:flex-row flex-col space-x-7 '>
                {/* Price dropdown */}
                <div className='mt-3 ml-7 font-poppins '>
                  <p className='font-medium'>Price Range</p>
                  <div className='flex space-x-4 w-120px h-42px mt-1 bg-[#F4F4F4] rounded-2xl  items-center justify-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                    <img src={DollarIcon} alt='down-arrow' className=' w-4 h-4'/>
                    <span className='font-poppins text-sm font-medium'>USD</span>
                    <img src={DownArrow} alt='down-arrow' className='w-3 h-3'/>
                  </div>
                </div>


                {/* Range input */}
                <MultiRangeSlider values={range} onChange={handleSliderChange} />
              



                {/* House dropdown */}
                <div className='flex space-x-3 w-158px h-42px bg-[#F4F4F4] rounded-2xl mt-7 items-center justify-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                  <img src={BlockIcon} alt='down-arrow' className=' w-4 h-4'/>
                  <span className='font-poppins text-base font-medium'>3 Rooms</span>
                  <img src={DownArrow} alt='down-arrow' className='w-3 h-3'/>
                </div>

              </div>
            </div>

                {/* line demarcate */}
            <div className=' w-2px h-114px bg-[#f4f4f4] m-7 space-y-3 '></div>


            <div className=' flex flex-col space-y-4 mt-9 -ml-1'>
              <div className='flex flex-col -space-y-2 items-center justify-center' >
                <p className='font-poppins text-xl font-medium'>874</p>
                <span className='font-poppins text-base text-[#989898]'>Results</span>
              </div>


                {/* search btn */}
                <div className='w-104px h-42px bg-[#753FF6] text-white flex items-center justify-center rounded-lg' style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)' }}>
                  <span className='inline-block align-middle font-poppins text-base'>Search</span>
                </div>

            </div>
          </div>
        </div>
      </div>



        <div className=' mt-48 mb-10 md:flex hidden'>
          <SuccessReport />

        </div>

        <div className=' md:flex hidden '>
          <Locations />

        </div>

        <div className='mt-'>
          <RecentlyAdded />

        </div>

        <div className='mt-32 md:flex hidden'>
          <Testimonial />

        </div>

        <div className='lg:mt-28 md:mt-80'>
          <Footer />

        </div>
    </div>

    </>
  )
}

export default Home