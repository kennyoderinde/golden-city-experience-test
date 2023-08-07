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
      <div class="w-30rem h-30rem relative">
  <div class="absolute w-full h-full bg-gradient-to-r from-white to-gray-300"></div>
  <div class="absolute w-1/2 h-full bg-white"></div>
</div>

    </div>
  )
}

export default OurProjects