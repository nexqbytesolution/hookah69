"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSnapchatGhost,
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaRegClock,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaApple,
  FaGooglePay,
} from "react-icons/fa";
import { GiHook, GiSmokingOrb } from "react-icons/gi";
import { HiOutlineSparkles } from "react-icons/hi2";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/Gallery" },
    { name: "Menu", href: "/menu" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
    { name: "Reserve", href: "/reserve" },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "Greenland chowk, Kathmandu, Nepal" },
    { icon: FaPhone, text: "+977 981-2345678" },
    { icon: FaEnvelope, text: "info@hookah69.com" },
    { icon: FaRegClock, text: "Daily • 10AM - 10PM" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=100085491741693&ref=NONE_ig_profile_ac",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://www.instagram.com/hookah69_official/",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: FaTiktok,
      href: "https://www.tiktok.com/@hookah696?_r=1&_t=ZS-94bU8WGpx72",
      label: "TikTok",
      color: "hover:bg-black",
    },
  ];

  const paymentIcons = [
    { icon: FaCcVisa, name: "Visa" },
    { icon: FaCcMastercard, name: "Mastercard" },
    { icon: FaCcAmex, name: "American Express" },
    { icon: FaApple, name: "Apple Pay" },
    { icon: FaGooglePay, name: "Google Pay" },
  ];

  return (
    <footer className="relative bg-linear-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #F4B400 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Smoke Icons - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute text-amber-500/5 animate-float-slow"
            style={{
              bottom: `${10 + i * 20}%`,
              right: `${5 + i * 15}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 5}s`,
            }}
          >
            <GiSmokingOrb className="text-8xl" />
          </div>
        ))}
      </div>

      <div className="relative container mx-auto px-4 py-12 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-8 mb-8 md:mb-12">
          {/* Brand Column - Full width on mobile */}
          <div className="space-y-4 md:space-y-6 col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                  <div className="relative w-12 h-12 md:w-14 md:h-14 bg-linear-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <GiHook className="text-black text-xl md:text-2xl transform -rotate-45" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-bold">
                    <span className="text-white">HOOKAH</span>
                    <span className="text-amber-500">69</span>
                  </h2>
                  <p className="text-[10px] md:text-xs text-white/50 tracking-wider">
                    PREMIUM BAR
                  </p>
                </div>
              </div>
            </Link>

            <p className="text-white/70 text-xs md:text-sm leading-relaxed max-w-md md:max-w-full">
              Experience the finest hookah blends in Pokhara&apos;s most
              luxurious lounge. Where clouds meet comfort and memories are made.
            </p>
          </div>

          {/* Quick Links - 2 columns on mobile */}
          <div className="col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-amber-500"></span>
            </h3>
            <div className="grid grid-cols-2 gap-2 md:block md:space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-amber-500 transition-all duration-300 flex items-center space-x-2 group text-xs md:text-sm"
                >
                  <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info - Full width on mobile */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 relative inline-block">
              Visit Us
              <span className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-amber-500"></span>
            </h3>
            <ul className="space-y-3 md:space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start space-x-3 group">
                    <Icon
                      className="text-amber-500 mt-1 shrink-0 group-hover:scale-110 transition-transform"
                      size={14}
                    />
                    <span className="text-white/70 text-xs md:text-sm group-hover:text-white/90 transition-colors">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Follow Us - Social links at bottom on mobile */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <h3 className="text-base md:text-lg font-semibold mb-4 md:mb-6 relative inline-block">
              Follow Us
              <span className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-amber-500"></span>
            </h3>

            {/* Social Links - Grid on mobile, flex on desktop */}
            <div className="grid grid-cols-3 gap-2 md:flex md:space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 ${social.color} hover:scale-110 hover:border-transparent`}
                    aria-label={social.label}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="pt-6 md:pt-8 mt-6 md:mt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between gap-4 md:gap-6">
            {/* Payment Icons */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="text-white/40 text-xs md:text-sm">
                We Accept:
              </span>
              <div className="flex items-center space-x-2 md:space-x-3">
                {paymentIcons.map((payment, index) => {
                  const Icon = payment.icon;
                  return (
                    <div
                      key={index}
                      className="text-white/40 hover:text-amber-500 transition-colors"
                      title={payment.name}
                    >
                      <Icon size={20} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center">
              <p className="text-white/40 text-xs md:text-sm">
                © {currentYear} Hookah69. All rights reserved.
              </p>
              <p className="text-white/10 text-[10px] md:text-xs mt-1">
                Designed By Nexqbyte
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 py-2 md:py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-[10px] md:text-xs text-white/30">
            <Link
              href="/privacy"
              className="hover:text-amber-500 transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link
              href="/terms"
              className="hover:text-amber-500 transition-colors"
            >
              Terms
            </Link>
            <span>•</span>
            <Link
              href="/cookies"
              className="hover:text-amber-500 transition-colors"
            >
              Cookies
            </Link>
            <span>•</span>
            <Link
              href="/sitemap"
              className="hover:text-amber-500 transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button - Adjusted for mobile */}
      <Link
        href="#"
        className="group fixed bottom-4 right-4 md:bottom-8 md:right-8 w-10 h-10 md:w-12 md:h-12 bg-amber-500 rounded-full flex items-center justify-center text-black hover:bg-amber-400 transition-all hover:scale-110 shadow-lg hover:shadow-amber-500/25 animate-bounce-slow z-50"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 md:w-6 md:h-6 transform rotate-45 group-hover:rotate-0 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </Link>
    </footer>
  );
};

export default Footer;
