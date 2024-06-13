import React from "react";

const Stacks = () => {
  return (
    <div id="stacks" className="max-w-screen-2xl w-full m-auto mt-10 p-6">
      <div className="bg-[#1A4D2E] shadow-[13px_11px_0px_0px_#101010] rounded-md px-6 py-12 text-[#eee0c9] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 items-center justify-items-center text-center md:text-start text-5xl font-extrabold">
        <span className="mt-6 xl:mt-0">Next JS</span>
        <span className="mt-6 xl:mt-0">Gatsby JS</span>
        <span className="mt-6 xl:mt-0">React JS</span>
        <span className="mt-6 xl:mt-0">Django</span>
        <span className="mt-6 xl:mt-0">Vanilla JS</span>
      </div>
    </div>
  );
};

export default Stacks;
