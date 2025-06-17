import React from "react";
import ItbIcon from "../IconLibrary/ItbIcon";

export default function Itberries() {
  return (
    <>
      <div className="max-w-[1920px] max-h-[313px] mx-auto">
        <div className="bg-[#1D1D1D] text-white flex justify-between items-center lg:overflow-hidden">
          <div className="w-full p-6">
            <h2>IT BERRIES</h2>
            <p className="pt-4 text-base">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
              quis libero viverra facilisis ut ac est. Morbi commodo, eros in
              dignissim tempus, lacus odio rutrum augue, in semper sem magna
              quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit
              amet elit. Nunc egestas nisi eget enim gravida facilisis.
              Pellentesque laoreet varius turpis vel pharetra. Ut ante justo,
              consequat vitae elementum tempor, accumsan nec eros.
            </p>
            <button className="pt-5">READ MORE</button>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <span className="absolute -top-[240px] -rotate-[-23.89°] ">
              <ItbIcon />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
