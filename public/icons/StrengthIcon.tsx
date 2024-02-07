export default function StrengthIcon({
  width,
  height,
  color,
}: {
  width?: string;
  height?: string;
  color?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width ? width : "61"}
      height={height ? height : "60"}
      viewBox="0 0 61 60"
      fill="none"
    >
      <path
        d="M30.4816 4.78335C30.1638 4.78832 29.8609 4.91919 29.6394 5.14724C29.418 5.3753 29.296 5.6819 29.3004 5.99976V13.1998C29.2981 13.3588 29.3275 13.5166 29.3868 13.6642C29.4461 13.8118 29.5341 13.9461 29.6458 14.0593C29.7575 14.1726 29.8905 14.2625 30.0372 14.3239C30.1839 14.3852 30.3414 14.4168 30.5004 14.4168C30.6594 14.4168 30.8169 14.3852 30.9636 14.3239C31.1103 14.2625 31.2433 14.1726 31.355 14.0593C31.4666 13.9461 31.5547 13.8118 31.614 13.6642C31.6733 13.5166 31.7026 13.3588 31.7004 13.1998V5.99976C31.7026 5.83921 31.6726 5.67985 31.6121 5.53112C31.5516 5.3824 31.4618 5.24732 31.3482 5.13389C31.2345 5.02047 31.0993 4.931 30.9504 4.87079C30.8016 4.81057 30.6422 4.78084 30.4816 4.78335ZM19.7004 5.98335C19.5024 5.98244 19.3072 6.03056 19.1322 6.12341C18.9573 6.21626 18.8081 6.35095 18.6979 6.51548C18.5876 6.68001 18.5198 6.86926 18.5005 7.06635C18.4812 7.26345 18.5109 7.46226 18.5871 7.64507L20.9871 13.6451C21.0408 13.7978 21.1248 13.9381 21.2342 14.0575C21.3435 14.1769 21.4758 14.2729 21.6233 14.3398C21.7707 14.4067 21.9301 14.4431 22.0919 14.4468C22.2538 14.4505 22.4147 14.4214 22.565 14.3613C22.7153 14.3012 22.8519 14.2113 22.9666 14.097C23.0812 13.9827 23.1716 13.8464 23.2322 13.6963C23.2928 13.5461 23.3224 13.3853 23.3192 13.2235C23.316 13.0616 23.2801 12.9021 23.2137 12.7544L20.8137 6.75444C20.7273 6.52878 20.5748 6.33445 20.3762 6.19687C20.1776 6.05929 19.942 5.98487 19.7004 5.98335ZM41.2652 5.98569C41.0299 5.99395 40.8023 6.07123 40.6106 6.20792C40.4189 6.34462 40.2716 6.53468 40.1871 6.75444L37.7871 12.7544C37.7207 12.9021 37.6848 13.0616 37.6816 13.2235C37.6784 13.3853 37.708 13.5461 37.7686 13.6963C37.8292 13.8464 37.9196 13.9827 38.0342 14.097C38.1489 14.2113 38.2855 14.3012 38.4358 14.3613C38.5861 14.4214 38.747 14.4505 38.9088 14.4468C39.0707 14.4431 39.2301 14.4067 39.3775 14.3398C39.5249 14.2729 39.6573 14.1769 39.7666 14.0575C39.8759 13.9381 39.96 13.7978 40.0137 13.6451L42.4137 7.64507C42.4906 7.4596 42.5198 7.25778 42.4986 7.05811C42.4773 6.85844 42.4063 6.66729 42.292 6.50217C42.1777 6.33706 42.0239 6.20326 41.8445 6.11302C41.6651 6.02279 41.4659 5.97901 41.2652 5.98569ZM11.3004 13.1998C9.32643 13.1998 7.70039 14.8258 7.70039 16.7998V18.499C7.28997 18.3345 6.96641 17.9998 6.50039 17.9998C4.52643 17.9998 2.90039 19.6258 2.90039 21.5998V35.9998C2.90039 37.9737 4.52643 39.5998 6.50039 39.5998C6.96641 39.5998 7.28997 39.265 7.70039 39.1005V40.7998C7.70039 42.7737 9.32643 44.3998 11.3004 44.3998C13.2744 44.3998 14.9004 42.7737 14.9004 40.7998V32.3998H17.3004V33.2599C17.3004 34.9431 17.9194 36.7925 19.0816 38.4044C20.0426 39.7373 21.5012 40.7747 23.2301 41.388L22.1051 53.8919C22.0909 54.0489 22.1078 54.2072 22.1548 54.3576C22.2017 54.5081 22.2779 54.6478 22.3789 54.7688C22.4799 54.8899 22.6037 54.9898 22.7433 55.063C22.8829 55.1361 23.0356 55.1811 23.1926 55.1952C23.3496 55.2094 23.5078 55.1925 23.6582 55.1455C23.8087 55.0985 23.9484 55.0223 24.0694 54.9213C24.1904 54.8203 24.2904 54.6965 24.3635 54.5568C24.4366 54.4172 24.4816 54.2646 24.4957 54.1076L25.6957 40.7576C25.7226 40.4613 25.6384 40.1655 25.4595 39.9278C25.2807 39.69 25.0199 39.5272 24.7277 39.4708C23.1418 39.1639 21.9005 38.2122 21.027 37.0005C20.1534 35.7889 19.7004 34.3175 19.7004 33.2599V32.3998H23.3004V25.1998V22.7998C23.3004 22.1217 23.8224 21.5998 24.5004 21.5998C25.1784 21.5998 25.7004 22.1217 25.7004 22.7998C25.7049 23.1151 25.8332 23.416 26.0578 23.6374C26.2824 23.8588 26.585 23.9829 26.9004 23.9829C27.2157 23.9829 27.5184 23.8588 27.743 23.6374C27.9675 23.416 28.0959 23.1151 28.1004 22.7998V21.5998C28.1004 20.9217 28.6224 20.3998 29.3004 20.3998C29.9784 20.3998 30.5004 20.9217 30.5004 21.5998V22.7998C30.5049 23.1151 30.6332 23.416 30.8578 23.6374C31.0824 23.8588 31.385 23.9829 31.7004 23.9829C32.0157 23.9829 32.3184 23.8588 32.543 23.6374C32.7675 23.416 32.8959 23.1151 32.9004 22.7998C32.9004 22.1217 33.4224 21.5998 34.1004 21.5998C34.7784 21.5998 35.3004 22.1217 35.3004 22.7998V23.9998C35.3049 24.3151 35.4332 24.616 35.6578 24.8374C35.8824 25.0588 36.185 25.1829 36.5004 25.1829C36.8157 25.1829 37.1184 25.0588 37.343 24.8374C37.5675 24.616 37.6959 24.3151 37.7004 23.9998C37.7004 23.3217 38.2224 22.7998 38.9004 22.7998C39.5784 22.7998 40.1004 23.3217 40.1004 23.9998V28.7998V29.9998V35.1466C40.1004 37.0424 38.9236 38.6344 37.2645 39.2833C37.0226 39.3777 36.8178 39.5479 36.6809 39.7685C36.544 39.9891 36.4823 40.2482 36.5051 40.5068L37.7051 54.1052C37.7165 54.2641 37.7593 54.4191 37.8312 54.5612C37.9031 54.7033 38.0026 54.8297 38.1238 54.933C38.2451 55.0363 38.3856 55.1144 38.5374 55.1628C38.6891 55.2112 38.849 55.2289 39.0076 55.2149C39.1663 55.2009 39.3205 55.1555 39.4615 55.0813C39.6024 55.007 39.7271 54.9055 39.8284 54.7826C39.9296 54.6597 40.0054 54.5178 40.0513 54.3653C40.0972 54.2128 40.1123 54.0527 40.0957 53.8943L38.9473 40.8794C40.9864 39.6927 42.5004 37.6672 42.5004 35.1466V32.3998H46.1004V40.7998C46.1004 42.7737 47.7264 44.3998 49.7004 44.3998C51.6744 44.3998 53.3004 42.7737 53.3004 40.7998V39.1005C53.7108 39.265 54.0344 39.5998 54.5004 39.5998C56.4744 39.5998 58.1004 37.9737 58.1004 35.9998V21.5998C58.1004 19.6258 56.4744 17.9998 54.5004 17.9998C54.0344 17.9998 53.7108 18.3345 53.3004 18.499V16.7998C53.3004 14.8258 51.6744 13.1998 49.7004 13.1998C47.7264 13.1998 46.1004 14.8258 46.1004 16.7998V25.1998H42.5004V23.9998C42.5004 22.0258 40.8744 20.3998 38.9004 20.3998C38.1719 20.3998 37.5949 20.8038 37.0254 21.1826C36.408 20.0762 35.446 19.1998 34.1004 19.1998C33.3719 19.1998 32.7949 19.6038 32.2254 19.9826C31.608 18.8762 30.646 17.9998 29.3004 17.9998C27.9548 17.9998 26.9928 18.8762 26.3754 19.9826C25.8059 19.6038 25.2289 19.1998 24.5004 19.1998C22.5264 19.1998 20.9004 20.8258 20.9004 22.7998V25.1998H14.9004V16.7998C14.9004 14.8258 13.2744 13.1998 11.3004 13.1998ZM11.3004 15.5998C11.9784 15.5998 12.5004 16.1217 12.5004 16.7998V25.1998V32.3998V40.7998C12.5004 41.4778 11.9784 41.9998 11.3004 41.9998C10.6224 41.9998 10.1004 41.4778 10.1004 40.7998V35.9998V21.5998V16.7998C10.1004 16.1217 10.6224 15.5998 11.3004 15.5998ZM49.7004 15.5998C50.3784 15.5998 50.9004 16.1217 50.9004 16.7998V21.5998V35.9998V40.7998C50.9004 41.4778 50.3784 41.9998 49.7004 41.9998C49.0224 41.9998 48.5004 41.4778 48.5004 40.7998V16.7998C48.5004 16.1217 49.0224 15.5998 49.7004 15.5998ZM6.50039 20.3998C7.17843 20.3998 7.70039 20.9217 7.70039 21.5998V35.9998C7.70039 36.6778 7.17843 37.1998 6.50039 37.1998C5.82235 37.1998 5.30039 36.6778 5.30039 35.9998V21.5998C5.30039 20.9217 5.82235 20.3998 6.50039 20.3998ZM54.5004 20.3998C55.1784 20.3998 55.7004 20.9217 55.7004 21.5998V35.9998C55.7004 36.6778 55.1784 37.1998 54.5004 37.1998C53.8224 37.1998 53.3004 36.6778 53.3004 35.9998V21.5998C53.3004 20.9217 53.8224 20.3998 54.5004 20.3998ZM14.9004 27.5998H20.9004V29.9998H14.9004V27.5998ZM42.5004 27.5998H46.1004V29.9998H42.5004V28.7998V27.5998Z"
        fill={color ? color : "#BB271A"}
      />
    </svg>
  );
}