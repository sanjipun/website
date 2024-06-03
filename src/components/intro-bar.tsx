import React from "react";
import { BiPhoneCall } from "@react-icons/all-files/bi/BiPhoneCall";
import { FaCircle } from "@react-icons/all-files/fa/FaCircle";

export const IntroBar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex justify-between items-center border rounded-full px-3 py-1">
        <FaCircle size={10} color="green" />
        <span className="pl-2">Available to Work</span>
      </div>
      <div className="flex justify-between items-center border rounded-full px-3 py-1">
        <BiPhoneCall size={20} /> <span className="pl-1">Schedule a Call</span>
      </div>
    </div>
  );
};
