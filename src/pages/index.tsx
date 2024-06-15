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
import CountCard from "../components/count-card";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div className=" bg-blue-100 text-center">
        Inspiration taken from{" "}
        <a
          className="bg-red-100"
          href="https://dribbble.com/shots/24326538-Finance-landing-page-Retro-theme"
        >
          dribble,
        </a>{" "}
        and most of the assets are taken from{" "}
        <a className="bg-red-100" href="https://www.freepik.com/">
          freep!k.
        </a>
      </div>
      <Navbar />
      <div className="border border-black" />
      <MainIntro />
      <Stats />
      <Stacks />
      <div id="portfolio">
        <CountCard title="Portfolio" count="01" />
      </div>
      <Portfolio />
      <div id="timeline">
        <CountCard title="Timeline" count="02" />
      </div>
      <Timeline />
      <div id="services">
        <CountCard title="Services" count="03" />
      </div>
      <Service />
      <div className="border border-black" />
      <div id="contact">
        <CountCard title="Contact" count="04" />
      </div>
      <Contact />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sanji Pun</title>;
