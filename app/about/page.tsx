"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";
import { profileQuery } from "../../sanity/queries/query";
import { urlFor } from "../../sanity/lib/image";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Iridescence from "../../components/blocks/Backgrounds/Iridiscence";
import { IoArrowDown } from "react-icons/io5";
import { HiOutlineArrowCircleDown } from "react-icons/hi";
import { BiBook } from "react-icons/bi";

const About = () => {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await client.fetch(profileQuery);
      setProfile(data);
    };
    fetchProfile();
  }, []);

  return (
    <>
      <div className="hidden md:block h-[8vh] w-full" />
      <div className="md:hidden block h-[10vh] w-full" />

      <div className="h-[92vh] w-full flex flex-row items-center">
        <div className="h-full w-full flex items-center justify-center">
          <div className="h-full w-auto flex flex-col justify-evenly">
            <div className="px-6 items-center justify-center text-center text-[15em]">
              About
            </div>
            <div className="flex flex-row items-center justify-between">
              <BiBook size={300} />
              <div className="text-[15em]">Me</div>
            </div>
          </div>
        </div>
        <div className="h-full w-full flex flex-col">
          <div className="h-full w-auto m-6 rounded-4xl text-center flex items-stretch">
            <div className="rounded-4xl overflow-hidden w-full h-full">
              <Iridescence
                color={[0, 0.4, 0.5]}
                mouseReact={false}
                amplitude={0.1}
                speed={0.6}
              />
            </div>
          </div>
          <div className="h-full w-auto mr-6 ml-6 mb-6 flex flex-row gap-6">
            <div className="h-full w-full flex items-center justify-center">
              <HiOutlineArrowCircleDown size={300}/>
            </div>
            <div className="bg-white rounded-4xl h-full w-full text-center">
              {profile && profile.image ? (
                <img
                  src={urlFor(profile.image).url()}
                  alt={profile.name}
                  className="object-cover rounded-4xl w-full h-full"
                  style={{ filter: "grayscale(100%)" }}
                />
              ) : (
                "picture"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
