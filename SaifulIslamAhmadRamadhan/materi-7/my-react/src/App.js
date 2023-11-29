import React from "react";
import "./App.css";
import "./Styles/Style.css";
import NavComp from "./Conponents/NavComp";
import "bootstrap/dist/css/bootstrap.min.css";
import ContainerCard from "./Pages/ContainerCard";
import Footer from "./Conponents/FooterComp";

const App = () => {
  return (
    <div className="container-all">
      <div className=" wrapper-navbar">
        <NavComp />
      </div>

      <div className="mb-3 wrapper-card">
        <ContainerCard />
      </div>
      <>
        <Footer />
      </>
    </div>
  );
};

export default App;
