import Image from "next/image";
import Button from "./shared/Button";

import ShikshyaLogoDark from "../../../public/shikshya_logo_dark.svg";
import FOOTER_LINKS from "../../../constants/FooterLink";
import FaceBookIcon from "../../../public/icons/FacebookIcon.svg";
import GoogleIcon from "../../../public/icons/GoogleIcon.svg";
import AppleIcon from "../../../public/icons/AppleIcon.svg";
import InstagramIcon from "../../../public/icons/InstagramIcon.svg";

export default function Footer() {
  return (
    <div className="flex flex-col items-center gap-2  py-10 px-[12%] w-full bg-white">
      <h2 className="text-text-dark text-lg font-bold">
        Ready to transform your school with AI Technology?
      </h2>
      <p className="text-xs text-text-light w-[45%] text-center">
        Let us help you take you from zero to serious business and beyond.
        <br />
        Our no-strings attached free trial lets you test our product today.
      </p>
      <Button title="Request Demo" className={"py-[10px] my-5"} />
      <hr className="w-full h-[1px] bg-gray-400  my-10" />
      <div className="flex flex-row w-full gap-[15%] justify-between">
        <div className="w-1/2">
          <Image
            src={ShikshyaLogoDark}
            alt="Shikshya Admin Mockup Image"
            width={200}
            height={200}
            className="w-[190px] object-contain"
          />
          <p className="text-xs text-text-light pt-5 font-medium text-left">
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
        </div>
        <div className="w-full flex flex-row justify-between">
          {FOOTER_LINKS.map((curr, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h2 className="font-medium text-text-dark text-xs mb-1">
                {curr.title}
              </h2>
              {curr.links.map((link, linkIndex) => (
                <h2
                  className="font-regular text-xxs text-text-light"
                  key={linkIndex}
                >
                  {link}
                </h2>
              ))}
            </div>
          ))}
        </div>
      </div>
      <hr className="w-full h-[1px] bg-gray-400 my-5" />
      <div className="flex w-full items-center justify-between">
        <h2 className="font-regular text-xxs text-text-light">
          © 2023 Shikshya. All Rights Reserved.
        </h2>
        <div className="flex items-center gap-4">
          <Image
            src={FaceBookIcon}
            alt="facebook icon"
            width={18}
            height={18}
          />
          <Image src={GoogleIcon} alt="google icon" width={18} height={18} />
          <Image src={AppleIcon} alt="apple icon" width={18} height={18} />
          <Image
            src={InstagramIcon}
            alt="instagram icon"
            width={18}
            height={18}
          />
        </div>
      </div>
    </div>
  );
}
