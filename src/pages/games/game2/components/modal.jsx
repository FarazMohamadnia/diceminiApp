import { useEffect, useState } from "react";

export default function Modal({ color, title, amount }) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => setIsVisible(true));
    }, []);

    return (
        <div
            style={{
                borderColor: color,
                boxShadow: `0px 0px 4px 1px ${color}`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "scale(1)" : "scale(0.8)",
                transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
            }}
            className="w-[165px] py-1 h-[60px] bg-white/5 rounded-[10px] border backdrop-blur-[24.40px] overflow-hidden mx-auto mt-9"
        >
            <p
                style={{ WebkitTextStrokeColor: color }}
                className="dicegame2-custom-text mt-1"
            >
                {title}
            </p>
            <p className="text-center text-white text-xs font-bold mt-1">
                + {amount && amount.toFixed(4)} DTS
            </p>
        </div>
    );
}
