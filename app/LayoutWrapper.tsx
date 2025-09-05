"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/sections/Navbar";
import MobileNavBar from "@/components/MobileNavBar";
import Footer from "@/components/sections/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isNotFound, setIsNotFound] = useState(false);
  const isStudio = pathname.startsWith("/studio");

  useEffect(() => {
    // Check if the current page is a 404 by looking for common 404 indicators
    const checkIfNotFound = () => {
      // Check if the document title contains "404" or if there are specific 404 elements
      const title = document.title;
      const has404Element = document.querySelector('[data-not-found]') !== null;
      const titleIndicates404 = title.includes('404') || title.includes('Not Found');
      
      setIsNotFound(has404Element || titleIndicates404);
    };

    // Check immediately and after a short delay to allow page to load
    checkIfNotFound();
    const timer = setTimeout(checkIfNotFound, 100);
    
    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {!isStudio && !isNotFound && <Navbar />}
      {!isStudio && !isNotFound && <MobileNavBar />}
      {children}
      {!isStudio && !isNotFound && <Footer />}
    </>
  );
}
