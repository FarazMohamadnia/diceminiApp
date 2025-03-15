import * as React from "react";

const ProfileSelectIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="27"
    height="27"
    fill="none"
    viewBox="0 0 27 27"
    className="pb-1"
    {...props}
  >
    <rect width="25" height="25" x="1" y="1" fill="#1AE5A1" rx="12.5"></rect>
    <rect
      width="25"
      height="25"
      x="1"
      y="1"
      stroke="#1AE5A1"
      strokeWidth="2"
      rx="12.5"
    ></rect>
    <path
      fill="#1AE5A1"
      d="M8 19c2.85-2.686 8.12-2.813 11 0zm8.55-8.25c0 1.519-1.37 2.75-3.06 2.75s-3.06-1.231-3.06-2.75S11.8 8 13.49 8s3.06 1.231 3.06 2.75"
    ></path>
    <path
      stroke="#6A6A6A"
      strokeLinecap="round"
      strokeWidth="1.982"
      d="M8 19c2.85-2.686 8.12-2.813 11 0m-2.45-8.25c0 1.519-1.37 2.75-3.06 2.75s-3.06-1.231-3.06-2.75S11.8 8 13.49 8s3.06 1.231 3.06 2.75Z"
    ></path>
  </svg>
);

export default ProfileSelectIcon;
