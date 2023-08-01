import React from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
// import styles from "./MultiRangeSlider.module.css"; // Import the CSS module

const formatCurrency = (value) => {
  return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

const MultiRangeSlider = ({ values, onChange }) => {
  return (
    <div className="my-6 w-438px h-10">
      <Slider
        range
        min={0}
        max={100}
        value={values}
        onChange={onChange}
        handleStyle={{
          backgroundColor: "white",
          width: "16px",
          height: "16px",
          border: "4px solid #753FF6"
        }}
        trackStyle={{
          backgroundColor: "#753FF6",
        }}
        railStyle={{
          backgroundColor: "#eaeaea",
        }}
      />

      <div className="flex justify-between -space-x-6 mt-4">
        {values.map((value, index) => (
          <div key={index} className=" w-16 h-7 bg-[#753FF6] text-white text-center rounded-2xl">
            {formatCurrency(value)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiRangeSlider;
