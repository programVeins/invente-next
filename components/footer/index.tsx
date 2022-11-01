import React from "react";

const Footer = () => {
  return (
    <footer className="h-80 w-full flex flex-col items-center justify-center shadow-xl border-[0.02rem] border-gray-400 border-opacity-20 bg-black/20 rounded-md lg:rounded-xl backdrop-blur-lg text-white font-ubuntu">
      <p className="font-azonix text-3xl">Invente 2022</p>
      <p className="text-lg font-thin">SSN and SNU's annual techfest</p>
      <p className="text-lg font-thin">All rights reserved © SSN SNUC</p>
      <div className="flex items-center gap-4 mt-20">
        <a href="https://twitter.com/sabeshbharathi">
          <img
            className="cursor-pointer scale-95 hover:scale-125 h-20 w-20 duration-300"
            src="/images/sabs.png"
          />
        </a>
        <a href="https://twitter.com/_harisaran_">
          <img
            className="cursor-pointer hover:scale-125 h-20 w-20 duration-300"
            src="/images/hari.png"
          />
        </a>
        <a href="https://twitter.com/Amanrk28">
          <img
            className="cursor-pointer hover:scale-125 h-20 w-20 duration-300"
            src="/images/aman.png"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
