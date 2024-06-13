import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";

const MainIntro = () => {
  return (
    <div
      id="top"
      className="max-w-screen-2xl w-full m-auto p-6 md:p-10 mt-20 flex flex-col"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="flex items-center">
            <p className="font-medium text-md md:text-2xl text-[#1A4D2E] opacity-80 mr-6">
              Get your website made at fraction of cost.
            </p>
            <StaticImage
              src="../images/star.png"
              alt="retro star"
              layout="fixed"
              width={60}
              height={55}
            />
          </div>
          <div className="mt-10 shadow-[13px_11px_0px_0px_#101010] border border-black rounded-lg px-10 py-10 max-w-4xl bg-[#f5e5ce]">
            <div className="flex pb-6">
              <div className="rounded-full bg-black w-4 h-4 mr-2"></div>
              <div className="rounded-full bg-black w-4 h-4 mr-2"></div>
              <div className="rounded-full bg-black w-4 h-4"></div>
            </div>
            <p className="font-extrabold text-5xl xl:text-7xl text-[#1A4D2E]">
              Front-end developer bringing ideas to life with React.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-10 text-2xl px-6 py-4 bg-[#1A4D2E] rounded-sm text-white shadow-[6px_6px_0px_0px_#101010]"
          >
            Contact
          </button>
        </div>
        <div className="flex justify-end relative lg:h-[530px] invisible lg:visible h-0">
          <div className="p-4 bg-[#1A4D2E]">
            <StaticImage
              src="../images/computer.jpeg"
              alt="retro computer designed by Freepik"
              layout="fixed"
              width={500}
              height={500}
            ></StaticImage>
            <div className="absolute right-0 top-0 rotate-45">
              <StaticImage
                src="../images/browser.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIntro;
