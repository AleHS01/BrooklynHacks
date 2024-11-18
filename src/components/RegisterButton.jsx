import React from "react";
import { IconRocket } from "@tabler/icons-react";

const RegisterButton = () => {
  return (
    <button
      onClick={() => window.open("https://devpost.com", "_blank")}
      className="flex items-center justify-center space-x-2 px-6 py-3 mt-8 bg-transparent border-2 border-[#F1C3F2] text-transparent rounded-full shadow-xl transform hover:scale-105 hover:shadow2xl hover:shadow-[#F1C3F2] transition-all duration-300"
    >
      <IconRocket size={24} className="text-[#F1C3F2]" />
      <span className="text-xl font-bold bg-clip-text bg-gradient-to-r from-[#F1C3F2] via-[#CAACF2] to-[#59518C]">
        Register Now
      </span>
    </button>
  );
};

export default RegisterButton;
