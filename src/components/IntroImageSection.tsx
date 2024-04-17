"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type IntroImage = {
  src: string;
  alt: string;
  className: string;
};

type IntroImagesSectionProps = {
  images?: IntroImage[];
};

const IntroImagesSection: React.FC<IntroImagesSectionProps> = ({ images }) => {
  // Define different classes based on index
  const getClasses = (index: number) => {
    let className = "";
    if (index === 0) {
      className = "mt-8 md:mt-16 mb-10 max-w-40 md:max-w-full";
    } else if (index === 1) {
      className = "mb-36 max-w-40 md:max-w-full";
    } else if (index === 2) {
      className = "mt-20 md:mt-48 mb-14 max-w-40 md:max-w-full";
    } else if (index === 3) {
      className = "mt-1 md:mt-4 mb-2 max-w-40 md:max-w-full";
    }

    return className;
  };

  // Calculate hidden Y offset based on index
  const getHiddenYOffset = (index: number) => {
    // Initial offset
    let yOffset = 70;
    // Add index * 8 for each subsequent item
    if (index > 0) {
      yOffset += index * 10;
    }
    return yOffset;
  };

   // Calculate hidden Y offset based on index
  const getDelayOffset = (index: number) => {
    // Initial offset
    let yOffset = 0.2;
    // Add index * 8 for each subsequent item
    if (index > 0) {
      yOffset += (index - 1) / 10;
    }
    return yOffset;
  };

  return (
    <div className="overflow-hidden">
      <section className="flex justify-center gap-3 md:gap-7 mx-[-8rem] md:mx-[-20rem] overflow-hidden">
        {images?.map((image, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: getDelayOffset(index) }}
            variants={{
              visible: { opacity: 1, x: 0, y: 0 },
              hidden: { opacity: 0, x: 0, y: getHiddenYOffset(index)},
            }}
            key={index}
            className={`${getClasses(index)} basis-1/5`}
          >
            <Image className="w-full" placeholder="blur" src={image.src} alt={image.alt} />
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default IntroImagesSection;
