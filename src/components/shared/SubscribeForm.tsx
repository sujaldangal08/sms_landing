"use client";
import { useState } from "react";
import Button from "./Button";
import subscribeAction from "@/actions/subscribeAction";
import { toast } from "react-toastify";

export default function SubscribeForm() {
  const [email, setEmail] = useState<string>("");

  const subscribe = async () => {
    if (email == "") {
      toast.warning("Email is required");
      return;
    }
    try {
      const response = await subscribeAction(email);
      if (response) {
        toast.success("Thank you for subscribing");
        setEmail("");
      } else {
        toast.error("Server Error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex z-[1] lg:w-[65%] rg:w-[70%] md:w-[75%] sm:w-[90%] w-[95%]">
      <input
        placeholder="Drop your Email to stay updated!"
        className={`w-full text-gray-600 md:text-xs sm:text-xxs text-xxxs outline outline-1 outline-neutral-200 rounded-md bg-white sm:px-5 px-4 sm:py-3 py-2
          placeholder:text-gray-400 md:placeholder:text-xs sm:placeholder:text-xxs placeholder:text-xxxs appearance-none`}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        type="email"
      />
      <Button
        title="Get Notified"
        className="min-w-[20%] lg:text-xxs text-xxxs lg:px-6 px-4 lg:py-2 py-1"
        onClick={subscribe}
      />
    </div>
  );
}
