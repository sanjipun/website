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
  return (
    <div>
      <div>
        <span className="px-4 py-2 border rounded-2xl">ABOUT ME</span>
      </div>
      <div className="flex mt-10">
        <StaticImage
          src="../images/sanji.png"
          height={150}
          width={150}
          alt="Image of Mr. Sanji"
          className="border rounded-2xl"
        />
        <div className="pl-4">
          <span className="text-7xl">sanji pun</span>
          <p>I am a Web Developer</p>
          <p>Frontend Engineer at Aarawan Tech</p>
        </div>
      </div>
      <div className="flex flex-wrap mt-6">
        {Abouts.map((about) => (
          <div
            key={about.title}
            className="flex justify-center items-center px-3 py-1 mt-3 mr-3 border rounded-xl"
          >
            {about.icon({ fontSize: 20 })}
            <span className="pl-1">{about.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainIntro;
