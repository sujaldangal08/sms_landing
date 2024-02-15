import Image from "next/image";
import ShikshyaLogoDark from "../../../public/shikshya_logo_dark.svg";
import PhoneIcon from "../../../public/icons/PhoneIcon.tsx";
import Button from "@/components/shared/Button";
import TextArea from "@/components/shared/TextArea";
import Input from "../../components/shared/Input";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex-row w-full xl:px-[12%] lg:px-[7%] px-[5%] py-8 justify-between items-center fixed top-0 z-[10] rg:flex hidden">
        <Link href={"/"}>
          <Image
            src={ShikshyaLogoDark}
            alt="Shikshya Logo"
            width={160}
            height={160}
            className="lg:w-[160px] w-[140px]"
          />
        </Link>

        <Link href={"/"}>
          <Button
            title="Contact Us"
            className="lg:text-xxs text-xxxs lg:px-6 px-4 lg:py-2 py-1"
          />
        </Link>
      </div>
      <div className="flex justify-center mt-44 ">
        <div>
          <h2 className=  " flex justify-center text-text-dark md:text-lg text-48 font-semibold">
            Unlocking the Future of Education:{""}
            <span className="text-brand-color">Shikshya</span>
            <br className="md:hidden" />
            Launching Soon!
          </h2>

          <p className= " flex justify-center md:text-xs sm:text-xxs text-xxxs text-text-light lg:w-[60%] rg:w-[70%] sm:w-[80%] w-[90%] text-center">
            We are thrilled to introduce Shikshya, a comprehensive school
            management system designed to streamline administrative tasks,
            enhance communication, and elevate the learning experience.
          </p>
        </div>



      </div>
      {/*
      <Input
            label="Full Name"
            placeholder="Enter full name"
            className=""
            type="text"
            name="name"
            isRequired
            onChange={() => {}}
          />
          <Button
          title="Contact Us"
          className="lg:text-xxs text-xxxs lg:px-6 px-4 lg:py-2 py-1"
        />
  */}

    </>
  );
}
