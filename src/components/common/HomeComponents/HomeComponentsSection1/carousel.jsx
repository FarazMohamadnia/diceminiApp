import React, { useState } from "react";
import { motion } from "framer-motion";
import "./carousel.css";
import img from "../../../../asset/img/HomeImg/carouselImage/image1.png";
import img1 from "../../../../asset/img/HomeImg/carouselImage/image2.png";
import img2 from "../../../../asset/img/HomeImg/carouselImage/image3.png";

const images = [img, img1, img2];

export default function Carousel1() {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="text-center mt-2">
      <div className="Carousel1-Container">
        {images.map((image, i) => {
          const positionIndex = (i - index + images.length) % images.length;

          return (
            <motion.div
              key={i}
              className="Carousel1-Image-card-Style"
              style={{
                backgroundImage: `url(${image})`,
                zIndex: images.length - positionIndex,
                transform: `translateY(${-positionIndex * 20}px) scale(${1 - positionIndex * 0.05})`,
              }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(event, info) => {
                if (info.offset.y > 100) {
                  prevImage();
                } else if (info.offset.y < -100) {
                  nextImage();
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
