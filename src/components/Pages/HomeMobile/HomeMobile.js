// import { useState } from 'react';
// // import DownArrow from '../assets/down-arrow.svg';

// const ModalItem = ({ title, desc, isFirst }) => {
//   const [showModal, setShowModal] = useState(isFirst);

//   const handleClick = () => {
//     setShowModal(true);
//   };

//   const handleClose = (event) => {
//     event.stopPropagation();
//     setShowModal(false);
//   };

//   return (
//     <div
//       className="sm:flex mt-20 h-full w-full bg-white mb-2 justify-center p-5"
//       onClick={handleClick}
//     >
//       <div className="">
//         <div className="flex mx-auto justify-between w-auto p-3 border border-gray-400 rounded items-center group">
//           <h2 className="text-xl font-bold text-[#056594]">{title}</h2>
//           <div className="group-hover:rotate-18 duration-300">
//             {/* <img src={DownArrow} alt="Down Arrow" className="w-8 h-4" /> */}
//           </div>
//         </div>
//       </div>

//       {showModal && (
//         <div
//           className="w-full h-full bg-[#f5f5f5] text-[#067EB9] font-medium mt-6" onClick={handleClose}
//         >
//           <p>{desc}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="container">
//       <ModalItem
//         title="About Ruqtec"
//         desc="Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
//           inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
//           Content style horizontal community bullet effect. List subtract draft selection inspect layout 
//           frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
//           object pen thumbnail."
//         isFirst={true}
//       />
//       <ModalItem
//         title="Our Mission"
//         desc="Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
//           inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
//           Content style horizontal community bullet effect. List subtract draft selection inspect layout 
//           frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
//           object pen thumbnail. "
//       />
//       <ModalItem
//         title="Our Vision"
//         desc="Figma ipsum component variant main layer. Plugin strikethrough team scrolling asset 
//           inspect ipsum list image frame. Variant bold opacity vector select asset follower link stroke. 
//           Content style horizontal community bullet effect. List subtract draft selection inspect layout 
//           frame bullet strikethrough. Outline community layer vector content. Invite pen image figma object 
//           object pen thumbnail. "
//       />
//     </div>
//   );
// };

// export default App;


import React from 'react'
import HomeBgImg from '../../Assets/home-bg-img.svg'
import Settings from './Settings'
import SuccessReport from '../Home/SuccessReport'
import LocationsMobile from '../HomeMobile/LocationsMobile'
import RecentlyMobile from './RecentlyMobile'
import TestimonialMobile from './TestimonialMobile'

const HomeMobile = () => {
  return (
    <div className='sm:flex mt-20 h-full w-full bg-white mb-2 justify-center p-5 space-y-10'>

      <div className='h-full flex flex-col '>
        <div>
          <img src={HomeBgImg} alt=''className='w-full h-full'/>
        </div>

        <div className='  -mt-12rem text-white font-poppins flex flex-col space-y-3 mb-5 px-10 '>
          <p className='w-auto text-3xl font-bold  '>The finest properties brought easily to you</p>
          <span className=' w-auto text-lg font-normal leading-tight '>We provide a complete service for the sale,
              purchase or rental of real estate.
          </span>
        </div>
      </div>

      <Settings />
      <SuccessReport />
      <LocationsMobile />
      {/* <RecentlyMobile /> */}
      <TestimonialMobile/>
      


      

    </div>
  )
}

export default HomeMobile
