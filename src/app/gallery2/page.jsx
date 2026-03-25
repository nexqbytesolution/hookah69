"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaChevronLeft,
  FaChevronRight,
  FaTiktok,
  FaInstagram,
  FaFacebookF,
  FaHeart,
  FaComment,
  FaShare,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { TbBrandTiktok } from "react-icons/tb";
import Image from "next/image";

// Sample images for swipable gallery
const galleryImages = [
  {
    id: 1,
    url: "/hookah/hookan1.jpg",
    title: "Premium Hookah Experience",
    likes: 234,
    comments: 45,
  },
  {
    id: 2,
    url: "/hookah/hookan2.jpg",
    title: "Cozy Lounge Ambience",
    likes: 189,
    comments: 32,
  },
  {
    id: 3,
    url: "/hookah/hookan3.jpg",
    title: "Signature Cocktails",
    likes: 456,
    comments: 78,
  },
  {
    id: 4,
    url: "/hookah/hookan4.jpg",
    title: "Live Music Nights",
    likes: 312,
    comments: 56,
  },
  {
    id: 5,
    url: "/hookah/hookan5.jpg",
    title: "Mountain View Lounge",
    likes: 567,
    comments: 89,
  },
  {
    id: 6,
    url: "/hookah/hookan6.jpg",
    title: "Happy Hour Specials",
    likes: 278,
    comments: 43,
  },
];

// Sample TikTok videos
const tiktokVideos = [
  {
    id: 1,
    embedCode: "7566186984566213906",
    username: "hookah696",
    caption: "Hello Everyone ❤️",
    music: "Salaijyo - Nepathya",
    likes: "12.5K",
    comments: "1.2K",
  },
  {
    id: 2,
    embedCode: "7566186984566213907",
    username: "hookah696",
    caption: "Best Hookah in Kathmandu 🔥",
    music: "Original Sound",
    likes: "8.3K",
    comments: "892",
  },
  {
    id: 3,
    embedCode: "7566186984566213908",
    username: "hookah696",
    caption: "Sunset Vibes at Hookah69 🌅",
    music: "Lofi Beats",
    likes: "15.2K",
    comments: "2.1K",
  },
  {
    id: 4,
    embedCode: "7566186984566213909",
    username: "hookah696",
    caption: "Cocktail Making 🍸",
    music: "Chill Mix",
    likes: "9.7K",
    comments: "1.5K",
  },
];

// Instagram Reels
const instagramReels = [
  {
    id: 1,
    embedUrl: "https://www.instagram.com/reel/C0018_yvoD0/",
    username: "hookah69_official",
    caption: "Remember us for events and celebrations ✨❤️",
    likes: "2.5K",
    comments: "59",
  },
  {
    id: 2,
    embedUrl: "https://www.instagram.com/reel/C0A1b2c3d4e/",
    username: "hookah69_official",
    caption: "Best vibes at Hookah69 🎵",
    likes: "1.8K",
    comments: "42",
  },
  {
    id: 3,
    embedUrl: "https://www.instagram.com/reel/C0B2c3d4e5f/",
    username: "hookah69_official",
    caption: "Signature cocktail preparation 🍸",
    likes: "3.2K",
    comments: "78",
  },
  {
    id: 4,
    embedUrl: "https://www.instagram.com/reel/C0C3d4e5f6g/",
    username: "hookah69_official",
    caption: "Live music night at Hookah69 🎤",
    likes: "4.1K",
    comments: "103",
  },
];

// Marquee content
const marqueeContent = [
  "✨ Best Hookah Lounge in Kathmandu ✨",
  "🍹 100+ Premium Cocktails 🍹",
  "🎵 Live Music Every Night 🎵",
  "🌄 Stunning Mountain Views 🌄",
  "🏆 10+ Years of Excellence 🏆",
  "🎮 18+ Sports Screens 🎮",
];

const GalleryPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [likedImages, setLikedImages] = useState({});
  const [activeTab, setActiveTab] = useState("all"); // all, tiktok, instagram
  const autoPlayRef = useRef(null);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlaying && !isHovering) {
      autoPlayRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, isHovering]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const toggleLike = (id) => {
    setLikedImages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Load TikTok and Instagram embed scripts
  useEffect(() => {
    // TikTok embed script
    const tiktokScript = document.createElement("script");
    tiktokScript.src = "https://www.tiktok.com/embed.js";
    tiktokScript.async = true;
    document.body.appendChild(tiktokScript);

    // Instagram embed script
    const instagramScript = document.createElement("script");
    instagramScript.src = "//www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    return () => {
      document.body.removeChild(tiktokScript);
      document.body.removeChild(instagramScript);
    };
  }, []);

  // Filter content based on active tab
  const getFilteredContent = () => {
    if (activeTab === "tiktok") return { type: "tiktok", data: tiktokVideos };
    if (activeTab === "instagram")
      return { type: "instagram", data: instagramReels };
    return { type: "all", data: [...tiktokVideos, ...instagramReels] };
  };

  const filteredContent = getFilteredContent();

  return (
    <main className="min-h-screen bg-linear-to-b from-black to-[#1A2F4B] pt-24 pb-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-[#F4B400]/10 px-4 py-2 rounded-full mb-4 border border-[#F4B400]/30">
            <HiOutlineSparkles className="text-[#F4B400]" />
            <span className="text-[#F4B400] font-medium">Our Gallery</span>
            <HiOutlineSparkles className="text-[#F4B400]" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Moments at <span className="text-[#F4B400]">Hookah69</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Experience the vibe through our collection of photos, TikTok, and
            Instagram Reels
          </p>
        </motion.div>

        {/* Marquee Row */}
        <div className="relative overflow-hidden py-4 mb-12 bg-[#F4B400]/10 rounded-xl border border-[#F4B400]/20">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...marqueeContent, ...marqueeContent].map((text, index) => (
              <span
                key={index}
                className="text-[#F4B400] text-lg font-medium mx-8"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Swipable Image Gallery */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#F4B400] rounded-full"></span>
            Featured Moments
          </h2>

          <div
            className="relative rounded-2xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div className="relative h-125 md:h-150">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={galleryImages[currentImageIndex].url}
                    alt={galleryImages[currentImageIndex].title}
                    className="w-full h-full object-cover"
                    height={1000}
                    width={1000}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">
                  {galleryImages[currentImageIndex].title}
                </h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() =>
                      toggleLike(galleryImages[currentImageIndex].id)
                    }
                    className="flex items-center gap-2 text-white/80 hover:text-[#F4B400] transition-colors"
                  >
                    <FaHeart
                      className={`text-lg ${
                        likedImages[galleryImages[currentImageIndex].id]
                          ? "fill-[#F4B400] text-[#F4B400]"
                          : ""
                      }`}
                    />
                    <span>{galleryImages[currentImageIndex].likes}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/80 hover:text-[#F4B400] transition-colors">
                    <FaComment className="text-lg" />
                    <span>{galleryImages[currentImageIndex].comments}</span>
                  </button>
                  <button className="flex items-center gap-2 text-white/80 hover:text-[#F4B400] transition-colors">
                    <FaShare className="text-lg" />
                  </button>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#F4B400] hover:text-black transition-all"
              >
                <FaChevronLeft className="text-white" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#F4B400] hover:text-black transition-all"
              >
                <FaChevronRight className="text-white" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "w-6 bg-[#F4B400]"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>

              {/* Auto-play Toggle */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#F4B400] transition-all"
              >
                {isAutoPlaying ? (
                  <FaPause className="text-white" />
                ) : (
                  <FaPlay className="text-white ml-0.5" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Tabs */}
        <div className="mb-8">
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeTab === "all"
                  ? "bg-[#F4B400] text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              All Videos
            </button>
            <button
              onClick={() => setActiveTab("tiktok")}
              className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                activeTab === "tiktok"
                  ? "bg-[#F4B400] text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              <FaTiktok /> TikTok
            </button>
            <button
              onClick={() => setActiveTab("instagram")}
              className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                activeTab === "instagram"
                  ? "bg-[#F4B400] text-black"
                  : "bg-white/5 text-white/70 hover:bg-white/10"
              }`}
            >
              <FaInstagram /> Instagram Reels
            </button>
          </div>
        </div>

        {/* Social Media Videos Grid */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-1 h-6 bg-[#F4B400] rounded-full"></span>
            {activeTab === "tiktok" && "TikTok Moments"}
            {activeTab === "instagram" && "Instagram Reels"}
            {activeTab === "all" && "Social Media Videos"}
            {activeTab !== "all" && (
              <span className="text-[#F4B400] text-sm font-normal ml-2">
                (Videos loop automatically)
              </span>
            )}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredContent.data.map((item, index) => (
              <motion.div
                key={`${filteredContent.type}-${item.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-[#F4B400]/40 transition-all group"
              >
                <div className="relative aspect-9/16">
                  {filteredContent.type === "tiktok" ||
                  activeTab === "tiktok" ? (
                    <blockquote
                      className="tiktok-embed absolute inset-0 w-full h-full"
                      cite={`https://www.tiktok.com/@${item.username}/video/${item.embedCode}`}
                      data-video-id={item.embedCode}
                      style={{ minWidth: "100%", maxWidth: "100%" }}
                    >
                      <section>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={`https://www.tiktok.com/@${item.username}?refer=embed`}
                        >
                          @{item.username}
                        </a>
                        <p>{item.caption}</p>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href="https://www.tiktok.com/music/original-sound"
                        >
                          ♬ {item.music}
                        </a>
                      </section>
                    </blockquote>
                  ) : (
                    <blockquote
                      className="instagram-media absolute inset-0 w-full h-full"
                      data-instgrm-captioned
                      data-instgrm-permalink={item.embedUrl}
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: 0,
                        borderRadius: "3px",
                        boxShadow:
                          "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        maxWidth: "100%",
                        minWidth: "100%",
                        padding: 0,
                        width: "100%",
                      }}
                    >
                      <div style={{ padding: "16px" }}>
                        <a
                          href={item.embedUrl}
                          style={{
                            background: "#FFFFFF",
                            lineHeight: 0,
                            padding: 0,
                            textAlign: "center",
                            textDecoration: "none",
                            width: "100%",
                          }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                backgroundColor: "#F4F4F4",
                                borderRadius: "50%",
                                flexGrow: 0,
                                height: "40px",
                                marginRight: "14px",
                                width: "40px",
                              }}
                            />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                                justifyContent: "center",
                              }}
                            >
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "4px",
                                  flexGrow: 0,
                                  height: "14px",
                                  marginBottom: "6px",
                                  width: "100px",
                                }}
                              />
                              <div
                                style={{
                                  backgroundColor: "#F4F4F4",
                                  borderRadius: "4px",
                                  flexGrow: 0,
                                  height: "14px",
                                  width: "60px",
                                }}
                              />
                            </div>
                          </div>
                          <div style={{ padding: "19% 0" }} />
                          <div
                            style={{
                              display: "block",
                              height: "50px",
                              margin: "0 auto 12px",
                              width: "50px",
                            }}
                          >
                            <svg
                              width="50px"
                              height="50px"
                              viewBox="0 0 60 60"
                              version="1.1"
                              xmlns="https://www.w3.org/2000/svg"
                            >
                              <g
                                stroke="none"
                                strokeWidth="1"
                                fill="none"
                                fillRule="evenodd"
                              >
                                <g
                                  transform="translate(-511.000000, -20.000000)"
                                  fill="#000000"
                                >
                                  <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101" />
                                </g>
                              </g>
                            </svg>
                          </div>
                          <div style={{ paddingTop: "8px" }}>
                            <div
                              style={{
                                color: "#3897f0",
                                fontFamily: "Arial,sans-serif",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: "550",
                                lineHeight: "18px",
                              }}
                            >
                              View this post on Instagram
                            </div>
                          </div>
                        </a>
                        <p
                          style={{
                            color: "#c9c8cd",
                            fontFamily: "Arial,sans-serif",
                            fontSize: "14px",
                            lineHeight: "17px",
                            marginBottom: 0,
                            marginTop: "8px",
                            overflow: "hidden",
                            padding: "8px 0 7px",
                            textAlign: "center",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <a
                            href={item.embedUrl}
                            style={{
                              color: "#c9c8cd",
                              fontFamily: "Arial,sans-serif",
                              fontSize: "14px",
                              fontStyle: "normal",
                              fontWeight: "normal",
                              lineHeight: "17px",
                              textDecoration: "none",
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            A post shared by ♠️ Hookah 69 ♠️
                            (@hookah69_official)
                          </a>
                        </p>
                      </div>
                    </blockquote>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FaHeart className="text-[#F4B400] text-sm" />
                    <span className="text-white/70 text-xs">{item.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaComment className="text-[#F4B400] text-sm" />
                    <span className="text-white/70 text-xs">
                      {item.comments}
                    </span>
                  </div>
                  <button className="text-white/40 hover:text-[#F4B400] transition-colors">
                    <FaShare className="text-xs" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Social Media Row */}
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            Follow Our Journey
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="https://www.tiktok.com/@hookah696"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#F4B400]/10 rounded-full flex items-center justify-center hover:bg-[#F4B400] transition-all group"
            >
              <FaTiktok className="text-2xl text-[#F4B400] group-hover:text-black" />
            </a>
            <a
              href="https://instagram.com/hookah69_official"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#F4B400]/10 rounded-full flex items-center justify-center hover:bg-[#F4B400] transition-all group"
            >
              <FaInstagram className="text-2xl text-[#F4B400] group-hover:text-black" />
            </a>
            <a
              href="https://facebook.com/hookah69"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-[#F4B400]/10 rounded-full flex items-center justify-center hover:bg-[#F4B400] transition-all group"
            >
              <FaFacebookF className="text-2xl text-[#F4B400] group-hover:text-black" />
            </a>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
};

export default GalleryPage;
