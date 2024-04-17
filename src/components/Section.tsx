"use client"
import React from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";

// Define types for content items
type TextBlock = {
  __typename: string;
  text?: string;
  buttonText?: string;
  buttonLink?: string;
  isFirst?: number;
  centered?: boolean;
  offset?: boolean;
  headlineXl?: string;
  headline?: string;
  tag?: string;
  textPosition?: "center" | "top" | "offsetBottom";
};

type ImageBlock = {
  __typename: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  isFirst?: number;
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

const Section: React.FC<SectionProps> = ({ theme = "light", padding, content }) => {
 // Determine text color based on the theme
 const textColor = theme === "light" ? "text-[#05192D]" : "text-white";
 // Determine background color based on the theme
 const backgroundColor = theme === "dark" ? "bg-[#CCF7FC] text-[#05192D]" : "bg-[#05192D] text-white";

 // Function to determine flex order based on the item type
 const flexOrder = (item: TextBlock | ImageBlock) => (item.isFirst ? "order-1" : "order-2");

 // Function to determine text position based on the TextBlock properties
 const getTextPosition = (item: TextBlock) =>
   item.textPosition === "top" ? "self-top mb-[-3rem] mt-0 md:mt-16" : "self-end md:mb-[-6rem]";


  const renderContent = () => {
    return content.map((item, index) => {
      if (item.__typename === "TextBlock") {
        const order = flexOrder(item);
        const textBlockItem = item as TextBlock;
        const textPosition = textBlockItem.textPosition ? getTextPosition(textBlockItem) : "self-center";
        const checkBackground = textBlockItem.textPosition && textBlockItem.textPosition === "top" ? "!bg-[#2578FF]" : "";

        const offsetX = index % 2 ? -40 : 40
        return (
          <motion.div
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? 50 : -50
          }}
          whileInView={{
            opacity: 1,
            x: 0, 
            transition: {
              duration: 1
            }
          }}
          viewport={{ once: true }}
            key={index}
            className={` text-block
            ${textColor} ${order} ${textPosition} `}
          >
            {textBlockItem.tag && (
              <span
                className={`${checkBackground} ${backgroundColor} w-fit font-semibold text-base py-2 px-4 rounded-full inline-block`}
              >
                {textBlockItem.tag}
              </span>
            )}

            {textBlockItem.headline && (
              <span className="block mt-8 md:mt-12 text-4xl font-semibold">{textBlockItem.headline}</span>
            )}

            {textBlockItem.text && (
              <div className={`my-8 md:my-14 normal-text`} dangerouslySetInnerHTML={{ __html: textBlockItem.text }} />
            )}

            {textBlockItem.headlineXl && <span className="mt-4 md:mt-12 block headlineXl "> {textBlockItem.headlineXl} </span>}

            {textBlockItem.buttonText && (
              <Button className="block" href={textBlockItem?.buttonLink || "/"}>
                {textBlockItem.buttonText}
              </Button>
            )}
          </motion.div>
        );
      } else if (item.__typename === "ImageBlock") {
        const order = flexOrder(item);
        const imageBlockItem = item as ImageBlock;
        return (
          <div key={index} className={`max-w-max md:max-w-md 2xl:max-w-2xl ${order}`}>
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
          ? "py-16 md:py-36"
          : padding === "xl"
          ? "py-24 md:py-40"
          : padding === "md"
          ? "py-20 md:py-32"
          : padding === "sm"
          ? "pt-8 pb-16 md:pb-24"
          : "py-16 md:py-24"
      }`}
    >
      <div className="flex gap-16 md:gap-8 xl:gap-16 justify-start md:justify-around flex-wrap md:flex-nowrap max-w-screen-2xl px-8 md:px-16 m-auto">
        {renderContent()}
      </div>
    </section>
  );
};

export default Section;
