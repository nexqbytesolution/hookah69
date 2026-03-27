"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineMail, HiOutlinePhone, HiHome } from "react-icons/hi";
const ContactHero = () => {
  return (
    <section className="relative h-[50vh] min-h-100 w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hookah/hookan1.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#1A2F4B]/90 via-[#1A2F4B]/70 to-[#1A2F4B]"></div>
      </div>

      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-20 right-20 text-[#F4B400]/20 hidden lg:block"
      >
        <HiOutlineMail className="text-9xl" />
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-20 left-20 text-[#F4B400]/20 hidden lg:block"
      >
        <HiHome className="text-9xl" />
      </motion.div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center">
        <div className="text-center max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Contact</span>
            <br />
            <span className="text-[#F4B400]">Hookah69</span>
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto"
          >
            We&apos;re here to help 10:00 AM to 10:00 PM. Reach out to us
            anytime for reservations, inquiries, or just to say hello!
          </motion.p>

          {/* Quick Contact Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <a
              href="tel:+9779702027432"
              className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#F4B400] transition-all duration-300 border border-white/20 hover:border-transparent"
            >
              <HiOutlinePhone className="text-[#F4B400] group-hover:text-[#1A2F4B] text-xl" />
              <span className="text-white group-hover:text-[#1A2F4B]">
                Call Now
              </span>
            </a>
            <a
              href="mailto:gyaudan@gmail.com"
              className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#F4B400] transition-all duration-300 border border-white/20 hover:border-transparent"
            >
              <HiOutlineMail className="text-[#F4B400] group-hover:text-[#1A2F4B] text-xl" />
              <span className="text-white group-hover:text-[#1A2F4B]">
                Email Us
              </span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
