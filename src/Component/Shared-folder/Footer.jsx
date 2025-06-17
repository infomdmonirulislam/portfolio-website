import React from "react";
import UparrowIcon from "../IconLibrary/UparrowIcon";
import Facebook from "../IconLibrary/Facebook";
import Instagram from "../IconLibrary/Instagram";
import Email from "../IconLibrary/Email";
import LinkedinWhiteIcon from "../IconLibrary/LinkedinWhiteIcon";

const icons = [Facebook, LinkedinWhiteIcon, Instagram, Email];

export default function Footer() {
  return (
    <div className="text-white bg-[#1A1A1A] py-8">
      <div>
        <button className="w-full mx-auto">
          <span className="flex justify-center items-center">
            <UparrowIcon />
          </span>
          <span>BACK TO TOP</span>
        </button>
      </div>
      <div className="py-8">
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
      <div className="flex justify-center items-center">
        <p>@2020 Tomasz Gajda All Rights Reserved.</p>
      </div>
    </div>
  );
}
