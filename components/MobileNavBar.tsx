"use client";

import { useState } from "react";
import MenuButton from "./atoms/MenuButton";
import ThemeSwitch from "./ThemeSwitch";

import { Burger } from "./sections/Burger";

export default function MobileNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full pt-3 px-3 z-50 md:hidden">
      <div
        className="rounded-full outline flex items-center justify-between"
        style={{
          backgroundColor: "var(--background)",
          outlineColor: "var(--outline-color)",
        }}
      >
        <div className="rounded-full border" style={{ borderColor: "var(--border-color)" }}>
          <MenuButton onClick={() => setMenuOpen(true)} />
        </div>
        <span>portfolio</span>
        <div className="rounded-full border" style={{ borderColor: "var(--border-color)" }}>
          <ThemeSwitch />
        </div>
      </div>
      <Burger isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </div>
  );
}
