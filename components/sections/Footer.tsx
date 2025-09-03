import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <>
    <div className="max-w-full h-[400px] border-t md:h-[300px] flex items-center justify-center" style={{ borderColor: 'var(--border-color)' }}>
      <div className="flex flex-col gap-12 md:flex-row">
        <a
          href="https://www.linkedin.com/in/morgan-sigland-b2993134b/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/morsig01"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
          >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.instagram.com/morgan.sigland/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
          >
          <FaInstagram size={30} />
        </a>
        <a
          href="mailto:morgan.sigland@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition"
        >
          <FiMail size={30} />
        </a>
      </div>
    </div>
    <div className="flex justify-center pb-6">Made by and for Morgan Sigland</div>
    </>
  );
};

export default Footer;
