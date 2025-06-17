import React from "react";
// import { useState } from "react";
import NavItems from "../Shared-folder/NavItems";
import HomeIcon from "../IconLibrary/HomeIcon";
import EmailIcon from "../IconLibrary/EmailIcon";
import GithubIcon from "../IconLibrary/GithubIcon";
import LinkedinIcon from "../IconLibrary/LinkedinIcon";

const icons = [EmailIcon, GithubIcon, LinkedinIcon];

export default function Hero() {
  // const [works, setWorks] = useState("markiting");
  // const handleClick = () => {
  //   setWorks("cooding");
  // };

  return (
    <>
      <div className="max-w-[1920px] max-h-[1022px] mx-auto">
        <div className="bg-bannerImage bg-no-repeat bg-cover">
          <div className="flex justify-between items-center">
            {/* left side */}
            <div className="w-full pl-10 relative">
              {/* logo */}
              <div className="absolute -top-44">
                <HomeIcon />
              </div>
              <div className="pb-7">
                <h2 className="text-4xl font-bold pb-5">Hi, I am</h2>
                <h1 className="text-7xl font-bold pb-3">MD MONIRUL ISLAM</h1>
                <p className="text-2xl font-extrabold">Front-end Developer</p>
              </div>
              {/* icons */}
              <div>
                <ul className="flex justify-start items-center space-x-4">
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

            {/* right side */}

            <div className="text-white w-full">
              <div className="pt-2 pr-8">
                <NavItems />
              </div>
              <div className="w-full sm:w-1/2 md:w-[400px] lg:w-[500px] xl:w-[600px] mx-auto px-4 pt-4">
                <img src="src/assets/Image-Gallery/image 17.png" alt="tamag" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
