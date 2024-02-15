export default function CallIcon({
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
      width={width ? width : "18"}
      height={height ? height : "18"}
      viewBox="0 0 18 18"
      fill="none"
      className={className}
    >
      <path
        opacity="0.4"
        d="M10.7656 1.875C13.5414 2.18325 15.7344 4.37325 16.0456 7.149"
        stroke="#F7F8FA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        opacity="0.4"
        d="M10.7656 4.53223C12.0939 4.79023 13.1319 5.82898 13.3906 7.15723"
        stroke="#F7F8FA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.27364 9.35429C11.2654 12.3453 11.9441 8.88504 13.8489 10.7886C15.6854 12.6246 16.7417 12.9924 14.4141 15.3185C14.1227 15.5528 12.2709 18.3707 5.76335 11.8647C-0.745054 5.358 2.07117 3.50433 2.30546 3.21296C4.63782 0.880384 5.00012 1.94204 6.83654 3.778C8.7406 5.68237 5.2819 6.36331 8.27364 9.35429Z"
        stroke="#F7F8FA"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
