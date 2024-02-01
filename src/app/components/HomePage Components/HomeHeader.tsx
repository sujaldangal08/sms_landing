import Image from "next/image";
import QuotationIcon from "../../../../public/elements/QuotationElement";
import Button from "../shared/Button";
import StoreBadge from "../shared/StoreBadge";

import PlayStoreLightLogo from "../../../../public/playstore_light_logo.svg";
import AppStoreLightLogo from "../../../../public/appstore_light_logo.svg";
import Mockups from "../../../../public/Mockups.png";
import { getHeaderData } from "../../../../actions/index";

export default async function HomeHeader() {
  const data = await getHeaderData();

  return (
    <div className="w-full rg:h-[750px] sm:h-[680px] h-[600px] gap-12 flex flex-row bg-header-gradient rg:pt-[100px] sm:pt-[0px] rg:pb-12 sm:pb-8 xl:px-[12%] lg:px-[7%] px-[5%] items-center justify-between">
      <div className="flex flex-col gap-5 items-start justify-start">
        <p className="text-brand-color font-regular rg:text-xs text-xxs">
          {data?.Subtitle}
        </p>
        <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg text-rg leading-[130%]">
          {data?.Title}
        </h2>
        <p className="text-text-light rg:text-sm md:text-xs xs:text-xxs">
          {data?.Description}
        </p>
        <Button title={data?.ButtonText} className={"md:w-[180px]"}></Button>
        <div className="flex flex-row  gap-3">
          <StoreBadge
            src={AppStoreLightLogo}
            className={""}
            innerClassName={"sm:w-[100px] w-[90px]"}
          />
          <StoreBadge
            src={PlayStoreLightLogo}
            innerClassName={"sm:w-[100px] w-[90px]"}
          />
        </div>
      </div>
      <QuotationIcon
        width="100"
        height="100"
        className="mb-[200px] rg:block hidden"
      />
      <Image
        src={Mockups}
        alt="Shikshya Admin Mockup Image"
        width={1000}
        height={1000}
        className="w-[40%] object-contain rg:block hidden"
      />
    </div>
  );
}
