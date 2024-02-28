"use client";

import { HTMLInputTypeAttribute } from "react";

export default function Input({
  label,
  placeholder,
  className,
  type,
  name,
  isRequired,
  register,
}: {
  label: string;
  placeholder: string;
  className?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  isRequired?: boolean;
  register: any;
}) {
  return (
    <div className={`flex flex-col sm:gap-2 gap-[6px] ` + className}>
      <label
        className={`md:text-xxs  text-xxxs text-text-dark after:text-brand-color ${
          isRequired && "after:content-['*']"
        }`}
      >
        {label}
      </label>
      <input
        {...register}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`text-gray-600 md:text-xs sm:text-xxs text-xxxs outline outline-1 outline-neutral-200 rounded-md bg-white sm:px-5 px-4 sm:py-3 py-2
              placeholder:text-gray-400 md:placeholder:text-xs sm:placeholder:text-xxs placeholder:text-xxxs appearance-none`}
      />
    </div>
  );
}
