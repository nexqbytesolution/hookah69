"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import {
  HiOutlineX,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineDownload,
  HiOutlineShare,
  HiOutlineHeart,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import Image from "next/image";

const Lightbox = ({
  isOpen,
  onClose,
  currentItem,
  onNext,
  onPrev,
  hasNext,
  hasPrev,
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext) onNext();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, hasNext, hasPrev, onClose, onNext, onPrev]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!currentItem) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white z-10"
          >
            <HiOutlineX className="text-3xl" />
          </button>

          {/* Navigation */}
          {hasPrev && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            >
              <HiOutlineChevronLeft className="text-4xl" />
            </button>
          )}

          {hasNext && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
            >
              <HiOutlineChevronRight className="text-4xl" />
            </button>
          )}

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-6xl max-h-[90vh] w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {currentItem.type === "video" ? (
              <div className="relative aspect-video bg-black rounded-xl overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${currentItem.videoId}?autoplay=1`}
                  title={currentItem.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <Image
                src={currentItem.image}
                alt={currentItem.title}
                width={1000}
                height={1000}
                className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
              />
            )}

            <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 to-transparent p-6 rounded-b-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {currentItem.title}
                  </h3>
                  <p className="text-white/70">{currentItem.description}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className="text-white/50 text-sm">
                      {currentItem.date}
                    </span>
                    <span className="text-white/50 text-sm">•</span>
                    <span className="text-white/50 text-sm capitalize">
                      {currentItem.category}
                    </span>
                    {currentItem.type === "video" && (
                      <>
                        <span className="text-white/50 text-sm">•</span>
                        <span className="text-[#F4B400] text-sm flex items-center gap-1">
                          <HiOutlineVideoCamera /> {currentItem.duration}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className="text-white/70 hover:text-[#F4B400] transition-colors">
                    <HiOutlineHeart className="text-2xl" />
                  </button>
                  <button className="text-white/70 hover:text-[#F4B400] transition-colors">
                    <HiOutlineShare className="text-2xl" />
                  </button>
                  <button className="text-white/70 hover:text-[#F4B400] transition-colors">
                    <HiOutlineDownload className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
