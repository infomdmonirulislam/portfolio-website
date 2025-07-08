import React from "react";

export default function AboutMe() {
  const qualification = [
    {
      icon: "/Design-image.png",
      title: "DESIGN",
      details:
        "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
    },
    {
      icon: "/Development-image.png",
      title: "DEVELOPMENT",
      details:
        "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
    },
    {
      icon: "/Maintanenc-image.png",
      title: "MAINTENANCE",
      details:
        "I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job.",
    },
  ];

  return (
    <>
      <div className="max-w-[1920px] mx-auto bg-[#D7D7D7] px-5">
        <div className="pt-12">
          <span className=" flex justify-center items-center">
            <h2 className="text-center inline-block border-4 border-black py-2 px-8 text-3xl font-bold">
              About Me
            </h2>
          </span>
          <span className="flex justify-center items-center">
            <p className="w-[783px] pt-10 text-center">
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
              quis libero viverra facilisis ut ac est.
            </p>
          </span>
          <span className="pt-10 flex justify-center items-center">
            <p className="inline-block  text-center font-semibold border-black border-x-2 px-6">
              EXPLORE
            </p>
          </span>
          <div className="pt-16 pb-8 flex justify-center items-center">
            <img src="/Separator.png" alt="" />
          </div>
        </div>

        {/* details about me */}
        <div className="sm:pb-6 md:grid grid-cols-2 pb-8">
          {qualification.map((item, index) => (
            <div
              key={index}
              className={`pt-3 max-w-[516px] max-h-[177px] mx-auto ${
                index === qualification.length - 1
                  ? "col-span-2 justify-self-center w-1/2 pt-8"
                  : ""
              }`}
            >
              <span className="flex justify-start items-center space-x-2">
                <img src={item.icon} alt="" />
                <h3 className="text-xl font-bold">{item.title}</h3>
              </span>
              <p className="sm:pl-2 md:pl-0">{item.details}</p>
            </div>
          ))}
        </div>
        {/* Separator */}
        <div className="py-16 flex justify-center items-center">
          <img src="/Separator.png" alt="" />
        </div>
      </div>
    </>
  );
}
