import React from "react";

import { HiMenuAlt2 } from "react-icons/hi";

const MenuButton = () => {
  return (
    <div
      className="p-4 md:p-2 border rounded-full md:rounded-lg cursor-pointer hover:shadow"
      style={{
        borderColor: "var(--border-color)",
        backgroundColor: "var(--background)",
      }}
    >
      <HiMenuAlt2 size={24} />
    </div>
  );
};

export default MenuButton;
