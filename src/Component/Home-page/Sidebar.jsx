import React from "react";
import NavItems from "../Shared-folder/NavItems";
import Hambargarmenu from "../IconLibrary/Hambargarmenu";
import Crossbutton from "../IconLibrary/Crossbutton";
import HomeIcon from "../IconLibrary/HomeIcon";

export default function sidebar() {
  return (
    <div className="w-full h-screen bg-mobileBgHeroImage bg-no-repeat bg-cover p-4 md:hidden">
      <div className="flex justify-between items-center ">
        <div>
          <HomeIcon />
        </div>
        <div>
          <button>
            <Hambargarmenu />
          </button>
          <button className="hidden">
            <Crossbutton />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <NavItems />
      </div>
    </div>
  );
}
