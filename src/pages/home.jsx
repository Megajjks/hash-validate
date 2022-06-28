import { useState } from "react";
import { ToastContainer } from "react-toastify";
import Step1 from "../components/step1";
import Step2 from "../components/step2";
import Step3 from "../components/step3";
import "./home.style.css";

const Home = () => {
  const [stepper, setStepper] = useState([true, false, false]);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [blocksArray, setBlocksArray] = useState([]);
  const [newBlocksArray, setNewBlocksArray] = useState([]);
  const [hash, setHash] = useState("");

  const resetAppState = () => {
    setStepper([true, false, false]);
    setEmail("");
    setToken("");
    setBlocksArray([]);
    setNewBlocksArray([]);
    setHash("");
  };

  return (
    <div className="home-wrapper">
      {stepper[0] && (
        <Step1
          email={email}
          token={token}
          setEmail={setEmail}
          setToken={setToken}
          setStepper={setStepper}
          onReset={resetAppState}
        />
      )}
      {stepper[1] && (
        <Step2
          token={token}
          blocksArray={blocksArray}
          newBlocksArray={newBlocksArray}
          setBlocksArray={setBlocksArray}
          setNewBlocksArray={setNewBlocksArray}
          setHash={setHash}
          setStepper={setStepper}
          onReset={resetAppState}
        />
      )}
      {stepper[2] && (
        <Step3
          hash={hash}
          newBlocksArray={newBlocksArray}
          onReset={resetAppState}
        />
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <footer>
        Made by:{" "}
        <a href="https://linktr.ee/jayro_salazar" target="_blank">
          Jayro Salazar (@jayrojsk)
        </a>{" "}
        🥷{" "}
      </footer>
    </div>
  );
};

export default Home;
