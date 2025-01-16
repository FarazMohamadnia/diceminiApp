import * as React from "react";

const GoldBtn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100"
    height="50"
    fill="none"
    viewBox="0 0 101 50"
  >
    <g filter="url(#filter0_d_1807_15539)">
      <rect
        width="78.9"
        height="26.9"
        x="11.05"
        y="11.55"
        fill="url(#paint0_radial_1807_15539)"
        stroke="url(#paint1_linear_1807_15539)"
        strokeWidth="0.1"
        rx="13.45"
      ></rect>
      <rect
        width="73.028"
        height="21"
        x="13.986"
        y="14.5"
        fill="url(#paint2_linear_1807_15539)"
        stroke="url(#paint3_linear_1807_15539)"
        strokeWidth="1.5"
        rx="10.5"
      ></rect>
      <rect
        width="73.528"
        height="21.5"
        x="13.736"
        y="14.25"
        stroke="url(#paint4_linear_1807_15539)"
        rx="10.75"
      ></rect>
    </g>
    <defs>
      <linearGradient
        id="paint1_linear_1807_15539"
        x1="16.217"
        x2="80.812"
        y1="11.5"
        y2="39.328"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E6A121"></stop>
        <stop offset="1" stopColor="#E6A121" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="paint2_linear_1807_15539"
        x1="11.745"
        x2="98.298"
        y1="17.875"
        y2="45.309"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DA8207"></stop>
        <stop offset="0.093" stopColor="#DD9318"></stop>
        <stop offset="0.23" stopColor="#FFCB3C"></stop>
        <stop offset="0.679" stopColor="#FFCB3C"></stop>
        <stop offset="0.799" stopColor="#E39C1E"></stop>
        <stop offset="0.836" stopColor="#FBC63A"></stop>
      </linearGradient>
      <linearGradient
        id="paint3_linear_1807_15539"
        x1="50.5"
        x2="50.5"
        y1="13.75"
        y2="36.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F2D56B" stopOpacity="0.59"></stop>
        <stop offset="0.552" stopColor="#F7C746" stopOpacity="0.706"></stop>
        <stop offset="1" stopColor="#FBBC28" stopOpacity="0.8"></stop>
      </linearGradient>
      <linearGradient
        id="paint4_linear_1807_15539"
        x1="50.5"
        x2="50.5"
        y1="13.75"
        y2="36.25"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.089" stopColor="#FDC83A"></stop>
        <stop offset="0.253" stopColor="#FDECBA"></stop>
        <stop offset="0.995" stopColor="#F1B42D"></stop>
      </linearGradient>
      <radialGradient
        id="paint0_radial_1807_15539"
        cx="0"
        cy="0"
        r="1"
        gradientTransform="matrix(0 13.5 -47.9617 0 50.5 25)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0.711" stopColor="#D27D08"></stop>
        <stop offset="1" stopColor="#FFCB3C" stopOpacity="0.85"></stop>
      </radialGradient>
      <filter
        id="filter0_d_1807_15539"
        width="100.2"
        height="48.2"
        x="0.4"
        y="0.9"
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
        <feGaussianBlur stdDeviation="5.3"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.811765 0 0 0 0 0.376471 0 0 0 1 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_1807_15539"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1807_15539"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default GoldBtn;
