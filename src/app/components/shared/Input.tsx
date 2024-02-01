"use client";

import { HTMLInputTypeAttribute } from "react";

export default function Input({
  label,
  placeholder,
  className,
  type,
  name,
  onChange,
}: {
  label: string;
  placeholder: string;
  className?: string;
  type: HTMLInputTypeAttribute;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={`flex flex-col gap-2 ` + className}>
      <label className="text-xxs text-text-dark">{label}</label>
      <input
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`text-gray-600 text-xs outline outline-1 outline-neutral-200 rounded-md bg-background-color py-2 px-3
              placeholder:text-gray-400 placeholder:text-xs appearance-none`}
      />
    </div>
  );
}
