import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Layout from "../components/layout";
import { IntroBar } from "../components/intro-bar";
import Stats from "../components/stats";
import Socials from "../components/socials";
import MainIntro from "../components/main-intro";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="col-span-12 bg-[#10172a] rounded-2xl p-6">
        <IntroBar />
      </div>
      <div className="grid grid-cols-12 grid-rows-10 gap-4 mt-4">
        <div className="col-span-3 row-span-3">
          <Stats />
        </div>
        <div className="col-span-6 col-start-4 row-span-3 bg-[#10172a] rounded-2xl p-6">
          <MainIntro />
        </div>
        <div className="col-span-3 col-start-10 row-span-3">
          <Socials />
        </div>
        <div className="col-span-12 row-span-1 col-start-1 row-start-4 bg-white rounded-2xl">
          10
        </div>
        <div className="col-span-7 row-span-2 col-start-6 row-start-5">11</div>
        <div className="col-span-12 col-start-1 row-start-5">12</div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sanji Pun</title>;
