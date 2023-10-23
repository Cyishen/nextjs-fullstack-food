"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface GhostProps {
    visible: boolean;
    onToggleVisibility: () => void;
  }
  
const Ghost: React.FC<GhostProps> = ({ visible, onToggleVisibility }) => {
  
    const [position1, setPosition1] = useState({ x: 0, y: 0 });
    const [position2, setPosition2] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      if (visible) {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
  
        const centerX = windowWidth / 2 - 250;
        const centerY = windowHeight / 2 - 250; 
  
        const randomX1 = centerX + Math.random() * 500;
        const randomY1 = centerY + Math.random() * 500;
        const maxX1 = windowWidth - 500;
        const maxY1 = windowHeight - 300;
        setPosition1({ x: Math.min(maxX1, randomX1), y: Math.min(maxY1, randomY1) });
  
        const randomX2 = centerX + Math.random() * 500;
        const randomY2 = centerY + Math.random() * 500;
        const maxX2 = windowWidth - 500;
        const maxY2 = windowHeight - 300;
        setPosition2({ x: Math.min(maxX2, randomX2), y: Math.min(maxY2, randomY2) });
  
        const timeout = setTimeout(() => {
          onToggleVisibility()
        }, 5000);
  
        return () => clearTimeout(timeout);
      }
    }, [visible, onToggleVisibility]);
  
    return (
      <div>
        {visible && (
          <>
            <div className="absolute top-0">
              <Image
                src="/gifs/spider1.gif"
                alt=""
                width={180}
                height={180} />
            </div>
            <div className="absolute right-5">
              <Image
                src="/gifs/pumpkin.gif"
                alt=""
                width={100}
                height={100} />
            </div>
            <div className="absolute ghost-floating-run right-32">
              <Image
                src="/gifs/pumpkin-run.gif"
                alt=""
                width={100}
                height={100} />
            </div>
            <div className="ghost-floating absolute animate-float" style={{ left: position1.x, top: position1.y }}>
              <div>
                <Image
                  src="/gifs/ghost1.gif"
                  alt=""
                  width={150}
                  height={150} />
              </div>
              <div style={{ marginTop: "-200px", marginLeft: "200px" }}>
                <Image
                  src="/gifs/ghost7.gif"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
            </div>
            <div className=" ghost-floating absolute animate-float" style={{ left: position2.x, top: position2.y }}>
              <div>
                <Image
                  src="/gifs/ghost5.gif"
                  alt=""
                  width={150}
                  height={150} />
              </div>
              <div style={{ marginTop: "-200px", marginLeft: "300px" }}>
                <Image
                  src="/gifs/ghost5.gif"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div style={{ marginTop: "-100px", marginLeft: "-200px" }}>
                <Image
                  src="/gifs/ghost2.gif"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <div style={{ marginTop: "-200px", marginLeft: "200px" }}>
                <Image
                  src="/gifs/ghost6.gif"
                  alt=""
                  width={100}
                  height={100}
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </div>
          </>
        )}  
      </div>
    );
  };

export default Ghost;