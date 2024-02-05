"use client";

import { useState } from "react";
import Button from "./shared/Button";
import Input from "./shared/Input";
import TextArea from "./shared/TextArea";

export default function ContactForm() {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    country: string;
    phone_number: string;
    message: string;
  }>({ name: "", email: "", country: "", phone_number: "", message: "" });

  const sendMessage = () => {
    if (formData) {
      alert("Your Message has been sent");
      console.log(formData);
    }
  };

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-col bg-white gap-5 w-[70%] px-7 py-[30px] mt-6 outline outline-1 outline-neutral-200 rounded-md">
      <div className="flex flex-row w-full gap-10 justify-between">
        <Input
          label="Name"
          placeholder="Your Name"
          className="w-full"
          type="text"
          name="name"
          onChange={onChange}
        />
        <Input
          label="Email address"
          placeholder="Email"
          className="w-full"
          type="email"
          name="email"
          onChange={onChange}
        />
      </div>
      <div className="flex flex-row w-full gap-10 justify-between">
        <Input
          label="Phone Number"
          placeholder="+000"
          className="w-full"
          type="number"
          name="phone_number"
          onChange={onChange}
        />
        <Input
          label="Country"
          placeholder="Your Country"
          className="w-full"
          type="text"
          name="country"
          onChange={onChange}
        />
      </div>
      <TextArea
        placeholder="Hi! We are...."
        label="Message"
        name="message"
        onChange={onChange}
      />
      <Button
        title="Send your message"
        className={"w-[200px] ml-[100%] translate-x-[-100%] py-[10px]"}
        onClick={sendMessage}
      />
    </div>
  );
}
