import React from "react";
import HomeIcon from "../IconLibrary/HomeIcon";
import NavItems from "../Shared-folder/NavItems";

export default function Header() {
  return (
    <header>
      <div className="max-w-[1920px] mx-auto flex justify-between items-center">
        <div>
          <HomeIcon />
        </div>
        <div>
          <NavItems />
        </div>
      </div>
    </header>
  );
}
