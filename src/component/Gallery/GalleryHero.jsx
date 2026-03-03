"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlinePhotograph, HiOutlineVideoCamera } from "react-icons/hi";

const GalleryHero = ({ data }) => {
  return (
    <section className="relative h-[60vh] min-h-125 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hookah/hookan1.jpg"
          alt="Gallery Background"
          width={1000}
          height={1000}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1A2F4B]/90 via-[#1A2F4B]/70 to-[#1A2F4B]"></div>
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-20 right-20 text-[#F4B400]/20 hidden lg:block"
      >
        <HiOutlinePhotograph className="text-9xl" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-20 left-20 text-[#F4B400]/20 hidden lg:block"
      >
        <HiOutlineVideoCamera className="text-9xl" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-[#F4B400] text-[#1A1A1A] rounded-full text-sm font-semibold">
              📸 Visual Stories
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-white">{data.title}</span>
            <br />
            <span className="text-[#F4B400]">{data.subtitle}</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-xl max-w-2xl mx-auto"
          >
            {data.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-8 mt-12"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4B400]">20+</div>
              <div className="text-white/60 text-sm">Photos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4B400]">4</div>
              <div className="text-white/60 text-sm">Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#F4B400]">6</div>
              <div className="text-white/60 text-sm">Categories</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8 }}
            fill="#1A2F4B"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,154.7C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default GalleryHero;
