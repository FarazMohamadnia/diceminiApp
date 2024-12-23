import * as React from "react";

const ProfileShadow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="65"
    height="13"
    fill="none"
    viewBox="0 0 65 13"
    {...props}
  >
    <g id="Ellipse 15" filter="url(#filter0_d_423_36434)">
      <path
        fill="#1AE5A1"
        d="M5.018 3.555c8.79 2.2 18.21 3.333 27.724 3.333s18.934-1.133 27.724-3.333z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d_423_36434"
        width="64.048"
        height="11.933"
        x="0.718"
        y="0.255"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="1"></feOffset>
        <feGaussianBlur stdDeviation="2.15"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.101961 0 0 0 0 0.898039 0 0 0 0 0.631373 0 0 0 1 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_423_36434"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_423_36434"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default ProfileShadow;
