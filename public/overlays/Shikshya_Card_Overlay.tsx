export default function Shikshya_Card_Overlay({
  width,
  height,
  className,
  color,
}: {
  width?: string;
  height?: string;
  className?: string;
  color: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "84"}
      height={height ? height : "136"}
      viewBox="0 0 84 136"
      fill="none"
      className={className}
      opacity={"0.15"}
    >
      <mask
        id="mask0_1775_13029"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="33"
        y="0"
        width="63"
        height="85"
      >
        <path
          d="M33.1914 11.8428L74.4774 0.000154602L95.2222 72.321L53.9362 84.1636L33.1914 11.8428Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1775_13029)">
        <path
          d="M71.0816 0.975647C73.4692 0.290782 75.4373 1.76658 75.4588 4.2542L75.9931 75.5972C76.0113 78.0878 74.9269 78.4129 73.5838 76.3184L34.735 15.9095C33.3892 13.8198 34.239 11.5437 36.6266 10.8589L49.041 7.29788C51.4285 6.61301 55.3325 5.4932 57.7201 4.80833L71.0816 0.975647Z"
          fill={color}
        />
      </g>
      <path
        d="M33.6749 31.3671C34.9907 29.8902 36.9405 30.0432 38.0129 31.7117L68.7076 79.5633C69.7782 81.2323 69.1835 81.9145 67.3861 81.0759L15.57 56.9497C13.7737 56.1148 13.3818 54.217 14.6944 52.7431L21.5347 45.0391C22.85 43.5604 25.0013 41.1357 26.3142 39.6557L33.6749 31.3671Z"
        fill={color}
      />
      <path
        d="M23.7233 70.5506C23.939 69.0362 25.2561 68.3053 26.6588 68.9221L66.7441 86.6126C68.1444 87.2281 68.0522 87.9207 66.5433 88.1508L22.969 94.7575C21.4596 94.9859 20.4005 93.9374 20.6143 92.4236L21.7337 84.541C21.9504 83.0303 22.3017 80.5481 22.5174 79.0338L23.7233 70.5506Z"
        fill={color}
      />
      <path
        d="M33.051 100.45C32.5492 99.3586 33.1099 98.313 34.2912 98.1226L68.2411 92.6616C69.4224 92.4712 69.6626 92.966 68.7601 93.7646L42.8614 116.754C41.9645 117.551 40.8226 117.305 40.3163 116.218L37.6995 110.537C37.1964 109.447 36.3726 107.659 35.8684 106.566L33.051 100.45Z"
        fill={color}
      />
      <path
        d="M52.0588 116.383C51.2344 115.873 51.1425 114.916 51.8528 114.259L72.2468 95.3766C72.9603 94.7165 73.338 94.9493 73.0937 95.888L65.9253 122.976C65.678 123.912 64.7976 124.263 63.9733 123.753L59.6792 121.092C58.8572 120.584 57.504 119.748 56.6815 119.238L52.0588 116.383Z"
        fill={color}
      />
      <mask
        id="mask1_1775_13029"
        style={{ maskType: "luminance" }}
        maskUnits="userSpaceOnUse"
        x="66"
        y="96"
        width="21"
        height="29"
      >
        <path
          d="M66.3555 100.63L79.6429 96.8185L86.4006 120.377L73.1132 124.189L66.3555 100.63Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_1775_13029)">
        <path
          d="M73.6525 121.442C72.8785 121.5 72.3667 120.918 72.5238 120.151L76.9675 98.1678C77.1246 97.4005 77.4768 97.3696 77.7589 98.1012L85.8097 119.209C86.0881 119.941 85.6805 120.584 84.9042 120.64L80.8481 120.929C80.0694 120.984 78.7964 121.078 78.0195 121.132L73.6525 121.442Z"
          fill={color}
        />
      </g>
      <path
        d="M89.3227 115.957C88.7504 116.326 88.1176 116.092 87.9217 115.444L82.1839 96.777C81.9808 96.125 82.2408 95.9541 82.758 96.3936L97.6784 109.179C98.1943 109.621 98.1474 110.282 97.5769 110.65L94.6049 112.564C94.0315 112.929 93.0947 113.531 92.5266 113.901L89.3227 115.957Z"
        fill={color}
      />
      <path
        d="M98.2571 99.7543C98.1191 100.273 97.6309 100.474 97.1705 100.204L83.9043 92.4378C83.441 92.1654 83.5017 91.9293 84.036 91.9105L99.4812 91.3482C100.015 91.3293 100.343 91.7369 100.209 92.2549L99.5051 94.9565C99.3689 95.4751 99.151 96.324 99.0136 96.845L98.2571 99.7543Z"
        fill={color}
      />
      <path
        d="M95.2624 83.7102C95.4414 84.0822 95.2571 84.44 94.8566 84.5128L83.3655 86.5711C82.9632 86.6444 82.8801 86.4736 83.1786 86.1994L91.8361 78.235C92.1365 77.9602 92.5294 78.0361 92.7036 78.4055L93.6242 80.3141C93.8021 80.6824 94.0951 81.2845 94.273 81.6528L95.2624 83.7102Z"
        fill={color}
      />
      <path
        d="M88.9902 74.8711C89.2262 75.1063 89.1844 75.4293 88.8961 75.5922L80.6566 80.2648C80.371 80.423 80.2638 80.3153 80.4159 80.0269L84.9021 71.5999C85.0573 71.3086 85.3791 71.2624 85.6111 71.4908L86.8306 72.7139C87.0619 72.9465 87.4466 73.3297 87.6834 73.5607L88.9902 74.8711Z"
        fill={color}
      />
    </svg>
  );
}