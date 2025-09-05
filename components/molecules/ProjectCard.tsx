import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { HiOutlineExternalLink } from "react-icons/hi";
import { projectType } from "@/types/ProjectType";

interface ProjectCardProps {
  project: projectType;
  urlFor: (source: any) => any;
  horizontal?: boolean;
}

export default function ProjectCard({
  project,
  urlFor,
  horizontal,
}: ProjectCardProps) {
  if (horizontal) {
    return (
      <div
        className="flex flex-col md:flex-row border text-left"
        style={{ borderColor: "var(--border-color)" }}
      >
        {project.image && (
          <div className="md:w-[60%] w-full flex-shrink-0">
            <Image
              src={urlFor(project.image).width(600).url()}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full object-cover"
              style={{
                minHeight: "220px",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        <div className="flex flex-col w-full md:border-l" style={{ borderColor: 'var(--border-color)' }}>
          {/* Header and tags section */}
          <div className="p-4 flex flex-col gap-2 border-b" style={{ borderColor: 'var(--border-color)' }}>
            <div className="flex flex-row items-center gap-4 w-full">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <div
                className={`border px-3 py-1 rounded-full max-w-fit flex items-center justify-center
                ${
                  project.type === "Personal"
                    ? "border-blue-700"
                    : "border-orange-500"
                }`}
              >
                {project.type}
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              {Array.isArray(project.role) ? (
                project.role.map((role: string, i: number) => (
                  <div
                    key={i}
                    className="border px-3 py-1 rounded-full flex items-center justify-center"
                    style={{ borderColor: "var(--border-color)" }}
                  >
                    {role}
                  </div>
                ))
              ) : (
                <div
                  className="border px-3 py-1 rounded-full flex items-center justify-center"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {project.role}
                </div>
              )}
            </div>
          </div>
          
          {/* Centered description */}
          <div className="flex-1 flex items-center p-4">
            <p className="text-neutral-400">{project.about}</p>
          </div>
          
          {/* Links section extending to edges */}
          <div className="flex border-t" style={{ borderColor: 'var(--border-color)' }}>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className={`hover:text-blue-700 hover:shadow-sm w-full transition p-3 text-center flex items-center justify-center ${project.github && project.site ? 'border-r' : ''}`}
                style={{ borderColor: "var(--border-color)" }}
              >
                <IoLogoGithub size={20} />
              </Link>
            )}
            {project.site && (
              <Link
                href={project.site}
                target="_blank"
                className="hover:text-blue-700 w-full hover:shadow-sm transition p-3 text-center flex items-center justify-center"
                style={{ borderColor: "var(--border-color)" }}
              >
                <HiOutlineExternalLink size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
  // Default vertical card
  return (
    <div
      className="hover:shadow-sm flex flex-col border text-left"
      style={{ borderColor: "var(--border-color)" }}
    >
      {project.image && (
        <Image
          src={urlFor(project.image).width(600).url()}
          alt={project.title}
          width={600}
          height={400}
          className="w-full max-h-[220px] md:max-h-[400px] object-cover"
          style={{ minHeight: "220px", maxHeight: "400px", objectFit: "cover" }}
        />
      )}
      <div className="flex flex-col flex-1 min-h-0">
        {/* Header and tags section */}
        <div className="p-4 flex flex-col gap-y-2 flex-shrink-0 border-b border-t" style={{ borderColor: "var(--border-color)" }}>
          <div className="flex flex-row items-center gap-4 w-full">
            <h2 className="text-2xl font-bold">{project.title}</h2>
            <div
              className={`border px-3 py-1 rounded-full max-w-fit flex items-center justify-center
                ${
                  project.type === "Personal"
                    ? "border-blue-700"
                    : "border-orange-500"
                }`}
            >
              {project.type}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {Array.isArray(project.role) ? (
              project.role.map((role: string, i: number) => (
                <div
                  key={i}
                  className="border px-3 py-1 rounded-full flex items-center justify-center"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {role}
                </div>
              ))
            ) : (
              <div
                className="border px-3 py-1 rounded-full flex items-center justify-center"
                style={{ borderColor: "var(--border-color)" }}
              >
                {project.role}
              </div>
            )}
          </div>
        </div>
        
        {/* Centered description */}
        <div className="flex-1 flex items-center justify-center p-4">
          <p className="text-neutral-400">{project.about}</p>
        </div>
        
        {/* Links section extending to edges */}
        <div className="flex border-t flex-shrink-0" style={{ borderColor: 'var(--border-color)' }}>
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className={`hover:text-blue-700 hover:shadow-sm w-full transition py-4 text-center flex items-center justify-center ${project.github && project.site ? 'border-r' : ''}`}
              style={{ borderColor: "var(--border-color)" }}
            >
              <IoLogoGithub size={20} />
            </Link>
          )}
          {project.site && (
            <Link
              href={project.site}
              target="_blank"
              className="hover:text-blue-700 w-full hover:shadow-sm transition py-4 text-center flex items-center justify-center"
              style={{ borderColor: "var(--border-color)" }}
            >
              <HiOutlineExternalLink size={20}/>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
