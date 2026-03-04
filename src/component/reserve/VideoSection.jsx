"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.volume = 0; // Start with zero volume to ensure muted

      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((error) => {
            console.log("Autoplay prevented:", error);
            setIsPlaying(false);
          });
      }
    }
  }, []);

  const handleUserInteraction = () => {
    if (!hasInteracted && videoRef.current) {
      setHasInteracted(true);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Play failed:", error);
          });
        }
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current && hasInteracted) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress =
        (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleVideoError = (e) => {
    console.error("Video error:", e);
    setVideoError(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="relative h-full min-h-150 rounded-3xl overflow-hidden group"
      onClick={handleUserInteraction}
    >
      {/* Video Element with proper styling */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        loop
        muted={isMuted}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onError={handleVideoError}
        style={{ display: "block" }} // Ensure video is displayed
      >
        <source src="/video/video.mp4" type="video/mp4" />
        <source src="/video/video.webm" type="video/webm" />
        <source src="/video/video.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      {/* Show fallback if video fails */}
      {videoError && (
        <div className="absolute inset-0 bg-linear-to-br from-[#1A2F4B] to-black">
          <div className="absolute inset-0 bg-[url('/hookah/logo.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/50 text-sm">Video failed to load</p>
          </div>
        </div>
      )}

      {/* linear Overlay - Fixed typo from "linear" to "gradient" */}
      <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent pointer-events-none"></div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 bg-[#F4B400]/20 text-[#F4B400] px-4 py-2 rounded-full text-sm border border-[#F4B400]/30">
            <HiOutlineSparkles /> Exclusive Experience
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Book Your
          <br />
          <span className="text-[#F4B400]">Premium Table</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-white/70 max-w-md mb-6"
        >
          Enjoy an unforgettable evening with premium hookah, signature
          cocktails, and breathtaking views.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default VideoSection;
