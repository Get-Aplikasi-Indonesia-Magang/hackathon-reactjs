import React from "react";

const NavigationBar = ({ navValue }) => {
  return (
    <header>
      <ul>
        <li>Home</li>
        <li>{!navValue ? "About" : navValue}</li>
      </ul>
    </header>
  );
};
export default NavigationBar;
