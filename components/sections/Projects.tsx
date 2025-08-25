import Image from "next/image";
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

import ProjectList from "../organisms/ProjectList";

import { previewProjectsQuery, allProjectsQuery } from "../../sanity/queries/query";
import { projectType } from "@/types/ProjectType";

import { IoLogoGithub } from 'react-icons/io5';
import { HiOutlineExternalLink } from 'react-icons/hi';


const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const project = await client.fetch(previewProjectsQuery)
const projectlist = await client.fetch(allProjectsQuery)

export default async function Projects() {

  if (!project || project.length === 0) {
    return (
      <div className="border-b border-neutral-300 dark:border-neutral-800">
        <div className="py-12 m-auto max-w-[90vw] flex flex-col ">
          <div className="text-4xl pb-12">Project Library</div>
          <div className="flex items-center justify-center min-h-[60vh]">No projects yet.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b border-neutral-300 dark:border-neutral-800">
      <div className=" py-12 m-auto max-w-[90vw] flex flex-col ">
        <div className="text-4xl pb-12">Project Library</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
          {project.map((project: projectType, i: any) => (
            <div
              key={i}
              className=" hover:shadow-sm rounded-sm flex flex-col border text-left border-neutral-300 dark:border-neutral-800"
            >
              {project.image && (
                <Image
                  src={urlFor(project.image).width(600).url()}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full rounded-t-sm"
                />
              )}
              <div className="p-4 flex flex-col gap-y-4">
                <h2 className="text-xl font-bold">{project.title}</h2>
                <p className="text-neutral-400">{project.about}</p>
                <div className="flex gap-2 lg:w-full">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      className="hover:text-blue-500 hover:shadow-sm w-full transition rounded border border-neutral-300 dark:border-neutral-800 p-2 text-center flex items-center justify-center"
                    >
                      <IoLogoGithub />
                    </Link>
                  )}
                  {project.site && (
                    <Link
                      href={project.site}
                      target="_blank"
                      className="hover:text-blue-500 w-full hover:shadow-sm transition rounded border border-neutral-300 dark:border-neutral-800 p-2 text-center flex items-center justify-center"
                    >
                      <HiOutlineExternalLink />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <ProjectList projects={projectlist} />
      </div>
    </div>
  );
}