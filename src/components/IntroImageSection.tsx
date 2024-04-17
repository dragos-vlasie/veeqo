"use client"
import React from "react";
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
// Define different classes based on index
const getClasses = (index:number) => {
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

  // const isDesktop = useDevice() === "desktop";
return className
}
  return (
    <div className="overflow-hidden">
      <section className="flex justify-center gap-3 md:gap-7 mx-[-8rem] md:mx-[-20rem] overflow-hidden">
        {images?.map((image, index) => (
          <div key={index} className={`${getClasses(index)} basis-1/5` } >
            <Image src={image.src} alt={image.alt} layout="responsive"/>
          </div>
        ))}
      </section>
    </div>
  );
};

export default IntroImagesSection;
