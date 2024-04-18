"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import NextVideo from "next-video";
import playButton from "/public/assets/playButton.svg";
import { motion } from "framer-motion";

type HeaderProps = {
  theme: "light" | "dark";
  poster: string;
  video: string;
};

const Header: React.FC<HeaderProps> = ({ poster, video }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);


  const handlePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  };

  const onMouseLeave = () => {
    if (videoRef.current?.paused) {
      setIsHovered(true);
    } else {
      setIsHovered(false);
    }
  };
  const onMouseEnter = () => {
    setIsHovered(true);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };


  return (
    <header className={`flex max-w-screen-2xl m-auto flex-col`}>
      <div className="py-14 md:py-24 px-8 md:px-16 xl:py-34 2xl:py-40 max-w-xl md:max-w-2xl text-center mx-auto">
        <Image width={190} height={160} className="w-40 mx-auto" src="/assets/hero.svg" alt="blue and red logo" />
        <motion.h1 
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true }}
         transition={{ duration: 0.2, delay: 0.1 }}
         variants={{
           visible: { opacity: 1, x: 0, y: 0 },
           hidden: { opacity: 0, x: 0, y: 60 },
         }}
        className="text-white mt-5 md:leading-tight text-4xl md:text-5xl font-semibold">
          Own your <span className="text-blue-500">future</span> simple and for <span className="text-blue-500">free</span>
        </motion.h1>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        variants={{
          visible: { opacity: 1, x: 0, y: 0 },
          hidden: { opacity: 0, x: 0, y: 70 },
        }}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative px-8 md:px-16">
        {/* I have used this before but unfortunately now they have added a payed version to it */}
        <NextVideo
          ref={videoRef}
          poster={poster}
          className="rounded-lg"
          primaryColor="#000"
          secondaryColor="#fff"
          accentColor="fff"
          src={video}
          controls={false}
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
        />
        <motion.button
          className={`flex justify-center items-center absolute custom-play-button w-24 top-0 bottom-0 ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
          style={{ transform: "translate(-50%, 0)", left: "50%" }}
          onClick={handlePlay}
        >
          {!isPlaying ? (
            <Image alt="" src={playButton} />
          ) : (
            <svg
              className=" w-28 h-full"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" fill="white" />
              <rect x="8" y="8" width="4" height="8" fill="#000" />
              <rect x="12" y="8" width="4" height="8" fill="#000" />
            </svg>
          )}
        </motion.button>
      </motion.div>
    </header>
  );
};

export default Header;
