import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import React from "react";

const Service = () => {
  const servicesData = useStaticQuery(servicesQuery);
  return (
    <div className="max-w-screen-2xl w-full m-auto p-10 mt-20 grid grid-cols-4 items-center justify-items-center">
      {servicesData.allServicesArrJson.nodes.map(
        (source: {
          image: IGatsbyImageData;
          title: string;
          description: string;
        }) => (
          <div
            key={source.title}
            className="h-[480px] rounded-md bg-[#f5e5ce] max-w-xs w-full border border-black shadow-[8px_8px_0px_0px_#101010] p-6"
          >
            <div className="w-full flex justify-center items-center">
              <GatsbyImage
                image={getImage(source.image) as IGatsbyImageData}
                alt="Web Dev"
              />
            </div>
            <h1 className="text-center font-bold text-2xl text-[#1A4D2E] uppercase">
              {source.title}
            </h1>
            <p className="text-center text-[#1A4D2E] text-lg font-medium mt-10">
              {source.description}
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default Service;

const servicesQuery = graphql`
  query ServicesQuery {
    allServicesArrJson {
      nodes {
        title
        description
        image {
          childImageSharp {
            gatsbyImageData(
              formats: PNG
              layout: CONSTRAINED
              transformOptions: { cropFocus: NORTH }
              placeholder: BLURRED
              height: 180
              width: 200
            )
          }
        }
      }
    }
  }
`;
