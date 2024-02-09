export default function EmailIcon({
  width,
  height,
}: {
  width?: string;
  height?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "41"}
      height={height ? height : "40"}
      viewBox="0 0 41 40"
      fill="none"
    >
      <g clipPath="url(#clip0_1745_57492)">
        <path
          d="M0.5 5.59961V34.3996H40.5V5.59961H0.5ZM2.1 7.19961H38.9V9.22461L20.5 23.7746L2.1 9.22461V7.19961ZM2.1 11.2746L20 25.4246C20.2938 25.659 20.7063 25.659 21 25.4246L38.9 11.2746V32.7996H2.1V11.2746Z"
          fill="#DF273A"
        />
      </g>
      <defs>
        <clipPath id="clip0_1745_57492">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0.5)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
