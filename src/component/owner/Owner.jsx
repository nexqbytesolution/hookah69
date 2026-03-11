"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { GiMedal, GiHook } from "react-icons/gi";

const Owners = () => {
  const owners = [
    {
      id: 1,
      name: "Rajan Thapa",
      title: "Founder & CEO",
      bio: "With over 7 years of experience in hospitality, Rajan founded Hookah69 with a vision to create Kathmandu's most premium lounge experience. His passion for excellence and attention to detail has made Hookah69 a favorite destination.",
      image: "/cheif/cheif.jpg",
      quote: "We don't just serve hookah, we create memories.",
      experience: "15+ years",
      specialty: "Hospitality Expert",
      email: "rajan@hookah69.com",
      phone: "+977 981-2345678",
      location: "Kathmandu, Nepal",
      social: [
        {
          icon: FaFacebookF,
          url: "https://facebook.com",
          color: "hover:bg-blue-600",
        },
        {
          icon: FaInstagram,
          url: "https://instagram.com",
          color: "hover:bg-pink-600",
        },
        {
          icon: FaTwitter,
          url: "https://twitter.com",
          color: "hover:bg-blue-400",
        },
        {
          icon: FaLinkedinIn,
          url: "https://linkedin.com",
          color: "hover:bg-blue-700",
        },
      ],
      stats: [
        { label: "Years", value: "7+" },
        { label: "Branches", value: "1" },
        { label: "Awards", value: "8" },
      ],
    },
  ];

  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section className="py-20 bg-linear-to-b w-full from-[#1A2F4B] to-[#0F1A2B] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-linear(circle at 2px 2px, #F4B400 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#F4B400]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#F4B400]/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#F4B400]/10 px-4 py-2 rounded-full mb-4 border border-[#F4B400]/30">
            <GiHook className="text-[#F4B400]" />
            <span className="text-[#F4B400] text-sm font-medium">
              Meet The Team
            </span>
            <GiHook className="text-[#F4B400]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Behind the <span className="text-[#F4B400]">Hookah69</span>{" "}
            Experience
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Passionate leaders dedicated to creating your perfect lounge
            experience
          </p>
        </motion.div>

        {/* Owners Grid */}
        <div className=" gap-8 max-w-6xl flex  justify-center  mx-auto">
          {owners.map((owner, index) => (
            <motion.div
              key={owner.id}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:border-[#F4B400]/30 transition-all duration-500"
            >
              {/* Background linear */}
              <div className="absolute inset-0 bg-linear-to-br from-[#F4B400]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Image Section */}
                  <div className="md:w-1/3">
                    <div className="relative">
                      {/* Image Container */}
                      <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl overflow-hidden border-4 border-[#F4B400]/20 group-hover:border-[#F4B400]/50 transition-all duration-500">
                        <Image
                          src={owner.image}
                          alt={owner.name}
                          width={160}
                          height={160}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      {/* Award Badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-[#F4B400] rounded-full flex items-center justify-center shadow-lg">
                        <GiMedal className="text-[#1A2F4B] text-lg" />
                      </div>

                      {/* Initials Fallback (shown if image fails) */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold">
                          {getInitials(owner.name)}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="md:w-2/3 text-center md:text-left">
                    {/* Name & Title */}
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#F4B400] transition-colors">
                      {owner.name}
                    </h3>
                    <p className="text-[#F4B400] text-sm mb-3">{owner.title}</p>

                    {/* Quote */}
                    <div className="mb-3">
                      <FaQuoteLeft className="inline text-[#F4B400] text-xs opacity-50" />
                      <span className="text-white/60 text-sm italic mx-1">
                        {owner.quote}
                      </span>
                      <FaQuoteRight className="inline text-[#F4B400] text-xs opacity-50" />
                    </div>

                    {/* Bio */}
                    <p className="text-white/70 text-sm mb-4 leading-relaxed">
                      {owner.bio}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-center md:justify-start gap-4 mb-4">
                      {owner.stats.map((stat, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-[#F4B400] font-bold text-lg">
                            {stat.value}
                          </div>
                          <div className="text-white/40 text-xs">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center md:justify-start gap-2 text-white/50 text-xs">
                        <HiOutlineBriefcase className="text-[#F4B400]" />
                        <span>{owner.specialty}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-white/50 text-xs">
                        <HiOutlineMail className="text-[#F4B400]" />
                        <span>{owner.email}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-white/50 text-xs">
                        <HiOutlinePhone className="text-[#F4B400]" />
                        <span>{owner.phone}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-white/50 text-xs">
                        <HiOutlineLocationMarker className="text-[#F4B400]" />
                        <span>{owner.location}</span>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center md:justify-start gap-2">
                      {owner.social.map((social, idx) => {
                        const Icon = social.icon;
                        return (
                          <motion.a
                            key={idx}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className={`w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/70 hover:text-white ${social.color} hover:bg-opacity-100 transition-all duration-300 border border-white/10`}
                          >
                            <Icon className="text-sm" />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#F4B400]/30 rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#F4B400]/30 rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-linear-to-r from-[#F4B400]/10 to-transparent p-8 rounded-3xl border border-[#F4B400]/20">
            <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
            <p className="text-white/70 text-lg italic">
              To create unforgettable moments and set new standards for premium
              lounge experiences in Nepal.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Owners;
