import "./App.css";
import IntroComp from "./Components/IntroComp";
import NavBarComp from "./Components/NavBarComp";
import TrendingComp from "./Components/TrendingComp";
import SuperHeroComp from "./Components/SuperHeroComp";
import "./styles/landingPage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <NavBarComp />
        <IntroComp />
      </div>

      <div className="trending">
        <TrendingComp />
      </div>

      <div className="superhero">
        <SuperHeroComp />
      </div>
    </div>
  );
}

export default App;
