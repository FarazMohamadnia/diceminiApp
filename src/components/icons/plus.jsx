import * as React from "react";

const PlusIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      stroke={`${props.color ? props.color : "#1AE5A1"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M14 21V7"
    ></path>
    <path
      stroke={`${props.color ? props.color : "#1AE5A1"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M18.667 14H21M7 14h6.603"
    ></path>
    <path
      stroke={`${props.color ? props.color : "#1AE5A1"}`}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M14 21V7"
    ></path>
  </svg>
);

export default PlusIcon;
