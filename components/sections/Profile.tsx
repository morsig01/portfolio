import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import Image from "next/image";

import { profileQuery } from "../../sanity/queries/query";
import { profileType } from "@/types/ProfileType";


const profile : profileType = await client.fetch(profileQuery)

export default async function Profile() {
  
  if (!profile) {
    return (
      <section className="flex justify-center items-center py-16 border-b border-neutral-300 dark:border-neutral-700">
        <div>No profile found.</div>
      </section>
    );
  }

  return (
    <section className="flex flex-col md:flex-row justify-start md:justify-evenly items-center gap-6 md:gap-12 px-4 pt-4 md:pt-16 pb-16 min-h-[75vh] md:min-h-0 border-b border-neutral-300 dark:border-neutral-700">
      <div className="order-2 md:order-1 w-full md:w-auto flex-1 md:flex-none flex items-center justify-center md:justify-start">
        <div className="space-y-2 text-left">
          <div className="text-xl">{profile.position}</div>
          <div className="text-7xl font-bold">{profile.name}</div>
        </div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-auto flex justify-center md:justify-end">
        {profile.image && (
          <>
            <div className="relative w-full aspect-square md:hidden">
              <Image
                src={urlFor(profile.image).width(800).url()}
                alt={profile.name}
                fill
                sizes="100vw"
                className="rounded-xl object-cover object-center"
                priority
              />
            </div>
            <div className="hidden md:block">
              <Image
                src={urlFor(profile.image).width(800).url()}
                alt={profile.name}
                width={520}
                height={520}
                className="rounded-xl w-[520px] h-auto object-cover object-center lg:w-[640px]"
                sizes="(min-width: 1024px) 640px, 520px"
                priority
              />
            </div>
          </>
        )}
      </div>
      
    </section>
  );
}
