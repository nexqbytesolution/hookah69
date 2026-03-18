"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaUsers,
  FaRocket,
  FaAward,
  FaHeart,
  FaCheckCircle,
  FaQuoteLeft,
  FaQuoteRight,
  FaBullseye,
  FaStar,
  FaWineGlassAlt,
  FaMusic,
  FaRegClock,
} from "react-icons/fa";
import { GiHook, GiCocktail, GiPartyPopper } from "react-icons/gi"; // ✅ Changed GiHook to GiHook

import { motion } from "framer-motion";
import { HiOutlineSparkles } from "react-icons/hi";
import { BsGraphUpArrow } from "react-icons/bs";

const AboutContent = () => {
  const stats = [
    { number: "2024", label: "Year Established", icon: <FaStar /> },
    { number: "50+", label: "Hookah Flavors", icon: <GiHook /> },
    { number: "100+", label: "Premium Drinks", icon: <FaWineGlassAlt /> },
    { number: "10k+", label: "Happy Guests", icon: <FaUsers /> },
  ];

  const values = [
    {
      title: "Premium Experience",
      description:
        "We curate only the finest hookah flavors and beverages for an unforgettable lounge experience.",
      icon: <GiHook className="text-3xl text-[#F4B400]" />,
    },
    {
      title: "Live Entertainment",
      description:
        "From live DJs to sports screenings on our 18+ screens, every night is an event at Hookah69.",
      icon: <FaMusic className="text-3xl text-[#F4B400]" />,
    },
    {
      title: "Mountain Views",
      description:
        "Nestled in Lakeside Pokhara, enjoy breathtaking Himalayan views while you relax.",
      icon: <GiPartyPopper className="text-3xl text-[#F4B400]" />,
    },
    {
      title: "Community First",
      description:
        "Since 2014, we've been Pokhara's gathering place for artists, travelers, and locals alike.",
      icon: <FaHeart className="text-3xl text-[#F4B400]" />,
    },
  ];

  const team = [
    {
      name: "Rajan Thapa",
      role: "Founder & Owner",
      bio: "With 15+ years in hospitality, Rajan created Hookah69 to bring Pokhara a truly premium lounge experience.",
      image: "/cheif/cheif.jpg",
    },
    {
      name: "Suman Gurung",
      role: "Operations Manager",
      bio: "Ensuring every guest receives 5-star service and every event runs flawlessly.",
      image: "/cheif/cheif.jpg",
    },
    {
      name: "Priya Sharma",
      role: "Head Mixologist",
      bio: "Award-winning cocktail creator with a passion for innovative flavor combinations.",
      image: "/cheif/cheif.jpg",
    },
    {
      name: "Anil Rai",
      role: "Hookah Master",
      bio: "Expert in traditional and modern hookah techniques, with knowledge of 50+ flavor profiles.",
      image: "/cheif/cheif.jpg",
    },
  ];

  const journey = [
    { year: "2014", event: "Hookah69 founded in Lakeside Pokhara" },
    { year: "2016", event: "Expanded to 18+ projection screens" },
    { year: "2018", event: "Launched signature cocktail menu" },
    { year: "2020", event: "Renovated VIP lounge section" },
    { year: "2022", event: "Celebrated 50k+ happy guests" },
    { year: "2024", event: "10th Anniversary Celebration" },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-black to-[#1A2F4B]">
      {/* Hero Section - Dark & Gold Aesthetic */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Pattern - Smoke rings effect */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20px 20px, #F4B400 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Animated Elements - Floating smoke */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#F4B400]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#F4B400]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>

        {/* Floating hookah icon */}
        <div className="absolute top-40 right-20 text-[#F4B400]/10 hidden lg:block">
          <GiHook className="text-9xl rotate-12 animate-float" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-[#F4B400]/10 px-4 py-2 rounded-full mb-6 border border-[#F4B400]/30"
            >
              <HiOutlineSparkles className="text-[#F4B400]" />
              <span className="text-[#F4B400] font-medium">
                Est. 2024 • Greenland Chok, Kathmandu
              </span>
              <HiOutlineSparkles className="text-[#F4B400]" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              Where <span className="text-[#F4B400]">Flavors</span> Meet
              <br /> the Experience
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto"
            >
              Pokhara&apos;s premier hookah lounge since 2024. Experience
              premium flavors, crafted cocktails, and unforgettable moments with
              panoramic mountain views.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="/reserve"
                className="px-8 py-3 bg-[#F4B400] text-black rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#F4B400]/25"
              >
                Reserve Your Table
              </Link>
              <Link
                href="/menu"
                className="px-8 py-3 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-[#F4B400]/20 hover:border-[#F4B400]/30 transition-all duration-300 transform hover:scale-105"
              >
                Explore Menu
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-[#F4B400]/30 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="text-3xl text-[#F4B400] mb-3 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section with Lounge Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative h-125 rounded-2xl overflow-hidden shadow-2xl group">
                <Image
                  src="/cheif/cheif.jpg"
                  alt="Hookah69 Lounge Interior"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-[#F4B400]/30">
                  <p className="text-white text-lg font-semibold">
                    2+ Years of Excellence
                  </p>
                  <p className="text-white/70 text-sm">
                    The Heart of Greenland Kathmandu
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                The <span className="text-[#F4B400]">Hookah69</span> Story
              </h2>

              <p className="text-white/70 text-lg leading-relaxed">
                Founded in 2024, Hookah69 began with a simple vision: to create
                Pokhara&apos;s most premium lounge experience. Nestled in the
                heart of Lakeside, we&apos;ve grown from a small hookah bar to
                the city&apos;s premier destination for entertainment and
                relaxation.
              </p>

              <p className="text-white/70 text-lg leading-relaxed">
                Today, we&apos;re proud to feature 18+ projection screens for
                live sports, a curated menu of 50+ hookah flavors, and signature
                cocktails crafted by award-winning mixologists. From UEFA
                matches to live DJ nights, every evening at Hookah69 is an
                experience.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F4B400]/20 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-[#F4B400]" />
                  </div>
                  <span className="text-white/80">50+ Flavors</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F4B400]/20 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-[#F4B400]" />
                  </div>
                  <span className="text-white/80">18+ Screens</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F4B400]/20 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-[#F4B400]" />
                  </div>
                  <span className="text-white/80">Live Music</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F4B400]/20 rounded-lg flex items-center justify-center">
                    <FaCheckCircle className="text-[#F4B400]" />
                  </div>
                  <span className="text-white/80">Mountain Views</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-linear-to-b from-[#F4B400]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#F4B400]/30 transition-all group"
            >
              <div className="w-16 h-16 bg-[#F4B400]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <GiHook className="text-3xl text-[#F4B400]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Our Mission
              </h3>
              <p className="text-white/70 leading-relaxed">
                To create unforgettable moments through premium hookah
                experiences, exceptional service, and an atmosphere where every
                guest feels like family.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#F4B400]/30 transition-all group"
            >
              <div className="w-16 h-16 bg-[#F4B400]/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <FaBullseye className="text-3xl text-[#F4B400]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">
                To be recognized as Pokhara&apos;s premier lounge destination,
                setting the standard for quality, entertainment, and hospitality
                in Nepal&apos;s hospitality industry.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              The <span className="text-[#F4B400]">Hookah69</span> Difference
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              What makes us Kathmandu&apos;s most loved hookah lounge
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/10 hover:border-[#F4B400]/30 transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-[#F4B400]/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#F4B400] transition-colors">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-16 bg-linear-to-b from-[#F4B400]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="text-[#F4B400]">Journey</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Milestones that shaped Hookah69
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {journey.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="relative bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10 hover:border-[#F4B400]/30 transition-all group"
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-[#F4B400] rounded-full flex items-center justify-center text-black font-bold text-sm">
                  {index + 1}
                </div>
                <div className="mt-4">
                  <span className="text-[#F4B400] font-bold text-lg">
                    {item.year}
                  </span>
                  <p className="text-white/70 text-xs mt-2">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="text-[#F4B400]">Team</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The passionate people behind your Hookah69 experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#F4B400]/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black to-transparent"></div>
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#F4B400] text-sm mb-2">{member.role}</p>
                  <p className="text-white/50 text-xs">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-linear-to-b from-[#F4B400]/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10 relative">
              <FaQuoteLeft className="absolute top-6 left-6 text-[#F4B400]/20 text-4xl" />
              <FaQuoteRight className="absolute bottom-6 right-6 text-[#F4B400]/20 text-4xl" />

              <p className="text-white/80 text-xl italic mb-6 relative z-10">
                Hookah69 is more than just a lounge – it&apos;s an experience.
                The atmosphere, the flavors, and the hospitality keep me coming
                back every week. Best spot in Pokhara!
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#F4B400]/20 flex items-center justify-center">
                  <span className="text-2xl text-[#F4B400] font-bold">RK</span>
                </div>
                <div>
                  <p className="text-white font-semibold">Rahul Karki</p>
                  <p className="text-white/50 text-sm">
                    Regular Guest • 5+ Years
                  </p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar key={star} className="text-[#F4B400] text-sm" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Experience{" "}
              <span className="text-[#F4B400]">Hookah69</span>?
            </h2>
            <p className="text-white/60 text-lg mb-8">
              Join us in Lakeside Pokhara for an unforgettable evening of
              premium flavors, crafted cocktails, and breathtaking mountain
              views.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/reserve"
                className="px-8 py-3 bg-[#F4B400] text-black rounded-full font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#F4B400]/25"
              >
                Reserve Your Table
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 bg-white/5 text-white rounded-full font-semibold border border-white/10 hover:bg-[#F4B400]/20 hover:border-[#F4B400]/30 transition-all duration-300 transform hover:scale-105"
              >
                Contact Us
              </Link>
            </div>
            <div className="flex items-center justify-center gap-2 mt-6 text-white/40 text-sm">
              <FaRegClock className="text-[#F4B400]" />
              <span>Open Daily • 4PM - 2AM</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutContent;
