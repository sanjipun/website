import React from "react";

const CountCard = ({ title, count }: { title: string; count: string }) => {
  return (
    <div className="uppercase mt-36 text-center font-black relative flex justify-center items-center h-32">
      <h1 className="text-6xl md:text-8xl absolute z-20 text-[#1A4D2E]">
        {title}
      </h1>
      <h2 className="text-9xl md:text-[170px] absolute text-[#eee0c9] z-10">
        {count}
      </h2>
    </div>
  );
};

export default CountCard;
