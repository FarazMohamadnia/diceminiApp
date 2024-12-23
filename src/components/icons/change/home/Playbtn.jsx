import * as React from "react";

const PlayButton = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    viewBox="0 0 50 50"
  >
    <g filter="url(#filter0_b_1138_1879)">
      <rect
        width="48"
        height="48"
        x="1"
        y="1"
        fill="#FAFAFA"
        fillOpacity="0.26"
        rx="24"
      ></rect>
      <rect
        width="49"
        height="49"
        x="0.5"
        y="0.5"
        stroke="#1AE5A1"
        rx="24.5"
      ></rect>
      <path
        stroke="#1AE5A1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M17 25v-3.56c0-4.42 3.13-6.23 6.96-4.02l3.09 1.78 3.09 1.78c3.83 2.21 3.83 5.83 0 8.04l-3.09 1.78-3.09 1.78c-3.83 2.21-6.96.4-6.96-4.02z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_b_1138_1879"
        width="70.2"
        height="70.2"
        x="-10.1"
        y="-10.1"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feGaussianBlur
          in="BackgroundImageFix"
          stdDeviation="5.05"
        ></feGaussianBlur>
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1138_1879"
        ></feComposite>
        <feBlend
          in="SourceGraphic"
          in2="effect1_backgroundBlur_1138_1879"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default PlayButton;
