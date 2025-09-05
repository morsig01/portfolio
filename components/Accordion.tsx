'use client'

import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

export type AccordionItem = {
  title: string;
  content: React.ReactNode;
};

interface AccordionProps {
  items: AccordionItem[];
}

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion w-full">
      {items.map((item, idx) => (
        <div key={idx} className="accordion-item border-b" style={{ borderColor: 'var(--border-color)' }}>
          <button
            className={`accordion-title flex items-center justify-between w-full p-4 text-xl font-semibold transition-colors duration-200 focus:outline-none hover-bg${openIndex === idx ? ' selected-title-bg border-b' : ''}` }
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
            style={{ cursor: 'pointer', borderColor: 'var(--border-color)' }}
          >
            <span className="text-left flex-1 pr-4">{item.title}</span>
            {openIndex === idx ? (
              <FiMinus className="transition-transform duration-300 flex-shrink-0" size={24} />
            ) : (
              <FiPlus className="transition-transform duration-300 flex-shrink-0" size={24} />
            )}
          </button>
          <div
            className={`accordion-content p-4 text-lg !text-left transition-all duration-300 content-bg${openIndex === idx ? ' open' : ' max-h-0 overflow-hidden'}`}
            style={{ display: openIndex === idx ? 'block' : 'none' }}
          >
            <div className="text-left">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
