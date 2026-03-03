"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaExpand,
  FaCompress,
  FaYoutube,
  FaVimeoV,
} from "react-icons/fa";
import {
  HiOutlineVideoCamera,
  HiOutlineClock,
  HiOutlineHeart,
  HiOutlineShare,
  HiOutlineDownload,
} from "react-icons/hi";

const GalleryVideo = ({ video, isActive, onPlayStateChange }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(0); // ✅ Add state for current time
  const [duration, setDuration] = useState(0); // ✅ Add state for duration

  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const controlsTimeout = useRef(null);

  // Format time (seconds to MM:SS)
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  // Initialize video metadata
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;

      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  // Toggle play/pause
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
      if (onPlayStateChange) onPlayStateChange(!isPlaying);
    }
  };

  // Toggle mute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
    setIsMuted(newVolume === 0);
  };

  // Handle progress update
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setCurrentTime(current);
      setProgress((current / total) * 100);
    }
  };

  // Handle seeking
  const handleSeek = (e) => {
    const seekTime =
      (parseFloat(e.target.value) / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(parseFloat(e.target.value));
    setCurrentTime(seekTime);
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Show/hide controls on mouse move
  const handleMouseMove = () => {
    setShowControls(true);
    clearTimeout(controlsTimeout.current);
    controlsTimeout.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Handle keyboard shortcuts
  const handleKeyDown = (e) => {
    if (!isActive) return;

    switch (e.key) {
      case " ":
      case "Space":
        e.preventDefault();
        togglePlay();
        break;
      case "m":
      case "M":
        toggleMute();
        break;
      case "f":
      case "F":
        toggleFullscreen();
        break;
      case "ArrowRight":
        if (videoRef.current) {
          videoRef.current.currentTime += 10;
        }
        break;
      case "ArrowLeft":
        if (videoRef.current) {
          videoRef.current.currentTime -= 10;
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        setVolume((prev) => {
          const newVol = Math.min(1, prev + 0.1);
          if (videoRef.current) videoRef.current.volume = newVol;
          return newVol;
        });
        break;
      case "ArrowDown":
        e.preventDefault();
        setVolume((prev) => {
          const newVol = Math.max(0, prev - 0.1);
          if (videoRef.current) videoRef.current.volume = newVol;
          return newVol;
        });
        break;
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="relative w-full h-full bg-black rounded-2xl overflow-hidden shadow-2xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowControls(true)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        src={video.src}
        poster={video.thumbnail}
        className="w-full h-full object-contain"
        onClick={togglePlay}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        loop={video.loop}
      />

      {/* Video Overlay - Gradient */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Top Bar - Title and Actions */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#F4B400]/20 rounded-lg flex items-center justify-center">
                <HiOutlineVideoCamera className="text-[#F4B400] text-xl" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{video.title}</h3>
                <p className="text-white/60 text-sm">{video.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <HiOutlineHeart
                  className={`text-xl ${isLiked ? "fill-[#F4B400] text-[#F4B400]" : "text-white"}`}
                />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <HiOutlineShare className="text-white text-xl" />
              </button>
              <button className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors">
                <HiOutlineDownload className="text-white text-xl" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Center Play Button - Large when paused */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-[#F4B400] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-20"
          >
            <FaPlay className="text-[#1A2F4B] text-3xl ml-1" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom Controls */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="absolute bottom-0 left-0 right-0 p-6 space-y-4 z-10"
          >
            {/* Progress Bar */}
            <div className="relative group">
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#F4B400] [&::-webkit-slider-thumb]:opacity-0 group-hover:[&::-webkit-slider-thumb]:opacity-100"
                style={{
                  background: `linear-gradient(to right, #F4B400 0%, #F4B400 ${progress}%, rgba(255,255,255,0.3) ${progress}%, rgba(255,255,255,0.3) 100%)`,
                }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? (
                    <FaPause className="text-white text-lg" />
                  ) : (
                    <FaPlay className="text-white text-lg ml-0.5" />
                  )}
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    {isMuted || volume === 0 ? (
                      <FaVolumeMute className="text-white text-lg" />
                    ) : (
                      <FaVolumeUp className="text-white text-lg" />
                    )}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#F4B400]"
                    style={{
                      background: `linear-gradient(to right, #F4B400 0%, #F4B400 ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`,
                    }}
                  />
                </div>

                {/* Time Display - Now using state instead of ref */}
                <div className="text-white/70 text-sm">
                  {formatTime(currentTime)} /{" "}
                  {formatTime(duration || video.duration || 0)}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Video Quality/Info */}
                <div className="px-3 py-1 bg-white/10 rounded-lg text-white/70 text-sm">
                  {video.quality || "HD"}
                </div>

                {/* Fullscreen */}
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {isFullscreen ? (
                    <FaCompress className="text-white text-lg" />
                  ) : (
                    <FaExpand className="text-white text-lg" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Duration Badge */}
      <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white/90 text-sm flex items-center gap-1 z-10">
        <HiOutlineClock className="text-[#F4B400]" />
        <span>{video.duration}</span>
      </div>

      {/* Video Source Indicator */}
      {video.source === "youtube" && (
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white/90 text-sm flex items-center gap-1 z-10">
          <FaYoutube className="text-red-500" />
          <span>YouTube</span>
        </div>
      )}

      {video.source === "vimeo" && (
        <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-white/90 text-sm flex items-center gap-1 z-10">
          <FaVimeoV className="text-[#1AB7EA]" />
          <span>Vimeo</span>
        </div>
      )}
    </motion.div>
  );
};

export default GalleryVideo;
