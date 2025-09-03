"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { technologyType } from "@/types/TechnologyType";
import { urlFor } from "@/sanity/lib/image";

export default function Technologies() {
  const [technologies, setTechnologies] = useState<technologyType[]>([]);
  useEffect(() => {
    fetch("/api/technologies")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
      });
  }, []);

  return (
    <div className="w-full border-b py-4 content-bg"
      style={{ borderColor: 'var(--border-color)' }}
    >
      {technologies.length === 0 ? (
        <div className="flex justify-center items-center">Loading...</div>
      ) : (
        <Marquee gradient={false} speed={40} pauseOnHover={true}>
          {[...technologies, ...technologies, ...technologies].map((tech, idx) => (
            <div key={idx + tech.technology} className="flex items-center justify-center px-6 md:px-20">
              {tech.image && tech.link ? (
                <a href={tech.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={urlFor(tech.image).url()}
                    alt={tech.technology}
                    className="max-w-16 max-h-16 object-contain mx-auto"
                    style={{ width: 'auto', height: 'auto', maxWidth: '64px', maxHeight: '64px' }}
                  />
                </a>
              ) : tech.image ? (
                <img
                  src={urlFor(tech.image).url()}
                  alt={tech.technology}
                  className="max-w-16 max-h-16 object-contain mx-auto"
                  style={{ width: 'auto', height: 'auto', maxWidth: '64px', maxHeight: '64px' }}
                />
              ) : null}
            </div>
          ))}
        </Marquee>
      )}
    </div>
  );
}