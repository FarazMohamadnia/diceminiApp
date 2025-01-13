import * as React from "react";

const RollBtn = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    fill="none"
    viewBox="0 0 50 50"
    style={{borderRadius : '50%'}}
    {...props}
  >
    <path fill="#767676" d="M0 0h50v50H0z"></path>
    <g id="Group 1000002202">
      <g id="ARROW 1" clipPath="url(#clip0_71_292)">
        <path
          id="Vector"
          fill="#fff"
          fillOpacity="0.19"
          d="M50 25C50 11.193 38.807 0 25 0S0 11.193 0 25s11.193 25 25 25 25-11.193 25-25"
        ></path>
        <path
          id="Vector_2"
          stroke="#fff"
          strokeOpacity="0.05"
          d="M49.5 25C49.5 11.469 38.531.5 25 .5S.5 11.469.5 25 11.469 49.5 25 49.5 49.5 38.531 49.5 25Z"
        ></path>
        <path
          id="Vector_3"
          stroke="#fff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M39.167 25c0 7.82-6.347 14.167-14.167 14.167S12.406 31.29 12.406 31.29m0 0h6.403m-6.403 0v7.083M10.834 25c0-7.82 6.29-14.167 14.166-14.167 9.45 0 14.167 7.877 14.167 7.877m0 0v-7.083m0 7.083h-6.29"
        ></path>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_71_292">
        <path fill="#fff" d="M0 0h50v50H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default RollBtn;
