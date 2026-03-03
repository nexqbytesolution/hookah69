"use client";
import { useState } from "react";

export default function Book() {
  const [flippedPages, setFlippedPages] = useState([]);

  const totalPages = 16;

  const togglePage = (index) => {
    const pageNumber = index + 1;

    if (pageNumber % 2 === 0) {
      // Flip backward
      setFlippedPages((prev) =>
        prev.filter((i) => i !== index && i !== index - 1),
      );
    } else {
      // Flip forward
      setFlippedPages((prev) => [...prev, index, index + 1]);
    }
  };

  const pageTexts = [
    "Open Me,\nplease!",
    "",
    "Hello there!",
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4",
    "Page 5",
    "Page 6",
    "Page 7",
    "Page 8",
    "Page 9",
    "Page 10",
    "Page 11",
    "Page 12",
    "Page 13",
  ];

  return (
    <div className="perspective-[200vw]">
      <div className="relative w-[60vw] h-[44vw] max-w-[900px] max-h-[650px] transform-style-preserve-3d rounded-lg shadow-2xl">
        {pageTexts.map((text, i) => {
          const isFlipped = flippedPages.includes(i);
          const isEven = i % 2 !== 0;

          return (
            <div
              key={i}
              onClick={() => togglePage(i)}
              className={`
                absolute top-0
                w-[30vw] h-[44vw]
                max-w-[450px] max-h-[650px]
                rounded-lg cursor-pointer select-none
                bg-[#faf8f6]
                shadow-inner
                transition-transform duration-[1200ms] ease-in-out
                [backface-visibility:hidden]
                ${isEven ? "left-0 origin-right rotate-y-180" : "right-0 origin-left"}
                ${isFlipped ? (isEven ? "rotate-y-0" : "-rotate-y-180") : ""}
              `}
              style={{
                zIndex: totalPages - i,
              }}
            >
              {text && (
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-[5vw] max-text-6xl text-gray-800 whitespace-pre-line">
                  {text}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
