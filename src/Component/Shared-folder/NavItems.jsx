import React from "react";
const navContain = ["About me", "Skills", "Portfolio", "Contact Me"];

export default function navbar() {
  return (
    <nav className="">
      <ul className=" flex justify-end items-center space-x-8 pr-10">
        {navContain.map((item, index) => (
          <li key={index}>
            <a className="text-lg font-bold text-white" href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// max-w-[120rem] mx-auto bg-black
// max-w-[39.813rem]
