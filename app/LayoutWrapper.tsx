"use client";
import { usePathname } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import MobileNavBar from "@/components/MobileNavBar";
import Footer from "@/components/sections/Footer";

export default function LayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname.startsWith("/studio");

  return (
    <>
      {!isStudio && <Navbar />}
      {!isStudio && <MobileNavBar />}
      {children}
      {!isStudio && <Footer />}
    </>
  );
}
