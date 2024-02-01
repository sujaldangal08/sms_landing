"use client";

import Image from "next/image";
import { useState } from "react";

import GlimpseMockup0 from "../../../../public/mockups/glimpse_mockup_0.svg";
import GlimpseMockup1 from "../../../../public/mockups/glimpse_mockup_1.svg";
import GlimpseMockup2 from "../../../../public/mockups/glimpse_mockup_2.svg";
import GlimpseMockup3 from "../../../../public/mockups/glimpse_mockup_3.svg";
import GlimpseMockup4 from "../../../../public/mockups/glimpse_mockup_4.svg";

import DownArrow from "../../../../public/elements/DownArrowElement.svg";

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
      <h4 className="text-brand-color text-xs">Product Insight</h4>
      <h2 className="text-text-dark text-lg font-semibold">
        A Glimpse of What’s Inside
      </h2>
      <p className="text-xs text-text-light w-[45%] text-center">
        Empower your entire educational community with dedicated applications
        for students, teachers, and parents. Streamline communication, enhance
        learning, and stay connected effortlessly
      </p>
      <Image
        src={DownArrow}
        width={200}
        height={200}
        alt="Down Arrow Element"
        className="w-[40px] absolute right-[22%] top-[20%]"
      />
      <div className="w-full h-[330px] relative mt-[15%] bg-brand-dark-blue flex flex-row items-start justify-start">
        {[0, 1, 2, 3, 4].map((index) => (
          <Image
            key={index}
            src={GlimpseMockups[index]}
            width={1000}
            height={1000}
            alt={`Mockup ${index}`}
            className={`absolute filter cursor-pointer pointer-events-auto active-image ${
              calculatePosition(index) === 2
                ? "left-[50%] transform -translate-x-1/2 z-[2] w-[18%] contrast-[1] bottom-[-10%]"
                : calculatePosition(index) === 3
                ? "right-[28%] z-[1] w-[15%] contrast-[0.9] bottom-[-5%]"
                : calculatePosition(index) === 1
                ? "left-[28%] z-[1] w-[15%] contrast-[0.9] bottom-[-5%]"
                : calculatePosition(index) === 0
                ? "left-[20%] z-[0] w-[13%] contrast-[0.8] bottom-[0%]"
                : "right-[20%] z-[0] w-[13%] contrast-[0.8] bottom-[0%]"
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
