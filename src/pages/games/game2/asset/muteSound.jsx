import * as React from "react";

const muteSound = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="38"
        height="38"
        fill="none"
        viewBox="0 0 38 38"
    >
        <g filter="url(#filter0_bd_1823_15646)" shapeRendering="crispEdges">
            <rect
                width="26"
                height="26"
                x="6"
                y="6"
                fill="#fff"
                fillOpacity="0.14"
                rx="9"
            ></rect>
            <rect
                width="25.5"
                height="25.5"
                x="6.25"
                y="6.25"
                stroke="#FFCF60"
                strokeWidth="0.5"
                rx="8.75"
            ></rect>
        </g>
        <path
            stroke="#fff"
            d="M13.824 17.717v1.908q0 1.431 1.431 1.432h.683a1 1 0 0 1 .505.143l1.393.873c1.203.753 2.19.205 2.19-1.212v-4.38c0-1.421-.987-1.965-2.19-1.212l-1.393.874a1 1 0 0 1-.505.143h-.683q-1.43 0-1.43 1.431Z"
        ></path>
        <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="m23.366 19.606-1.89-1.89M23.347 17.736l-1.89 1.89"
        ></path>
        <defs>
            <filter
                id="filter0_bd_1823_15646"
                width="123.6"
                height="123.6"
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
                    result="effect1_backgroundBlur_1823_15646"
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
                    in2="effect1_backgroundBlur_1823_15646"
                    result="effect2_dropShadow_1823_15646"
                ></feBlend>
                <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1823_15646"
                    result="shape"
                ></feBlend>
            </filter>
        </defs>
    </svg>
);

export default muteSound;
