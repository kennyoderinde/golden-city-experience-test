



import React, { useState } from "react";
// import './SwitchPage.css'; // Assuming you have a CSS file for styling

// import Resumes from '../../ResumeTemplates/Resumes';


const Rent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Rent");

  const settingsOptions = [
    { id: 1, name: "Rent", icon: "", icon1: "" },
    { id: 2, name: "Byeout", icon: "", icon1: "" },
    { id: 3, name: "Lease", icon: "", icon1: "" },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen((prevValue) => !prevValue);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    toggleDropdown(); // Close the dropdown after selecting an option
  };

//   const renderSelectedOption = () => {
//     switch (selectedOption) {
//       case "Resumes":
//         return <Resumes />;
//       case "CVs":
//         return <Cvs />;
//       case "Cover Letters":
//         return <CoverLetters />;
//       default:
//         return <Resumes />;
//     }
//   };

  return (
    <div className="switch-container mt-60 ml-32">
      <button
        className="selected-option-button "
        onClick={toggleDropdown}
      >
        {selectedOption}
      </button>
      {isDropdownOpen && (
        <ul className="dropdown w-24 h-16 bg-[#F4F4F4]">
          {settingsOptions.map((option) => (
            <li key={option.id}>
              <button
                className="dropdown-option text-blue-200 bg-slate-400"
                onClick={() => handleOptionClick(option.name)}
              >
                {option.name}
              </button>
            </li>
          ))}
        </ul>
      )}
      {/* <div className="content-container">
        {renderSelectedOption()}
      </div> */}
    </div>
  );
};

export default Rent;
