import { Link } from "gatsby";
import React from "react";

export const Navbar = () => {
  return (
    <div className="max-w-screen-2xl w-full m-auto p-10">
      <nav className="flex justify-between items-center font-extrabold text-xl">
        <Link to="#stacks" className="uppercase">
          stacks
        </Link>
        <Link to="#portfolio" className="uppercase">
          Portfolio
        </Link>
        <Link
          to="/"
          className="uppercase clip-path py-6 px-16 bg-[#1A4D2E] text-[#f5e5ce]"
        >
          SANJI PUN
        </Link>
        <Link to="#about" className="uppercase">
          About
        </Link>
        <Link to="#socials" className="uppercase">
          socials
        </Link>
      </nav>
    </div>
  );
};
