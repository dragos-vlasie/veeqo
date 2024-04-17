// Section.js

import React from "react";
import Image from "next/image";
import Button from "./Button";

// Define types for content items
type TextBlock = {
  __typename: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  startCol?: number;
  endCol?: number;
  centered?: boolean;
  offset?: boolean;
  headlineXl?: string;
  headline?: string;
  tag?: string;
};

type ImageBlock = {
  __typename: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  startCol?: number;
  endCol?: number;
};

// Union type for content items
type ContentItem = TextBlock | ImageBlock;

// Define props type for Section component
type SectionProps = {
  title?: string;
  content: ContentItem[];
  padding: "lg" | "sm" | "md" | "xl";
  theme: "light" | "dark";
};

const Section: React.FC<SectionProps> = ({ title, theme = "light", padding, content }) => {
  const textColor = theme === "light" ? "text-[#05192D]" : "text-white";
  const backgroundColor = theme === "dark" ? "bg-[#CCF7FC] text-[#05192D]" : "bg-[#05192D] text-white";
  // we have button
  // we have tag label
  const renderContent = () => {
    return content.map((item, index) => {
      if (item.__typename === "TextBlock") {
        const textBlockItem = item as TextBlock;
        // TODO offset text
        return (
          <div
            key={index}
            className={`${textColor} row-end-1  
            ${
              textBlockItem?.centered ? "self-center" : ""
            } text-block ${textBlockItem.startCol || 3} col-end-${textBlockItem.endCol || 5}`}
          >
            {textBlockItem.tag && (
              <span className={`${backgroundColor} text-base py-2 px-4 rounded-full inline-block`}>{textBlockItem.tag}</span>
            )}
            {textBlockItem.headline && <span className="block mt-12 text-4xl font-semibold">{textBlockItem.headline}</span>}
            {textBlockItem.text && 
            <div className="my-14 text-2xl " dangerouslySetInnerHTML={{ __html: textBlockItem.text }} />}
            {/* <p className="my-14">{}</p>} */}
            {textBlockItem.headlineXl && <span className="mt-12 block text-9xl font-bold "> {textBlockItem.headlineXl} </span>}
            {textBlockItem.buttonText && (
              <Button className="block" href={textBlockItem?.buttonLink || "/"}>
                {textBlockItem.buttonText}
              </Button>
            )}
          </div>
        );
      } else if (item.__typename === "ImageBlock") {
        const imageBlockItem = item as ImageBlock;
        return (
          <div
            key={index}
            className={`row-end-1 
            ${imageBlockItem.startCol ? `col-start-${imageBlockItem.startCol}` : "col-start-3"}
            ${imageBlockItem.endCol ? `col-end-${imageBlockItem.endCol}` : "col-end-5"}`}
          >
            <Image src={imageBlockItem.image.src} alt={imageBlockItem.image.alt} />
          </div>
        );
      }
    });
  };

  return (
    <section
      className={`${theme} ${
        padding === "lg"
          ? "py-32"
          : padding === "xl"
          ? "py-40"
          : padding === "md"
          ? "py-15"
          : padding === "sm"
          ? "pt-8 pb-24"
          : "py-20"
      }`}
    >
      <div className="px-16 grid grid-cols-12">{renderContent()}</div>
    </section>
  );
};

export default Section;
