'use client'

import React, { useState } from 'react'

import Link from 'next/link';

import { IoLogoGithub } from 'react-icons/io5';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import { projectType } from "../../types/ProjectType"

export default function ProjectList({ projects }: { projects: projectType[] }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!projects || projects.length === 0) return null;

    return (
        <div>
            <button
                onClick={() => setIsOpen(true)}
                className="w-full p-6 border border-neutral-300 dark:border-neutral-700 hover:bg-blue-500 hover:cursor-pointer transition rounded-sm"
            >
                All Projects
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
                    <div className="bg-background rounded-none md:rounded-xl w-full h-full md:max-w-7xl md:w-full md:max-h-[80vh] flex flex-col shadow-lg relative md:h-auto md:mx-20">
                        <div className="sticky top-0 z-10 bg-background border border-neutral-300 dark:border-neutral-700 flex items-center justify-between px-6 py-4 rounded-t-none md:rounded-t-xl">
                            <h2 className="text-2xl font-bold">All Projects</h2>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 hover:dark:bg-neutral-800 transition"
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
                                        className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-4 shadow-sm hover:shadow transition flex items-center justify-between"
                                    >
                                        <div>
                                            <div className='flex flex-row gap-4'>
                                                <h3 className="text-lg font-semibold flex items-center">{p.title}</h3>
                                                <div className='border border-neutral-300 dark:border-neutral-700 px-2 py-1 rounded-full max-w-fit flex-items-center justify-center'>{p.role}</div>
                                            </div>
                                            <p className='max-w-[70vw]'>{p.about}</p>
                                        </div>
                                        <div className="flex items-center gap-2 ml-4">
                                            {p.github && (
                                                <Link
                                                    href={p.github}
                                                    target="_blank"
                                                    className="hover:text-blue-500 hover:shadow-sm transition rounded border border-neutral-200 dark:border-neutral-700 p-2"
                                                >
                                                    <IoLogoGithub />
                                                </Link>
                                            )}
                                            {p.site && (
                                                <Link
                                                    href={p.site}
                                                    target="_blank"
                                                    className="hover:text-blue-500 hover:shadow-sm transition rounded border border-neutral-200 dark:border-neutral-700 p-2"
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
    )
}