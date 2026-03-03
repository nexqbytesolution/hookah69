"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  HiOutlineHeart,
  HiOutlineEye,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

const GalleryItem = ({ item, index, onClick }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.03,
      },
    },
  };

  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <Image
        src={item.thumbnail}
        alt={item.title}
        width={1000}
        height={1000}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay */}
      <div
        className={`absolute inset-0 bg-linear-to-t from-[#1A2F4B] via-transparent to-transparent transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-60"}`}
      ></div>

      {/* Video Indicator */}
      {item.type === "video" && (
        <div className="absolute top-4 left-4">
          <div className="bg-[#F4B400] text-[#1A2F4B] text-xs px-3 py-1 rounded-full flex items-center gap-1">
            <HiOutlineVideoCamera /> Video
          </div>
        </div>
      )}

      {/* Featured Badge */}
      {item.featured && (
        <div className="absolute top-4 right-4">
          <div className="bg-[#F4B400] text-[#1A2F4B] text-xs px-3 py-1 rounded-full">
            Featured
          </div>
        </div>
      )}

      {/* Content */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-4 transform transition-transform duration-300 ${isHovered ? "translate-y-0" : "translate-y-2"}`}
      >
        <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
        <p className="text-white/70 text-sm line-clamp-2">{item.description}</p>

        {/* Meta Info */}
        <div className="flex items-center justify-between mt-3">
          <span className="text-white/50 text-xs">{item.date}</span>

          <div className="flex items-center gap-3">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              className="text-white/70 hover:text-[#F4B400] transition-colors"
            >
              <HiOutlineHeart
                className={`text-lg ${isLiked ? "fill-[#F4B400] text-[#F4B400]" : ""}`}
              />
            </button>
            <span className="text-white/50 text-xs flex items-center gap-1">
              <HiOutlineEye /> 124
            </span>
          </div>
        </div>
      </div>

      {/* Play Button for Videos */}
      {item.type === "video" && isHovered && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-[#F4B400] rounded-full flex items-center justify-center shadow-xl">
            <FaPlay className="text-[#1A2F4B] text-2xl ml-1" />
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default GalleryItem;
