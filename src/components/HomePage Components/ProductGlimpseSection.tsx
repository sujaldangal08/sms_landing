"use client";

import Image from "next/image";
import { useState } from "react";

import GlimpseMockup0 from "../../../public/mockups/glimpse_mockup_0.svg";
import GlimpseMockup1 from "../../../public/mockups/glimpse_mockup_1.svg";
import GlimpseMockup2 from "../../../public/mockups/glimpse_mockup_2.svg";
import GlimpseMockup3 from "../../../public/mockups/glimpse_mockup_3.svg";
import GlimpseMockup4 from "../../../public/mockups/glimpse_mockup_4.svg";

import DownArrow from "../../../public/elements/DownArrowElement.svg";

export default function ProductGlimpseSection() {
  const [image, setImage] = useState(2);

  const changeImage = (num: number) => {
    setImage(num);
  };

  // Calculate the positions of images based on the selected image index
  const calculatePosition = (index: number) => {
    const positions = [0, 1, 2, 3, 4];
    const selectedIndex = positions.indexOf(image);
    const diff = selectedIndex - index;
    let newPosition = (2 + diff) % 5; // Ensure position wraps around if it goes negative
    if (newPosition < 0) newPosition += 5; // Ensure newPosition is positive
    return newPosition;
  };

  const GlimpseMockups = [
    GlimpseMockup0,
    GlimpseMockup1,
    GlimpseMockup2,
    GlimpseMockup3,
    GlimpseMockup4,
  ];

  return (
    <div className="flex flex-col items-center gap-3 bg-background-color pt-10 w-full relative">
      <h4 className="text-brand-color sm:text-xs text-xxs">Product Insight</h4>
      <h2 className="text-text-dark md:text-lg text-rg font-semibold">
        A Glimpse of What’s Inside
      </h2>
      <p className="md:text-xs sm:text-xxs text-xxxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
        Step into a world where innovation meets functionality. Witness the
        power of our solutions as they redefine the way you work, learn, and
        thrive.
      </p>
      <Image
        src={DownArrow}
        width={200}
        height={200}
        alt="Down Arrow Element"
        className="w-[40px] absolute xg:right-[24%] right-[18%] lg:block hidden top-[20%]"
      />
      <div className="w-full xl:h-[330px] lg:h-[290px] rg:h-[250px] md:h-[220px] sm:h-[160px] h-[110px] relative xl:mt-[15%] lg:mt-[17%] rg:mt-[20%] md:mt-[25%] sm:mt-[30%] mt-[40%] bg-brand-dark-blue flex flex-row items-start justify-start">
        {[0, 1, 2, 3, 4].map((index) => (
          <Image
            key={index}
            src={GlimpseMockups[index]}
            width={1000}
            height={1000}
            alt={`Mockup ${index}`}
            className={`absolute filter cursor-pointer pointer-events-auto active-image ${
              calculatePosition(index) === 2
                ? "left-[50%] transform -translate-x-1/2 z-[2] xl:w-[18%] lg:w-[20%] rg:w-[22%] md:w-[25%] sm:w-[30%] w-[35%] contrast-[1] bottom-[-10%]"
                : calculatePosition(index) === 3
                ? "xl:right-[30%] lg:right-[28%] rg:right-[26%] md:right-[24%] sm:right-[22%] right-[20%] z-[1] xl:w-[15%] lg:w-[17%] rg:w-[19%] md:w-[21%] sm:w-[23%] w-[25%] contrast-[0.9] bottom-[-5%]"
                : calculatePosition(index) === 1
                ? "xl:left-[30%] lg:left-[28%] rg:left-[26%] md:left-[24%] sm:left-[22%] left-[20%] z-[1] xl:w-[15%] lg:w-[17%] rg:w-[19%] md:w-[21%] sm:w-[23%] w-[25%] contrast-[0.9] bottom-[-5%]"
                : calculatePosition(index) === 0
                ? "xl:left-[20%] lg:left-[18%] rg:left-[16%] md:left-[14%] sm:left-[12%] left-[10%] z-[0] xl:w-[13%] lg:w-[14%] rg:w-[15%] md:w-[16%] sm:w-[17%] w-[18%] contrast-[0.8] bottom-[0%]"
                : "xl:right-[20%] lg:right-[18%] rg:right-[16%] md:right-[14%] sm:right-[12%] right-[10%] z-[0] xl:w-[13%] lg:w-[14%] rg:w-[15%] md:w-[16%] sm:w-[17%] w-[18%] contrast-[0.8] bottom-[0%]"
            }`}
            onClick={() => {
              changeImage(index);
            }}
          />
        ))}
      </div>
    </div>
  );
}
