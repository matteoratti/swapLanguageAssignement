import { motion } from "framer-motion";

import miniVideo from "../../assets/featured-section/fatured-section-video-minimized.svg";
import sectionHub from "../../assets/featured-section/featured-section-hub.svg";
import graphIcon from "../../assets/featured-section/featured-section-learning-overview.svg";

const FeaturedSection = () => {
  return (
    <>
      <section className="bg-gray">
        <div className="flex gap-40 justify-between items-center pt-[100px] pb-[120px] mx-[75px] ">
          <div className="overflow-hidden h-[600px] flex items-center">
            <motion.div
              initial={{ y: 200 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h3 className="font-montserrat font-bold text-3xl text-blue mb-4 first-letter:capitalize">
                learn with friends and co-workers in a Language Hub
              </h3>
              <p className="font-helvetica  text-blue leading-8">
                Language Hubs are communities where you can access learning
                material and share resources, memes and experiences with other
                internationals. Overcoming the language barrier is hard, but by
                helping each other, we can go from surviving to thriving.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative"
          >
            <img className="max-w-2xl" src={sectionHub} alt="" />
            <img className="absolute top-5 right-5" src={miniVideo} alt="" />
          </motion.div>
        </div>
      </section>

      <section className="bg-gray">
        <div className="flex gap-40 justify-between items-center pt-[50px] pb-[120px] mx-[75px] overflow-hidden h-full">
          <motion.div
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="font-montserrat font-bold text-3xl text-blue mb-4 first-letter:capitalize">
              Click play when it fits you
            </h3>
            <p className="font-helvetica  text-blue leading-8">
              After you log in, you&apos;ll find inspiring teachers in the fun,
              relatable, real-life video lessons. The lessons focus on everyday
              situations, so you can become more confident when talking at work
              or with locals on the street. Find the topic and level you need.
            </p>
          </motion.div>

          <div className="relative">
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="max-w-2xl"
              src={sectionHub}
              alt=""
            />
            <motion.img
              initial={{ x: 0, y: 0, scale: 1 }}
              whileInView={{ x: -500, y: 300, scale: 1.5 }}
              viewport={{ once: true, amount: 1 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="absolute top-5 right-5"
              src={miniVideo}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 114 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute top-[10px] right-[55px] max-w-[280px]"
              src={graphIcon}
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturedSection;
