import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import React from "react";

const PortfolioCard = ({
  projectName,
  projectDetails,
  link,
  projectImage,
}: {
  projectName: string;
  projectDetails: string;
  link: string;
  projectImage: IGatsbyImageData;
}) => {
  return (
    <div className="h-[450px] rounded-md bg-[#f5e5ce] max-w-md w-full mt-10 border border-black shadow-[8px_8px_0px_0px_#101010]">
      <GatsbyImage
        image={getImage(projectImage) as IGatsbyImageData}
        alt={projectName}
      />
      <div className="flex flex-col justify-center items-center pb-6 px-4">
        <h1 className="text-[#1A4D2E] mt-4 font-semibold text-2xl uppercase">
          {projectName}
        </h1>
        <p className="text-[#1A4D2E] font-medium text-center mt-4 text-lg px-2">
          {projectDetails}
        </p>
        <a href={link}>
          <button className="rounded-sm text-lg mt-4 px-6 py-4 bg-[#1A4D2E] text-[#eee0c9] shadow-[8px_8px_0px_0px_#101010]">
            View Website
          </button>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
