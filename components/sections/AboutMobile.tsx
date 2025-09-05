import { client } from "../../sanity/lib/client";
import { profileQuery } from "../../sanity/queries/query";
import { urlFor } from "../../sanity/lib/image";
import Accordion from "../Accordion";
import type { profileType } from "@/types/ProfileType";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import Iridescence from "../blocks/Backgrounds/Iridiscence";

export default async function AboutMobile() {
  const profile: profileType = await client.fetch(profileQuery);

  const values = [
    {
      title: "Clean & Structured Design",
      content: (
        <span>
          I'm drawn to clarity and balance. I design layouts that feel natural,
          polished, and intentional — where structure isn't restrictive, but
          instead creates a foundation for creativity to shine.
        </span>
      ),
    },
    {
      title: "Efficient & High-Performance Code",
      content: (
        <span>
          For me, code is more than just functionality — it's craftsmanship. I
          write with precision and care, making sure every interaction is
          smooth, fast, and reliable across devices.
        </span>
      ),
    },
    {
      title: "Creative Problem-Solving",
      content: (
        <span>
          I see websites as my canvas. Each project is a chance to experiment,
          push boundaries, and bring fresh ideas to life — blending structure
          with artistry to create interfaces that truly stand out.
        </span>
      ),
    },
  ];

  return (
    <>
      <div className="block md:hidden w-full">
        <div className="flex flex-col w-full min-h-screen">
          {/* Header with Iridescence Background */}
          <div className="relative w-full pt-40">
            {/* Iridescence background absolutely positioned */}
            <div className="absolute inset-0 w-full h-full -z-10">
              <Iridescence
                color={[0, 0, 0.7]}
                mouseReact={false}
                amplitude={0.1}
                speed={0.6}
                responsive={true}
                pixelRatio={1}
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col w-full text-right justify-end p-8 z-10">
              <div className="w-full flex flex-col items-end">
                <div className="w-fit">
                  <span className="text-8xl font-bold">About</span>
                  <div className="flex w-full justify-between items-center">
                    <HiOutlineArrowCircleDown size={90} />
                    <span className="text-8xl font-bold">Me</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text and Image Section */}
          <div
            className="flex flex-col gap-6 p-6 border-b"
            style={{ borderColor: "var(--border-color)" }}
          >
            {/* About Text */}
            <div className="px-2">
              <p className="text-2xl leading-relaxed">
                I'm a passionate web developer who believes in creating meaningful
                digital experiences through thoughtful design and clean code.
                Every project is an opportunity to blend creativity with
                functionality.
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              {profile && profile.image ? (
                <img
                  src={urlFor(profile.image).url()}
                  alt={profile.name}
                  className="object-cover rounded-2xl"
                  style={{ filter: "grayscale(100%)" }}
                />
              ) : (
                <div className="w-64 h-64 bg-gray-200 rounded-2xl flex items-center justify-center">
                  <span>No image</span>
                </div>
              )}
            </div>
          </div>

          {/* Values Section */}
          <div className="p-6 flex flex-col gap-6">
            <h2 className="text-4xl font-bold">My Values</h2>
            <p className="text-lg">
              These are the values that guide how I work and what I create. How
              I identify my work is what gives my work value.
            </p>
            <Accordion items={values} />
          </div>
        </div>
      </div>
    </>
  );
}
