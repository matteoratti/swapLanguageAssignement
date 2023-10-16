import { motion, useScroll, useTransform } from "framer-motion";

import miniVideo from "../../assets/featured-section/fatured-section-video-minimized.svg";
import sectionHub from "../../assets/featured-section/featured-section-hub.svg";
import graphIcon from "../../assets/featured-section/featured-section-learning-overview.svg";

const FeaturedSection = () => {
  const { scrollYProgress } = useScroll();

  // text carousel
  const yTranslate = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.6, 0.8],
    ["100vh", "0vh", "0vh", "0vh", "-100vh"]
  );
  const yopacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  // section hub
  const imgOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const imgTranslateX = useTransform(
    scrollYProgress,
    [0, 0.2],
    ["900px", "-50px"]
  );

  // minivideo -500 300
  const minivideoTranslateX = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["0px", "-400px"]
  );
  const minivideoTranslateY = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["0px", "300px"]
  );
  const minivideoScale = useTransform(scrollYProgress, [0.6, 1], ["1", "1.5"]);

  // graph image 400px 113px
  const graphTranslateX = useTransform(
    scrollYProgress,
    [0.6, 1],
    ["500px", "78px"]
  );

  scrollYProgress.on("change", v => {
    console.log(v);
  });

  return (
    <>
      <section className="h-[8000px] relative bg-gray">
        <div className="h-[100vh] sticky top-0 w-full">
          <div className="flex justify-center items-center w-full h-full">
            <motion.div
              style={{ y: yTranslate, opacity: yopacity }}
              className="ml-20 mr-[8rem] h-full"
            >
              <div className="h-full w-full flex flex-col justify-center">
                <h3 className="font-montserrat font-bold text-3xl text-blue mb-4 first-letter:capitalize">
                  learn with friends and co-workers in a Language Hub
                </h3>
                <p className="font-helvetica  text-blue leading-8">
                  Language Hubs are communities where you can access learning
                  material and share resources, memes and experiences with other
                  internationals. Overcoming the language barrier is hard, but
                  by helping each other, we can go from surviving to thriving.
                </p>
              </div>

              <div className="h-full w-full flex flex-col justify-center">
                <h3 className="font-montserrat font-bold text-3xl text-blue mb-4 first-letter:capitalize">
                  Click play when it fits you
                </h3>
                <p className="font-helvetica  text-blue leading-8">
                  After you log in, you&apos;ll find inspiring teachers in the
                  fun, relatable, real-life video lessons. The lessons focus on
                  everyday situations, so you can become more confident when
                  talking at work or with locals on the street. Find the topic
                  and level you need.
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: imgOpacity, x: imgTranslateX }}
              className="relative"
            >
              <motion.img className="max-w-2xl" src={sectionHub} alt="" />
              <motion.img
                style={{
                  x: minivideoTranslateX,
                  y: minivideoTranslateY,
                  scale: minivideoScale,
                }}
                className="absolute top-5 right-5"
                src={miniVideo}
                alt=""
              />
              <motion.img
                style={{ x: graphTranslateX }}
                className="absolute top-3 right-5 max-w-[260px]"
                src={graphIcon}
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedSection;
