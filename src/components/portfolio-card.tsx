import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioCard = () => {
  return (
    <div className="max-w-md w-full mt-10 border border-black shadow-[8px_8px_0px_0px_#101010]">
      <StaticImage
        src="../images/computer.jpeg"
        alt="retro star"
        layout="fixed"
        width={390}
        height={250}
      />
      <div className="flex flex-col justify-center items-center pb-6">
        <h1 className="text-[#1A4D2E] mt-4 font-semibold text-2xl uppercase">
          Pyx.is wallet
        </h1>
        <p className="text-[#1A4D2E] text-center mt-4 text-lg px-2">
          Pyxis is a chain-agnostic, multi-layer blockchain solution offering a
          simple, smart, and secure crypto wallet integrated with PyxelChain’s
          tools
        </p>
        <Link to="https://pyx.is/">
          <button className="text-lg mt-4 px-6 py-4 bg-[#1A4D2E] text-[#eee0c9] shadow-[8px_8px_0px_0px_#101010]">
            View Website
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
