export default function Button({
  title,
  className,
  onClick,
  vairant,
}: {
  title: string;
  className?: string | null;
  onClick?: VoidFunction;
  vairant?: string | "outline";
}) {
  if (vairant == "outline") {
    return (
      <button
        className={`bg-transparent text-black border-stone-950 border-[2px] text-xxs px-6 py-2 rounded-md font-regular ${className}`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  } else {
    return (
      <button
        className={`${
          "bg-brand-color text-white text-xxs px-6 py-2 rounded-md shadow font-regular " +
          className
        }`}
        onClick={onClick}
      >
        {title}
      </button>
    );
  }
}
