import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./MultiRangeSlider.module.css"; // Import the CSS module

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
  });
};

const MultiRangeSlider = ({ values, onChange }) => {
  return (
    <div className="my-7 w-310px relative left-1"> {/* Add 'relative' class to the parent */}
      <Slider
        range
        min={0}
        max={20000} // Adjust the max value as needed
        value={values}
        onChange={onChange}
        handleStyle={{
          backgroundColor: "white",
          width: "16px",
          height: "16px",
          border: "4px solid #5017c9"
        }}
        trackStyle={{
          backgroundColor: "#753FF6",
          
        }}
        railStyle={{
          backgroundColor: "#eaeaea",
          
        }}
      />

      <div className="flex justify-between"> 
        {values.map((value, index) => (
          <div
            key={index}
            className="w-20 h-9 bg-[#753FF6] mt-14 font-poppins text-base flex items-center justify-center text-white text-center absolute pointer-events-none rounded-2xl"
            style={{
              left: `calc(${(value / 20000) * 100}% - 8px)`, // Calculate the left position based on the slider value
              top: "-30px", // Adjust the top position as needed
              animation: "tooltipMove 0.3s ease", // Add the animation
            }}
          >
            {formatCurrency(value)}

            <span
              className="absolute left-1/3 transform -translate-x-1/2 bottom-full w-0 h-0 border-solid border-[6px] border-transparent border-b-[#753FF6]"
              style={{ bottom: "36px" }}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiRangeSlider;
