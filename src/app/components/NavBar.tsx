"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ShikshyaLogoDark from "../../../public/shikshya_logo_dark.svg";
import Button from "./shared/Button";
import NAV_LINKS from "../../../constants/NavLinks";
import DropDownIcon from "../../../public/icons/DropDownIcon";
import MobileNavBar from "./shared/MobileNavBar";


export default function NavBar() {
  const [selectedNavItem, setNavItem] = useState<number | null>(null);

  const updateNavClasses = useCallback(
    ({
      nav,
      addClass,
      removeClasses,
    }: {
      nav: HTMLElement;
      addClass: string[];
      removeClasses: string[];
    }) => {
      addClass.forEach((cls) => {
        nav.classList.add(cls);
      });

      removeClasses.forEach((cls) => {
        nav.classList.remove(cls);
      });
    },
    []
  );

  useEffect(() => {
    const handleScroll = (id: string) => () => {
      const nav = document.getElementById(id);

      if (nav != null) {
        const offset = window.pageYOffset;

        if (offset < 100) {
          updateNavClasses({
            nav: nav,
            removeClasses: ["bg-[rgb(255,255,255,0.85)]", "py-3"],
            addClass: ["bg-transparent", "py-8"],
          });
        } else {
          updateNavClasses({
            nav: nav,
            addClass: ["bg-[rgb(255,255,255,0.85)]", "py-3"],
            removeClasses: ["bg-transparent", "py-8"],
          });
        }
      }
    };

    const desktopHandler = handleScroll("desktop_navbar");

    window.addEventListener("scroll", desktopHandler);

    return () => {
      window.removeEventListener("scroll", desktopHandler);
    };
  }, [updateNavClasses]);

  return (
    <>
      <div
        className="flex-row w-full xl:px-[12%] lg:px-[7%] px-[5%] py-8 justify-between items-center fixed top-0 z-[10] rg:flex hidden"
        style={{ backdropFilter: "blur(5px)" }}
        id="desktop_navbar"
      >
        <Image
          src={ShikshyaLogoDark}
          alt="Shikshya Logo"
          width={160}
          height={160}
          className="lg:w-[160px] w-[140px]"
        />
        <div className="flex flex-row lg:gap-12 gap-8 items-center">
          {NAV_LINKS.map((curr, index) => {
            if (curr.subTitle.length == 0) {
              return (
                <h3
                  key={index}
                  className="lg:text-xxs text-xxxs font-medium cursor-pointer"
                >
                  {curr.title}
                </h3>
              );
            } else {
              return (
                <div
                  key={index}
                  className="flex flex-row items-center gap-1"
                  onClick={() => {
                    setNavItem(index);
                    alert(index);
                  }}
                >
                  <h3 className="lg:text-xxs text-xxxs font-medium cursor-pointer">
                    {curr.title}
                  </h3>
                  <DropDownIcon width="14" height="15" />
                </div>
              );
            }
          })}
          <Button
            title="Request Demo"
            className="lg:text-xxs text-xxxs lg:px-6 px-4 lg:py-2 py-1"
          />
        </div>
      </div>
      <MobileNavBar selectedNavItem={selectedNavItem} setNavItem={setNavItem}/>  
    </>
  );
}
