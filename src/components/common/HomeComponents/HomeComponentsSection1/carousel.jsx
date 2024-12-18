import React, { useState } from "react";
import { motion } from "framer-motion";
import "./carousel.css";
import img from "../../../../asset/img/HomeImg/carouselImage/image1.png";
import img1 from "../../../../asset/img/HomeImg/carouselImage/image2.png";
import img2 from "../../../../asset/img/HomeImg/carouselImage/image3.png";
import gif from '../../../../asset/Gif/ArrowTop.gif'
const images = [img, img1, img2];

export default function Carousel1() {
  const [index, setIndex] = useState(0);
  const [Icons , setIcons]=useState({
    Icon1 : true ,
    Icon2 : true
  })

  const IconHandller = (e)=>{
    console.log(e)
  }

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative text-center mt-2">
        <div>
          <img className={Icons.Icon1 ? 'absolute right-[40%] top-3 z-10 w-16 h-16' : 'hidden'} src={gif} alt="" />
        </div>
      <div className="Carousel1-Container">
        {images.map((image, i) => {
          const positionIndex = (i - index + images.length) % images.length;

          return (
            <motion.div
              onClick={IconHandller}
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
                  setIcons({
                    Icon1 : false, 
                    Icon2 : true
                  })
                  prevImage();
                } else if (info.offset.y < -100) {
                  nextImage();
                  setIcons({
                    Icon1 : true, 
                    Icon2 : false
                  })
                }
              }}
            />
          );
        })}
      </div>
      <div>
          <img className={Icons.Icon2 ? `transform rotate-180 right-[40%] z-10 bottom-3 absolute w-16 h-16` : 'hidden'} src={gif} alt="" />
      </div>
    </div>
  );
}
