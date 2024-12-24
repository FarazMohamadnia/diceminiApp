import * as React from "react";

const LeftLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="135"
    height="36"
    fill="none"
    viewBox="0 0 135 36"
  >
    <g filter="url(#filter0_d_1216_3076)">
      <path
        stroke="#1AE5A1"
        strokeWidth="0.5"
        d="M23.164 5H125a5 5 0 0 1 5 5v16a5 5 0 0 1-5 5H9.728c-4.248 0-6.561-4.962-3.83-8.215l13.437-16A5 5 0 0 1 23.164 5Z"
        shapeRendering="crispEdges"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d_1216_3076"
        width="133.782"
        height="34.5"
        x="0.468"
        y="0.75"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.101961 0 0 0 0 0.898039 0 0 0 0 0.631373 0 0 0 1 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1216_3076"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1216_3076"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default LeftLine;
