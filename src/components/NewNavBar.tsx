"use client";
import Image from "next/image";
import Link from "next/link";
import ShikshyaLogoDark from "../../public/shikshya_logo_dark.svg";
import CallIcon from "../../public/icons/CallIcon";
import React, { useCallback, useEffect, useState } from "react";

export default function NewNavBar() {
  const [openNav, setOpenNav] = useState<boolean>(false);

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
        setOpenNav(false);
        if (offset < 30) {
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
    <div className="flex flex-row fixed top-0 w-full justify-between items-center pt-8 xl:px-[12%] lg:px-[7%] px-[5%]"  id="desktop_navbar"  style={{ backdropFilter: "blur(5px)" }}>
      <Link href={"/"}>
        <Image
          src={ShikshyaLogoDark}
          alt="Shikshya Logo"
          width={160}
          height={160}
          className="lg:w-[160px] md:w-[140px] sm:w-[120px] w-[100px]"
        />
      </Link>
      <Link href={"/contact"}>
        <button className="bg-brand-color px-6 py-[10px] rounded-md shadow  items-center flex flex-row gap-3">
          <CallIcon width="40%" />
          <h3 className="text-white sm:text-xxs text-xxxs">Contact</h3>
        </button>
      </Link>
    </div>
  );
}
