import React, { useRef } from "react";
import { animate } from "framer-motion";

function NumberCounter({ from, to }: { from: number; to: number }) {
  const nodeRef = useRef<HTMLParagraphElement>(null);

  animate(from, to, {
    duration: 1,
    onUpdate(value: number) {
      if (nodeRef.current) {
        nodeRef.current.textContent = Math.round(value).toString() + "+";
      }
    },
  });

  return <p ref={nodeRef} />;
}

const Stats = () => {
  return (
    <div className="max-w-screen-2xl w-full m-auto grid grid-cols-3 lg:grid-cols-6 mt-10">
      <div className="flex flex-col text-center border-r border-b border-black p-6">
        <span className="text-6xl font-bold text-[#1A4D2E]">
          <NumberCounter from={0} to={10} />
        </span>
        <span className="text-lg font-medium">Clients</span>
      </div>
      <div className="flex flex-col text-center border-r border-b border-black p-6">
        <span className="text-6xl font-bold text-[#1A4D2E]">
          <NumberCounter from={0} to={22} />
        </span>
        <span className="text-lg font-medium">Interns Mentored</span>
      </div>
      <div className="flex flex-col text-center border-r border-b border-black p-6">
        <span className="text-6xl font-bold text-[#1A4D2E]">
          <NumberCounter from={0} to={5} />
        </span>
        <span className="text-lg font-medium">Years of Experience</span>
      </div>
      <div className="border-b border-black p-6"></div>
      <div className="border-b border-black"></div>
      <div className="border-b border-black"></div>
    </div>
  );
};

export default Stats;
