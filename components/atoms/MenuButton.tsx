import React, { useState } from "react";

import { BiMenuAltLeft, BiMenu } from "react-icons/bi";


type MenuButtonProps = {
  onClick?: () => void;
};

const MenuButton = ({ onClick }: MenuButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center justify-center md:w-full md:h-full w-16 h-16 md:p-0 relative transition duration-300"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BiMenuAltLeft 
        size={30} 
        className="absolute"
      />
      <BiMenu 
        size={30} 
        className="absolute transition-all duration-300"
        style={{
          color: isHovered ? 'var(--foreground)' : 'transparent'
        }}
      />
    </div>
  );
};

export default MenuButton;
