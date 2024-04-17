import React from "react";
import Image from "next/image";
import NextVideo from "next-video";


type HeaderProps = {
  padding: "lg" | "sm" | "md" | "xlg";
  theme: "light" | "dark";
  poster: string,
  video: string,
};

const Header: React.FC<HeaderProps> = ({ padding, poster, video, theme }) => {
  return (
    <section className={`flex max-w-screen-2xl m-auto flex-col `}>
      <div className="py-14 md:py-24 px-8 md:px-16 xl:py-34 2xl:py-40  max-w-xl text-center mx-auto">
        <Image width={190} height={160} className="w-40 mx-auto" src="/assets/hero.svg" alt="" />
        <p className="text-white leading-tight text-4xl md:text-5xl font-semibold">
          Own your <span className="text-blue-500"> future </span>simple and for
          <span className="text-blue-500"> free</span>
        </p>
      </div>
      <div className="relative px-8 md:px-16">
        <NextVideo
          poster={poster}
          className="rounded-lg"
          primaryColor={theme === "dark" ? "white" : "black"}
          accentColor={theme === "dark" ? "white" : "black"}
          src={video}
        />
      </div>
    </section>
  );
};

export default Header;
