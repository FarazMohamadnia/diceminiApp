import React from "react";
import WhiteDice from "../../../icons/change/game/whiteDice";
const CircularProgressBar = ({
  percentage = 60, 
  radius = 45,
  strokeWidth = 8,
  totalDegrees = 240, 
  color = "#1AE5A1", 
  bgColor = "#3A3A3A",
}) => {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);

  const circumference = 2 * Math.PI * radius;

  const progressOffset =
    circumference - (normalizedPercentage / 100) * (circumference * (totalDegrees / 360));

  const backgroundOffset = circumference * (1 - totalDegrees / 360);

  const rotation = 90 + (360 - totalDegrees) / 2;

  return (
    <div style={{ position: "relative", width: radius * 2, height: radius * 2 }}>
      <svg
        width={radius * 2}
        height={radius * 2}
        style={{
          transform: `rotate(${rotation}deg)`,
          overflow: "visible",
        }}
      >
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke={bgColor}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={backgroundOffset}
          strokeLinecap="round"
        />
        <circle
          cx={radius}
          cy={radius}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#FFFFFF",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        <WhiteDice />
      </div>
    </div>
  );
};

export default CircularProgressBar;
