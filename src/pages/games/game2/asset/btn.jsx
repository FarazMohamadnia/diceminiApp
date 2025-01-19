import * as React from "react";

const BTN = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    viewBox="0 0 50 50"
  >
    <g id="Group 1000002177">
      <g
        id="Rectangle 588"
        filter="url(#filter0_bd_1823_15596)"
        shapeRendering="crispEdges"
      >
        <rect
          width="38"
          height="38"
          x="6"
          y="6"
          fill="#fff"
          fillOpacity="0.14"
          rx="9"
        ></rect>
        <rect
          width="37.5"
          height="37.5"
          x="6.25"
          y="6.25"
          stroke="#FFCF60"
          strokeWidth="0.5"
          rx="8.75"
        ></rect>
      </g>
    </g>
    <defs>
      <filter
        id="filter0_bd_1823_15596"
        width="135.6"
        height="135.6"
        x="-42.8"
        y="-42.8"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feGaussianBlur
          in="BackgroundImageFix"
          stdDeviation="24.4"
        ></feGaussianBlur>
        <feComposite
          in2="SourceAlpha"
          operator="in"
          result="effect1_backgroundBlur_1823_15596"
        ></feComposite>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset></feOffset>
        <feGaussianBlur stdDeviation="2.9"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.913725 0 0 0 0 0.666667 0 0 0 0 0.266667 0 0 0 1 0"></feColorMatrix>
        <feBlend
          in2="effect1_backgroundBlur_1823_15596"
          result="effect2_dropShadow_1823_15596"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect2_dropShadow_1823_15596"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default BTN;
