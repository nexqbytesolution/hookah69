"use client";

import Link from "next/link";
import Image from "next/image";
import { GiHook } from "react-icons/gi";
import { FaRegClock, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <Image
          src="/hookah/hookan1.jpg"
          alt="Hookah Lounge"
          fill
          className="object-cover scale-105 animate-ken-burns"
          priority
          quality={100}
        />
        {/* Soft Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div
            className="mb-4 md:mb-6 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <span className="inline-flex items-center space-x-1 md:space-x-2 text-white/80 text-[10px] md:text-sm tracking-[0.2em] uppercase">
              <HiOutlineSparkles className="text-amber-500/80 w-3 h-3 md:w-4 md:h-4" />
              <span>Est. 2023 • Greenland chowk, Kathmandu</span>
              <HiOutlineSparkles className="text-amber-500/80 w-3 h-3 md:w-4 md:h-4" />
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="mb-4 md:mb-6 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <span className="block text-4xl sm:text-5xl md:text-8xl font-light text-white mb-1 md:mb-2 tracking-wide">
              Welcome to
            </span>
            <span className="block text-5xl sm:text-6xl md:text-9xl font-bold">
              <span className="text-white">HOOKAH</span>
              <span className="text-amber-500 relative">
                69
                <span className="absolute -top-4 -right-4 md:-top-6 md:-right-6 text-amber-500/30 animate-pulse-slow">
                  <GiHook className="text-xl md:text-4xl rotate-45" />
                </span>
              </span>
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed px-2 md:px-0 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Where flavors meet the mountains. Experience premium hookah, crafted
            cocktails, and unforgettable moments.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center opacity-0 animate-slideUp"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Link
              href="/menu"
              className="group relative px-6 md:px-8 py-2 md:py-3 bg-amber-500 text-black font-medium text-sm md:text-base rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 overflow-hidden w-full sm:w-auto"
            >
              <span className="relative z-10">Explore Flavors</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link
              href="/gallery"
              className="group px-6 md:px-8 py-2 md:py-3 text-white font-medium text-sm md:text-base rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300 w-full sm:w-auto"
            >
              Discover Ambience
            </Link>
          </div>

          {/* Simple Stats */}
          <div
            className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 md:mt-16 opacity-0 animate-slideUp"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <div className="text-center">
              <div className="text-xl md:text-3xl font-light text-white">
                50+
              </div>
              <div className="text-[10px] md:text-sm text-white/60 tracking-wider mt-1">
                FLAVORS
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-light text-white">
                20+
              </div>
              <div className="text-[10px] md:text-sm text-white/60 tracking-wider mt-1">
                DRINKS
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-3xl font-light text-white">
                Live
              </div>
              <div className="text-[10px] md:text-sm text-white/60 tracking-wider mt-1">
                MUSIC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="absolute bottom-16 sm:bottom-8 left-0 right-0 flex justify-center px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-white/60 text-[10px] sm:text-sm">
          <div className="flex items-center space-x-2">
            <FaRegClock className="text-amber-500/80 w-3 h-3 sm:w-4 sm:h-4" />
            <span>Open Daily • 10AM - 10PM</span>
          </div>
          <div className="hidden sm:block text-white/20">|</div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-amber-500/80 w-3 h-3 sm:w-4 sm:h-4" />
            <span>Greenland chowk, Kathmandu</span>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn"
        style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
      >
        <div className="w-6 h-10 md:w-7.5 md:h-12.5 rounded-full border border-white/30 flex justify-center">
          <div className="w-1 h-2 md:h-3 bg-amber-500/80 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
