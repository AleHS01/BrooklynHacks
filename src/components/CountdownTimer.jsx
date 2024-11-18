import React, { useState, useEffect } from "react";

const TimerBlock = ({ label, value, delay }) => (
  <div className="text-center space-y-2">
    <div
      className="flex items-center justify-center bg-[#292256] text-white rounded-full w-24 h-24 mx-auto shadow-xl animate-flow-glow"
      style={{ animationDelay: delay }}
    >
      <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F1C3F2] via-[#CAACF2] to-[#59518C]">
        {value}
      </span>
    </div>
    <p className="text-white text-sm font-semibold">{label}</p>
  </div>
);

const CountdownTimer = () => {
  const targetDate = "2025-02-10T00:00:00";

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const delayValues = ["0s", "0.2s", "0.4s", "0.6s"];

  return (
    <div className="flex justify-center items-center space-x-4 mt-10">
      {Object.keys(timeLeft).map((interval, index) => (
        <TimerBlock
          key={interval}
          label={interval.charAt(0).toUpperCase() + interval.slice(1)}
          value={timeLeft[interval]}
          delay={delayValues[index]}
        />
      ))}
    </div>
  );
};

export default CountdownTimer;
