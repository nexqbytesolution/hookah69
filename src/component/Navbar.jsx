"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  FaTiktok,
  FaSnapchatGhost,
} from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", href: "/", icon: HiHome },
    { name: "Gallery", href: "/Gallery", icon: HiPhotograph }, // lowercase g
    { name: "Menu", href: "/menu", icon: HiSparkles },
    { name: "Team", href: "/team", icon: IoPeople },
    { name: "Contact", href: "/contact", icon: HiPhone },
  ];

  const socialIcons = [
    { icon: FaFacebookF, href: "https://facebook.com", label: "Facebook" },
    { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
    { icon: FaTiktok, href: "https://tiktok.com", label: "Tiktok" },
    { icon: FaSnapchatGhost, href: "https://snapchat.com", label: "Snapchat" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-md py-2 md:py-3 shadow-2xl"
            : "bg-linear-to-b from-black/80 via-black/40 to-transparent py-3 md:py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="z-50 flex items-center space-x-2 md:space-x-3 group"
            >
              {/* Logo Image Container */}
              <div className="relative w-12 h-12 md:w-14 md:h-14">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-amber-500 rounded-full blur-md group-hover:blur-xl transition-all opacity-75"></div>

                {/* Image Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-amber-500/50 group-hover:border-amber-500 transition-all">
                  <Image
                    src="/hookah/logo.jpg"
                    alt="Hookah69 Logo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 48px, 56px"
                    priority
                  />
                </div>
              </div>

              {/* Brand Name */}
              <div className="flex flex-col">
                <h1 className="text-lg md:text-2xl font-bold tracking-wider leading-tight">
                  <span className="text-white">HOOKAH</span>
                  <span className="text-amber-500 ml-1">69</span>
                </h1>
                <span className="text-[8px] md:text-xs text-white/50 tracking-widest hidden sm:block">
                  PREMIUM LOUNGE
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white/90 hover:text-amber-500 transition-all duration-300 px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2 group relative"
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
                href="/reserve"
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
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-xl"
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-linear-to-b from-[#1A1A1A] to-black shadow-2xl overflow-y-auto">
          <div className="flex flex-col h-full p-8">
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-amber-500"
            >
              <HiX size={24} />
            </button>

            {/* Mobile Navigation Items */}
            <div className="flex flex-col space-y-6 mt-16">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleLinkClick}
                    className="text-white hover:text-amber-500 transition-all text-xl font-medium flex items-center space-x-4 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="text-amber-500 text-2xl group-hover:rotate-12 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile CTA */}
            <div className="mt-8">
              <Link
                href="/reserve"
                onClick={handleLinkClick}
                className="w-full bg-linear-to-r from-amber-500 to-amber-600 text-black px-6 py-4 rounded-xl font-semibold text-lg hover:from-amber-400 hover:to-amber-500 transition-all flex items-center justify-center space-x-3 shadow-2xl"
              >
                <HiUserGroup className="text-2xl" />
                <span>Reserve Now</span>
              </Link>
            </div>

            {/* Mobile Social Icons */}
            <div className="mt-8">
              <p className="text-white/50 text-sm mb-4 text-center">
                Follow Us
              </p>
              <div className="flex justify-center space-x-6">
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
            </div>

            {/* Business Hours */}
            <div className="mt-auto pt-8">
              <div className="bg-white/5 rounded-xl p-4">
                <div className="text-white/50 text-sm flex items-center justify-center space-x-2 mb-2">
                  <HiOutlineClock className="text-amber-500" />
                  <span>Open Daily</span>
                </div>
                <p className="text-white text-center font-medium">
                  4:00 PM - 2:00 AM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
