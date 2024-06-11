import { Link } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import React from "react";

const MainIntro = () => {
  return (
    <div className="max-w-screen-2xl w-full m-auto p-10 mt-20 flex flex-col">
      <div className="grid grid-cols-2">
        <div>
          <div className="flex items-center">
            <p className="font-medium text-2xl text-[#1A4D2E] opacity-80 mr-6">
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
            <p className="font-extrabold text-7xl text-[#1A4D2E] leading-[80px]">
              Front-end developer bringing ideas to life with React.
            </p>
          </div>
          <Link to="#contact">
            <button className="mt-10 text-2xl px-6 py-4 bg-[#1A4D2E] rounded-md text-white shadow-[6px_6px_0px_0px_#101010]">
              CONTACT
            </button>
          </Link>
        </div>
        <div className="flex justify-end">
          <div className="p-4 bg-[#1A4D2E]">
            <StaticImage
              src="../images/computer.jpeg"
              alt="retro computer designed by Freepik"
              layout="fixed"
              width={500}
              height={500}
            ></StaticImage>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIntro;
