
"use client";
import React from 'react';
import ThemeSwitch from '../ThemeSwitch';
import MenuButton from '../atoms/MenuButton';


const Navbar = () => {
  return (
    <div
      className='z-50 fixed hidden md:flex md:w-full md:h-[8vh] md:items-center md:justify-between md:border-b px-8'
      style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--background)' }}
    >
      <MenuButton />
      <span>portfolio</span>
      <ThemeSwitch />
    </div>
  );
}

export default Navbar