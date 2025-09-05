import { IoArrowBackCircleOutline } from "react-icons/io5";
import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <>
      <div className="w-full h-screen" data-not-found="true">
        <div className="relative w-full h-screen bg-[url('/Jellyfish.jpg')] bg-cover bg-center flex items-center justify-center">
          <div className="absolute inset-0 bg-black/70 z-0" />
          <span
            className="relative z-10 text-9xl font-extrabold text-transparent px-4 py-2 text-center flex items-center justify-center"
            style={{
              textShadow: "0 1px 6px #fff, 0 2px 12px #fff, 0 0 4px #fff",
              filter:
                "drop-shadow(0 1px 6px #fff) drop-shadow(0 2px 12px #fff)",
            }}
          >
            404
          </span>

          <Link
            href="/"
            className="absolute p-4 md:p-0 rounded-3xl flex items-center bottom-8 left-1/2 -translate-x-1/2 z-10 border-2 md:border-none text-white transition-all duration-200 gap-1 hover:gap-3 hover:underline"
            style={{ borderColor: 'var(--border-color)' }}
          >
            <IoArrowBackCircleOutline />
            Go back home
          </Link>
        </div>
      </div>
    </>
  );
};

export default NotFound;
