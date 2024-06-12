import React from "react";

const TimelineArr: {
  year: string;
  company: string;
  projects: { name: string }[];
}[] = [
  {
    year: "2018",
    company: "College Projects at National College of Engineering",
    projects: [
      { name: "Movie Recommendation system (Tkinter,Python)" },
      { name: "3 Way Image Stagenography (React, Java)" },
      { name: "E-Commerce with product recommendation (React, Java)" },
    ],
  },
  {
    year: "2019",
    company: "AusNep IT",
    projects: [
      { name: "Classi Deals (Wordpress)" },
      { name: "E-tax (React, Java)" },
      { name: "Classi Bazar (React, Java)" },
      { name: "Laxmi-Pay (React, React Native, Java)" },
    ],
  },
  {
    year: "2021",
    company: "Pyxelchain Technologies (Previously Royal Protocol)",
    projects: [
      { name: "RP Official Site (Gatsby JS, Typescript, Strapi) - CLOSED" },
      { name: "GameFiCap (Next JS, Typescript, Django) - CLOSED" },
      { name: "Royal Arcade (React JS, Typescript, Django)" },
      { name: "Pyxelchain Official Site (Next JS, Typescript, Strapi)" },
      {
        name: "Contract Registry (Next JS, React-Native), Typescript, Strapi)",
      },
      { name: "Pyx.IS Wallet (Next JS, Typescript, Strapi)" },
    ],
  },
  {
    year: "2023",
    company: "Aarawan Tech",
    projects: [
      { name: "Aarawan Tech Official Site (Vanilla JS)" },
      {
        name: "Fasbas E-comm - Fashion Buy and Sell (Next JS, Typescript, Django)",
      },
      {
        name: "Nepal Veterinary Education (Django Templating)",
      },
      {
        name: "Nameastay Traveller's Guide (Wordpress)",
      },
      { name: "Apple International Pharma (Next JS)" },
    ],
  },
];
const Timeline = () => {
  return (
    <div className="max-w-6xl w-full m-auto p-10">
      {TimelineArr.map((timeline) => (
        <div className="relative mt-14" key={timeline.company}>
          <div className="absolute -top-10 -left-10 font-bold text-2xl fancy-border border border-black w-[75px] h-[75px] flex justify-center items-center bg-[#f5e5ce] text-[#1A4D2E]">
            <span>{timeline.year}</span>
          </div>
          <div className="rounded-md px-10 py-6 bg-[#1A4D2E] text-[#eee0c9] border border-black shadow-[8px_8px_0px_0px_#101010]">
            <h1 className="text-3xl font-bold pb-2">{timeline.company}</h1>
            {timeline.projects.map((project) => (
              <h3 key={project.name} className="text-xl mt-2 font-medium">
                {project.name}
              </h3>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
