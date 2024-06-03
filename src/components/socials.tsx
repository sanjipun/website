import React from "react";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaGlobe } from "@react-icons/all-files/fa/FaGlobe";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";

type CustomIconType = React.FC<React.SVGProps<SVGSVGElement>>;

const SocialDetails: { title: string; icon: CustomIconType }[] = [
  {
    title: "Github",
    icon: FaGithub,
  },
  {
    title: "LinkedIn",
    icon: FaLinkedin,
  },
  {
    title: "Website",
    icon: FaGlobe,
  },
  {
    title: "Email",
    icon: MdEmail,
  },
  {
    title: "Facebook",
    icon: FaFacebook,
  },
  {
    title: "Instagram",
    icon: FaInstagram,
  },
];

const Socials = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      {SocialDetails.map((stat) => (
        <div
          key={stat.title}
          className="flex flex-col items-center justify-center bg-[#10172a] rounded-2xl py-6"
        >
          <span className="px-4 pt-1 pb-2 text-sm flex flex-col items-center">
            {stat.icon({ color: "white", fontSize: 50 })}
            <span className="pl-1">{stat.title}</span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Socials;
