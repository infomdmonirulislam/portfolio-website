import React from "react";
import NavItems from "../Shared-folder/NavItems";

export default function sidebar() {
  return (
    <div className="w-full h-screen bg-mobileBgHeroImage bg-no-repeat bg-cover md:hidden">
      <div className="flex justify-center items-center">
        <NavItems />
      </div>
    </div>
  );
}
