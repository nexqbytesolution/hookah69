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
    { name: "Home", href: "#home" },
    { name: "Ambience", href: "#ambience" },
    { name: "Flavors", href: "#flavors" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const contactInfo = [
    { icon: FaMapMarkerAlt, text: "Lakeside Road, Pokhara, Nepal" },
    { icon: FaPhone, text: "+977 981-2345678" },
    { icon: FaEnvelope, text: "info@hookah69.com" },
    { icon: FaRegClock, text: "Daily • 4PM - 2AM" },
  ];

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "https://facebook.com",
      label: "Facebook",
      color: "hover:bg-blue-600",
    },
    {
      icon: FaInstagram,
      href: "https://instagram.com",
      label: "Instagram",
      color: "hover:bg-pink-600",
    },
    {
      icon: FaTwitter,
      href: "https://twitter.com",
      label: "Twitter",
      color: "hover:bg-blue-400",
    },
    {
      icon: FaSnapchatGhost,
      href: "https://snapchat.com",
      label: "Snapchat",
      color: "hover:bg-yellow-500",
    },
    {
      icon: FaTiktok,
      href: "https://tiktok.com",
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
    <footer className="relative bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "/public/hookah/hookan1.jpg",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Smoke Icons */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
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

      <div className="relative container mx-auto px-4 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-block group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-amber-500 rounded-full blur-xl group-hover:blur-2xl transition-all opacity-50"></div>
                  <div className="relative w-14 h-14 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                    <GiHook className="text-black text-2xl transform -rotate-45" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">
                    <span className="text-white">HOOKAH</span>
                    <span className="text-amber-500">69</span>
                  </h2>
                  <p className="text-xs text-white/50 tracking-wider">
                    PREMIUM LOUNGE
                  </p>
                </div>
              </div>
            </Link>

            <p className="text-white/70 text-sm leading-relaxed">
              Experience the finest hookah blends in Pokhara&apos;s most
              luxurious lounge. Where clouds meet comfort and memories are made.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-all duration-300 ${social.color} hover:scale-110 hover:border-transparent`}
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="pt-4">
              <h4 className="text-sm font-semibold mb-3 flex items-center space-x-2">
                <HiOutlineSparkles className="text-amber-500" />
                <span>Join the VIP Club</span>
              </h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-l-full text-sm text-white placeholder-white/40 focus:outline-none focus:border-amber-500/50 transition-colors"
                />
                <button className="px-4 py-2 bg-amber-500 text-black rounded-r-full font-medium text-sm hover:bg-amber-400 transition-all hover:scale-105 transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-amber-500 transition-all duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Visit Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className="flex items-start space-x-3 group">
                    <Icon
                      className="text-amber-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform"
                      size={16}
                    />
                    <span className="text-white/70 text-sm group-hover:text-white/90 transition-colors">
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>

            {/* Business Hours Badge */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <h4 className="text-sm font-semibold mb-2">Happy Hours</h4>
              <p className="text-amber-500 text-2xl font-light">4PM - 7PM</p>
              <p className="text-white/50 text-xs mt-1">
                50% off on selected flavors
              </p>
            </div>
          </div>

          {/* Instagram Preview */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Follow Us
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-amber-500"></span>
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <a
                  key={item}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative aspect-square rounded-lg overflow-hidden group"
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${item === 1 ? "1470337458703-46ad175b1c1f" : "1514932323942-546f5c4b1a3d"}?w=150&q=80`}
                    alt="Instagram preview"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <FaInstagram className="absolute bottom-1 right-1 text-white/70 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="pt-8 mt-8 border-t border-white/10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Payment Icons */}
            <div className="flex items-center space-x-4">
              <span className="text-white/40 text-sm">We Accept:</span>
              <div className="flex items-center space-x-3">
                {paymentIcons.map((payment, index) => {
                  const Icon = payment.icon;
                  return (
                    <div
                      key={index}
                      className="text-white/40 hover:text-amber-500 transition-colors"
                      title={payment.name}
                    >
                      <Icon size={24} />
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-center lg:text-right">
              <p className="text-white/40 text-sm">
                © {currentYear} Hookah69. All rights reserved.
              </p>
              <p className="text-white/20 text-xs mt-1">
                Designed with <span className="text-amber-500">❤</span> in
                Pokhara
              </p>
            </div>

            {/* Back to Top */}
            <Link
              href="#home"
              className="group fixed bottom-8 right-8 w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-black hover:bg-amber-400 transition-all hover:scale-110 shadow-lg hover:shadow-amber-500/25 animate-bounce-slow"
              aria-label="Back to top"
            >
              <svg
                className="w-6 h-6 transform rotate-45 group-hover:rotate-0 transition-transform"
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
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/50 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/30">
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
              Terms of Service
            </Link>
            <span>•</span>
            <Link
              href="/cookies"
              className="hover:text-amber-500 transition-colors"
            >
              Cookie Policy
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
    </footer>
  );
};

export default Footer;
