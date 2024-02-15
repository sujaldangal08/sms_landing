"use client";

import ErrorLayout from "@/layouts/ErrorLayout";
import Image from "next/image";
import Button from "@/components/shared/Button";
import ServerErrorIcon from "../../public/icons/ServerErrorIcon.svg";

export default function ErrorPage() {
  return (
    <ErrorLayout>
      <div className="flex flex-row h-screen gap-12 bg-header-gradient rg:pt-[100px] sm:pt-[0px] rg:pb-12 sm:pb-8 xl:px-[12%] lg:px-[7%] px-[5%] items-center justify-between">
        <div className="flex flex-col gap-5 items-start justify-start">
          <p className="text-brand-color font-regular text-xs">Error</p>
          <h2 className="text-text-dark font-semibold text-xl leading-[130%]">
            Internal Server Error
          </h2>
          <p className="text-text-light rg:text-sm md:text-xs xs:text-xxs">
            Shikshya is an AI-powered school management system designed to
            streamline administrative tasks and enhance the learning experience
            for students.
          </p>
          <Button
            title={"Refresh"}
            className={"md:w-[180px]"}
            onClick={() => {
              window.location.reload();
            }}
          ></Button>
        </div>
        <Image
          src={ServerErrorIcon}
          width={500}
          height={500}
          alt="Not Found"
          className="rg:w-[35%] w-[40%] rg:block hidden"
        />
      </div>
    </ErrorLayout>
  );
}
