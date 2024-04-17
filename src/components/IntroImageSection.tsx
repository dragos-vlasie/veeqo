"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";

type IntroImage = {
  src: string;
  alt: string;
  className: string;
};

type IntroImagesSectionProps = {
  images?: IntroImage[];
};

const IntroImagesSection: React.FC<IntroImagesSectionProps> = ({ images }) => {

  return (
    <div className="overflow-hidden">
      <section className="flex justify-center gap-7 mx-[-20rem] overflow-hidden">
        {images?.map((image, index) => (
          <div key={index} className={image.className}>
            <Image src={image.src} alt={image.alt} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default IntroImagesSection;
