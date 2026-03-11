"use client";

import { motion } from "framer-motion";
import { GiCoffeeCup, GiFoodTruck } from "react-icons/gi";
import { FaWineGlassAlt, FaUtensils } from "react-icons/fa";

const MenuToggle = ({ activeMenu, setActiveMenu }) => {
  return (
    <div className="flex justify-center mb-12">
      <div className="bg-[#1A1A1A] p-1 rounded-2xl border border-[#F4B400]/20 inline-flex">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveMenu("drinks")}
          className={`relative px-6 md:px-8 py-3 rounded-xl font-medium text-sm md:text-base flex items-center gap-2 transition-all ${
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
          <FaWineGlassAlt className="relative z-10" />
          <span className="relative z-10">Drinks & Hookah</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setActiveMenu("snacks")}
          className={`relative px-6 md:px-8 py-3 rounded-xl font-medium text-sm md:text-base flex items-center gap-2 transition-all ${
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
          <FaUtensils className="relative z-10" />
          <span className="relative z-10">Snacks & Food</span>
        </motion.button>
      </div>
    </div>
  );
};

export default MenuToggle;
