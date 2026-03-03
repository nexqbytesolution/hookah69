"use client";

import { FaStar } from "react-icons/fa";
import { HiOutlineHeart, HiOutlineChat, HiOutlineShare } from "react-icons/hi";
import { useState } from "react";

const reviews = [
  {
    id: 1,
    name: "Alex Johnson",
    rating: 5,
    text: "Best hookah lounge in Pokhara! Amazing atmosphere and the staff is incredibly friendly. The mint flavor is absolutely perfect!",
    date: "2 days ago",
    likes: 24,
    comments: 5,
  },
  {
    id: 2,
    name: "Sarah Miller",
    rating: 5,
    text: "Love the cocktails! The mixologist knows their craft perfectly. Try the Hookah 69 Special - it's divine!",
    date: "1 week ago",
    likes: 18,
    comments: 3,
  },
  {
    id: 3,
    name: "Raj Sharma",
    rating: 4,
    text: "Great place to hang out with friends. The music selection is fantastic and the service is quick.",
    date: "3 days ago",
    likes: 12,
    comments: 2,
  },
  {
    id: 4,
    name: "Emily Chen",
    rating: 5,
    text: "The sunset view from here is incredible! Perfect spot for evening sessions with amazing vibes.",
    date: "5 days ago",
    likes: 31,
    comments: 7,
  },
  {
    id: 5,
    name: "Mike Wilson",
    rating: 4,
    text: "Amazing service and friendly staff. The food platters are delicious and pair perfectly with hookah.",
    date: "1 day ago",
    likes: 15,
    comments: 4,
  },
];

const ReviewComp = () => {
  const [likedReviews, setLikedReviews] = useState({});

  // Get initials from name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  // Get random color for avatar background
  const getAvatarColor = (name) => {
    const colors = [
      "bg-blue-500/20 text-blue-500",
      "bg-green-500/20 text-green-500",
      "bg-purple-500/20 text-purple-500",
      "bg-pink-500/20 text-pink-500",
      "bg-orange-500/20 text-orange-500",
      "bg-teal-500/20 text-teal-500",
    ];
    const index = name.length % colors.length;
    return colors[index];
  };

  const handleLike = (id) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-linear-to-br from-[#1A2F4B] to-[#0F1A2B] p-6  shadow-xl w-full  mx-auto border border-[#F4B400]/20">
      {/* Header with Stats */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
        <div>
          <h3 className="text-2xl font-bold text-white flex items-center gap-2">
            <span className="w-1.5 h-6 bg-[#F4B400] rounded-full"></span>
            Customer Reviews
          </h3>
          <p className="text-white/50 text-sm mt-1">
            What our guests say about us
          </p>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="group bg-white/5 hover:bg-white/10 rounded-xl p-4 transition-all duration-300 border border-white/10 hover:border-[#F4B400]/40 hover:shadow-lg hover:shadow-[#F4B400]/5"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                {/* Colored Initials Avatar */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm ${getAvatarColor(review.name)} bg-opacity-20`}
                >
                  {getInitials(review.name)}
                </div>
                <div>
                  <p className="text-white font-medium">{review.name}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xs ${
                            i < review.rating
                              ? "text-[#F4B400]"
                              : "text-white/20"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white/30 text-xs">•</span>
                    <span className="text-white/30 text-xs">{review.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Text with Quotes */}
            <div className="relative mb-3">
              <span className="absolute -top-1 left-0 text-3xl text-[#F4B400]/20 font-serif"></span>
              <p className="text-white/80 text-sm pl-4 pr-2 line-clamp-3">
                {review.text}
              </p>
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-between pt-2 border-t border-white/10">
              <div className="flex items-center gap-3">
                {/* Like Button */}
                <button
                  onClick={() => handleLike(review.id)}
                  className="flex items-center gap-1.5 text-white/40 hover:text-[#F4B400] transition-colors group/btn"
                >
                  <HiOutlineHeart
                    className={`text-base transition-all ${
                      likedReviews[review.id]
                        ? "fill-[#F4B400] text-[#F4B400]"
                        : ""
                    } group-hover/btn:scale-110`}
                  />
                  <span className="text-xs">
                    {likedReviews[review.id] ? review.likes + 1 : review.likes}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewComp;
