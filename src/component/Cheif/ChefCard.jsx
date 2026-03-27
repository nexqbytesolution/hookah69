"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar, FaAward } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineBriefcase } from "react-icons/hi";

const RatingStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-[#F4B400] text-sm" />);
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-[#F4B400] text-sm" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-[#F4B400]/30 text-sm" />);
    }
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

const SocialLinks = ({ social }) => {
  if (!social) return null;

  return (
    <div className="flex gap-3">
      {social.map((item, idx) => {
        const Icon = item.icon;
        return (
          <a
            key={idx}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-[#F4B400] rounded-full flex items-center justify-center hover:bg-white transition-colors transform hover:scale-110"
          >
            <Icon className="text-[#1A2F4B] text-lg" />
          </a>
        );
      })}
    </div>
  );
};

// ✅ Move Stats component outside
const ChefStats = ({ experience, dishes, awards }) => (
  <div className="flex justify-center gap-10 pt-4 border-t border-white/10">
    <div className="text-center">
      <div className="text-[#F4B400] font-bold">{experience}+</div>
      <div className="text-white/40 text-xs">Years</div>
    </div>
    <div className="text-center">
      <div className="text-[#F4B400] font-bold">{dishes}+</div>
      <div className="text-white/40 text-xs">Dishes</div>
    </div>
  </div>
);

// ✅ Move Specialties component outside
const Specialties = ({ specialties }) => {
  if (!specialties) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {specialties.map((specialty, idx) => (
        <span
          key={idx}
          className="text-xs px-3 py-1 bg-white/5 rounded-full text-white/70 border border-white/10"
        >
          {specialty}
        </span>
      ))}
    </div>
  );
};

const ChefCard = ({ chef, variant = "default", onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // Variant 1: Default Card
  if (variant === "default") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -5 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="group relative bg-linear-to-b from-white/5 to-white/0 rounded-2xl overflow-hidden border border-white/10 hover:border-[#F4B400]/30 transition-all duration-500"
      >
        {/* Image Container */}
        <div className="relative h-80 overflow-hidden">
          <Image
            src={chef.image}
            alt={chef.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* linear Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-[#1A2F4B] via-transparent to-transparent opacity-60"></div>

          {/* Badge */}
          {chef.badge && (
            <div className="absolute top-4 left-4 bg-[#F4B400] text-[#1A2F4B] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 z-10">
              <FaAward /> {chef.badge}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-white group-hover:text-[#F4B400] transition-colors">
              {chef.name}
            </h3>
            {chef.rating && <RatingStars rating={chef.rating} />}
          </div>

          <p className="text-[#F4B400] text-sm mb-2">{chef.position}</p>
          <p className="text-white/60 text-sm mb-4 line-clamp-2">{chef.bio}</p>

          {/* Specialties */}
          <Specialties specialties={chef.specialties} />

          {/* Experience & Stats */}
          <ChefStats
            experience={chef.experience}
            dishes={chef.dishes}
            awards={chef.awards}
          />

          {/* View Profile Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onClick?.(chef)}
            className="w-full mt-4 py-2 bg-white/5 hover:bg-[#F4B400] rounded-lg text-white hover:text-[#1A2F4B] transition-colors text-sm font-medium"
          >
            View Profile
          </motion.button>
        </div>
      </motion.div>
    );
  }

  // Variant 2: Horizontal Card
  if (variant === "horizontal") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ x: 5 }}
        className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#F4B400]/30 transition-all duration-300 flex"
      >
        {/* Image */}
        <div className="relative w-32 h-32 shrink-0">
          <Image
            src={chef.image}
            alt={chef.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-semibold text-white">{chef.name}</h3>
            {chef.rating && <RatingStars rating={chef.rating} />}
          </div>
          <p className="text-[#F4B400] text-xs mb-2">{chef.position}</p>
          <p className="text-white/60 text-xs line-clamp-2 mb-2">{chef.bio}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <HiOutlineBriefcase /> {chef.experience} yrs
              <HiOutlineLocationMarker /> {chef.location}
            </div>
            <button
              onClick={() => onClick?.(chef)}
              className="text-[#F4B400] hover:text-white text-xs font-medium"
            >
              View →
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Variant 3: Minimal Card
  if (variant === "minimal") {
    return (
      <motion.div whileHover={{ scale: 1.02 }} className="group text-center">
        <div className="relative w-40 h-40 mx-auto mb-4">
          <Image
            src={chef.image}
            alt={chef.name}
            fill
            className="object-cover rounded-full border-4 border-[#F4B400]/20 group-hover:border-[#F4B400] transition-all duration-300"
          />

          {/* Social Icons on Hover */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            className="absolute inset-0 bg-[#1A2F4B]/80 rounded-full flex items-center justify-center gap-2"
          >
            <SocialLinks social={chef.social} />
          </motion.div>
        </div>

        <h3 className="text-lg font-semibold text-white group-hover:text-[#F4B400] transition-colors">
          {chef.name}
        </h3>
        <p className="text-[#F4B400] text-sm">{chef.position}</p>
        <p className="text-white/50 text-xs mt-1">{chef.specialty}</p>
      </motion.div>
    );
  }

  return null;
};

export default ChefCard;
