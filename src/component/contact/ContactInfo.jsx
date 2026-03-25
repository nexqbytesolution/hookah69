"use client";

import { motion } from "framer-motion";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineGlobe,
  HiHome,
} from "react-icons/hi";
import { FaWhatsapp, FaViber } from "react-icons/fa";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: HiOutlinePhone,
      title: "Phone",
      details: ["+977 981-2345678", "+977 984-1234567"],
      action: "tel:+9779812345678",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
    },
    {
      icon: HiOutlineMail,
      title: "Email",
      details: ["info@hookah69.com", "reservations@hookah69.com"],
      action: "mailto:info@hookah69.com",
      bgColor: "bg-red-500/10",
      iconColor: "text-red-500",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      details: ["+977 981-2345678"],
      action: "https://wa.me/9779812345678",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500",
    },
    {
      icon: FaViber,
      title: "Viber",
      details: ["+977 981-2345678"],
      action: "viber://chat?number=9779812345678",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500",
    },
    {
      icon: HiOutlineLocationMarker,
      title: "Address",
      details: ["Lakeside Road", "Kathmandu, Nepal"],
      bgColor: "bg-yellow-500/10",
      iconColor: "text-yellow-500",
    },
    {
      icon: HiOutlineClock,
      title: "Opening Hours",
      details: ["Sun - Thu: 4PM - 12AM", "Fri - Sat: 4PM - 2AM"],
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
    >
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="w-1 h-6 bg-[#F4B400] rounded-full"></span>
        Contact Information
      </h2>

      <div className="space-y-4">
        {contactDetails.map((item, index) => {
          const Icon = item.icon;
          const isLink = item.action;

          const Content = (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, x: 5 }}
              className={`flex items-start gap-4 p-4 rounded-xl ${item.bgColor} hover:bg-opacity-20 transition-all duration-300 cursor-pointer border border-white/5 hover:border-white/20`}
            >
              <div className={`p-3 rounded-lg ${item.bgColor} bg-opacity-20`}>
                <Icon className={`text-2xl ${item.iconColor}`} />
              </div>
              <div>
                <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-white/70 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.div>
          );

          return isLink ? (
            <a
              key={index}
              href={item.action}
              target="_blank"
              rel="noopener noreferrer"
            >
              {Content}
            </a>
          ) : (
            <div key={index}>{Content}</div>
          );
        })}
      </div>

      {/* Business Hours Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 p-4 bg-[#F4B400]/10 rounded-xl border border-[#F4B400]/20"
      >
        <div className="flex items-center gap-3">
          <HiOutlineGlobe className="text-[#F4B400] text-xl" />
          <p className="text-white/80 text-sm">
            We&apos;re available 24/7 for emergency inquiries and reservations!
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactInfo;
