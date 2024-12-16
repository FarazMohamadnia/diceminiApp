import * as React from "react";

const CalenderIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="17"
    fill="none"
    viewBox="0 0 16 17"
    {...props}
  >
    <path
      stroke={props.color ? props.color : "#1AE5A1"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M5.333 2.142v1.954M10.667 2.142v1.954M2.333 6.76h11.334M14 6.376v5.536c0 1.954-1 3.257-3.333 3.257H5.333C3 15.169 2 13.866 2 11.912V6.376c0-1.954 1-3.257 3.333-3.257h5.334C13 3.119 14 4.422 14 6.376"
    ></path>
    <path
      stroke={props.color ? props.color : "#1AE5A1"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10.463 9.763h.006M10.463 11.717h.006M7.997 9.763h.006M7.997 11.717h.006M5.53 9.763h.005M5.53 11.717h.005"
    ></path>
  </svg>
);

export default CalenderIcon;
