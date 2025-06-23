import React from "react";
import NavItems from "../Shared-folder/NavItems";
import Hambargarmenu from "../IconLibrary/Hambargarmenu";
import Crossbutton from "../IconLibrary/Crossbutton";

export default function sidebar() {
  return (
    <div className="w-full h-screen bg-mobileBgHeroImage bg-no-repeat bg-cover md:hidden">
      <div className="flex justify-end items-center pr-2 pt-2">
        <button>
          <Hambargarmenu />
        </button>
        <button className="hidden">
          <Crossbutton />
        </button>
      </div>
      <div className="flex justify-center items-center">
        <NavItems />
      </div>
    </div>
  );
}
