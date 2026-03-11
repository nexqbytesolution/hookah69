"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  GiHook,
  GiGlassCelebration,
  GiPartyPopper,
  GiMedal,
  GiMusicSpell,
  GiWineGlass,
  GiChefToque,
  GiFoodTruck,
  GiStarGate,
  GiStarSwirl,
} from "react-icons/gi";
import {
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiOutlineClock,
  HiOutlineLocationMarker,
  HiOutlineEmojiHappy,
} from "react-icons/hi";
import { FaLeaf, FaShieldAlt, FaWifi, FaParking } from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: GiHook,
      title: "Premium Hookah",
      description: "50+ premium flavors with fresh fruits and ice bases",
      color: "from-orange-500 to-amber-500",
    },
    {
      id: 2,
      icon: GiGlassCelebration,
      title: "Signature Cocktails",
      description: "Expertly crafted drinks by master mixologists",
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      icon: HiOutlineUserGroup,
      title: "VIP Experience",
      description: "Exclusive private lounges for special occasions",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 4,
      icon: GiMusicSpell,
      title: "Live Music",
      description: "Daily live performances by top artists",
      color: "from-green-500 to-teal-500",
    },
    {
      id: 5,
      icon: GiChefToque,
      title: "Gourmet Food",
      description: "Delicious small plates and platters",
      color: "from-red-500 to-rose-500",
    },
    {
      id: 6,
      icon: GiMedal,
      title: "5 Star Service",
      description: "Award-winning hospitality and attention to detail",
      color: "from-yellow-500 to-amber-500",
    },
  ];

  const features = [
    { icon: FaLeaf, text: "Premium Quality" },
    { icon: HiOutlineClock, text: "Open Late Night" },
    { icon: FaWifi, text: "Free High-Speed WiFi" },
    { icon: FaParking, text: "Valet Parking" },
    { icon: HiOutlineLocationMarker, text: "Center Location" },
    { icon: FaShieldAlt, text: "Safe & Secure" },
    { icon: HiOutlineHeart, text: "Loved by Locals" },
    { icon: HiOutlineEmojiHappy, text: "Friendly Staff" },
  ];

  const stats = [
    { number: "5+", label: "Years of Excellence", icon: GiMedal },
    { number: "50+", label: "Hookah Flavors", icon: GiHook },
    { number: "100+", label: "Premium Drinks", icon: GiWineGlass },
    { number: "10k+", label: "Happy Customers", icon: HiOutlineUserGroup },
  ];

  return (
    <section className="py-20 bg-linear-to-b from-[#1A2F4B] to-[#0F1A2B] relative overflow-hidden w-full">
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

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1,
            }}
            className="absolute text-[#F4B400]/10"
            style={{
              top: `${10 + i * 15}%`,
              left: `${5 + i * 10}%`,
            }}
          >
            <GiStarSwirl className="text-6xl" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#F4B400]/10 px-4 py-2 rounded-full mb-4 border border-[#F4B400]/30">
            <HiOutlineSparkles className="text-[#F4B400]" />
            <span className="text-[#F4B400] text-sm font-medium">
              Why Choose Us
            </span>
            <HiOutlineSparkles className="text-[#F4B400]" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the <span className="text-[#F4B400]">Best</span> Bar
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Discover why Hookah69 is Kathmandu&apos;s most loved premium lounge
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-[#F4B400]/30 transition-all group"
              >
                <Icon className="text-3xl text-[#F4B400] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Main Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#F4B400]/30 transition-all overflow-hidden"
              >
                {/* linear Background on Hover */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${reason.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 bg-linear-to-br ${reason.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="text-white text-3xl" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#F4B400] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {reason.description}
                </p>

                {/* Decorative Line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#F4B400] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            );
          })}
        </div>

        {/* Features Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-linear-to-r from-[#F4B400]/20 to-transparent rounded-2xl p-8 border border-[#F4B400]/30"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Everything You Need for the Perfect Night
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 text-white/70 hover:text-[#F4B400] transition-colors group"
                >
                  <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#F4B400]/20 transition-colors">
                    <Icon className="text-[#F4B400] text-sm" />
                  </div>
                  <span className="text-sm">{feature.text}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <Link href="/reserve" className="group relative inline-block">
            <button className="group relative px-8 py-4 cursor-pointer bg-[#F4B400] text-[#1A2F4B] rounded-full font-semibold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <span className="relative z-10">Book Your Experience</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
          </Link>
          <p className="text-white/40 text-sm mt-4">
            Join hundreds of happy customers every night
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
