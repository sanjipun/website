import React, { useEffect, useRef } from "react";
import PortfolioCard from "./portfolio-card";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";
import { motion, useAnimation, useInView } from "framer-motion";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const Portfolio = () => {
  const controls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const sourceData = useStaticQuery(dataQuery);
  return (
    <motion.div
      ref={ref}
      variants={container}
      animate={controls}
      initial="hidden"
      className="max-w-screen-2xl w-full m-auto my-10 p-6 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  items-center justify-items-center"
    >
      {sourceData.allProjectArrJson.nodes.map(
        (project: {
          projectName: string;
          projectDetails: string;
          link: string;
          projectImage: IGatsbyImageData;
        }) => {
          return (
            <motion.div variants={item} key={project.projectName}>
              <PortfolioCard
                projectName={project.projectName}
                projectDetails={project.projectDetails}
                link={project.link}
                projectImage={project.projectImage}
              />
            </motion.div>
          );
        }
      )}
    </motion.div>
  );
};

export default Portfolio;

const dataQuery = graphql`
  query PortfolioQuery {
    allProjectArrJson {
      nodes {
        projectDetails
        projectName
        projectImage {
          childImageSharp {
            gatsbyImageData(
              formats: PNG
              layout: CONSTRAINED
              aspectRatio: 2
              transformOptions: { cropFocus: NORTH }
              placeholder: BLURRED
            )
          }
        }
        link
      }
    }
  }
`;
