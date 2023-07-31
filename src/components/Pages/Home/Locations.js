import React from 'react'
import LocationImg from '../../Assets/location.JPG'
import LocationImg1 from '../../Assets/location1.svg'
import LocationImg2 from '../../Assets/location2.svg'

const Location = () => {

    const LocationData_ = [
        {
            id: 1,
            img: LocationImg ,
            location: (
              <div className=' flex font-poppins text-[28px] space-x-2 p-3'>
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
            <div className=' flex font-poppins text-[28px] space-x-2 p-3'>
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
          <div className=' flex font-poppins text-[28px] space-x-2 p-3'>
            <p className=''>Port Harcout,</p>
            <span className='text-[#989898]'>Nigeria</span> 
          </div>
        ),
        btn: 'Explore',
    },
    ]
  return (
    <div className=' flex flex-col justify-center items-center mt-24 mb-12 '>
      <div className=' font-poppins text-center '>
        <p className=' text-5xl text-[#753FF6] font-semibold'>Our Locations</p>
        <span className=' text-4xl leading-loose'>We are available in different cities across the country.</span>
      </div>
      <ul className=' flex mt-24 space-x-20 '>
        {
          LocationData_.map(elem => (
            <li 
              key={elem.id} 
              className=''
            >
              <div className=' w-429px h-560px border border-[#989898] rounded-md'>
              <img src={elem.img} alt='Location Image' className=" w-429px h-380px " />
                <div>{elem.location}</div>
                <button className='w-150px h-50px bg-[#753FF6] text-22px ml-auto mt-7 mr-5 text-white flex items-center justify-center rounded-lg' style={{ boxShadow: '0 0 0px rgba(0, 0, 0, 0.1)' }}>
                  {elem.btn}</button>
              </div>

            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Location