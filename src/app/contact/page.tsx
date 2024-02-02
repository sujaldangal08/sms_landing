"use client";
import ContactHeader from "../components/Contact Components/ContactHeader";
import Input from "../components/shared/Input";
import TextArea from "../components/shared/TextArea";
import NonErrorLayout from "../layouts/NonErrorLayout";

export default function Page() {
  return (
    <NonErrorLayout>
      <ContactHeader />
      <div className="bg-background-color w-full xl:px-[12%] lg:px-[7%] px-[5%]">
        <div className="w-full md:h-[400px] sm:p-5 p-3 bg-white rounded-md">
          <h4 className="text-xxs text-text-light">We’re here to help you!</h4>
          <h2 className="sm:text-rg text-md  text-brand-color font-semibold">
            Shikshya <span className="text-[#202020]">Support</span>
          </h2>
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
      </div>
    </NonErrorLayout>
  );
}
