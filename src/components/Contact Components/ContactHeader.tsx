import Image from "next/image";
import ContactHeader from '../../../public/contact_header.svg'

export default function () {
  return (
    <div className="w-full rg:h-[550px] sm:h-[350px] h-[300px] gap-12 flex flex-row bg-header-gradient rg:pt-[100px] md:pt-[200px] rg:pb-12 sm:pb-8 xl:px-[12%] lg:px-[7%] px-[5%]  md:mt-0 mt-[50px] items-center justify-between">
      <div className="flex flex-col gap-5 items-start justify-start">
        <p className="text-brand-color font-regular rg:text-xs text-xxs">
          Your Questions, Our Commitment
        </p>
        <h2 className="text-text-dark font-semibold rg:text-xl md:text-lg sm:text-rg text-md leading-[130%]">
          Have Questions?<br/> Contact Us
        </h2>
        <p className="text-text-light rg:text-sm md:text-xs xs:text-xxs">
          Your thoughts matter to us. Whether you have questions, suggestions,
          or need assistance, we're here to listen and provide the support you
          deserve. Reach out to Shikshya, and let's make education even better,
          together.
        </p>
      </div>
      <Image src={ContactHeader} alt="Contact Header Image" width={500} height={500} className="lg:w-[35vw] rg:w-[400px] w-[300px] md:block hidden"/>
    </div>
  );
}
