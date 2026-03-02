"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image"; // Import Next.js Image component
import {
  HiMenu,
  HiX,
  HiHome,
  HiPhotograph,
  HiSparkles,
  HiCalendar,
  HiPhone,
  HiOutlineClock,
  HiUserGroup,
} from "react-icons/hi";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
} from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home", icon: HiHome },
    { name: "Ambience", href: "#ambience", icon: HiPhotograph },
    { name: "Flavors", href: "#flavors", icon: HiSparkles },
    { name: "Events", href: "#events", icon: HiCalendar },
    { name: "Contact", href: "#contact", icon: HiPhone },
  ];

  const socialIcons = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { icon: FaSnapchatGhost, href: "https://snapchat.com", label: "Snapchat" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md py-3 shadow-2xl"
          : "bg-linear-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo with Image - UPDATED SECTION */}
          <Link href="/" className="z-50 flex items-center space-x-3 group">
            {/* Logo Image Container */}
            <div className="relative w-15 h-12 md:w-14 md:h-14">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-amber-500 rounded-full blur-md group-hover:blur-xl transition-all opacity-75"></div>

              {/* Image Container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-500/50 group-hover:border-amber-500 transition-all">
                <Image
                  src="/logo.jpg" // Path to your logo image
                  alt="Hookah69 Logo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 850px) 6px, 70px"
                  priority
                />
              </div>
            </div>

            {/* Brand Name */}
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold tracking-wider leading-tight">
                <span className="text-white">HOOKAH</span>
                <span className="text-amber-500 ml-1">69</span>
              </h1>
              <span className="text-[10px] md:text-xs text-white/50 tracking-widest hidden sm:block">
                PREMIUM LOUNGE
              </span>
            </div>
          </Link>

          {/* Rest of the navbar remains the same */}
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white/90 hover:text-amber-500 transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 group"
                >
                  <Icon className="text-lg group-hover:rotate-12 transition-transform" />
                  <span>{item.name}</span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-1/2 -translate-x-1/2"></span>
                </Link>
              );
            })}
          </div>

          {/* Right Section - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social Icons */}
            <div className="flex space-x-2 border-r border-white/20 pr-4">
              {socialIcons.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-amber-500 transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* CTA Button */}
            <Link
              href="#reserve"
              className="bg-linear-to-r from-amber-500 to-amber-600 text-black px-6 py-2 rounded-full font-semibold hover:from-amber-400 hover:to-amber-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/25 flex items-center space-x-2"
            >
              <HiUserGroup className="text-lg" />
              <span>Reserve Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 text-white focus:outline-none bg-white/10 p-2 rounded-lg backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>

          {/* Mobile Menu */}
          <div
            className={`fixed inset-0 bg-linear-to-b from-black via-black/95 to-black/90 backdrop-blur-xl transition-all duration-500 md:hidden ${
              isOpen
                ? "opacity-100 visible"
                : "opacity-0 invisible pointer-events-none"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8 px-4">
              {/* Mobile Navigation Items */}
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-white hover:text-amber-500 transition-all text-2xl font-bold flex items-center space-x-4 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="text-amber-500 group-hover:rotate-12 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}

              {/* Mobile CTA */}
              <Link
                href="#reserve"
                onClick={handleLinkClick}
                className="bg-linear-to-r from-amber-500 to-amber-600 text-black px-10 py-4 rounded-full font-semibold text-xl hover:from-amber-400 hover:to-amber-500 transition-all mt-8 flex items-center space-x-3 shadow-2xl"
              >
                <HiUserGroup className="text-2xl" />
                <span>Reserve Now</span>
              </Link>

              {/* Mobile Social Icons */}
              <div className="flex space-x-6 mt-8 pt-8 border-t border-white/20 w-full justify-center">
                {socialIcons.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/50 hover:text-amber-500 transition-all text-2xl"
                      aria-label={social.label}
                    >
                      <Icon />
                    </a>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="text-white/50 text-sm flex items-center space-x-2">
                <HiOutlineClock className="text-amber-500" />
                <span>Open Daily • 4PM - 2AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
