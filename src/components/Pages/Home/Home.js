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
    <div className=''>
      <div className=' flex justify-center'>
        <div className=' h-full'>
          <img src={HomeBgImg} alt=''className=' w-full h-full '/>

          <div className=' -mt-38rem ml-20 text-white font-poppins flex flex-col space-y-5 mb-20'>
            <p className='w-8/12 text-6xl font-bold leading-snug '>The finest properties brought easily to you</p>
            <span className=' w-5/12 text-[28px] font-normal leading-normal '>We provide a complete service for the sale,
                purchase or rental of real estate.
            </span>
          </div>

            {/* note */}
          <div className=' z-0 relative left-20 w-[984px] h-[171px] bg-white shadow-md rounded-2xl flex flex-row ' style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
            
            {/* part one */}
            <div className='flex flex-col'>
              {/* first   */}
              <div className='flex space-x-7'>
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

                <div className='flex space-x-4 w-158px h-42px bg-[#F4F4F4] rounded-2xl mt-6  items-center justify-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                  <img src={HouseIcon} alt='down-arrow' className=' w-4 h-4'/>
                  <span className='font-poppins text-base font-medium'>House</span>
                  <img src={DownArrow} alt='down-arrow' className='w-3 h-3'/>
                </div>
              </div>

              {/*  second  */}
              <div className='flex space-x-7'>
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



        <div className=' mt-48 mb-10'>
          <SuccessReport />

        </div>

        <div className=''>
          <Locations />

        </div>

        <div className='mt-48'>
          <RecentlyAdded />

        </div>

        <div className='mt-28'>
          <Testimonial />

        </div>

        <div className='mt-28'>
          <Footer />

        </div>
    </div>

    </>
  )
}

export default Home