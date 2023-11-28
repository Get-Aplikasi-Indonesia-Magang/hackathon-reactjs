import { useNavigate } from "react-router-dom";
const Second = () => {
  const navigate = useNavigate();
  return (
    <>
      <h3>ABOUT PAGE</h3>
      <button onClick={() => navigate("/")}>Button to Homepage</button>
    </>
  );
};

export default Second;
