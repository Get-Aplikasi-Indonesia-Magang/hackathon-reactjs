import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import MyButton from "./components/MyButton";

const App = () => {
  const clicked = () => {
    alert("button clicked");
  };

  const paraf = () => {
    return (
      <div>
        <h3> Anjay mabarr </h3>
        <marquee>INI APAAN OEE</marquee>
      </div>
    );
  };
  return (
    <div>
      <header>
        <Navbar category="Home" />
        <Navbar category="About" />
        <Navbar category="Contact" />
      </header>
      <main>
        <Main />
        <MyButton clicked={clicked} />
      </main>
      <footer>
        <Footer paraf={paraf} />
      </footer>
    </div>
  );
};

export default App;
