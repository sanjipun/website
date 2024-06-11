import React from "react";
import { FaFlag } from "@react-icons/all-files/fa/FaFlag";
import { BsPersonFill } from "@react-icons/all-files/bs/BsPersonFill";
import { FaStar } from "@react-icons/all-files/fa/FaStar";
import { GiOfficeChair } from "@react-icons/all-files/gi/GiOfficeChair";

type CustomIconType = React.FC<React.SVGProps<SVGSVGElement>>;

const StatsDetails: { title: string; count: number; icon: CustomIconType }[] = [
  {
    title: "Projects",
    count: 28,
    icon: FaFlag,
  },
  {
    title: "Clients",
    count: 12,
    icon: BsPersonFill,
  },
  {
    title: "YOE",
    count: 5,
    icon: FaStar,
  },
  {
    title: "Interns Mentored",
    count: 22,
    icon: BsPersonFill,
  },
  {
    title: "Companies",
    count: 2,
    icon: GiOfficeChair,
  },
  {
    title: "Partner",
    count: 1,
    icon: BsPersonFill,
  },
];

const Stats = () => {
  return (
    <div className="max-w-screen-2xl w-full m-auto grid grid-cols-6 mt-10">
      <div className="flex flex-col text-center border-r border-b border-black p-6">
        <span className="text-6xl font-bold text-[#1A4D2E]">10+</span>
        <span className="text-lg font-medium">Clients</span>
      </div>
      <div className="flex flex-col text-center border-r border-b border-black p-6">
        <span className="text-6xl font-bold text-[#1A4D2E]">22+</span>
        <span className="text-lg font-medium">Interns Mentored</span>
      </div>
      <div className="flex flex-col text-center border-r border-b border-black p-6">
        <span className="text-6xl font-bold text-[#1A4D2E]">2+</span>
        <span className="text-lg font-medium">Companies</span>
      </div>
      <div className="border-b border-black p-6"></div>
      <div className="border-b border-black"></div>
      <div className="border-b border-black"></div>
    </div>
  );
};

export default Stats;
