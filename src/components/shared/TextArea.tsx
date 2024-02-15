export default function TextArea({
  label,
  placeholder,
  className,
  name,
  onChange,
  isRequired,
}: {
  label: string;
  placeholder: string;
  className?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isRequired?: boolean;
}) {
  return (
    <div className={`flex flex-col sm:gap-2 gap-[6px] ` + className}>
      <label
        className={`text-xxs text-text-dark after:text-brand-color ${
          isRequired && "after:content-['*']"
        }`}
      >
        {label}
      </label>
      <textarea
        onChange={onChange}
        name={name}
        className="w-full h-[100px] resize-none text-gray-600 md:text-xs sm:text-xxs text-xxxs outline outline-1 outline-neutral-200 rounded-md bg-white sm:px-5 px-4 sm:py-3 py-2
              placeholder:text-gray-400 md:placeholder:text-xs sm:placeholder:text-xxs placeholder:text-xxxs"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
