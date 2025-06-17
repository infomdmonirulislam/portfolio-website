import React from "react";

export default function Contact() {
  return (
    <>
      <div className="max-w-[1920px] mx-auto">
        <div>
          <span className="flex justify-center items-center py-16">
            <h2 className="text-center inline-block border-4 border-black py-2 px-8 text-3xl font-bold">
              Contact
            </h2>
          </span>
          <p className="text-center">
            Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
            varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
            quis libero viverra facilisis ut ac est.
          </p>
        </div>
        <div className="py-16 flex justify-center items-center">
          <img src="/Separator.png" alt="" />
        </div>
        {/* Contact form */}
        <div className="max-w-[609px] mx-auto">
          <form className="space-y-6">
            <input
              className="block border-b-4 border-l-4 border-black w-full outline-none p-2"
              type="text"
              placeholder="ENTER YOUR NAME*"
            />

            <input
              className="block border-b-4 border-l-4 border-black w-full outline-none p-2"
              type="text"
              required
              placeholder="ENTER YOUR EMAIL*"
            />

            <input
              className="block border-b-4 border-l-4 border-black w-full outline-none p-2"
              type="number"
              required
              placeholder="PHONE NUMBER*"
            />

            <textarea
              className="block border-b-4 border-l-4 border-black w-full outline-none p-2 h-32"
              type="text"
              required
              placeholder="YOUR MESSAGE*"
            />
            <div className="flex justify-center items-center gap-6 p-8">
              <span className="w-[2px] h-[24px] bg-black"></span>
              <button className="text-base font-bold">Submit</button>
              <span className="w-[2px] h-[24px] bg-black"></span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
