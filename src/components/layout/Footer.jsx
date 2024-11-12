import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-4">
      <div className="flex flex-col items-center justify-center text-center w-full p-4">
        <p className="text-lg text-black">Made with ❤︎ by the HackUNI Team</p>
        <p className="text-sm text-gray-600">
          For questions:{" "}
          <a href="mailto:support@hackuni.org" className="text-blue-500">
            support@hackuni.org {/* Temporaray Email*/}
          </a>
        </p>
        <p className="text-xs text-gray-500 mt-2">Copyright © 2024 HackUNI</p>
      </div>
    </footer>
  );
};

export default Footer;
