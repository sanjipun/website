import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";

export const Navbar = () => {
  return (
    <div className="max-w-screen-2xl w-full m-auto p-10">
      <nav className="flex justify-between items-center font-extrabold text-xl text-[#1A4D2E]">
        <button
          onClick={() => scrollTo("#stacks")}
          className="uppercase hidden lg:block"
        >
          stacks
        </button>
        <button
          onClick={() => scrollTo("#portfolio")}
          className="uppercase hidden lg:block"
        >
          Portfolio
        </button>
        <button
          onClick={() => scrollTo("#top")}
          className="uppercase clip-path border border-black py-6 px-16 bg-[#1A4D2E] text-[#f5e5ce]"
        >
          SANJI PUN
        </button>
        <button
          onClick={() => scrollTo("#services")}
          className="uppercase hidden lg:block"
        >
          services
        </button>
        <a href="https://github.com/sanjipun" className="uppercase flex">
          <span className="hidden lg:block">github</span>
          <StaticImage
            src="../images/github.png"
            alt="github freepik"
            width={25}
            height={25}
          />
        </a>
      </nav>
    </div>
  );
};
