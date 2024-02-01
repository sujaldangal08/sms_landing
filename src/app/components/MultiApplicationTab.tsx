"use client";

import { useState, useCallback, useRef } from "react";
import MultiApplicationFeatureCard from "./MultiApplicationFeatureCard";
import Button from "./shared/Button";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SearchElement from "../../../public/elements/SearchElement";

import TeacherMobile from "../../../public/mockups/teacher_mobile_mockups.svg";
import ParentMobile from "../../../public/mockups/parent_mobile_mockups.svg";
import StudentMobile from "../../../public/mockups/student_mobile_mockups.svg";

export default function MultiApplicationTab() {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const sliderRef = useRef<Slider>(null);

  const changeIndex = useCallback((i: number) => {
    setTabIndex(i);
    if (sliderRef.current) {
      sliderRef.current?.slickGoTo(i);
    }
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 1000,
    pauseOnHover: false,
    draggable: true,
    arrows: true,
    beforeChange: (oldIndex: number, newIndex: number) => {
      setTabIndex(newIndex); // Update sliderIndex when slide changes
    },
  };

  return (
    <>
      <div className="flex flex-row p-2 gap-2 bg-white shadow-lg rounded-full mt-1">
        <button
          className={`${
            tabIndex === 0
              ? "bg-brand-color text-white"
              : "bg-white text-text-medium hover:bg-[rgb(223,43,39,0.3)] ease-in-out duration-500"
          } py-1 px-5 rounded-full text-xs font-regular `}
          onClick={() => {
            changeIndex(0);
          }}
        >
          Students
        </button>
        <button
          className={`${
            tabIndex === 1
              ? "bg-brand-color text-white"
              : "bg-white text-text-medium hover:bg-[rgb(223,43,39,0.3)] ease-in-out duration-500"
          } py-1 px-5 rounded-full text-xs font-regular `}
          onClick={() => {
            changeIndex(1);
          }}
        >
          Teachers
        </button>
        <button
          className={`${
            tabIndex === 2
              ? "bg-brand-color text-white"
              : "bg-white text-text-medium hover:bg-[rgb(223,43,39,0.3)] ease-in-out duration-500"
          } py-1 px-5 rounded-full text-xs font-regular `}
          onClick={() => {
            changeIndex(2);
          }}
        >
          Parents
        </button>
      </div>
      <div className="overflow-clip w-full overflow-x-hidden flex flex-row relative">
        <Slider {...settings} className="overflow-hidden" ref={sliderRef}>
          <div key={0}>
            <div className="flex flex-row items-start justify-between">
              <Image
                src={StudentMobile}
                alt="Student Mobile Mockup"
                width={2000}
                height={2000}
                className="w-[500px]"
              />
              <div className="flex flex-col w-[60%] h-[515px] py-10 relative">
                <div className="flex flex-row gap-8 flex-wrap pt-8">
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat S"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                </div>
                <Button
                  title="View More Features"
                  className={
                    "absolute bottom-[0px] right-[40%] w-[200px] h-[40px]"
                  }
                />
              </div>
            </div>
          </div>
          <div key={1}>
            <div className="flex flex-row items-start justify-between">
              <Image
                src={TeacherMobile}
                alt="Student Mobile Mockup"
                width={2000}
                height={2000}
                className="w-[500px]"
              />
              <div className="flex flex-col w-[60%] h-[515px] py-10 relative">
                <div className="flex flex-row gap-8 flex-wrap pt-8">
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat S"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                </div>
                <Button
                  title="View More Features"
                  className={
                    "absolute bottom-[0px] right-[40%] w-[200px] h-[40px]"
                  }
                />
              </div>
            </div>
          </div>
          <div key={2}>
            <div className="flex flex-row items-start justify-between">
              <Image
                src={ParentMobile}
                alt="Student Mobile Mockup"
                width={2000}
                height={2000}
                className="w-[500px]"
              />
              <div className="flex flex-col w-[60%] h-[515px] py-10 relative">
                <div className="flex flex-row gap-8 flex-wrap pt-8">
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat S"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                  <MultiApplicationFeatureCard
                    bgColor="#DEE4F4"
                    title="Realtime Chat"
                  />
                </div>
                <Button
                  title="View More Features"
                  className={
                    "absolute bottom-[0px] right-[40%] w-[200px] h-[40px]"
                  }
                />
              </div>
            </div>
          </div>
        </Slider>
        <SearchElement className="asbolute" />
      </div>
    </>
  );
}
