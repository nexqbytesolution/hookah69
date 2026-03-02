import HeroSection from "@/component/HeroSection";
// import MenuSection from "@/component/menu/MenuSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeroSection />
      {/* <MenuSection /> */}
    </div>
  );
}
