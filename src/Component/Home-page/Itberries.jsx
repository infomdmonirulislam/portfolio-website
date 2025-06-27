import React from "react";
import ItbIcon from "../IconLibrary/ItbIcon";

export default function Itberries() {
  return (
    <>
      <div className="max-w-[1920px] h-auto mx-auto">
        <div className="bg-[#1D1D1D] text-white flex flex-col-reverse md:flex-row justify-between items-center overflow-hidden">
          <div className="w-full text-center md:text-start p-4 ">
            <h2>IT BERRIES</h2>
            <p className="pt-2 md:pt-4 text-base">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
              quis libero viverra facilisis ut ac est. Morbi commodo, eros in
              dignissim tempus, lacus odio rutrum augue, in semper sem magna
              quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit
              amet elit. Nunc egestas nisi eget enim gravida facilisis.
              Pellentesque laoreet varius turpis vel pharetra. Ut ante justo,
              consequat vitae elementum tempor, accumsan nec eros.
            </p>
            <button className="pt-4 md:pt-5">| READ MORE |</button>
          </div>

          <div className="w-full md:w-1/3 relative">
            <span className="md:absolute -top-[240px] -rotate-[-23.89°]">
              <ItbIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
