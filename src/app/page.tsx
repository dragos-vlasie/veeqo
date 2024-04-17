// import featuredImage1 from '../public/assets/feature-image-1.png'
// import featuredImage2 from '../public/assets/feature-image-2.png'
import Button from "@/components/Button";

import backend from "/public/assets/backend.svg";
import {MockData} from "../data"


import Image from "next/image";
import Video from "next-video";
import heroVideo from "/videos/hero-video.mp4";
import { renderComponent } from "@/components/Components";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <main className="bg-[#05192D]">
          {MockData.map((item, index) => (
            <Fragment key={index}>{renderComponent(item)}</Fragment>
          ))}
      </main>
    </>
  );
}

// TODO Fonts
// add skip to contend
// ACESABILITY
// NEX video!!
// TODO Break down components
// TODO Make them like contentfull
// Introduce a theme, maybe just add like contentfull a
// wrapper with the lentgh of collums and what background
// BUTTOn
