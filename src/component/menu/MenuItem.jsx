"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineHeart, HiOutlineStar } from "react-icons/hi2";

const MenuItem = ({ item, index }) => {
  const [isLiked, setIsLiked] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.05,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#F4B400]/30 transition-all duration-500"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4B400]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>

      {/* Popular Badge */}
      {item.price > 500 && (
        <div className="absolute top-4 right-4">
          <span className="bg-[#F4B400] text-[#1A1A1A] text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <HiOutlineStar className="text-sm" /> Popular
          </span>
        </div>
      )}

      {/* Content */}
      <div className="relative">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-semibold text-white group-hover:text-[#F4B400] transition-colors">
            {item.name}
          </h3>
          <span className="text-[#F4B400] font-bold text-lg">
            रू {item.price}
          </span>
        </div>

        {item.description && (
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            {item.description}
          </p>
        )}

        {item.options && (
          <div className="flex gap-2 mb-4">
            {item.options.map((opt, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 bg-white/10 rounded-full text-white/70"
              >
                {opt}
              </span>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="flex items-center gap-2 text-white/40 hover:text-[#F4B400] transition-colors"
          >
            <HiOutlineHeart
              className={`text-lg ${isLiked ? "fill-[#F4B400] text-[#F4B400]" : ""}`}
            />
            <span className="text-sm">{isLiked ? "Saved" : "Save"}</span>
          </button>

          <span className="text-xs text-white/30">Order Now →</span>
        </div>
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-[#F4B400]/0 group-hover:border-[#F4B400]/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
    </motion.div>
  );
};

export default MenuItem;
