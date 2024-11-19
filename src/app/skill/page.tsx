import React from "react";
import { DiJavascript } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPrisma } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";

const Skill = () => {
  return (
    <div className="container">
      <div className="font-bold md:text-8xl text-4xl justify-center text-center mt-28 mb-28">
        Here is My Skill...
      </div>
      <div className="flex justify-center gap-10 w-full relative flex-wrap">
        <DiJavascript className="text-5xl sm:text-6xl md:text-7xl" />
        <RiJavascriptFill className="text-5xl sm:text-6xl md:text-7xl" />
        <BiLogoTypescript className="text-5xl sm:text-6xl md:text-7xl" />
        <FaCss3Alt className="text-5xl sm:text-6xl md:text-7xl" />
        <SiTailwindcss className="text-5xl sm:text-6xl md:text-7xl" />
        <TbBrandMysql className="text-5xl sm:text-6xl md:text-7xl" />
        <FaNodeJs className="text-5xl sm:text-6xl md:text-7xl" />
        <SiPrisma className="text-5xl sm:text-6xl md:text-7xl" />
        <FaReact className="text-5xl sm:text-6xl md:text-7xl" />
        <SiNextdotjs className="text-5xl sm:text-6xl md:text-7xl" />
      </div>
    </div>
  );
};

export default Skill;
