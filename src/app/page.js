import HeroSection from "@/component/HeroSection";
import Owners from "@/component/owner/Owner";
import ReviewComp from "@/component/review/ReviewComp";
import WhyChooseUs from "@/component/WhyChooseUs/WhyChooseUs";
// import MenuSection from "@/component/menu/MenuSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      {/* <MenuSection /> */}
      <WhyChooseUs />
      <Owners />
      <ReviewComp />
    </div>
  );
}
