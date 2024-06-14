import { StaticImage } from "gatsby-plugin-image";
import scrollTo from "gatsby-plugin-smoothscroll";
import React from "react";
import { motion } from "framer-motion";

const MainIntro = () => {
  const generateRandomTop = () => {
    return Math.floor(Math.random() * (450 - 0)) + 0;
  };
  const generateRandomLeft = () => {
    return Math.floor(Math.random() * (600 - 50)) + 50;
  };

  return (
    <div
      id="top"
      className="max-w-screen-2xl w-full m-auto p-6 md:p-10 mt-20 flex flex-col"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <div className="flex items-center">
            <p className="font-medium text-md md:text-2xl text-[#1A4D2E] opacity-80 mr-6">
              Get your website made at fraction of cost.
            </p>
            <StaticImage
              src="../images/star.png"
              alt="retro star"
              layout="fixed"
              width={60}
              height={55}
            />
          </div>
          <div className="mt-10 shadow-[13px_11px_0px_0px_#101010] border border-black rounded-lg px-10 py-10 max-w-4xl bg-[#f5e5ce]">
            <div className="flex pb-6">
              <div className="rounded-full bg-black w-4 h-4 mr-2"></div>
              <div className="rounded-full bg-black w-4 h-4 mr-2"></div>
              <div className="rounded-full bg-black w-4 h-4"></div>
            </div>
            <p className="font-extrabold text-5xl xl:text-7xl text-[#1A4D2E]">
              Front-end developer bringing ideas to life with React.
            </p>
          </div>
          <button
            onClick={() => scrollTo("#contact")}
            className="mt-10 text-2xl px-6 py-4 bg-[#1A4D2E] rounded-sm text-white shadow-[6px_6px_0px_0px_#101010]"
          >
            Contact
          </button>
        </div>
        <div className="flex justify-end relative lg:h-[530px] invisible lg:visible h-0">
          <div className="p-4 fancy-border-hero border border-black bg-[#f5e5ce] w-full ml-20">
            {/* <StaticImage
              src="../images/computer.jpeg"
              alt="retro computer designed by Freepik"
              layout="fixed"
              width={500}
              height={500}
            ></StaticImage> */}
            <motion.div
              className="absolute z-10 m-10"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{
                top: generateRandomTop(),
                left: generateRandomLeft(),
                scale: [0.8, 1, 1, 0.8, 0.8],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              // style={{
              //   top: `${generateRandomTop()}px`,
              //   left: `${generateRandomLeft()}px`,
              // }}
              initial={{ top: generateRandomTop(), left: generateRandomLeft() }}
            >
              <StaticImage
                src="../images/browser.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 m-10"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{
                top: generateRandomTop(),
                left: generateRandomLeft(),
                scale: [0.8, 1, 1, 0.8, 0.8],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              // style={{
              //   top: `${generateRandomTop()}px`,
              //   left: `${generateRandomLeft()}px`,
              // }}
              initial={{ top: generateRandomTop(), left: generateRandomLeft() }}
            >
              <StaticImage
                src="../images/backend.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 m-10"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{
                top: generateRandomTop(),
                left: generateRandomLeft(),
                scale: [0.8, 1, 1, 0.8, 0.8],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              // style={{
              //   top: `${generateRandomTop()}px`,
              //   left: `${generateRandomLeft()}px`,
              // }}
              initial={{ top: generateRandomTop(), left: generateRandomLeft() }}
            >
              <StaticImage
                src="../images/games.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 m-10"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{
                top: generateRandomTop(),
                left: generateRandomLeft(),
                scale: [0.8, 1, 1, 0.8, 0.8],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              // style={{
              //   top: `${generateRandomTop()}px`,
              //   left: `${generateRandomLeft()}px`,
              // }}
              initial={{ top: generateRandomTop(), left: generateRandomLeft() }}
            >
              <StaticImage
                src="../images/globe.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 m-10"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{
                top: generateRandomTop(),
                left: generateRandomLeft(),
                scale: [0.8, 1, 1, 0.8, 0.8],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              // style={{
              //   top: `${generateRandomTop()}px`,
              //   left: `${generateRandomLeft()}px`,
              // }}
              initial={{ top: generateRandomTop(), left: generateRandomLeft() }}
            >
              <StaticImage
                src="../images/mail.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 m-10"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{
                top: generateRandomTop(),
                left: generateRandomLeft(),
                scale: [0.8, 1, 1, 0.8, 0.8],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              // style={{
              //   top: `${generateRandomTop()}px`,
              //   left: `${generateRandomLeft()}px`,
              // }}
              initial={{ top: generateRandomTop(), left: generateRandomLeft() }}
            >
              <StaticImage
                src="../images/message.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 m-10"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{
                top: generateRandomTop(),
                left: generateRandomLeft(),
                scale: [0.8, 1, 1, 0.8, 0.8],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              // style={{
              //   top: `${generateRandomTop()}px`,
              //   left: `${generateRandomLeft()}px`,
              // }}
              initial={{ top: generateRandomTop(), left: generateRandomLeft() }}
            >
              <StaticImage
                src="../images/search.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 m-10"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{
                top: generateRandomTop(),
                left: generateRandomLeft(),
                scale: [0.8, 1, 1, 0.8, 0.8],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              // style={{
              //   top: `${generateRandomTop()}px`,
              //   left: `${generateRandomLeft()}px`,
              // }}
              initial={{ top: generateRandomTop(), left: generateRandomLeft() }}
            >
              <StaticImage
                src="../images/blockchain.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </motion.div>
            <motion.div
              className="absolute z-10 m-10"
              whileHover={{ scale: [null, 1.5, 1.4] }}
              animate={{
                top: generateRandomTop(),
                left: generateRandomLeft(),
                scale: [0.8, 1, 1, 0.8, 0.8],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              // style={{
              //   top: `${generateRandomTop()}px`,
              //   left: `${generateRandomLeft()}px`,
              // }}
              initial={{ top: generateRandomTop(), left: generateRandomLeft() }}
            >
              <StaticImage
                src="../images/github.png"
                alt="Icon by Assia Benkerroum freepik"
                width={100}
                height={100}
                layout="fixed"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainIntro;
