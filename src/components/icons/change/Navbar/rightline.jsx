import * as React from "react";

const RightLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="135"
    height="36"
    fill="none"
    viewBox="0 0 134 36"
  >
    <g filter="url(#filter0_d_1216_3072)">
      <path
        stroke="#1AE5A1"
        strokeWidth="0.5"
        d="M110.147 5H10a5 5 0 0 0-5 5v16a5 5 0 0 0 5 5h113.377c4.231 0 6.549-4.926 3.854-8.186L114 6.814A5 5 0 0 0 110.147 5Z"
        shapeRendering="crispEdges"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d_1216_3072"
        width="131.887"
        height="34.5"
        x="0.75"
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
          result="effect1_dropShadow_1216_3072"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1216_3072"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default RightLine;
