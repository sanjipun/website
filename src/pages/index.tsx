import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navbar } from "../components/navbar";
import MainIntro from "../components/main-intro";
import Stats from "../components/stats";
import Stacks from "../components/stacks";
import Portfolio from "../components/portfolio";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <div className="border border-black"></div>
      <MainIntro />
      <Stats />
      <Stacks />
      <Portfolio />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sanji Pun</title>;
