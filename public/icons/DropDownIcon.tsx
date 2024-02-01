export default function DropDownIcon({
  className,
  width,
  height,
}: {
  className?: string;
  width?: string;
  height?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "15"}
      height={height ? height : "16"}
      viewBox="0 0 15 16"
      fill="none"
      className={className}
    >
      <path
        d="M11.875 5.8125L7.5 10.1875L3.125 5.8125"
        stroke="#424242"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
