import * as React from "react";

const GreenShadow = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="73"
    height="17"
    fill="none"
    viewBox="0 0 73 17"
  >
    <g filter="url(#filter0_d_292_34600)">
      <path
        fill="#1AE5A1"
        d="M7 6c9.353 1.98 19.377 3 29.5 3S56.647 7.98 66 6z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d_292_34600"
        width="71.327"
        height="15.327"
        x="0.837"
        y="0.837"
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
        <feGaussianBlur stdDeviation="3.082"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.792157 0 0 0 0 0.992157 0 0 0 0 0.482353 0 0 0 1 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_292_34600"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_292_34600"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default GreenShadow;
