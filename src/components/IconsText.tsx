import React from "react";
import backend from "/public/assets/backend.svg";
import marketing from "/public/assets/marketing.svg";
import productDesign from "/public/assets/product-design.svg";
import support from "/public/assets/support.svg";
import frontend from "/public/assets/frontend.svg";
import finance from "/public/assets/finance.svg";
import Image from "next/image";

type IconsTextProps = {
  iconData: {
    icon: "marketing" | "finance" | "support" | "backend" | "productDesign" | "frontend"; // Specify all possible icon values
    text: string;
  }[];
  startCol: number;
  endCol: number;
};

function IconsText({ iconData, startCol, endCol }: IconsTextProps) {
  /**
   * Determine the right icon to be displayed depending
   */
  const iconToDisplay = (checkIcon: string) => {
    switch (checkIcon) {
      case "marketing":
        return <Image width={90} height={90} alt="test" src={marketing} />;
      case "backend":
        return <Image width={90} height={90} alt="test" src={backend} />;
      case "productDesign":
        return <Image width={90} height={90} alt="test" src={productDesign} />;
      case "support":
        return <Image width={90} height={90} alt="test" src={support} />;
      case "frontend":
        return <Image width={90} height={90} alt="test" src={frontend} />;
      case "finance":
        return <Image width={90} height={90} alt="test" src={finance} />;
      default:
        return "";
    }
  };

  const splitText = (text: string) => {
    const textArray = text.split(" ");
    const firstWord = textArray[0];
    const restOfSentence = textArray.splice(1);
    return [firstWord, restOfSentence.join(" ")];
  };

  return (
    <div className="flex mt-8 md:mt-24 mb-24 md:mb-36 max-w-screen-2xl m-auto justify-end px-8 md:px-16">
      <div className={`basis-full flex justify-center md:justify-end xl:basis-2/4`}>
        <div className="flex justify-between flex-wrap gap-14 max-w-xl">
          {iconData.map((item, index) => {
            const [firstWord, restOfSentence] = splitText(item.text);
            return (
              <div key={`${index}-${item.icon}`} className="flex md:max-w-52">
                <span className="flex gap-7 md:inline">
                  {iconToDisplay(item.icon)}
                  <span className="text-[#787ea4] block mt-8 text-3xl">
                    <span className="text-white">{firstWord}</span> {restOfSentence}
                  </span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default IconsText;
