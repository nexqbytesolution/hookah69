"use client";
import React, { useState } from "react";
import SnacksMenu from "@/component/menu4/SnacksMenu";
import DrinksMenu from "@/component/menu4/DrinksMenu";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiKnifeFork, GiWineGlass } from "react-icons/gi";

const Page = () => {
  const [activeMenu, setActiveMenu] = useState("snacks");

  return (
    <div className="min-h-screen bg-linear-to-b from-[#1A2F4B] to-black pt-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Our <span className="text-[#F4B400]">Menu</span>
          </h1>
          <p className="text-white/60">Choose your category to explore</p>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/5 p-1.5 rounded-2xl border border-[#F4B400]/20 inline-flex">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveMenu("snacks")}
              className={`relative px-8 py-3.5 rounded-xl font-medium text-lg flex items-center gap-2 transition-all ${
                activeMenu === "snacks"
                  ? "text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {activeMenu === "snacks" && (
                <motion.div
                  layoutId="activeMenu"
                  className="absolute inset-0 bg-[#F4B400] rounded-xl"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <GiKnifeFork className="relative z-10 text-xl" />
              <span className="relative z-10">Snacks</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveMenu("drinks")}
              className={`relative px-8 py-3.5 rounded-xl font-medium text-lg flex items-center gap-2 transition-all ${
                activeMenu === "drinks"
                  ? "text-black"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {activeMenu === "drinks" && (
                <motion.div
                  layoutId="activeMenu"
                  className="absolute inset-0 bg-[#F4B400] rounded-xl"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <GiWineGlass className="relative z-10 text-xl" />
              <span className="relative z-10">Drinks</span>
            </motion.button>
          </div>
        </div>

        {/* Menu Images */}
        <motion.div
          key={activeMenu}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {activeMenu === "snacks" ? (
            <>
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[#F4B400]/20 transition-all duration-500">
                <Image
                  src="/menu/snack1.jpeg"
                  alt="Snacks Menu Page 1"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[#F4B400]/20 transition-all duration-500">
                <Image
                  src="/menu/snack2.jpeg"
                  alt="Snacks Menu Page 2"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </>
          ) : (
            <>
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[#F4B400]/20 transition-all duration-500">
                <Image
                  src="/menu/drink1.jpeg"
                  alt="Drinks Menu Page 1"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-[#F4B400]/20 transition-all duration-500">
                <Image
                  src="/menu/drink2.jpeg"
                  alt="Drinks Menu Page 2"
                  width={1000}
                  height={1000}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </>
          )}
        </motion.div>

        {/* Decorative Note */}
        <div className="text-center mt-8 text-white/30 text-sm">
          <p>Click on images to view full size • All prices include taxes</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
