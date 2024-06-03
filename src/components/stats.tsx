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
    <div className="grid grid-cols-2 gap-2">
      {StatsDetails.map((stat) => (
        <div
          key={stat.title}
          className="flex flex-col items-center justify-center bg-[#10172a] rounded-2xl py-6"
        >
          <span className="text-5xl">{stat.count}+</span>
          <span className="px-4 pt-1 pb-2 border rounded-full text-sm flex items-center">
            {stat.icon({ color: "white", fontSize: 15 })}
            <span className="pl-1">{stat.title}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
