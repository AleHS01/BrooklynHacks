import React from "react";
import CountdownTimer from "../components/CountDownTimer";
import RegisterButton from "../components/RegisterButton";

const Home = () => {
  return (
    <div className="text-center">
      <CountdownTimer />
      <RegisterButton />
    </div>
  );
};

export default Home;
