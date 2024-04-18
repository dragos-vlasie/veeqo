import getStarted from "/videos/get-started.mp4";
import introImage1 from "/public/assets/intro-image-1.png";
import introImage2 from "/public/assets/intro-image-2.png";
import introImage3 from "/public/assets/intro-image-3.png";
import introImage4 from "/public/assets/intro-image-4.png";
import featuredImage1 from "/public/assets/feature-image-1.png";
import featuredImage2 from "/public/assets/feature-image-2.png";
import dogsCircleImage from "/public/assets/stats-image.png";

// Array containing mock data to simulate content from a CMS
export const MockData = [
  {
    contentType: "Header",
    poster: "/assets/hero-video-poster-image.jpg",
    video: getStarted,
  },
  {
    contentType: "Section",
    padding: "sm",
    theme: "dark",
    content: [
      {
        __typename: "TextBlock",
        text: `<p">
          Our one of a kind integration lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </br>
        <p>
          As part of the Amazon family, <span style="color: blue">Veeqo</span> provides trusted data security and Amazon account protection from late deliveries and negative feedback, if you ship on time.
        </p>`,
      },
      {
        __typename: "TextBlock",
        tag: "Who we are",
        textPosition: "top",
        isFirst: true,
      },
    ],
  },
  {
    contentType: "IntroImagesSection",
    images: [
      { src: introImage1, alt: "2 small dogs in the grass", className: "mt-16 mb-10" },

      { src: introImage2, alt: "small dog in a cup", className: "mb-36" },

      { src: introImage3, alt: "close up of a dog", className: "mt-48 mb-14" },

      {
        src: introImage4,
        alt: "a sitting pug ",
        className: "mt-4 mb-2",
      },
    ],
  },
  {
    contentType: "Section",
    padding: "lg",
    theme: "light",
    content: [
      {
        __typename: "TextBlock",
        offset: true,
        headline: "See how much you could save",
        text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vulputate semper sem nec sodales. Vestibulum vitae vulputate metus.",
        tag: "Start saving today",
        buttonText: "Start Shipping",
        buttonLink: "/",
        isFirst: true,
      },
      {
        __typename: "ImageBlock",
        image: {
          src: featuredImage1,
          alt: "Image 1",
        },
      },
    ],
  },
  {
    contentType: "Section",
    padding: "md",
    theme: "dark",
    content: [
      {
        __typename: "ImageBlock",
        image: {
          src: dogsCircleImage,
          alt: "Image 2",
          width: 400,
          height: 300,
        },
      },
      {
        __typename: "TextBlock",
        isFirst: true,
        textPosition: "offsetBottom",
        headlineXl: "1,000 People",
        tag: "We’re a team of",
        textStyle: "heading",
      },
    ],
  },
  {
    contentType: "IconsText",
    iconData: [
      { icon: "marketing", text: "500 Marketing Managers" },
      { icon: "backend", text: "300 Backend Developers" },
      { icon: "productDesign", text: "200 Product Designers" },
      { icon: "support", text: "400 Support Specialists" },
      { icon: "frontend", text: "600 Frontend Developers" },
      { icon: "finance", text: "20 Fiance Managers" },
    ],
  },
  {
    contentType: "Section",
    padding: "lg",
    theme: "light",
    content: [
      {
        __typename: "TextBlock",
        offset: true,
        headline: "See how much you could save",
        text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean vulputate semper sem nec sodales. Vestibulum vitae vulputate metus.",
        tag: "Start saving today",
        buttonText: "Start Shipping",
        buttonLink: "/",
      },
      {
        __typename: "ImageBlock",
        isFirst: true,
        image: {
          src: featuredImage2,
          alt: "Image 2",
        },
      },
    ],
  },
];
