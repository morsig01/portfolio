
"use client";
import React from 'react';
import { useTheme } from "next-themes";


const Navbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='hidden md:flex md:w-full md:h-[8vh] md:items-center md:justify-between md:border-b md:border-neutral-300 md:dark:border-neutral-700 px-8'>
      <span>portfolio</span>
      <button
        aria-label="Toggle Theme"
        className="rounded px-3 py-1 border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-black text-black dark:text-white transition-colors"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
}

export default Navbar