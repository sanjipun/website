import React from "react";

const CountCard = ({ title, count }: { title: string; count: string }) => {
  return (
    <div className="uppercase mt-36 text-center font-black relative flex justify-center items-center h-32">
      <h1 className="text-6xl md:text-8xl absolute z-20 text-[#1A4D2E]">
        {title}
      </h1>
      <h2 className="text-9xl md:text-[170px] absolute text-[#eee0c9] opacity-70 z-10 drop-shadow-[1.2px_1.2px_1.2px_rgba(0,0,0,0.8)]">
        {count}
      </h2>
    </div>
  );
};

export default CountCard;
