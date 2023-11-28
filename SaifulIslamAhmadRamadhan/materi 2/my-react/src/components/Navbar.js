import React from "react";

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>{props.category}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
