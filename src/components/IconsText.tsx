"use client";
import React from "react";
import backend from "/public/assets/backend.svg";
import marketing from "/public/assets/marketing.svg";
import productDesign from "/public/assets/product-design.svg";
import support from "/public/assets/support.svg";
import frontend from "/public/assets/frontend.svg";
import finance from "/public/assets/finance.svg";
import Image from "next/image";
import { motion } from "framer-motion";

type IconsTextProps = {
  iconData: {
    icon: "marketing" | "finance" | "support" | "backend" | "productDesign" | "frontend"; // Specify all possible icon values
    text: string;
  }[];
};

function IconsText({ iconData }: IconsTextProps) {
  /**
   * Determine the right icon to be displayed depending
   */
  const iconToDisplay = (checkIcon: string) => {
    switch (checkIcon) {
      case "marketing":
        return <Image width={90} height={90} alt="marketing icon" src={marketing} />;
      case "backend":
        return <Image width={90} height={90} alt="backend icon" src={backend} />;
      case "productDesign":
        return <Image width={90} height={90} alt="productDesign icon" src={productDesign} />;
      case "support":
        return <Image width={90} height={90} alt="support icon" src={support} />;
      case "frontend":
        return <Image width={90} height={90} alt="frontend icon" src={frontend} />;
      case "finance":
        return <Image width={90} height={90} alt="finance icon" src={finance} />;
      default:
        return "";
    }
  };

  /**
   * The 'splitText' function is used to split the 'text' property of each object into two parts: the first word and the rest of the sentence.
   */
  const splitText = (text: string) => {
    const textArray = text.split(" ");
    const firstWord = textArray[0];
    const restOfSentence = textArray.splice(1);
    return [firstWord, restOfSentence.join(" ")];
  };

  const delayEachItem = (index: number) => {
    // Initial offset
    let delay = 0.3;
    // Add index * 8 for each subsequent item
    if (index > 0) {
      delay += (index - 1) / 10;
    }
    return delay;
  };
  return (
    <div className="flex mt-8 md:mt-24 mb-24 md:mb-36 max-w-screen-2xl m-auto justify-end px-8 md:px-16">
      <div className={`basis-full flex justify-center md:justify-end xl:basis-2/4`}>
        <div className="flex justify-between flex-wrap gap-14 max-w-xl">
          {iconData.map((item, index) => {
            const [firstWord, restOfSentence] = splitText(item.text);
            return (
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: delayEachItem(index) }}
                variants={{
                  visible: { opacity: 1, x: 0, y: 0 },
                  hidden: { opacity: 0, x: 10, y: 50 },
                }}
                key={`${index}-${item.icon}`}
                className="flex md:max-w-52"
              >
                <span className="flex gap-7 md:inline">
                  {iconToDisplay(item.icon)}
                  <span className="text-[#787ea4] block mt-8 text-3xl">
                    <span className="text-white">{firstWord}</span> {restOfSentence}
                  </span>
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IconsText;
