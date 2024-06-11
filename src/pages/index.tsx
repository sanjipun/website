import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navbar } from "../components/navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
      <div className="grid grid-cols-12 grid-rows-10 gap-4 mt-4"></div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Sanji Pun</title>;
