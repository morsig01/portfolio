// ...existing code...
import { client } from "../../sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import ProjectCard from "../molecules/ProjectCard";

import ProjectList from "../organisms/ProjectList";

import {
  previewProjectsQuery,
  allProjectsQuery,
} from "../../sanity/queries/query";
import { projectType } from "@/types/ProjectType";


const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

const project = await client.fetch(previewProjectsQuery);
const projectlist = await client.fetch(allProjectsQuery);

export default async function HomeProjects() {
  if (!project || project.length === 0) {
    return (
      <div className="border-b" style={{ borderColor: 'var(--border-color)' }}>
        <div className="py-12 m-auto max-w-[90vw] flex flex-col ">
          <div className="text-4xl pb-12">Project Library</div>
          <div className="flex items-center justify-center min-h-[60vh]">
            No projects yet.
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border-b" style={{ borderColor: 'var(--border-color)' }}>
      <div className=" py-12 m-auto max-w-[90vw] flex flex-col ">
        <div className="text-4xl pb-12">Project Library</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-6">
          {project.map((proj: projectType, i: number) => {
            // If only 1 card, make it full width
            if (project.length === 1 && i === 0) {
              return (
                <div key={i} className="col-span-1 md:col-span-2">
                  <ProjectCard project={proj} urlFor={urlFor} horizontal />
                </div>
              );
            }
            // If only 2 cards, both are normal
            // If 3 cards, make the third full width
            if (project.length === 3 && i === 2) {
              return (
                <div key={i} className="col-span-1 md:col-span-2">
                  <ProjectCard project={proj} urlFor={urlFor} horizontal />
                </div>
              );
            }
            // If 2 or 4+ cards, all are normal
            return (
              <ProjectCard key={i} project={proj} urlFor={urlFor} />
            );
          })}
        </div>
        <ProjectList projects={projectlist} />
      </div>
    </div>
  );
}
