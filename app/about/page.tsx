import { client } from "../../sanity/lib/client";
import { profileQuery } from "../../sanity/queries/query";
import { urlFor } from "../../sanity/lib/image";
import Iridescence from "../../components/blocks/Backgrounds/Iridiscence";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import ScrollStack, { ScrollStackItem } from "@/components/blocks/ScrollStack";

export default async function About() {
  const profile = await client.fetch(profileQuery);

  return (
    <>
      <div className="h-[10vh] md:h-[8vh] lg:h-[6vh] w-full" />
      <div className="min-h-fit w-full flex flex-row gap-8 p-6">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-8">
          {/* Top left: About */}
          <div className="rounded-2xl flex items-center justify-center h-1/3">
            <span className="text-[15vw] font-bold">About</span>
          </div>
          {/* Bottom left: Image */}
          <div className="rounded-2xl flex items-center justify-center h-2/3">
            {profile && profile.image ? (
              <img
                src={urlFor(profile.image).url()}
                alt={profile.name}
                className="object-cover rounded-2xl w-full h-full"
                style={{ filter: "grayscale(100%)" }}
              />
            ) : (
              "picture"
            )}
          </div>
        </div>
        {/* Right column */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Top right: Iridescence */}
          <div className="h-1/3 rounded-2xl flex items-center justify-center">
            <div className="w-full h-full rounded-2xl overflow-hidden">
              <Iridescence
                color={[0, 0.4, 0.5]}
                mouseReact={false}
                amplitude={0.1}
                speed={0.6}
              />
            </div>
          </div>
          {/* Middle right: Me + Arrow */}
          <div className="rounded-2xl flex items-center justify-between h-1/3">
            <span className="text-[15vw] font-bold mr-4 w-full">Me</span>
            <div className="flex items-center justify-center w-full">
              <HiOutlineArrowCircleDown size={300} />
            </div>
          </div>
          {/* Bottom right: Placeholder */}
          <div className="flex items-center justify-center h-1/3">
            <span className="text-4xl">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
              consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
              quisque faucibus ex sapien vitae pellentesque.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
