export default function TextArea({
  label,
  placeholder,
  className,
  name,
  onChange,
}: {
  label: string;
  placeholder: string;
  className?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div className={`flex flex-col gap-2 ` + className}>
      <label className="text-xxs text-text-dark">{label}</label>
      <textarea
        onChange={onChange}
        name={name}
        className="w-full h-[100px] resize-none text-gray-600 text-xs outline outline-1 outline-neutral-200 rounded-md bg-background-color py-2 px-3
              placeholder:text-gray-400 placeholder:text-xs"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}
