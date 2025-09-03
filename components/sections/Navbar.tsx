
"use client";

import React, { useState } from 'react';
import ThemeSwitch from '../ThemeSwitch';
import MenuButton from '../atoms/MenuButton';
import { Burger } from './Burger';



const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div
        className='z-50 fixed hidden min-h-[70px] md:flex md:w-full md:h-[8vh] lg:h-[6vh] md:items-center md:justify-between md:border-b px-8'
        style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--background)' }}
      >
        <MenuButton onClick={() => setMenuOpen(true)} />
        <span>portfolio</span>
        <ThemeSwitch />
      </div>
      <Burger isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

export default Navbar