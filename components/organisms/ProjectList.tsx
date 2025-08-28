"use client";

import React, { useState } from "react";

import Link from "next/link";

import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import { projectType } from "../../types/ProjectType";

export default function ProjectList({ projects }: { projects: projectType[] }) {
  const [isOpen, setIsOpen] = useState(false);

  if (!projects || projects.length === 0) return null;

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full p-6 border hover:bg-blue-500 hover:cursor-pointer transition rounded-sm" style={{ borderColor: 'var(--border-color)' }}
      >
        All Projects
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="border rounded-none md:rounded-xl w-full h-full md:max-w-7xl md:w-full md:max-h-[80vh] flex flex-col shadow-lg relative md:h-auto md:mx-20" style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--background)'}}>
            <div
            className="sticky top-0 z-10 bg-background border-b flex items-center justify-between px-6 py-4 rounded-t-none md:rounded-t-xl"
            style={{ borderColor: 'var(--border-color)' }}
            >
              <h2 className="text-2xl font-bold">All Projects</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full border hover:bg-neutral-100 hover:dark:bg-neutral-800 transition"
                style={{ borderColor: 'var(--border-color)' }}
                aria-label="Close"
              >
                <AiOutlineClose size={24} />
              </button>
            </div>
            <div className="p-6 overflow-y-auto h-full">
              <ul className="grid gap-6">
                {projects.map((p, idx) => (
                  <li
                    key={idx}
                    className="border rounded-lg p-4 shadow-sm hover:shadow transition flex items-center justify-between"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    <div className="flex flex-col colums-1 gap-2">
                      <div className="flex flex-col gap-4 md:flex-row">
                        <h3 className="text-2xl font-semibold flex items-center">
                          {p.title}
                        </h3>
                        <div className="flex gap-2">

                          <div
                            className={`px-2 py-1 rounded-full flex items-center justify-center border 
                                ${
                                  p.type === "Personal"
                                    ? "border-blue-500"
                                    : "border-orange-500"
                                }`}
                          >
                            {p.type}
                          </div>

                          <div className="border-r" style={{ borderColor: 'var(--border-color)' }}></div>
                        
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
                      <p className="max-w-[70vw]">{p.about}</p>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                      {p.github && (
                        <Link
                          href={p.github}
                          target="_blank"
                          className="hover:text-blue-500 hover:shadow-sm transition rounded border p-2"
                          style={{ borderColor: 'var(--border-color)' }}
                        >
                          <IoLogoGithub />
                        </Link>
                      )}
                      {p.site && (
                        <Link
                          href={p.site}
                          target="_blank"
                          className="hover:text-blue-500 hover:shadow-sm transition rounded border p-2"
                          style={{ borderColor: 'var(--border-color)' }}
                        >
                          <HiOutlineExternalLink />
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
