import React, {useState} from 'react'

import DownArrow from '../../Assets/downarrow.svg'
import HomeIcon from '../../Assets/dollar-sign 1.svg'
import DollarIcon from '../../Assets/$.svg'
import BlockIcon from '../../Assets/block 1.svg'
import HouseIcon from '../../Assets/Frame-house.svg'

import LocationInput from '../Home/LocationInput'
import MultiRangeSlider from '../Home/MultiRangeSlider'

const Settings = () => {


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
    <div className=' w-auto h-full bg-gray-200 shadow-md rounded-2xl flex flex-col justify-center px-5 py-8 space-x-6 ' >
            
            {/* part one */}
            <div className='flex flex-col justify-center mt-2 mx-auto space-y-7 border px-4 py-5 rounded-md border-gray-400 bg-white '>
              {/* first   */}

                {/* input location */}
                <div className='flex justify-center '>
                  <LocationInput />
                </div> 
                <div className='flex flex-row justify-center mx-auto space-x-5 '>
                    {/* REnt dropdown */}
                    <div className='flex space-x-4 w-full px-6 py-2  h-full bg-[#F4F4F4] rounded-2xl items-center' style={{ boxShadow: '0 0 0px rgba(0, 0, 0, 0.2)' }}>
                        <img src={HomeIcon} alt='down-arrow' className=' w-5 h-5'/>
                        <span className='font-poppins text-lg font-medium'>Rent</span>
                        <img src={DownArrow} alt='down-arrow' className='w-5 h-5'/>
                    </div>

                    <div className='flex space-x-2 w-full px-3 py-2 h-full bg-[#F4F4F4] rounded-2xl items-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                        <img src={HouseIcon} alt='down-arrow' className=' w-5 h-5'/>
                        <span className='font-poppins text-lg font-medium '>House</span>
                        <img src={DownArrow} alt='down-arrow' className='w-5 h-5'/>
                    </div>

                </div>
                

                     {/* Range input */}
                    <MultiRangeSlider values={range} onChange={handleSliderChange} />
                <div className='flex justify-center mx-auto space-x-5 mt-10 -ml-4  '>
                    {/* Price dropdown */}
                    <div className='mt-10 ml-7 font-poppins '>
                    <p className='font-medium text-lg'> Price Range</p>
                    <div className='flex space-x-4 w-full h-42 px-6 p-2    mt-1 bg-[#F4F4F4] rounded-2xl  items-center justify-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                        <img src={DollarIcon} alt='down-arrow' className=' w-5 h-5'/>
                        <span className='font-poppins text-sm font-medium'>USD</span>
                        <img src={DownArrow} alt='down-arrow' className='w-5 h-5'/>
                    </div>
                </div>


                {/* House dropdown */}
                <div className='flex space-x-2 w-158px h-49px py-1 bg-[#F4F4F4] rounded-2xl mt-70px items-center justify-center' style={{ boxShadow: '0 0 2px rgba(0, 0, 0, 0.2)' }}>
                  <img src={BlockIcon} alt='down-arrow' className=' w-5 h-5'/>
                  <span className='font-poppins text-lg font-medium'>3 Rooms</span>
                  <img src={DownArrow} alt='down-arrow' className='w-5 h-5'/>
                </div>
                
              </div>
             
              
            </div>

                {/* line demarcate */}
            {/* <div className=' w-80 h-1 bg-[#f4f4f4] m-7 space-y-3 '></div> */}


            <div className=' flex flex-row space-x-6 mt-5 justify-center '>
              <div className='flex flex-col -space-y-1 items-center justify-center bg-white w-full rounded-lg' >
                <p className='font-poppins text-2xl font-medium'>874</p>
                <span className='font-poppins text-lg text-[#989898]'>Results</span>
              </div>


                <div className='w-104px h-14 px-24 bg-[#753FF6] text-white flex items-center justify-center rounded-lg' style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.4)' }}>
                  <span className='inline-block align-middle font-poppins text-base'>Search</span>
                </div>

            </div>
          </div>
  )
}

export default Settings