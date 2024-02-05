"use client";

import { HTMLInputTypeAttribute } from "react";

export default function Input({
  label,
  placeholder,
  className,
  type,
  name,
  onChange,
  isRequired,
}: {
  label: string;
  placeholder: string;
  className?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean;
}) {
  return (
    <div className={`flex flex-col sm:gap-2 gap-[6px]` + className}>
      <label
        className={`md:text-xxs  text-xxxs text-text-dark after:text-brand-color ${
          isRequired && "after:content-['*']"
        }`}
      >
        {label}
      </label>
      <input
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`text-gray-600 md:text-xs sm:text-xxs text-xxxs outline outline-1 outline-neutral-200 rounded-md bg-background-color sm:py-2 sm:px-3 py-[6px] px-2
              placeholder:text-gray-400 md:placeholder:text-xs sm:placeholder:text-xxs placeholder:text-xxxs appearance-none`}
      />
    </div>
  );
}
