import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
// import Image from "next/image";

import { profileQuery } from "../../sanity/queries/query";
import Dither from "@/components/blocks/Backgrounds/Dither/Dither";


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
      {/* Responsive spacer for different screen sizes */}
      <div className="h-[10vh] md:h-[8vh] lg:h-[6vh] w-full" />
      <div
        className="flex flex-col justify-start items-center gap-6 px-4 pt-4 pb-16 min-h-[75vh] border-b md:flex-row md:justify-evenly md:pt-16 md:min-h-0"
        style={{ borderColor: 'var(--border-color)' }}
      >
        <div className="order-2 w-full flex-1 flex items-center justify-center md:order-1 md:w-auto md:flex-none md:justify-start">
          <div className="space-y-2 text-left">
            <div className="text-xl">{profile.position}</div>
            <div className="text-7xl font-bold">{profile.name}</div>
          </div>
        </div>
        <div className="order-1 w-full flex justify-center md:order-2 md:w-auto md:justify-end">
          {/* Replace image with Dither background */}
          <div className="relative w-full aspect-square md:w-[520px] md:h-[520px] lg:w-[640px] rounded-2xl overflow-hidden">
            <Dither />
          </div>
        </div>
      </div>
    </>
  );
}
