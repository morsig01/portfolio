"use client";

import React, { useState } from "react";
import ThemeSwitch from "../ThemeSwitch";
import MenuButton from "../atoms/MenuButton";
import { Burger } from "./Burger";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className="z-50 fixed hidden min-h-[70px] md:flex md:w-full md:h-[8vh] lg:h-[6vh] md:items-center md:justify-between md:border-b"
        style={{
          borderColor: "var(--border-color)",
          backgroundColor: "var(--background)",
        }}
      >
        <div
          className="flex justify-center items-center aspect-square h-full hover:cursor-pointer border-r"
          onClick={() => setMenuOpen(true)}
          style={{ borderColor: "var(--border-color)" }}
        >
          <MenuButton />
        </div>
        <span>portfolio</span>
        <div
          className="flex justify-center items-center aspect-square h-full hover:cursor-pointer border-l"
          style={{ borderColor: "var(--border-color)" }}
        >
          <ThemeSwitch />
        </div>
      </div>
      <Burger isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
};

export default Navbar;
