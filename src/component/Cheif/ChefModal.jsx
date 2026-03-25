"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaAward,
  FaUtensils,
  FaTrophy,
} from "react-icons/fa";
import {
  HiOutlineX,
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
} from "react-icons/hi";

// ✅ Move RatingStars outside
const RatingStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 1; i <= 5; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} className="text-[#F4B400]" />);
    } else if (hasHalfStar && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key={i} className="text-[#F4B400]" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-[#F4B400]/30" />);
    }
  }
  return <div className="flex gap-1">{stars}</div>;
};

const ChefModal = ({ chef, isOpen, onClose }) => {
  if (!chef) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-linear-to-b from-[#1A2F4B] to-[#0F1A2B] rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center hover:bg-[#F4B400] transition-colors"
            >
              <HiOutlineX className="text-white text-xl" />
            </button>

            {/* Content */}
            <div className="p-6">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Left Column - Image */}
                <div className="md:w-1/3">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <Image
                      src={chef.image}
                      alt={chef.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3 mt-4">
                    {chef.social?.map((social, idx) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={idx}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#F4B400] transition-colors"
                        >
                          <Icon className="text-white hover:text-[#1A2F4B]" />
                        </a>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column - Details */}
                <div className="md:w-2/3">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-3xl font-bold text-white">
                      {chef.name}
                    </h2>
                    <RatingStars rating={chef.rating} />
                  </div>
                  <p className="text-[#F4B400] text-lg mb-4">{chef.position}</p>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {chef.bio}
                  </p>
                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <FaTrophy className="text-[#F4B400] text-2xl mx-auto mb-2" />
                      <div className="text-white font-bold">
                        {chef.experience}+
                      </div>
                      <div className="text-white/40 text-xs">Years Exp</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4 text-center">
                      <FaUtensils className="text-[#F4B400] text-2xl mx-auto mb-2" />
                      <div className="text-white font-bold">{chef.dishes}+</div>
                      <div className="text-white/40 text-xs">Dishes</div>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-xl p-4">
                    <h3 className="text-white font-semibold mb-3">
                      Contact Information
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-white/70">
                        <HiOutlineMail className="text-[#F4B400]" />
                        <span>{chef.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/70">
                        <HiOutlinePhone className="text-[#F4B400]" />
                        <span>{chef.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/70">
                        <HiOutlineLocationMarker className="text-[#F4B400]" />
                        <span>{chef.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ChefModal;
