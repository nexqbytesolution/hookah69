"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MenuHero = () => {
  return (
    <section className="relative h-[60vh] min-h-125 w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hookah/hookan1.jpg"
          alt="Menu Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1A2F4B]/90 via-[#1A2F4B]/70 to-[#1A2F4B]"></div>
      </div>

      {/* Animated Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-[#F4B400] text-[#1A1A1A] rounded-full text-sm font-semibold">
              🍽️ Explore Our Menu
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="text-white">Culinary</span>
            <br />
            <span className="text-[#F4B400]">Delights</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-xl max-w-2xl mx-auto"
          >
            Discover a symphony of flavors crafted with passion and precision
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default MenuHero;
