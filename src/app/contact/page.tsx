"use client";
import EmailIcon from "../../../public/icons/EmailIcon";
import ContactHeader from "../components/Contact Components/ContactHeader";
import Button from "../components/shared/Button";
import Input from "../components/shared/Input";
import TextArea from "../components/shared/TextArea";
import NonErrorLayout from "../layouts/NonErrorLayout";

export default function Page() {
  return (
    <NonErrorLayout>
      <ContactHeader />
      <div className="bg-background-color w-full xl:px-[12%] lg:px-[7%] px-[5%] md:py-[80px] py-[40px] flex flex-col items-center">
        <div className="w-full sm:p-5 p-3 bg-white rounded-md flex flex-col gap-2">
          <h4 className="text-xxs text-text-light">We’re here to help you!</h4>
          <h2 className="sm:text-rg text-md  text-brand-color font-semibold">
            Shikshya <span className="text-[#202020]">Support</span>
          </h2>
          <div className="md:grid flex flex-col grid-cols-2 gap-4">
            <Input
              label="Full Name"
              placeholder="Enter full name"
              className=""
              type="text"
              name="name"
              isRequired
              onChange={() => {}}
            />
            <Input
              label="Organization Name"
              placeholder="Enter organization name"
              className=""
              type="text"
              name="organization_name"
              isRequired
              onChange={() => {}}
            />
            <Input
              label="Email Address"
              placeholder="Enter email address"
              className=""
              type="text"
              name="email"
              isRequired
              onChange={() => {}}
            />
            <Input
              label="Phone Number (Optional)"
              placeholder="Enter phone number"
              className=""
              type="tel"
              name="phone_number"
              onChange={() => {}}
            />
            <Input
              label="Subject"
              placeholder="Application Subject"
              className=""
              type="text"
              name="subject"
              isRequired
              onChange={() => {}}
            />
            <TextArea
              label="Message"
              placeholder="Your Message...."
              className=""
              name="subject"
              isRequired
              onChange={() => {}}
            />
          </div>
          <Button title="Send Message" className={"w-[200px] mx-auto my-4"} />
        </div>
      </div>
      <div className="bg-header-gradient w-full xl:px-[12%] lg:px-[7%] px-[5%] md:py-[80px] py-[40px] flex flex-col gap-2 items-center">
        <h4 className="text-xxs text-brand-color">
          We’re here for your queries.
        </h4>
        <h2 className="sm:text-rg text-md font-semibold">
          Contact Information
        </h2>
        <h4 className="text-text-light sm:text-xs text-xxs text-center">
          Browse through our collection of frequently asked questions to find
          quick answers to common queries.
        </h4>
        <div className="md:flex grid sm:grid-cols-2 grid-cols-1 gap-2">
          {Array.from([, , , ,]).map((curr, indx) => (
            <div className="sm:w-[230px] bg-white flex flex-col items-center sm:gap-1 gap-[3px] p-2 ">
              <EmailIcon width="35px"/>
              <h3 className="text-text-normal font-medium">Email</h3>
              <p className="text-text-light sm:text-xs text-xxs text-center">
                We pioneer creative solutions, setting new standards in every
                project we undertake.
              </p>
            </div>
          ))}
        </div>
      </div>
    </NonErrorLayout>
  );
}
