import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, IGatsbyImageData, getImage } from "gatsby-plugin-image";
import React from "react";
import { motion } from "framer-motion";
import { isMobile } from "react-device-detect";
import { useInView } from "react-intersection-observer";

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

const Service = () => {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: isMobile ? "80%" : "30%",
  });

  const servicesData = useStaticQuery(servicesQuery);
  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="max-w-screen-2xl w-full m-auto p-6 md:p-10 mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-items-center"
    >
      {servicesData.allServicesArrJson.nodes.map(
        (source: {
          image: IGatsbyImageData;
          title: string;
          description: string;
        }) => (
          <motion.div
            key={source.title}
            variants={item}
            className="h-[480px] w-full mt-6 xl:mt-0 rounded-md bg-[#f5e5ce] max-w-md md:max-w-sm border border-black shadow-[8px_8px_0px_0px_#101010] p-6"
          >
            <div className="w-full flex justify-center items-center">
              <GatsbyImage
                image={getImage(source.image) as IGatsbyImageData}
                alt={source.title}
              />
            </div>
            <h1 className="text-center font-bold text-2xl text-[#1A4D2E] uppercase">
              {source.title}
            </h1>
            <p className="text-center text-[#1A4D2E] text-lg font-medium mt-10">
              {source.description}
            </p>
          </motion.div>
        )
      )}
    </motion.div>
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
