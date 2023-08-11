import React from 'react'

import Bathroom from '../Home/RecentlyAsset/Bathtub.svg'
import Bed from '../Home/RecentlyAsset/Occupied Bed.svg'
import Toilet from '../Home/RecentlyAsset/Toilet Bowl.svg'

import Recentpic1 from '../Home/RecentlyAsset/recently-1.svg'
import Recentpic2 from '../Home/RecentlyAsset/recently-2.svg'
import Recentpic3 from '../Home/RecentlyAsset/recently-3.svg'
import Recentpic4 from '../Home/RecentlyAsset/recently-4.svg'
import Recentpic5 from '../Home/RecentlyAsset/recently5.svg'
import Recentpic6 from '../Home/RecentlyAsset/recently6.svg'


const RecentlyAdded = () => {

    const RecentAdded_ = [
        {
            id: 1,
            img: Recentpic1,
            address: '13 Ramat Ose, Ogudu GRA, Ikeja.',
            bedroom: '4 Bedroom',        
            bedIcon: Bed,              
            
            bathroom: '4 Bathroom',                     
            bathIcon: Bathroom,
                
            toilet: '5 Toilet', 
            toiletIcon: Toilet,
                    
            btn: '$60,545'
            
        },

        {
            id: 2,
            img: Recentpic2,
            address: '19B Allen Avenue Street, Ikeja.',
            bedroom: '4 Bedroom',        
            bedIcon: Bed,              
            
            bathroom: '4 Bathroom',                     
            bathIcon: Bathroom,

            toilet: '5 Toilet', 
            toiletIcon: Toilet,
            
            btn: '$35,545'
            
        },
        
        {
            id: 3,
            img: Recentpic3,
            address: '29B Allen Junction, Off Awolowo Way, Ikeja.',
            bedroom: '4 Bedroom',        
            bedIcon: Bed,              
            
            bathroom: '4 Bathroom',                     
            bathIcon: Bathroom,
                
            toilet: '5 Toilet', 
            toiletIcon: Toilet,
                    
            btn: '$70,000'
        },

        {
            id: 4,
            img: Recentpic4,
            address: '27e Amino Crescent Maitama, Abuja.',
            bedroom: '4 Bedroom',        
            bedIcon: Bed,              
            
            bathroom: '4 Bathroom',                     
            bathIcon: Bathroom,
                
            toilet: '5 Toilet', 
            toiletIcon: Toilet,
                    
            btn: '$50,995'
            
        },

        {
            id: 5,
            img: Recentpic5,
            address: ' 19B Allen Avenue Street, Ikeja.',
            bedroom: '4 Bedroom',        
            bedIcon: Bed, 

            bathroom: '4 Bathroom',                     
            bathIcon: Bathroom,
                
            toilet: '5 Toilet', 
            toiletIcon: Toilet,
                    
            btn: '$50,995'
            
        },

        {
            id: 6,
            img: Recentpic6,
            address: ' 3 Bole Street Off Aiport Road, Portharcourt.', 
            bedroom: '4 Bedroom',        
            bedIcon: Bed, 
            
            bathroom: '4 Bathroom',                     
            bathIcon: Bathroom,
                
            toilet: '5 Toilet', 
            toiletIcon: Toilet,
                    
            btn: '$80, 345'
            
        },

    ]
  return (
    <>
    <div className=' mb-14'>
        <div className='flex w-[88%]  mx-auto px-4'>
            <div className=' flex flex-wrap w-full font-poppins  items-center mx-auto space-x-96 mb-8     '>
                <p className=' text-4xl font-semibold '>Recently Added</p>
                <p className=' text-end text-2xl text-[#753FF6] font-semibold ml-60 '>See all</p>
            </div>
        </div>


        <div className=' flex sm:w-full w-full mx-auto'>
            <ul className=' container grid sm:grid-cols-2 gap-14 w-auto h-auto sm:max-w-[92.2rem] mx-auto justify-center '>
                {
                    RecentAdded_.map(item => (
                        <li 
                        key={item.id} 
                        className=' sm:w-auto sm:h-auto border border-gray-400 flex justify-center rounded-xl  '
                        style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)' }} 
                        >
                            <div className='flex items-center space-x-7 '>
                                <img src={item.img} alt='Recently Added Pic' className=' w-auto h-auto p-7'/>
                                <div className=' font-poppins space-y-4'>
                                    <p className=' text-28px font-bold  leading-snug pr-14'>{item.address}</p>

                                    <div className=' flex space-x-8  '>
                                        <div className=' flex space-x-6 items-center'>
                                            <div className=' w-auto h-auto p-2 border border-[#753ff6] rounded-full flex justify-center items-center'>
                                                < img src= {item.bedIcon} alt='Icons' className=' w-auto h-auto'/> 
                                            </div>
                                            <span className=' text-base text-gray-500 font-poppins font-medium '> {item.bedroom} </span>
                                        </div>

                                        <div className=' flex space-x-6 items-center'>
                                            <div className=' w-auto h-auto p-2 border border-[#753ff6] rounded-full flex justify-center items-center'>
                                                < img src= {item.bathIcon} alt='Icons' className=' w-auto h-auto'/>
                                            </div>
                                            <span className=' text-base text-gray-500 font-poppins font-medium '> {item.bathroom}</span>
                                        </div>
                                    </div>

                                    <div className=' flex justify-between  '>
                                        <div className=' flex space-x-6 items-center'>
                                            <div className=' w-auto h-auto p-2 border border-[#753ff6] rounded-full flex justify-center items-center'>
                                                < img src= {item.toiletIcon} alt='Icons' className=' w-auto h-auto'/>
                                            </div>
                                            <span className=' text-base text-gray-500 font-poppins font-medium '> {item.toilet}</span>
                                        </div>
                                        
                                        <button className=' w-auto h-auto py-2 px-4 rounded-lg bg-[#753ff6] text-white font-bold mr-8 '>{item.btn}</button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
    </>
  )
}

export default RecentlyAdded