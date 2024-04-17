"use client";
import React from "react";
import Image from "next/image";
import NextVideo from "next-video";
import { motion } from "framer-motion";

type HeaderProps = {
  theme: "light" | "dark";
  poster: string;
  video: string;
};

const Header: React.FC<HeaderProps> = ({ poster, video }) => {
  return (
    <header
      className={`flex max-w-screen-2xl m-auto flex-col `}
    >
      <div className="py-14 md:py-24 px-8 md:px-16 xl:py-34 2xl:py-40  max-w-xl md:max-w-2xl text-center mx-auto">
        <Image width={190} height={160} className="w-40 mx-auto" src="/assets/hero.svg" alt="blue and red logo" />
        <h1
        className="text-white mt-5 md:leading-tight text-4xl md:text-5xl font-semibold">
          Own your <span className="text-blue-500"> future </span>simple and for
          <span className="text-blue-500"> free</span>
        </h1>
      </div>
      <div className="relative px-8 md:px-16">
        <NextVideo
          poster={poster}
          className="rounded-lg"
          primaryColor="#000"
          secondaryColor="#fff"
          accentColor="fff"
          src={video}
        />
      </div>
    </header>
  );
};

export default Header;
