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
        {/* Soft Gradient Overlay - Like Paradiso's subtle overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/60"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated Badge */}
          <div
            className="mb-6 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <span className="inline-flex items-center space-x-2 text-white/80 text-sm tracking-[0.2em] uppercase">
              <HiOutlineSparkles className="text-amber-500/80 w-4 h-4" />
              <span>Est. 2024 • Lakeside Pokhara</span>
              <HiOutlineSparkles className="text-amber-500/80 w-4 h-4" />
            </span>
          </div>

          {/* Main Title - Simple & Bold Like Paradiso */}
          <h1
            className="mb-6 opacity-0 animate-slideUp"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <span className="block text-6xl md:text-8xl font-light text-white mb-2 tracking-wide">
              Welcome to
            </span>
            <span className="block text-7xl md:text-9xl font-bold">
              <span className="text-white">HOOKAH</span>
              <span className="text-amber-500 relative">
                69
                <span className="absolute -top-6 -right-6 text-amber-500/30 animate-pulse-slow">
                  <GiHook className="text-3xl md:text-4xl rotate-45" />
                </span>
              </span>
            </span>
          </h1>

          {/* Tagline - Clean & Simple */}
          <p
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed opacity-0 animate-slideUp"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            Where flavors meet the mountains. Experience premium hookah, crafted
            cocktails, and unforgettable moments.
          </p>

          {/* CTA Buttons - Minimal Like Paradiso */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-slideUp"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            <Link
              href="/menu"
              className="group relative px-8 py-3 bg-amber-500 text-black font-medium rounded-full hover:bg-amber-400 transition-all duration-300 transform hover:scale-105 overflow-hidden"
            >
              <span className="relative z-10">Explore Flavors</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
            <Link
              href="/gallery"
              className="group px-8 py-3 text-white font-medium rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 transition-all duration-300"
            >
              Discover Ambience
            </Link>
          </div>

          {/* Simple Stats - Clean Layout */}
          <div
            className="flex flex-wrap justify-center gap-8 mt-16 opacity-0 animate-slideUp"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <div className="text-center">
              <div className="text-3xl font-light text-white">50+</div>
              <div className="text-sm text-white/60 tracking-wider mt-1">
                FLAVORS
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-white">100+</div>
              <div className="text-sm text-white/60 tracking-wider mt-1">
                DRINKS
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-white">Live</div>
              <div className="text-sm text-white/60 tracking-wider mt-1">
                MUSIC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info - Like Paradiso's subtle footer */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/60 text-sm">
          <div className="flex items-center space-x-2">
            <FaRegClock className="text-amber-500/80 w-4 h-4" />
            <span>Open Daily • 4PM - 2AM</span>
          </div>
          <div className="hidden sm:block text-white/20">|</div>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-amber-500/80 w-4 h-4" />
            <span>Lakeside, Pokhara</span>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fadeIn"
        style={{ animationDelay: "1.5s", animationFillMode: "forwards" }}
      >
        <div className="w-7.5 h-12.5 rounded-full border border-white/30 flex justify-center">
          <div className="w-1 h-3 bg-amber-500/80 rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
