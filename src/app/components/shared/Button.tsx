export default function Button({
  title,
  className,
  onClick,
}: {
  title: string;
  className?: string | null;
  onClick?: VoidFunction;
}) {
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
