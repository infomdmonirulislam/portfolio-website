//

import React from "react";
import FigmaIcon from "../IconLibrary/FigmaIcon";
import Html5Icon from "../IconLibrary/Html5Icon";
import CssIcon from "../IconLibrary/CssIcon";
import BootstrapIcon from "../IconLibrary/BootstrapIcon";
import GitIcon from "../IconLibrary/GitIcon";
import JsIcon from "../IconLibrary/JsIcon";
import ReactIcon from "../IconLibrary/ReactIcon";
import SassIcon from "../IconLibrary/SassIcon";
import NodeJs from "../IconLibrary/NodeJs";
import MySql from "../IconLibrary/MySql";
import MongoDb from "../IconLibrary/MongoDb";
import TypeScript from "../IconLibrary/TypeScript";
import Angielski from "../IconLibrary/Angielski";
import Hiszpanski from "../IconLibrary/Hiszpanski";
import CplasPlas from "../IconLibrary/CplasPlas";
import C from "../IconLibrary/C";

// Map string names to actual React components
// const iconMap = {
//   FigmaIcon,
//   Html5Icon,
//   Css3Icon,
//   BootstrapIcon,
//   GitIcon,
//   JsIcon,
//   ReactIcon,
//   SassIcon,
//   NodeJs,
//   MySql,
//   MongoDb,
//   TypeScript,
//   Angielski,
//   Hiszpanski,
//   CplasPlas,
//   C,
// };

const skillSets = [
  {
    catagory: "USING NOW:",
    skill: [
      { name: "HTML5", icon: Html5Icon },
      { name: "CSS3", icon: CssIcon },
      { name: "SASS", icon: SassIcon },
      { name: "JAVASCRIPT", icon: JsIcon },
      { name: "REACT", icon: ReactIcon },
      { name: "BOOTSTRAP", icon: BootstrapIcon },
      { name: "GIT", icon: GitIcon },
      { name: "Figma", icon: FigmaIcon },
    ],
  },
  {
    catagory: "LEARNING:",
    skill: [
      { name: "NODEJS", icon: NodeJs },
      { name: "MySQL", icon: MySql },
      { name: "MONGODB", icon: MongoDb },
      { name: "TYPESCRIPT", icon: TypeScript },
    ],
  },
  {
    catagory: "OTHER SKILLS:",
    skill: [
      { name: "ANGIELSKI C1/C2", icon: Angielski },
      { name: "HISZPAŃSKI B1/B2", icon: Hiszpanski },
      { name: "C++", icon: CplasPlas },
      { name: "C", icon: C },
    ],
  },
];

export default function Skills() {
  return (
    <div className="max-w-[1920px] mx-auto bg-[#C4C4C4]">
      <span className="flex justify-center items-center py-16">
        <h2 className="text-center inline-block border-4 border-black py-2 px-8 text-3xl font-bold">
          Skills
        </h2>
      </span>

      <div>
        <div className="max-w-[1020px] mx-auto pb-10">
          {skillSets.map((item, index) => (
            <div key={index}>
              <div className="py-12">
                <h2 className="text-3xl font-bold">{item.catagory}</h2>
              </div>
              <div className="grid grid-cols-4 gap-y-5">
                {item.skill.map((skillIcon, list) => (
                  <div className="" key={list}>
                    <div className="">
                      {React.createElement(skillIcon.icon)}
                      <p className="">{skillIcon.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
