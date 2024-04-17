// import featuredImage1 from '../public/assets/feature-image-1.png'
// import featuredImage2 from '../public/assets/feature-image-2.png'
import Button from "@/components/Button";
import introImage1 from "/public/assets/intro-image-1.png";
import introImage2 from "/public/assets/intro-image-2.png";
import introImage3 from "/public/assets/intro-image-3.png";
import introImage4 from "/public/assets/intro-image-4.png";
import featuredImage1 from "/public/assets/feature-image-1.png";
import featuredImage2 from "/public/assets/feature-image-2.png";
import dogsCircleImage from "/public/assets/stats-image.png";
import backend from "/public/assets/backend.svg";
import getStarted from "/videos/get-started.mp4";


import Image from "next/image";
import Video from "next-video";
import heroVideo from "/videos/hero-video.mp4";
import { renderComponent } from "@/components/Components";
import { Fragment } from "react";

const MockData = [
  {
    contentType: "Header",
    poster: "/assets/hero-video-poster-image.jpg",
    video: getStarted,
    padding: "lg",
    theme: "dark",
  },
  {
    contentType: "Section",
    padding: "lg" as const,
    theme: "dark" as const,
    content: [
      {
        __typename: "TextBlock",
        text: `<p">
        Our one of a kind integration lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      </br>
      <p>
        As part of the Amazon family, <span>Veeqo</span> provides trusted data security and Amazon account protection from late deliveries and negative feedback, if you ship on time.
      </p>`,
        startCol: 8,
        endCol: 11,
      },
      {
        __typename: "TextBlock",
        tag: "Who we are",
        startCol: 2,
        endCol: 5,
      },
    ],
  },
  {
    contentType: "IntroImagesSection",
    images: [
      { src: introImage1, alt: "image 1", className: "mt-16 mb-10" },

      { src: introImage2, alt: "Image 2", className: "mb-36" },

      { src: introImage3, alt: "Image 3", className: "mt-48 mb-14" },

      {
        src: introImage4,
        alt: "Image 4",
        className: "mt-4 mb-2",
      },
    ],
  },
  {
    contentType: "Section",
    padding: "lg" as const,
    theme: "light" as const,
    content: [
      {
        __typename: "TextBlock",
        centered: true,
        offset: true,
        headline: "See how much you could save",
        text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vulputate semper sem nec sodales. Vestibulum vitae vulputate metus.",
        tag: "Start saving today",
        buttonText: "Start Shipping",
        buttonLink: "/",
        startCol: 3,
        endCol: 6,
      },
      {
        __typename: "ImageBlock",
        image: {
          src: featuredImage1,
          alt: "Image 1",
        },
        startCol: 8,
        endCol: 11,
      },
    ],
  },
  {
    contentType: "Section",
    padding: "sm" as const,
    theme: "dark" as const,
    content: [
      {
        __typename: "ImageBlock",
        image: {
          src: dogsCircleImage,
          alt: "Image 2",
          width: 400,
          height: 300,
        },
        startCol: 8,
        endCol: 11,
      },
      {
        __typename: "TextBlock",
        headlineXl: "1,000 People",
        tag: "We’re a team of",
        textStyle: "heading",
        startCol: 3,
        endCol: 5,
        offset: true,
      },
    ],
  },
  {
    contentType: "IconsText",
    startCol: 8,
    endCol: 12,
    iconData : [
      { icon: "marketing" as const, text: "500 Marketing Managers" },
      { icon: "backend" as const, text: "300 Backend Developers" },
      { icon: "productDesign" as const, text: "200 Product Designers" },
      { icon: "support" as const, text: "400 Support Specialists" },
      { icon: "frontend" as const, text: "600 Frontend Developers" },
      { icon: "finance" as const, text: "20 Fiance Managers" },
    ],
  },
  {
    contentType: "Section",
    padding: "lg" as const,
    theme: "light" as const,
    content: [
      {
        __typename: "TextBlock",
        centered: true,
        offset: true,
        headline: "See how much you could save",
        text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vulputate semper sem nec sodales. Vestibulum vitae vulputate metus.",
        tag: "Start saving today",
        buttonText: "Start Shipping",
        buttonLink: "/",
        startCol: 8,
        endCol: 13,
      },
      {
        __typename: "ImageBlock",
        image: {
          src: featuredImage2,
          alt: "Image 2",
        },
        startCol: 3,
        endCol: 6,
      },
    ],
  },
];

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
