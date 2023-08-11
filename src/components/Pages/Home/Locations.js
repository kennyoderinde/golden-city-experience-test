import React from 'react'
import LocationImg from '../../Assets/new-house.svg'
import LocationImg1 from '../../Assets/location1.svg'
import LocationImg2 from '../../Assets/location2.svg'

import './Home.css'
const Location = () => {

    const LocationData_ = [
        {
            id: 1,
            img: LocationImg ,
            location: (
              <div className=' flex font-poppins text-[28px] space-x-2'>
                <p className=''>Abuja,</p>
                <span className='text-[#989898]'>Nigeria</span> 
              </div>
            ),
            btn: 'Explore',
        },
        {
          id: 2,
          img: LocationImg1,
          location: (
            <div className=' flex font-poppins text-[28px] space-x-2 '>
              <p className=''>Lagos,</p>
              <span className='text-[#989898]'>Nigeria</span> 
            </div>
          ),
          btn: 'Explore',
      },
      {
        id: 3,
        img: LocationImg2 ,
        location: (
          <div className=' flex font-poppins text-[28px] space-x-2 '>
            <p className=''>Port Harcout,</p>
            <span className='text-[#989898]'>Nigeria</span> 
          </div>
        ),
        btn: 'Explore',
    },
    ]
  return (
      <div className='mt-10 mb-4 w-full sm:p-20 p-2'>
        <div className=' font-poppins text-center border  flex flex-col mx-auto w-auto space-y-3 '>
          <p className=' text-5xl text-[#753FF6] font-semibold'>Our Locations</p>
          <span className=' text-4xl sm:leading-loose leading-normal'>We are available in different cities across the country.</span>
        </div>
        
        <div className="mt-8 mb-12 w-full sm:max-w-[92.2%] flex sm:flex-row flex-col flex-wrap mx-auto justify-center">
          <ul className=' flex sm:flex-row flex-col mt-24 space-x-24 mx-auto '>
            {
              LocationData_.map(elem => (
                <li 
                  key={elem.id} 
                  className='w-auto h-auto  rounded-md location'
                >
                  <div className=' w-full '>
                    <div className="w-full h-[60%]">
                      <img 
                        src={elem.img} 
                        alt='Location-img' 
                        className=" w-full h-full " 
                      />
                    </div>

                    <div className='border border-[#989898] rounded-md  pb-10 px-5 -mt-2'>
                      <div className='py-5'>{elem.location}</div>
                      <button className='w-150px h-50px bg-[#753FF6] text-22px ml-auto mt-7  text-white flex items-center justify-center rounded-lg' style={{ boxShadow: '0 0 0px rgba(0, 0, 0, 0.1)' }}>
                        {elem.btn}
                      </button>
                    </div>
                  </div>

                </li>
              ))
            }
          </ul>
        </div>
      </div>
  )
}

export default Location