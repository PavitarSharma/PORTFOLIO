import React from "react";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import hero from "../assets/hero.jpeg";
import { HiArrowNarrowRight } from "react-icons/hi";
const Hero = () => {
  return (
    <div name="home" className="w-full h-full my-14">
      {/* Container */}
      <div className="my-12 flex md:flex-row flex-col items-center justify-between gap-4">
        <div className="flex md:flex-col gap-4">
          <a href="https://github.com/PavitarSharma" target="_blank">
            <AiOutlineGithub size="24px" />
          </a>
          <a
            href="https://www.linkedin.com/in/pavitar-sharma-918a3b19a"
            target="_blank"
          >
            <AiFillLinkedin size="24px" />
          </a>
          <a href="https://twitter.com/PavitarSharma17" target="_blank">
            <AiOutlineTwitter size="24px" />
          </a>
        </div>

        <div className="md:max-w-[450px] md:order-1 order-3 ">
          <h1 className="sm:text-3xl text-xl font-bold">Pavitar Sharma</h1>

          <div className="flex sm:flex-row flex-col sm:items-center sm:gap-4 gap-1 my-2 ">
            <div className="w-[100px] h-[1px] bg-gray-300 "></div>
            <p className="font-semibold">I’m a Full Stack Developer</p>
          </div>

          <p className="font-mono text-sm">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
        </div>

        <div
          className="hero-image lg:w-[200px] lg:h-[200px] w-[200px] h-[200px]  md:order-3 rounded-full"
          
        ></div>
      </div>
    </div>
  );
};

export default Hero;
