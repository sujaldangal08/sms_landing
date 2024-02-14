"use client";

import { useState, useCallback, useRef } from "react";
import MultiApplicationFeatureCard from "./MultiApplicationFeatureCard";
import Button from "./shared/Button";
import Image from "next/image";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SearchElement from "../../public/elements/SearchElement";

import TeacherMobile from "../../public/mockups/teacher_mobile_mockups.svg";
import ParentMobile from "../../public/mockups/parent_mobile_mockups.svg";
import StudentMobile from "../../public/mockups/student_mobile_mockups.svg";

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
    beforeChange: (_: number, newIndex: number) => {
      setTabIndex(newIndex); // Update sliderIndex when slide changes
    },
  };

  const data = [
    {
      image: StudentMobile,
      featureData: [
        {
          title: "Fun Learning Modules",
          description:
            "Dive into interesting lessons with Shikshya's Fun Learning Modules. They make studying exciting and easy to understand.",
        },
        {
          title: "Schedule Keeper",
          description:
            "Stay organized with Shikshya's Schedule Keeper. It helps you track your daily routine, so you never miss an important study session or activity.",
        },
        {
          title: "Assignment Manager",
          description:
            "Manage your assignments effortlessly with Shikshya's Assignment Manager. Keep track of due dates and submit your work without any stress.",
        },
        {
          title: "Attendance Tracker",
          description:
            "Never miss a class! Shikshya's Attendance Tracker helps you stay on top of your class attendance, making sure you're present and accounted for.",
        },
        {
          title: "Quiz Time",
          description:
            "Test your knowledge with Shikshya's Quiz feature. It's a fun way to check your understanding and learn new things in a playful manner.",
        },
        {
          title: "Chapter Progress",
          description:
            "Keep tabs on your progress with Shikshya's Chapter Progress tracker. See how far you've come in each subject's chapters, helping you stay on the right learning path.",
        },
      ],
    },
    {
      image: ParentMobile,
      featureData: [
        {
          title: "Lesson Planning Hub",
          description:
            "Effortlessly organize and plan lessons with Shikshya's Lesson Planning Hub. Access a centralized space for creating, managing, and optimizing your teaching materials.",
        },
        {
          title: "Attendance Tracker",
          description:
            "Streamline attendance management with Shikshya's Attendance Tracker. Easily keep track of student presence, allowing you to stay informed and engaged in class.",
        },
        {
          title: "Assignment Dashboard",
          description:
            "Simplify assignment tracking with Shikshya's Assignment Dashboard. Quickly view and manage upcoming tasks, due dates, and student progress all in one place.",
        },
        {
          title: "Schedule Overview",
          description:
            "Stay organized with Shikshya's Schedule Overview. Access a quick snapshot of your daily schedule, ensuring seamless coordination and efficient planning.",
        },
        {
          title: "Class Progress Monitor",
          description:
            "Monitor student progress in real-time with Shikshya's Class Progress Monitor. Stay informed about ongoing and upcoming classes, enhancing communication with both students and parents.",
        },
        {
          title: "Insights and Reports",
          description:
            "Gain valuable insights into student performance with Shikshya's Insights and Reports. Access easy-to-understand analytics for informed decision-making and effective communication with parents.",
        },
      ],
    },
    {
      image: TeacherMobile,
      featureData: [
        {
          title: "Convenient Payments",
          description:
            "Simplify learning payments with Shikshya's easy methods. Handle fees effortlessly for uninterrupted access to educational resources.",
        },
        {
          title: "Attendance Alerts",
          description:
            "Stay in the loop with Shikshya's Attendance Alerts. Receive timely updates on your child's class participation and overall engagement.",
        },
        {
          title: "Assignments Overview",
          description:
            "Stay involved with Shikshya's Assignment Overview. Access a clear view of upcoming assignments, due dates, and your child's progress.",
        },
        {
          title: "Schedule Monitoring",
          description:
            "Support your child's time management with Shikshya's Schedule Monitoring. Stay informed about their daily routine for a balanced schedule.",
        },
        {
          title: "Class Tracking",
          description:
            "Stay engaged in your child's education with Shikshya's Class Tracking. Access information on ongoing and upcoming classes, enhancing communication between home and school.",
        },
        {
          title: "Progress Reports",
          description:
            "Stay informed about your child's progress with Shikshya's Progress Reports. Get insights into achievements and areas for improvement, fostering collaboration between parents and teachers.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="flex flex-row p-2 gap-2 bg-white shadow-lg rounded-full mt-1">
        <button
          className={`${
            tabIndex === 0
              ? "bg-brand-color text-white"
              : "bg-white text-text-medium hover:bg-[rgb(223,43,39,0.3)] ease-in-out duration-500"
          } py-1 px-5 rounded-full lg:text-xs md:text-xxs text-xxxs font-regular `}
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
          } py-1 px-5 rounded-full lg:text-xs md:text-xxs text-xxxs font-regular `}
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
          } py-1 px-5 rounded-full lg:text-xs md:text-xxs text-xxxs font-regular `}
          onClick={() => {
            changeIndex(2);
          }}
        >
          Parents
        </button>
      </div>
      <div className="overflow-clip w-full overflow-x-hidden flex flex-row relative">
        <Slider {...settings} className="overflow-hidden" ref={sliderRef}>
          {data.map((curr, indx) => (
            <div key={indx}>
              <div className="flex flex-row items-center justify-between">
                <Image
                  src={curr.image}
                  alt="Student Mobile Mockup"
                  width={2000}
                  height={2000}
                  className="rg:w-[40%] w-[0%]"
                />
                <div className="flex flex-col rg:w-[60%] w-[100%] h-full items-center justify-between gap-10  py-10">
                  <div className="grid rg:grid-cols-2 grid-cols-1  xl:gap-8 lg:gap-7 rg:gap-6 md:gap-5 gap-3 ">
                    {curr.featureData.map((feature, index) => (
                      <MultiApplicationFeatureCard
                        key={`feature ${index}`}
                        bgColor="#DEE4F4"
                        title={feature.title}
                        description={feature.description}
                      />
                    ))}
                  </div>
                  <Button
                    title="View More Features"
                    className={"w-[200px] h-[40px]"}
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <SearchElement className="asbolute" />
      </div>
    </>
  );
}
