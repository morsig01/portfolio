import { client } from "../../sanity/lib/client";
import { profileQuery } from "../../sanity/queries/query";
import { urlFor } from "../../sanity/lib/image";
import Iridescence from "../../components/blocks/Backgrounds/Iridiscence";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import Accordion from "../../components/Accordion";
import Silk from "@/components/blocks/Backgrounds/Silk";
import AboutMobile from "../../components/sections/AboutMobile";

export default async function About() {
  const profile = await client.fetch(profileQuery);

  const values = [
    {
      title: "Clean & Structured Design",
      content: (
        <span>
          I’m drawn to clarity and balance. I design layouts that feel natural,
          polished, and intentional — where structure isn’t restrictive, but
          instead creates a foundation for creativity to shine.{" "}
        </span>
      ),
    },
    {
      title: "Efficient & High-Performance Code",
      content: (
        <span>
          For me, code is more than just functionality — it’s craftsmanship. I
          write with precision and care, making sure every interaction is
          smooth, fast, and reliable across devices.{" "}
        </span>
      ),
    },
    {
      title: "Creative Problem-Solving",
      content: (
        <span>
          I see websites as my canvas. Each project is a chance to experiment,
          push boundaries, and bring fresh ideas to life — blending structure
          with artistry to create interfaces that truly stand out.{" "}
        </span>
      ),
    },
  ];

  return (
    <>
      {/* Mobile About Component */}
      <AboutMobile />

      <div className="hidden md:block min-h-[70px] h-[10vh] md:h-[8vh] lg:h-[6vh] w-full" />
      <div className="hidden md:flex min-h-fit w-full flex-row">
        {/* Left column */}
        <div className="flex-1 flex flex-col">
          {/* Top left: About */}
          <div className="rounded-2xl flex items-center justify-center h-1/3">
            <span className="text-[15vw] font-bold">About</span>
          </div>
          {/* Bottom left: Image */}
          <div className="flex items-center justify-center h-2/3">
            {profile && profile.image ? (
              <img
                src={urlFor(profile.image).url()}
                alt={profile.name}
                className="object-cover w-full h-full"
                style={{ filter: "grayscale(100%)" }}
              />
            ) : (
              "picture"
            )}
          </div>
        </div>
        {/* Right column */}
        <div className="flex-1 flex flex-col">
          {/* Top right: Iridescence */}
          <div className="h-full w-full overflow-hidden">
            <Iridescence
              color={[0, 0, 0.7]}
              mouseReact={false}
              amplitude={0.1}
              speed={0.6}
              responsive={true}
              pixelRatio={1}
              className="w-full h-full min-h-[300px]"
            />
          </div>
          {/* Middle right: Me + Arrow */}
          <div className="rounded-2xl flex items-center justify-between h-full px-6">
            <span className="text-[15vw] font-bold w-full">Me</span>
            <div className="flex items-center justify-center w-full">
              <HiOutlineArrowCircleDown size={300} />
            </div>
          </div>
          {/* Bottom right: Bio */}
          <div className="flex items-center justify-center h-full px-6">
            <span className="text-4xl">
              Passionate web developer who believes in creating meaningful
              digital experiences through thoughtful design and clean code.
              Every project is an opportunity to blend creativity with
              functionality.
            </span>
          </div>
        </div>
      </div>

      {/* Values */}
      <div
        className="hidden md:flex w-full h-auto border-t"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="lg:h-[700px] w-3/4 py-12 flex flex-col gap-6">
          <div className="w-full flex flex-col justify-evenly gap-6 p-8">
            <span className="text-9xl w-full">My values</span>
            <span className="text-3xl p-2">
              These are the values that guide how I work and what I create. How
              I identify my work is what gives my work value.
            </span>
          </div>
          <div className="px-6">
            <Accordion items={values} />
          </div>
        </div>
        <div className="w-1/4 flex items-center justify-center">
          <div className="bg-black h-full w-full">
            <Silk
              speed={5}
              scale={1.5}
              color="#0006BD"
              noiseIntensity={1.5}
              rotation={0}
            />
          </div>
        </div>
      </div>
    </>
  );
}
