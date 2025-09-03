import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
// import Image from "next/image";

import { profileQuery } from "../../sanity/queries/query";
import Dither from "@/components/blocks/Backgrounds/Dither";


import type { profileType } from "@/types/ProfileType";

const profile : profileType = await client.fetch(profileQuery)

export default async function Profile() {
  
  if (!profile) {
    return (
      <div className="flex justify-center items-center py-16 border-b" style={{ borderColor: 'var(--border-color)' }}>
        <div>No profile found.</div>
      </div>
    );
  }

  return (
    <>
      <div className="relative">
        {/* Dither background absolutely positioned */}
        <div className="absolute inset-0 w-full h-full -z-10">
          <Dither waveColor={[0, 0, 1]} />
        </div>
        <div
          className="flex flex-col justify-end items-center gap-6 px-4 pt-4 pb-16 border-b relative h-[500px] sm:h-[500px] md:h-[600px] lg:h-[600px]"
          style={{ borderColor: 'var(--border-color)' }}
        >
          <div className="w-full flex flex-col">
            <div className="space-y-2 text-left px-2 md:px-8">
              <div className="text-xl bg-black text-white w-fit py-1 px-2">{profile.position}</div>
              <div className="text-7xl text-black lg:text-9xl font-bold">{profile.name}</div>
            </div>
          </div>
          {/* Optionally keep the profile image or content here */}
          {/* <div className="relative w-full aspect-square md:w-[520px] md:h-[520px] lg:w-[640px] rounded-2xl overflow-hidden"></div> */}
        </div>
      </div>
    </>
  );
}
