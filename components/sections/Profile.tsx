import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import Image from "next/image";

export default async function Profile() {
  const profile = await client.fetch(
    `*[_type == "profile"][0]{
      name,
      bio,
      image
    }`
  );

  if (!profile || profile.length === 0) {
    return (
    <section className="flex justify-center items-center h-[60vh] border-b border-neutral-300 dark:border-neutral-800">
      <div>No profile found.</div>
    </section>
    );
  }

  return (
    <section className="flex flex-col md:flex-row justify-evenly items-center h-[60vh] border-b border-neutral-300 dark:border-neutral-800">
      <div className="order-2 md:order-1 w-full md:w-auto flex justify-center">
        <div className="space-y-2 text-left mx-4">
          <div className="text-xl">{profile.bio}</div>
          <div className="text-7xl font-bold">{profile.name}</div>
        </div>
      </div>
      <div className="order-1 md:order-2 w-full md:w-auto flex justify-center md:justify-end">
        {profile.image && (
          <Image
            src={urlFor(profile.image).width(500).url()}
            alt={profile.name}
            width={500}
            height={500}
            className="rounded-xl w-auto h-auto md:max-w-none md:w-auto md:h-[500px] mx-4"
            priority
          />
        )}
      </div>
    </section>
  );
}
