"use client";

import { FaAdjust } from 'react-icons/fa';
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div
        className="md:h-full md:w-full w-12 h-12 md:p-0"
        style={{ borderColor: "var(--border-color)" }}
      >
        <Image
          src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
          width={36}
          height={36}
          sizes="36x36"
          alt="Loading Light/Dark Toggle"
          priority={false}
          title="Loading Light/Dark Toggle"
        />
      </div>
    );

  if (resolvedTheme === "dark") {
    return (
      <div
        className="flex items-center justify-center md:w-full md:h-full w-16 h-16 md:p-0 transition duration-300 hover:rotate-360"
        onClick={() => setTheme("light")}
      >
        <FaAdjust size={24}/>
      </div>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <div
        className="flex items-center justify-center md:w-full md:h-full w-16 h-16 md:p-0 transition duration-300 hover:rotate-360"
        onClick={() => setTheme("dark")}
      >
        <FaAdjust size={24}/>
      </div>
    );
  }
}
