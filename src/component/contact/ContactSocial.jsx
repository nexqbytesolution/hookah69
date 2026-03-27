"use client";

import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

const ContactSocial = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/people/Hookaah-SixNine/pfbid0RSXHitt2vhXAAicdhci7Ufod7hG4mXutmCjxcx9FVpCdHBrJoLekWxHav7niHqmLl/?ref=NONE_ig_profile_ac",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/hookah69_official",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },

    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@hookah696",
      label: "TikTok",
      color: "hover:bg-black",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mt-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
    >
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-1 h-4 bg-[#F4B400] rounded-full"></span>
        Follow Us
      </h3>

      <div className="grid grid-cols-3 gap-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 bg-white/5 rounded-lg text-white/70 hover:text-white ${social.color} hover:bg-opacity-100 transition-all duration-300 flex items-center justify-center border border-white/10 hover:border-transparent`}
              aria-label={social.label}
            >
              <Icon className="text-xl" />
            </motion.a>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/10">
        <div className="text-center">
          <p className="text-2xl font-bold text-[#F4B400]">10k+</p>
          <p className="text-white/50 text-xs">Followers</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-[#F4B400]">500+</p>
          <p className="text-white/50 text-xs">Reviews</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactSocial;
