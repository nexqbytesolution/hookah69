"use client";

import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaPinterest,
} from "react-icons/fa";

const ContactSocial = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com/hookah69",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com/hookah69",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com/hookah69",
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: FaSnapchatGhost,
      href: "https://snapchat.com/add/hookah69",
      label: "Snapchat",
      color: "hover:bg-yellow-500",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com/@hookah69",
      label: "TikTok",
      color: "hover:bg-black",
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/hookah69",
      label: "YouTube",
      color: "hover:bg-red-600",
    },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/company/hookah69",
      label: "LinkedIn",
      color: "hover:bg-blue-700",
    },
    {
      icon: FaPinterest,
      href: "https://pinterest.com/hookah69",
      label: "Pinterest",
      color: "hover:bg-red-700",
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

      <div className="grid grid-cols-4 gap-3">
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

      {/* Social Stats */}
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
