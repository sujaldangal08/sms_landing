export default function AddIcon({
  width,
  height,
  className,
}: {
  width?: string;
  height?: string;
  className?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "17"}
      height={height ? height : "18"}
      viewBox="0 0 17 18"
      fill="none"
      className={className ? className : ""}
    >
      <path
        d="M8.5 1.5L8.5 16.5"
        stroke="#424242"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 9H16"
        stroke="#424242"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
