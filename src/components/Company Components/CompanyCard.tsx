import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function CompanyCard({
  subTitle,
  title,
  description,
  left,
  image,
}: {
  subTitle: string;
  title: string;
  description: string;
  left: boolean;
  image: StaticImport;
}) {
  return (
    <div
      className={`flex flex-row w-full items-center justify-between xl:px-[12%] lg:px-[7%] px-[5%] sm:py-[30px] py-[20px] ${
        !left ? "bg-white" : "bg-background-color"
      }`}
    >
      <Image
        src={image}
        alt="Contact Header Image"
        width={500}
        height={500}
        className={`lg:w-[40%] rg:w-[45%] w-[50%] ${
          !left ? "hidden" : "md:block hidden"
        }`}
      />
      <div className="flex flex-col sm:gap-5 gap-3 lg:w-[55%] md:w-[50%] w-full">
        <p className="text-brand-color font-regular rg:text-xs text-xxs ">
          {subTitle}
        </p>
        <h2 className="text-text-dark font-semibold rg:text-lg md:text-rg sm:text-md text-sm leading-[130%]">
          {title}
        </h2>
        <p className="text-text-light rg:text-xs md:text-xxs xs:text-xxxs">
          {description}
        </p>
      </div>
      <Image
        src={image}
        alt="Contact Header Image"
        width={500}
        height={500}
        className={`lg:w-[40%] rg:w-[45%] w-[50%] ${
          left ? "hidden" : "md:block hidden"
        }`}
      />
    </div>
  );
}
