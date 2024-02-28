"use client";

import Image from "next/image";
import InstagramIcon from "../../public/icons/InstagramIcon.svg";
import FacebookIcon from "../../public/icons/FacebookIcon.svg";
import LinkedInIcon from "../../public/icons/LinkedInIcon.svg";
import ShikshyaLanding from "../../public/shikshya_landing.svg";
import Button from "@/components/shared/Button";
import Link from "next/link";
import SubscribeForm from "@/components/shared/SubscribeForm";

export default function Page() {
  return (
    <>
      <div className="flex flex-col min-h-[100vh] items-center bg-header-gradient justify-between  md:pt-28 pt-52 xl:px-[12%] lg:px-[7%] px-[5%]">
        <div className="flex flex-col items-center gap-5">
          <h2 className=" text-text-dark text-center lg:text-xl rg:text-[30px] md:text-lg sm:text-md text-xs text-48 font-semibold mt-10">
            Unlocking the Future of Education:
            <span className="text-brand-color">Shikshya</span>
            <br />
            Launching Soon!
          </h2>
          <p className="md:text-xs sm:text-xxs text-xxxs text-text-light lg:w-[75%] rg:w-[70%] md:w-[80%] sm:w-[90%] w-[95%] text-center">
            We are thrilled to introduce Shikshya, a comprehensive school
            management system designed to streamline administrative tasks,
            enhance communication, and elevate the learning experience.
          </p>
          <SubscribeForm />
        </div>
        <div className="flex flex-row pt-14 w-full justify-between md:items-end items-center">
          <p className="text-text-medium text-xxs pb-8">© 2023 Shikshya.</p>
          <Image
            src={ShikshyaLanding}
            alt="Shikshya Landing"
            width={2000}
            height={2000}
            className="w-[70%] md:block hidden"
          />
          <div className="flex flex-row gap-4  pb-8">
            <Link href={"https://www.facebook.com/shikshyaapp"} target="_blank">
              <Image src={FacebookIcon} alt="Facebook Icon" />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/shikshya-app/"}
              target="_blank"
            >
              <Image src={LinkedInIcon} alt="LinkedIn Icon" />
            </Link>
            <Link
              href={"https://www.instagram.com/shikshya.app/"}
              target="_blank"
            >
              <Image src={InstagramIcon} alt="Instagram Icon" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
