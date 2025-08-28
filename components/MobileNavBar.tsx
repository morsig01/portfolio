"use client";

import MenuButton from "./atoms/MenuButton";
import ThemeSwitch from "./ThemeSwitch";

export default function MobileNavBar() {
  return (
    <div className="fixed top-0 left-0 w-full pt-3 px-3 z-50 md:hidden">
      <div
        className="rounded-full outline flex items-center justify-between"
        style={{
          backgroundColor: "var(--background)",
          outlineColor: "var(--outline-color)",
        }}
      >
        <MenuButton />
        <span>portfolio</span>
        <ThemeSwitch />
      </div>
    </div>
  );
}
