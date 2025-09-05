"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";

import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { projectType } from "../../types/ProjectType";

export default function ProjectList({ projects }: { projects: projectType[] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store the original overflow value
      const originalOverflow = document.body.style.overflow;
      // Disable scrolling
      document.body.style.overflow = 'hidden';
      
      // Cleanup function to restore original overflow when component unmounts or modal closes
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    } else {
      // Re-enable scrolling when modal is closed
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!projects || projects.length <= 4) return null;

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full p-6 mt-6 border hover:bg-blue-700 hover:cursor-pointer transition" style={{ borderColor: 'var(--border-color)' }}
      >
        All Projects
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="border-none md:border rounded-none md:rounded-sm w-full h-full md:max-w-[80vw] md:w-full md:max-h-[80vh] flex flex-col shadow-lg relative md:h-auto md:mx-20" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--background)'}}>
            <div
            className="sticky top-0 z-10 bg-background border-b flex items-center justify-between px-6 py-4"
            style={{ borderColor: 'var(--border-color)' }}
            >
              <h2 className="text-2xl font-bold">All Projects</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="cursor-pointer hover:rotate-90 transition duration-300"
                aria-label="Close"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <div className="p-5 overflow-y-auto h-full">
              <ul className="grid gap-6">
                {projects.map((p, idx) => (
                  <li
                    key={idx}
                    className="border shadow-sm hover:shadow transition flex flex-col md:flex-row md:items-stretch relative"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    <div className="flex flex-col colums-1 gap-6 p-4 flex-1">
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                          <div className="flex items-center justify-between gap-4">
                            <h3 className="text-2xl font-semibold flex items-center">
                              {p.title}
                            </h3>
                            <div
                              className={`px-2 py-1 rounded-full flex items-center justify-center border 
                                  ${
                                    p.type === "Personal"
                                      ? "border-blue-700"
                                      : "border-orange-500"
                                  }`}
                            >
                              {p.type}
                            </div>
                          </div>
                          <div className="hidden md:block border-l h-6 mx-2" style={{ borderColor: 'var(--border-color)' }}/>
                          <div className="flex gap-2 items-center justify-between flex-wrap">
                            {Array.isArray(p.role) ? (
                              p.role.map((role: string, i: number) => (
                                <div
                                  key={i}
                                  className="border px-2 py-1 rounded-full flex items-center justify-center"
                                  style={{ borderColor: 'var(--border-color)' }}
                                >
                                  {role}
                                </div>
                              ))
                            ) : (
                              <div className="border px-2 py-1 rounded-full flex items-center justify-center" style={{ borderColor: 'var(--border-color)' }}>
                                {p.role}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                      <p className="w-full">{p.about}</p>
                    </div>

                    {/* Mobile links - positioned to extend to the edges */}
                    <div className="flex md:hidden border-t h-auto"
                    style={{ borderColor: 'var(--border-color)' }}
                    >
                      {p.github && (
                        <Link
                          href={p.github}
                          target="_blank"
                          className={`hover:text-blue-700 hover:shadow-sm transition flex items-center justify-center w-full py-4 ${p.github && p.site ? 'border-r' : ''}`}
                          style={{ borderColor: 'var(--border-color)' }}
                        >
                          <IoLogoGithub size={20} />
                        </Link>
                      )}
                      {p.site && (
                        <Link
                          href={p.site}
                          target="_blank"
                          className="hover:text-blue-700 hover:shadow-sm transition flex items-center justify-center w-full py-4"
                          style={{ borderColor: 'var(--border-color)' }}
                        >
                          <HiOutlineExternalLink size={20} />
                        </Link>
                      )}
                    </div>

                    {/* Desktop links - positioned to extend to the edge */}
                    <div className="hidden md:flex flex-col h-full">
                      {p.github && (
                        <Link
                          href={p.github}
                          target="_blank"
                          className="hover:text-blue-700 hover:shadow-sm flex items-center justify-center transition border-l border-b h-full min-h-[60px] px-4"
                          style={{ borderColor: 'var(--border-color)' }}
                        >
                          <IoLogoGithub size={20} />
                        </Link>
                      )}
                      {p.site && (
                        <Link
                          href={p.site}
                          target="_blank"
                          className="hover:text-blue-700 hover:shadow-sm flex items-center justify-center transition border-l h-full min-h-[60px] px-4"
                          style={{ borderColor: 'var(--border-color)' }}
                        >
                          <HiOutlineExternalLink size={20} />
                        </Link>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
