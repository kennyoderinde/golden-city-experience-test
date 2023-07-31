import React, { useState } from 'react'
import HomeBgImg from '../../Assets/home-bg-img.svg'

import DownArrow from '../../Assets/downarrow.svg'
import HomeIcon from '../../Assets/dollar-sign 1.svg'

import LocationInput from './LocationInput'
import MultiRangeSlider from './MultiRangeSlider'
import SuccessReport from './SuccessReport'
import Locations from './Locations'
import RecentlyAdded from './RecentlyAdded'
import Testimonial from './Testimonial'
import Footer from './Footer'


const Home = () => {

// range slider state
  const [range, setRange] = useState([20, 80]);
 
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
    <div className='mt-24'>
      <img src={HomeBgImg} alt=''className=' w-full h-full'/>

      <div className=' -mt-38rem ml-20 text-white font-poppins flex flex-col space-y-5 mb-20'>
        <p className='w-8/12 text-6xl font-bold leading-snug '>The finest properties brought easily to you</p>
        <span className=' w-5/12 text-[28px] font-normal leading-normal '>We provide a complete service for the sale,
            purchase or rental of real estate.
        </span>
      </div>


        <div className=' absolute left-20 w-[984px] h-[171px] bg-white shadow-md rounded-2xl flex flex-row ' style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)' }}>
          
          {/* part one */}
          <div className='flex flex-col'>
            {/* first   */}
            <div className='flex space-x-7'>
              {/* REnt dropdown */}
              <div className='flex space-x-2 w-120px h-42px bg-[#F4F4F4] rounded-2xl mt-7 ml-7 items-center justify-center' style={{ boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)' }}>
                <img src={HomeIcon} alt='down-arrow' className=' w-3 h-3'/>
                <span className='font-poppins text-base'>Rent</span>
                <img src={DownArrow} alt='down-arrow' className='w-3 h-3'/>
              </div>

              {/* input location */}
              <div>
                <LocationInput />
              </div>  

              {/* House dropdown */}

              <div className='flex space-x-2 w-120px h-42px bg-[#F4F4F4] rounded-2xl mt-7  items-center justify-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                <img src={HomeIcon} alt='down-arrow' className=' w-3 h-3'/>
                <span className='font-poppins text-base'>House</span>
                <img src={DownArrow} alt='down-arrow' className='w-3 h-3'/>
              </div>
            </div>

            {/*  second  */}
            <div className='flex space-x-7'>
              {/* Price dropdown */}
              <div className='mt-3 ml-7 font-poppins '>
                <p>Price Range</p>
                <div className='flex space-x-2 w-120px h-42px bg-[#F4F4F4] rounded-2xl  items-center justify-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                  <img src={HomeIcon} alt='down-arrow' className=' w-3 h-3'/>
                  <span className='font-poppins text-sm'>USD</span>
                  <img src={DownArrow} alt='down-arrow' className='w-3 h-3'/>
                </div>
              </div>


              {/* Range input */}
              <MultiRangeSlider values={range} onChange={handleSliderChange} />
            



              {/* House dropdown */}
              <div className='flex space-x-2 w-120px h-42px bg-[#F4F4F4] rounded-2xl mt-7  items-center justify-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                <img src={HomeIcon} alt='down-arrow' className=' w-3 h-3'/>
                <span className='font-poppins text-base'>3 Rooms</span>
                <img src={DownArrow} alt='down-arrow' className='w-3 h-3'/>
              </div>

            </div>
          </div>

              {/* line demarcate */}
          <div className=' w-2px h-114px bg-[#f4f4f4] m-7 space-y-3 '></div>


          <div className=' flex flex-col space-y-4 mt-9 ml-4'>
            <div className='flex flex-col -space-y-2 items-center justify-center' >
              <p className='font-poppins text-xl font-normal'>874</p>
              <span className='font-poppins text-base text-[#989898]'>Results</span>
            </div>


              {/* search btn */}
              <div className='w-104px h-42px bg-[#753FF6] text-white flex items-center justify-center rounded-lg' style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)' }}>
                <span className='inline-block align-middle font-poppins text-base'>Search</span>
              </div>

          </div>
        </div>

        <div className=' mt-27rem mb-10'>
          <SuccessReport />

        </div>

        <div className=''>
          <Locations />

        </div>

        <div className='mt-28'>
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