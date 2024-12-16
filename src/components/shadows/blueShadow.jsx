import * as React from "react";

const BlueShadow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="187"
    height="27"
    fill="none"
    viewBox="0 0 187 27"
    {...props}
  >
    <g filter="url(#filter0_d_295_48664)">
      <path
        fill="#3BFFFF"
        d="M9.432 8c26.727 6.17 55.373 9.345 84.301 9.345S151.307 14.17 178.034 8z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d_295_48664"
        width="185.802"
        height="26.545"
        x="0.832"
        y="0.4"
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
        <feGaussianBlur stdDeviation="4.3"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_295_48664"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_295_48664"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default BlueShadow;
