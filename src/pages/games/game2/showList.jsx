
const ShowList = ()=> (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="72"
        fill="none"
        viewBox="0 0 32 72"
    >
        <g filter="url(#filter0_bd_1825_30092)" shapeRendering="crispEdges">
            <path
                fill="#fff"
                fillOpacity="0.3"
                d="M-21.303 61H4c9.389 0 17-7.611 17-17V28c0-9.389-7.611-17-17-17h-25.96a17 17 0 0 0-12.488 5.466l-6.563 7.105a17 17 0 0 0-.71 22.248l7.218 8.894A17 17 0 0 0-21.303 61"
            ></path>
            <path
                stroke="#FFCF60"
                d="M-21.303 61H4c9.389 0 17-7.611 17-17V28c0-9.389-7.611-17-17-17h-25.96a17 17 0 0 0-12.488 5.466l-6.563 7.105a17 17 0 0 0-.71 22.248l7.218 8.894A17 17 0 0 0-21.303 61Z"
            ></path>
        </g>
        <defs>
            <filter
                id="filter0_bd_1825_30092"
                width="174.922"
                height="158.4"
                x="-99.722"
                y="-43.2"
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
            >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feGaussianBlur
                    in="BackgroundImageFix"
                    stdDeviation="26.85"
                ></feGaussianBlur>
                <feComposite
                    in2="SourceAlpha"
                    operator="in"
                    result="effect1_backgroundBlur_1825_30092"
                ></feComposite>
                <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="4.8"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix values="0 0 0 0 1 0 0 0 0 0.882353 0 0 0 0 0.454902 0 0 0 1 0"></feColorMatrix>
                <feBlend
                    in2="effect1_backgroundBlur_1825_30092"
                    result="effect2_dropShadow_1825_30092"
                ></feBlend>
                <feBlend
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1825_30092"
                    result="shape"
                ></feBlend>
            </filter>
        </defs>
    </svg>
);

export default ShowList;
