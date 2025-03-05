import React, { useState } from "react";
import { motion } from "framer-motion";
import './index.css'
import ProfilePlayIcon1 from "../../../../components/icons/change/profileNavbar/profiePlayIcon";
import { Link } from "react-router-dom";
const Carousel = ({gameHistoryData , images}) => {
  console.log('dddddd ::::: '+gameHistoryData)
  const [currentIndex, setCurrentIndex] = useState(0);
 
  const handleDragEnd = (event, info) => {
    if (info.offset.x < -100) {
      nextSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gameHistoryData.length);
  };

  const positions = [
    {border : true , translateX: -10, translateY: 0, zIndex: 10, opacity: 1, scale: 1 },
    {border : false , translateX: 48, translateY: 13, zIndex: 9, opacity: 0.9, scale: 0.95 },
    {border : false , translateX: 98, translateY: 33, zIndex: 8, opacity: 0.8, scale: 0.85 },
    {border : false , translateX: 98, translateY: 0, zIndex: 8, opacity: 0.8, scale: 0.85 },
    {border : false , translateX: 98, translateY: 0, zIndex: 8, opacity: 0.8, scale: 0.85 },
    {border : false , translateX: 98, translateY: 0, zIndex: 8, opacity: 0.8, scale: 0.85 },
    {border : false , translateX: 98, translateY: 0, zIndex: 8, opacity: 0.8, scale: 0.85 },
    {border : false , translateX: -150, translateY: 0, zIndex: 9, opacity: 0.9, scale: 0.9 },
    {border : false , translateX: -300, translateY: 0, zIndex: 8, opacity: 0.8, scale: 0.8 },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%", 
        height: "400px",
        paddingRight : '30px', 
        overflow: "hidden",
        margin: "0 auto",
        perspective: "1000px",
      }}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        {gameHistoryData.map((image, index) => {
          const positionIndex =
            (index - currentIndex + gameHistoryData.length) % gameHistoryData.length;
          const position = positions[positionIndex] || {
            translateX: 500,
            translateY: 200,
            zIndex: 0,
            opacity: 0,
            scale: 0.5,
          };

          return (
            <motion.div
              key={index}
              drag={positionIndex === 0 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              style={{
                position: "absolute",
                width: `${240  * position.scale}px`,
                height: `${366 * position.scale}px`,
                borderRadius: "30px",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
                backgroundImage: `url(${image.picture})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                cursor: positionIndex === 0 ? "grab" : "default",
                zIndex: position.zIndex,
                opacity: position.opacity,
                transform: `translateX(${position.translateX}px) translateY(${position.translateY}px) scale(${position.scale})`, // تغییر ابعاد و موقعیت
                transition: "transform 0.3s ease, opacity 0.3s ease",
                border: position.border ?'1px solid #1AE5A1' : ' '
              }}
            >
              <Link to={`/games/${image.game_url}`}>
                <div className="Profile-Carousel-container">
                  <div className="text-center w-full">
                      <p className="text-[#fff6f5] text-xl font-bold mb-2">{image.name}</p>
                      {/* <p className="text-[#fff6f5] text-[13px] font-medium mb-5">{image.text}</p> */}
                      <span className="flex justify-center items-center"><ProfilePlayIcon1 /></span>
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
