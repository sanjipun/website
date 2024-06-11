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
  return <div className="grid grid-cols-2 gap-2"></div>;
};

export default Stats;
