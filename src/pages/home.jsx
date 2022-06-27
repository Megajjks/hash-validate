import { useState } from "react";
import Step1 from "../components/step1";
import Step2 from "../components/step2";
import "./home.style.css";

const Home = () => {
  const [stepper, setStepper] = useState([true, false, false]);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [blocksArray, setBlocksArray] = useState([]);
  const [newBlocksArray, setNewBlocksArray] = useState([]);
  const [hash, setHash] = useState("");

  return (
    <div className="home-wrapper">
      {stepper[0] && (
        <Step1
          email={email}
          token={token}
          setEmail={setEmail}
          setToken={setToken}
          setStepper={setStepper}
        />
      )}
      {stepper[1] && (
        <Step2
          token={token}
          blocksArray={blocksArray}
          setBlocksArray={setBlocksArray}
          setStepper={setStepper}
        />
      )}
      {stepper[2] && <Step1 />}
    </div>
  );
};

export default Home;
