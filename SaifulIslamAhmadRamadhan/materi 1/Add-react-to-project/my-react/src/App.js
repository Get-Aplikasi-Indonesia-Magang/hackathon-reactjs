import "./App.css";
import Introduction from "./components/introductions";
import Profile from "./components/profile";
import MyButton from "./components/myButton";
const App = () => {
  return (
    <div>
      <Profile />
      <Introduction name="kuman" />
      <Introduction name="nyamuk" />
      <MyButton />
    </div>
  );
};

export default App;
