import "./App.css";
import { useState, useEffect } from "react";
import Introduction from "./components/introductions";
import Profile from "./components/profile";
import MyButton from "./components/myButton";

//

const App = () => {
  // kiri => getter
  // kanan => setter
  const [myNumber, setMyNumber] = useState(1);
  const [myString, setMyString] = useState("");

  // useEffect untuk mentriger data sesuai perubahan dari permintaan pada array []
  useEffect(() => {
    if (myNumber > 1) {
      setMyString("haloo");
    } else {
      setMyString("Anjayyyy");
    }
  }, [myString]);

  return (
    <div>
      <h1>String a {myString}</h1>
      <h1>Number a {myNumber}</h1>
      <button onClick={() => setMyNumber((prev) => prev + 1)}> + Number!</button>
      <button onClick={() => setMyNumber((prev) => prev - 1)}> - Number!</button>

      {/* <Profile />
      <Introduction name="kuman" />
      <Introduction name="nyamuk" />
      <MyButton /> */}
    </div>
  );
};

export default App;
