import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navbar } from "../components/navbar";
import MainIntro from "../components/main-intro";
import Stats from "../components/stats";
import Stacks from "../components/stacks";
import Portfolio from "../components/portfolio";
import Timeline from "../components/timeline";
import Service from "../components/service";
import Contact from "../components/contact";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <div className="border border-black" />
      <MainIntro />
      <Stats />
      <Stacks />
      <Portfolio />
      <Timeline />
      <Service />
      <div className="border border-black" />
      <Contact />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sanji Pun</title>;
