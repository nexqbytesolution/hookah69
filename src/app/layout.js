import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hookah69 - Premium Hookah Experience",
  description:
    "This is Hookah69, your ultimate destination for premium hookah products and accessories. Explore our wide selection of high-quality hookahs, shisha flavors, and stylish accessories to elevate your smoking experience. Whether you're a seasoned hookah enthusiast or new to the world of hookah, we have everything you need to enjoy a smooth and flavorful session. Shop now and discover the perfect hookah setup for your needs!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20 md:pt-24 min-h-screen">
          {" "}
          {/* Add padding top */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
