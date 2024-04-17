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
import Head from "next/head";

export default function Home() {
  return (
    <>
     <Head>
        <title>Veeqo</title>
        <meta name="description" content="Interview task" key="desc" />
        <meta property="og:title" content="Veeqo task" />
        <meta
          property="og:description"
          content="Social media description"
        />
        <meta
          property="og:image"
          content="/assets/featured-image-1.png"
        />
      </Head>
      <main className="bg-[#05192D]">
          {MockData.map((item, index) => (
            <Fragment key={index}>{renderComponent(item)}</Fragment>
          ))}
      </main>
    </>
  );
}

