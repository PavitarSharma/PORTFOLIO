import React from "react";
import Linkedin from "../assets/linkedin.png";
import GitHub from "../assets/github.png";
import Twitter from "../assets/twitter.png";
const Footer = () => {
  return (
    <div className="mt-24 w-full">
      <div className="flex gap-8 sm:mb-0 mb-4 sm:flex-row flex-col justify-between items-center py-6">
        <p className="text-2xl font-semibold ">Pavitar Sharma</p>
        <p className="font-semibold">@{new Date().getFullYear()}.All Rights Reserved</p>
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/pavitar-sharma-918a3b19a"
            target="_blank"
          >
            <img src={Linkedin} alt="linkedin" className="w-[30px]" />
          </a>
          <a href="https://github.com/PavitarSharma" target="_blank">
            <img src={GitHub} alt="github" className="w-[30px]" />
          </a>
          <a href="https://twitter.com/PavitarSharma17" target="_blank">
            <img src={Twitter} alt="twitter" className="w-[30px]" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
