import React from "react";
// import { useState } from "react";
import EmailIcon from "../IconLibrary/EmailIcon";
import GithubIcon from "../IconLibrary/GithubIcon";
import LinkedinIcon from "../IconLibrary/LinkedinIcon";

const icons = [EmailIcon, GithubIcon, LinkedinIcon];

export default function Hero() {
  return (
    <>
      <div className="max-w-[1920px]  mx-auto">
        <div className="md:bg-bannerImage bg-no-repeat bg-cover">
          <div className="flex flex-col-reverse md:flex-row justify-between items-center ">
            {/* left side */}
            <div className="w-full p-4 bg-[#C4C4C4] flex justify-between items-center md:block md:bg-transparent md:pl-10">
              <div className="pb-7 pl-3">
                <h2 className="font-bold sm:text-base md:text-4xl pl-[2px]">
                  Hi, I am
                </h2>
                <h1 className="font-extrabold sm:text-4xl md:text-7xl">
                  MD MONIRUL ISLAM
                </h1>
                <p className="font-extrabold sm:text-xs md:text-2xl">
                  Front-end Developer
                </p>
              </div>
              {/* icons */}
              <div className="md:pl-3">
                <ul className="md:flex justify-start items-center gap-4">
                  {icons.map((IconComponent, index) => (
                    <li key={index} className="py-1 md:py-0">
                      <a href="#" className="">
                        <IconComponent />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {/* </div> */}
            </div>

            {/* right side */}
            <div className="w-full bg-black">
              <div className="md:px-4 pt-4">
                <img
                  src="src/assets/Image-Gallery/image 17.png"
                  alt="tamag"
                  className=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
