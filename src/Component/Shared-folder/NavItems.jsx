import React from "react";
import EmailIcon from "../IconLibrary/EmailIcon";
import GithubIcon from "../IconLibrary/GithubIcon";
import LinkedinIcon from "../IconLibrary/LinkedinIcon";

const icons = [EmailIcon, GithubIcon, LinkedinIcon];
const navContain = ["About me", "Skills", "Portfolio", "Contact Me"];

export default function navbar() {
  return (
    <nav className="">
      <ul className="md:flex justify-end items-center gap-4">
        {navContain.map((item, index) => (
          <li key={index} className="py-3 text-white ">
            <a className="text-lg font-bold md:py-0 " href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center md:hidden">
        <div>
          <div className="py-10 text-white">
            <h2 className="text-sm text-white flex justify-center items-center">
              my name is Thomas
            </h2>
            <h2 className="text-2xl font-semibold flex justify-center items-center">
              I’M A DEVELOPER
            </h2>
          </div>
          <div className="py-6 flex justify-center items-center">
            <img src="/Separator.png" alt="" />
          </div>
          <div className="pt-10">
            <ul className="flex justify-center items-center space-x-4">
              {icons.map((IconComponent, index) => (
                <li key={index}>
                  <a href="#">
                    <IconComponent />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

// max-w-[120rem] mx-auto bg-black
// max-w-[39.813rem]
