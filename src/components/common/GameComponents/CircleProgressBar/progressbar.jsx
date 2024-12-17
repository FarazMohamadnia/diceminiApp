import React from "react";
import DiceIcon from '../../../../asset/img/GameImg/WhiteDice.png'
const CircularProgressBar = ({
  percentage = 60, // درصد پیشرفت
  radius = 45, // شعاع دایره
  strokeWidth = 8, // ضخامت دایره
  totalDegrees = 240, // مجموع انحنای دایره
  color = "#1AE5A1", // رنگ پیشرفت
  bgColor = "#3A3A3A", // رنگ پس‌زمینه
}) => {
  const normalizedPercentage = Math.min(Math.max(percentage, 0), 100);

  // محاسبه محیط دایره
  const circumference = 2 * Math.PI * radius;

  // محاسبه مقدار پیشرفت به صورت درصدی در محدوده ۲۸۰ درجه
  const progressOffset =
    circumference - (normalizedPercentage / 100) * (circumference * (totalDegrees / 360));

  // محدود کردن ظاهر دایره پس‌زمینه به ۲۸۰ درجه
  const backgroundOffset = circumference * (1 - totalDegrees / 360);

  // چرخش دایره برای شروع از زاویه 140 درجه (برای تراز شدن ظاهر)
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
        {/* دایره پس‌زمینه */}
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
        {/* دایره پیشرفت */}
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
      {/* متن در مرکز */}
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
        <img src={DiceIcon} alt="" />
      </div>
    </div>
  );
};

export default CircularProgressBar;
