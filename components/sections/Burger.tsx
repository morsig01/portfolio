
import React from 'react';

import { AiOutlineClose } from 'react-icons/ai';

type BurgerProps = {
  isOpen: boolean;
  onClose: () => void;
};


export const Burger = ({ isOpen, onClose }: BurgerProps) => {
  const [mounted, setMounted] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setMounted(true);
      // Allow next tick for transition
      setTimeout(() => setVisible(true), 10);
    } else if (mounted) {
      setVisible(false);
    }
  }, [isOpen]);

  const handleTransitionEnd = () => {
    if (!visible) setMounted(false);
  };

  if (!mounted) return null;
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-[100] transition-opacity duration-300 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="w-full h-full flex flex-col relative" style={{backgroundColor: 'var(--background)' }}>
        <div className="flex flex-col items-center justify-center h-full relative">
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer hover:rotate-90 transition absolute top-40 md:top-96 left-1/2 -translate-x-1/2"
            aria-label="Close"
          >
            <AiOutlineClose size={30} />
          </button>
          <nav className="flex flex-col gap-8 text-3xl items-center justify-center h-full w-full" style={{marginTop: '4.5rem'}}>
            <a href="/" onClick={onClose} className="hover:border-b-2">Home</a>
            <a href="/projects" onClick={onClose} className="hover:border-b-2">Projects</a>
            <a href="/about" onClick={onClose} className="hover:border-b-2">About</a>
          </nav>
        </div>
      </div>
    </div>
  );
}