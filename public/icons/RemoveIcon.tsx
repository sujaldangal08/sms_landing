export default function RemoveIcon({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "17"}
      height={height ? height : "2"}
      viewBox="0 0 17 2"
      fill="none"
    >
      <path
        d="M1 1H16"
        stroke="#424242"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
}
