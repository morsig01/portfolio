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
        className="hover:shadow-sm rounded-sm flex flex-col md:flex-row border text-left"
        style={{ borderColor: "var(--border-color)" }}
      >
        {project.image && (
          <div className="md:w-[60%] w-full flex-shrink-0">
            <Image
              src={urlFor(project.image).width(600).url()}
              alt={project.title}
              width={600}
              height={400}
              className="w-full h-full rounded-t-sm md:rounded-l-sm md:rounded-tr-none object-cover max-h-[220px] md:max-h-[400px]"
              style={{
                minHeight: "220px",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </div>
        )}
        <div className="p-4 flex flex-col gap-y-4 w-full justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-4 w-full">
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <div
                className={`border px-3 py-1 rounded-full max-w-fit flex items-center justify-center
                ${
                  project.type === "Personal"
                    ? "border-blue-500"
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
          <p className="text-neutral-400">{project.about}</p>
          <div className="flex gap-2 lg:w-full">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="hover:text-blue-500 hover:shadow-sm w-full transition rounded border p-2 text-center flex items-center justify-center"
                style={{ borderColor: "var(--border-color)" }}
              >
                <IoLogoGithub />
              </Link>
            )}
            {project.site && (
              <Link
                href={project.site}
                target="_blank"
                className="hover:text-blue-500 w-full hover:shadow-sm transition rounded border p-2 text-center flex items-center justify-center"
                style={{ borderColor: "var(--border-color)" }}
              >
                <HiOutlineExternalLink />
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
      className="hover:shadow-sm rounded-sm flex flex-col border text-left"
      style={{ borderColor: "var(--border-color)" }}
    >
      {project.image && (
        <Image
          src={urlFor(project.image).width(600).url()}
          alt={project.title}
          width={600}
          height={400}
          className="w-full rounded-t-sm max-h-[220px] md:max-h-[400px] object-cover"
          style={{ minHeight: "220px", maxHeight: "400px", objectFit: "cover" }}
        />
      )}
      <div className="p-4 flex flex-col gap-y-4">
        <div className="flex flex-row items-center gap-4 w-full">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <div
            className={`border px-3 py-1 rounded-full max-w-fit flex items-center justify-center
              ${
                project.type === "Personal"
                  ? "border-blue-500"
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
        <p className="text-neutral-400">{project.about}</p>
        <div className="flex gap-2 lg:w-full">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              className="hover:text-blue-500 hover:shadow-sm w-full transition rounded border p-2 text-center flex items-center justify-center"
              style={{ borderColor: "var(--border-color)" }}
            >
              <IoLogoGithub />
            </Link>
          )}
          {project.site && (
            <Link
              href={project.site}
              target="_blank"
              className="hover:text-blue-500 w-full hover:shadow-sm transition rounded border p-2 text-center flex items-center justify-center"
              style={{ borderColor: "var(--border-color)" }}
            >
              <HiOutlineExternalLink />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
