"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { HiOutlineMail, HiOutlinePhone, HiHome } from "react-icons/hi";
const ContactHero = () => {
  return (
    <section className="relative h-[50vh] min-h-100 w-full overflow-hidden">
      {/* Background Image */}
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

      {/* Floating Elements */}
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
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-6 py-2 bg-[#F4B400] text-[#1A1A1A] rounded-full text-sm font-semibold">
              📞 Get In Touch
            </span>
          </motion.div>

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
            We&apos;re here to help 24/7. Reach out to us anytime for
            reservations, inquiries, or just to say hello!
          </motion.p>

          {/* Quick Contact Buttons */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-8"
          >
            <a
              href="tel:+9779812345678"
              className="group flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-[#F4B400] transition-all duration-300 border border-white/20 hover:border-transparent"
            >
              <HiOutlinePhone className="text-[#F4B400] group-hover:text-[#1A2F4B] text-xl" />
              <span className="text-white group-hover:text-[#1A2F4B]">
                Call Now
              </span>
            </a>
            <a
              href="mailto:info@hookah69.com"
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

      {/* Animated Wave */}
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

export default ContactHero;
