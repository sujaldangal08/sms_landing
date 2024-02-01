import Image from "next/image";
import StoreBadge from "../shared/StoreBadge";

import AppStoreDarkLogo from "../../../../public/appstore_dark_logo.svg";
import PlayStoreDarkLogo from "../../../../public/playstore_dark_logo.svg";
import FakeSchoolLogos from "../../../../public/schools_fake_logo.svg";
import ShikshyaLogoDark from "../../../../public/shikshya_logo_dark.svg";
import Mockups from "../../../../public/mockups/laptop_tablet_mobile_mockup.svg";

export default function ClientSection() {
  return (
    <>
      <div className="flex flex-col items-center gap-2 pb-10 pt-[7%] w-full bg-brand-blue-light">
        <h4 className="text-brand-color text-xs">Our Clients</h4>
        <h2 className="text-text-dark text-lg font-semibold">
          Join Our Growing Family
        </h2>
        <p className="text-xs text-text-light w-[45%] text-center">
          Empower your entire educational community with dedicated applications
          for students, teachers, and parents. Streamline communication, enhance
          learning, and stay connected effortlessly.
        </p>
        <div className="flex flex-col w-full gap-10 overflow-hidden pt-10">
          <div className="w-full flex flex-row justify-between ">
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
            <Image
              src={ShikshyaLogoDark}
              alt="Shikshya Dark Logo"
              width={500}
              height={500}
              className="w-[300px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
          </div>
          <div className="flex flex-row justify-between w-[65%] mx-auto">
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
            <Image
              src={FakeSchoolLogos}
              alt="Fake School Logo"
              className="w-[120px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 py-10 w-full bg-white">
        <h4 className="text-brand-color text-xs">Our Clients</h4>
        <h2 className="text-text-dark text-lg font-semibold">
          Begin Your Journey Now
        </h2>
        <p className="text-xs text-text-light w-[45%] text-center">
          Empower your entire educational community with dedicated applications
          for students, teachers, and parents. Streamline communication, enhance
          learning, and stay connected effortlessly.
        </p>
        <div className="flex flex-row w-[70%] py-8 mx-auto justify-between items-center">
          <Image
            src={Mockups}
            alt="Shikshya Admin Mockup Image"
            width={2000}
            height={2000}
            className="w-[65%] object-contain"
          />
          <div className="flex flex-col gap-5 items-center justify-center">
            <StoreBadge
              src={AppStoreDarkLogo}
              isDark
              className="px-[60px]"
              width={115}
            />
            <StoreBadge
              src={PlayStoreDarkLogo}
              isDark
              className="px-[60px]"
              width={115}
            />
          </div>
        </div>
      </div>
    </>
  );
}
