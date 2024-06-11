import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { FaLocationArrow } from "@react-icons/all-files/fa/FaLocationArrow";
import { FaSignLanguage } from "@react-icons/all-files/fa/FaSignLanguage";
import { FaGraduationCap } from "@react-icons/all-files/fa/FaGraduationCap";
import { FaClock } from "@react-icons/all-files/fa/FaClock";
import { FaBook } from "@react-icons/all-files/fa/FaBook";

type CustomIconType = React.FC<React.SVGProps<SVGSVGElement>>;

const Abouts: { title: string; icon: CustomIconType }[] = [
  {
    title: "Nepal",
    icon: FaLocationArrow,
  },
  {
    title: "English & Nepali",
    icon: FaSignLanguage,
  },
  {
    title: "Computer Engineering",
    icon: FaGraduationCap,
  },
  {
    title: "GMT +5:45",
    icon: FaClock,
  },
  {
    title: "National College of Engineering",
    icon: FaBook,
  },
];
const MainIntro = () => {
  return <div></div>;
};

export default MainIntro;
