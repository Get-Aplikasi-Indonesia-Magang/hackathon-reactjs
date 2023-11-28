import React, { useState } from "react";
import "./App.css";
import NavigationBar from "./components/NavigationBar";

function App() {
  const [getNavbarValue, setNavbarValue] = useState("");

  const changeNavbarValue = () => {
    setNavbarValue("my contact");
  };

  return (
    <div>
      <NavigationBar navValue={getNavbarValue}/>
      <h1>INI HOMEPAGE</h1>
      <button onClick={() => changeNavbarValue()}>Add navigation</button>
    </div>
  );
}

export default App;
