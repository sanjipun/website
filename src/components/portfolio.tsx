import React from "react";
import PortfolioCard from "./portfolio-card";
import { graphql, useStaticQuery } from "gatsby";
import { IGatsbyImageData } from "gatsby-plugin-image";

const Portfolio = () => {
  const sourceData = useStaticQuery(dataQuery);
  return (
    <div className="max-w-screen-2xl w-full m-auto my-10 p-6 grid grid-cols-3 items-center justify-items-center">
      {sourceData.allProjectArrJson.nodes.map(
        (project: {
          projectName: string;
          projectDetails: string;
          link: string;
          projectImage: IGatsbyImageData;
        }) => {
          return (
            <PortfolioCard
              key={project.projectName}
              projectName={project.projectName}
              projectDetails={project.projectDetails}
              link={project.link}
              projectImage={project.projectImage}
            />
          );
        }
      )}
    </div>
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
