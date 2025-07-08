import React from "react";
// import { useState } from "react";
import EmailIcon from "../IconLibrary/EmailIcon";
import GithubIcon from "../IconLibrary/GithubIcon";
import LinkedinIcon from "../IconLibrary/LinkedinIcon";

const icons = [EmailIcon, GithubIcon, LinkedinIcon];

export default function Hero() {
  return (
    <>
      <div className="">
        <div className="bg-black md:bg-bannerImage bg-no-repeat bg-cover">
          <div className="max-w-[1020px] mx-auto flex flex-col-reverse md:flex-row justify-between items-center pt-14">
            {/* left side */}
            <div className="w-full bg-[#C4C4C4] flex justify-between items-center md:block md:bg-transparent">
              <div className="pb-7">
                <h2 className="font-bold sm:text-base md:text-4xl pb-4">
                  Hi, I am
                </h2>
                <h1 className="font-extrabold sm:text-4xl md:text-6xl">
                  MD MONIRUL ISLAM
                </h1>
                <p className="sm:text-xs md:text-2xl text-[#909090] pt-1 font-bold">
                  Front-end Developer
                </p>
              </div>
              {/* icons */}
              <div className="">
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
            <div className="w-full">
              <div className="">
                <img
                  src="src/assets/Image-Gallery/image 17.png"
                  alt="tamag"
                  className="md:ml-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
