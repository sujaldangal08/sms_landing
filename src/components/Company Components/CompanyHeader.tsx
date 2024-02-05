import Image from "next/image";
import CompanyHeaderImage from "../../../public/company_header.svg";

export default function CompanyHeader() {
  return (
    <div className="w-full lg:h-[600px] md:h-[500px] sm:h-[300px] h-[250px] gap-12 flex flex-row bg-header-gradient rg:py-[100px] md:py-[0px] xl:px-[12%] lg:px-[7%] px-[5%]  md:mt-0 mt-[50px] items-center justify-between">
      <div className="flex flex-col gap-5 items-start justify-start">
        <p className="text-brand-color font-regular rg:text-xs text-xxs">
          Our Story
        </p>
        <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg sm:text-rg text-md leading-[130%]">
          The <span className="text-brand-color">Shikshya</span> Saga: <br />
          From Inspiration to Innovation
        </h2>
      </div>
      <Image
        src={CompanyHeaderImage}
        alt="Contact Header Image"
        width={500}
        height={500}
        className="lg:w-[25vw] rg:w-[30vw] w-[35vw] md:block hidden"
      />
    </div>
  );
}
