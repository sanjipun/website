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
      { name: "Learned React and Java" },
      { name: "Completed 3 projects in total." },
      {
        name: "Movie Recommendation System, E-Commerce and Image Steganography",
      },
    ],
  },
  {
    year: "2019",
    company: "AusNep IT",
    projects: [
      { name: "Worked on multiple projects in React and React Native" },
      { name: "Introduction to Typescript and Customizing themes." },
      { name: "Classi Deals, Classi Bazar, Laxmi-Pay etc." },
    ],
  },
  {
    year: "2021",
    company: "Pyxelchain Technologies (Previously Royal Protocol)",
    projects: [
      { name: "Introduction to Next JS and Gatsby JS." },
      { name: "Worked on various projects using CMS." },
      { name: "Used React/Next/Gatsby with CMS and learned Django." },
      { name: "Lead a team in 2 projects in total." },
      {
        name: "Official Website, PYXIS Wallet, Contract Registry etc",
      },
    ],
  },
  {
    year: "2023",
    company: "Aarawan Tech",
    projects: [
      { name: "Worked as a Senior Frontend Engineer." },
      {
        name: "Lead a team of 5 people in 2 projects.",
      },
      {
        name: "Official Site, Pharma Site, Educational Site etc",
      },
    ],
  },
];
const Timeline = () => {
  return (
    <div className="max-w-6xl w-full m-auto p-10">
      {TimelineArr.map((timeline) => (
        <div className="relative mt-14 min-w-[320px]" key={timeline.company}>
          <div className="absolute -top-10 -left-10 font-bold text-2xl fancy-border border border-black w-[75px] h-[75px] flex justify-center items-center bg-[#f5e5ce] text-[#1A4D2E]">
            <span>{timeline.year}</span>
          </div>
          <div className="rounded-md px-10 py-6 bg-[#eee0c9] text-[#1A4D2E] border border-black shadow-[8px_8px_0px_0px_#101010]">
            <h1 className="text-2xl xl:text-3xl font-bold pb-2">
              {timeline.company}
            </h1>
            {timeline.projects.map((project) => (
              <h3
                key={project.name}
                className="text-md lg:text-lg xl:text-xl mt-2 font-medium"
              >
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
