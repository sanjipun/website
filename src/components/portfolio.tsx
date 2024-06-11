import React from "react";
import PortfolioCard from "./portfolio-card";

const Portfolio = () => {
  return (
    <div className="max-w-screen-2xl w-full m-auto mt-10 p-6 grid grid-cols-3 items-center justify-items-center">
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
