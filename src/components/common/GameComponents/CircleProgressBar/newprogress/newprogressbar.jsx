import React from "react";
import img from '../../../../../asset/img/NavbarImg/DTScoin.png'
import '../progressbar.css'
const ActiveDot = ({ size = 12, x, y }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        backgroundImage: `url(${img})`,
        backgroundSize : '135%',
        backgroundPosition : 'center',
        top: `${y}px`,
        left: `${x}px`,
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
};

const InactiveDot = ({ size = 12, x, y }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: "50%",
        top: `${y}px`,
        left: `${x}px`,
        transform: "translate(-50%, -50%)",
        border : '1px solid #1ae5a1 '
      }}
    ></div>
  );
};

const CircularDots = ({
  totalDots = 21, // تعداد نقاط
  radius = 60, // شعاع دایره (نصف مقدار قبلی)
  activeDots = 19, // تعداد نقاط فعال (پر شده)
}) => {
  const angleStep = 260 / (totalDots - 1); // فاصله زاویه‌ای بین نقاط در ۲۸۰ درجه
  const center = radius; // مرکز دایره

  const generateDots = () => {
    return Array.from({ length: totalDots }).map((_, index) => {
      const angle = (angleStep * index + 141) * (Math.PI / 180); // تغییر زاویه برای شروع از پایین
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);

      if (index < activeDots) {
        return <ActiveDot key={index} x={x} y={y} />;
      } else {
        return <InactiveDot key={index} x={x} y={y} />;
      }
    });
  };

  return (
    <div
      style={{
        position: "relative",
        width: `${radius * 2}px`,
        height: `${radius * 2}px`,
      }}
    >
      {generateDots()}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="">
            <div className="CircularProgressBar-img"></div>
        </div>
      </div>
    </div>
  );
};

export default CircularDots;
