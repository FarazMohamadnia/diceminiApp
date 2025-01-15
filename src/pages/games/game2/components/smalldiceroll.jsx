import React, { useState, useEffect } from 'react';
import '../index.css';
export default function CrapsGame({ targetNumber, rolling }) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let interval;

    if (rolling) {
      interval = setInterval(() => {
        setRotation((prev) => ({
          x: prev.x + 100,
          y: prev.y + 100,
        }));
      }, 100);
    } else {
      clearInterval(interval);
      rollDiceToNumber(targetNumber);
    }

    return () => clearInterval(interval);
  }, [rolling, targetNumber]);

  const rollDiceToNumber = (number) => {
    const rotations = {
      1: { x: 0, y: 0 },
      2: { x: 0, y: -90 },
      3: { x: 180, y: 0 },
      4: { x: 0, y: 90 },
      5: { x: -90, y: 0 } ,
      6:  { x: 90, y: 0 },
    };

    const extraRotation = 360 * 2;
    setRotation({
      x: rotations[number].x + extraRotation,
      y: rotations[number].y + extraRotation,
    });
  };

  return (
    <div className="smalldice-scene">
      <div
        className="smalldice-cube"
        style={{
          transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
        }}
      >
        <div className="smalldice-face one"></div>
        <div className="smalldice-face two"></div>
        <div className="smalldice-face three"></div>
        <div className="smalldice-face four"></div>
        <div className="smalldice-face five"></div>
        <div className="smalldice-face six"></div>
      </div>
    </div>
  );
}
