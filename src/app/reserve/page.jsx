import React from "react";
import VideoSection from "@/component/reserve/VideoSection";
import ReservationForm from "@/component/reserve/ReservationForm";
import BirthdayBook from "@/component/reserve/BirthdayBook";

export const metadata = {
  title: "Reserve Your Table | Hookah69 - Premium Lounge Pokhara",
  description:
    "Book your table at Hookah69 for an unforgettable experience with premium hookah and cocktails.",
};

const ReservePage = () => {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Container */}
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <VideoSection />

          <ReservationForm />
        </div>
      </div>
    </main>
  );
};

export default ReservePage;
