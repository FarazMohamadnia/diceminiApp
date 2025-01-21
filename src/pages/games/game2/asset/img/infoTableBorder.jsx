import * as React from "react";

const infoTableBorder = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="244"
        height="282"
        fill="none"
        viewBox="0 0 244 282"
    >
        <g filter="url(#filter0_bd_1823_15630)" shapeRendering="crispEdges">
            <rect
                width="236"
                height="500"
                x="4"
                y="4"
                fill="#fff"
                fillOpacity="0.12"
                rx="10"
            ></rect>
            <rect
                width="235"
                height="273"
                x="4.5"
                y="4.5"
                stroke="#FFCF60"
                rx="9.5"
            ></rect>
        </g>
        <defs>
            <filter
                id="filter0_bd_1823_15630"
                width="304"
                height="342"
                x="-30"
                y="-30"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="17"
                ></feGaussianBlur>
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1823_15630"
                ></feComposite>
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="2"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.882353 0 0 0 0 0.454902 0 0 0 1 0"></feColorMatrix>
                <feBlend
                    in2="effect1_backgroundBlur_1823_15630"
                    result="effect2_dropShadow_1823_15630"
                ></feBlend>
                <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1823_15630"
                    result="shape"
                ></feBlend>
            </filter>
        </defs>
    </svg>
);

export default infoTableBorder;
