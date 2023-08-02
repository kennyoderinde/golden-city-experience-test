// import React, { useState } from "react";
// import DownArrow from '../../Assets/Vector.png';
// import HomeIcon from '../../Assets/Vector 2.png';

// const Rent = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(
//     <div className="flex ">
//       <img src={DownArrow} alt="Down-arrow" />
//       <p>Rent</p>
//       <img src={HomeIcon} alt="home-icon" />
//     </div>
//   );

//   const settingsOptions = [
//     { 
//       id: 1, 
//       name: "Rent", 
//       item: (
//         <div>
//           <img src={DownArrow} alt="Down-arrow" />
//           <p>Rent</p>
//           <img src={HomeIcon} alt="home-icon" />
//         </div>
//       )
//     },

//     { id: 2, 
//       name: "Bye", 
//       item: (
//         <div>
//           <img src={DownArrow} alt="Down-arrow" />
//           <p>Lease</p>
//           <img src={HomeIcon} alt="home-icon" />
//         </div>
//       )
     
//     },

//     { 
//       id: 3, 
//       name: "Lease", 
//       item: (
//         <div className="flex">
//           <img src={DownArrow} alt="Down-arrow" />
//           <p>Bye</p>
//           <img src={HomeIcon} alt="home-icon" />
//         </div>
//       )
      
      
//     },
//   ];

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prevValue) => !prevValue);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     toggleDropdown(); // Close the dropdown after selecting an option
//   };

//   return (
//     <div className="switch-container mt-60 ml-32">
//       <button
//         className="selected-option-button bg-[#F4F4F4] flex items-center space-x-2 p-2 rounded"
//         onClick={toggleDropdown}
//       >
       
//         <div>{selectedOption}</div>
      
//       </button>
//       {isDropdownOpen && (
//         <ul className="dropdown w-24 h-16 bg-[#F4F4F4]">
//           {settingsOptions.map((option) => (
//             <li key={option.id}>
//               <button
//                 className="dropdown-option text-blue-200 bg-slate-400"
//                 onClick={() => handleOptionClick(option.name)}
//               >
//                 {option.item}
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Rent;


import React from 'react'

const OurProjects = () => {
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="group cursor-pointer relative inline-block border-b border-gray-400 w-28 text-center">Hover over me
          <div class="opacity-0 w-28 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 bottom-full -left-1/2 ml-14 px-3 pointer-events-none">
            Tooltip center
            <svg class="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" ><polygon class="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurProjects