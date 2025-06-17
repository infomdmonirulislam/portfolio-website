import React from "react";

const filterBar = ["ALL", "CODED", "DESIGNED"];
const WorkGallery = [
  {
    backgroundImage: "../project1.png",
    workType: "Code, Design",
    projectName: "Visit Patagonia",
    projectTitle: "Restaurant browsing in React.js (Using Yelp API)",
    projectDemo: "| DEMO |",
    seeMore: "| MORE |",
  },
  {
    backgroundImage: "../project2.png",
    workType: "Code, Design",
    projectName: "My Resume",
    projectTitle: "Resume in React.js",
    projectDemo: "| DEMO |",
    seeMore: "| MORE |",
  },
  {
    backgroundImage: "../project3.png",
    workType: "Code, Design",
    projectName: "Wethar App",
    projectTitle: "Wethar App browsing in React.js",
    projectDemo: "| DEMO |",
    seeMore: "| MORE |",
  },
  {
    backgroundImage: "../project1.png",
    workType: "Code, Design",
    projectName: "Visit Patagonia",
    projectTitle: "Restaurant browsing in React.js (Using Yelp API)",
    projectDemo: "| DEMO |",
    seeMore: "| MORE |",
  },
  {
    backgroundImage: "../project2.png",
    workType: "Code, Design",
    projectName: "My Resume",
    projectTitle: "Resume in React.js",
    projectDemo: "| DEMO |",
    seeMore: "| MORE |",
  },
  {
    backgroundImage: "../project3.png",
    workType: "Code, Design",
    projectName: "Wethar App",
    projectTitle: "Wethar App browsing in React.js",
    projectDemo: "| DEMO |",
    seeMore: "| MORE |",
  },
];

export default function Portfolio() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto text-white">
        <div className="bg-portfolioImage bg-no-repeat object-cover">
          <span className="flex justify-center items-center py-16">
            <h2 className="text-center inline-block border-4 border-black py-2 px-8 text-3xl font-bold">
              Portfolio
            </h2>
          </span>
        </div>
        {/* Filter bar */}
        <div className="bg-[#1A1A1A] text-white">
          <ul className=" ">
            <div className="flex justify-center items-center space-x-4 py-6">
              {filterBar.map((item, index) => (
                <li className="" key={index}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </div>
          </ul>
        </div>
        {/* Portfolio */}
        <div className="grid grid-cols-3 gap-1">
          {WorkGallery.map((portfolio, cardIndex) => (
            <div key={cardIndex} className="relative">
              <img src={portfolio.backgroundImage} alt="" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <i>{portfolio.workType}</i>
                <h2>{portfolio.projectName}</h2>
                <p>{portfolio.projectTitle}</p>
                <div>
                  <a href="#">{portfolio.projectDemo}</a>
                  <a href="#">{portfolio.seeMore}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <p className="text-center bg-[#1A1A1A] py-6">
            And many more to come!
          </p>
        </div>
      </div>
    </>
  );
}
