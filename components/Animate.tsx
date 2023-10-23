"use client"

import Image from "next/image";
import React, { useEffect, useRef } from "react";


const Animate = ({ src }: { src: string }) => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const image = document.querySelector(`Img[src="${src}"]`) 
    if (image) {
      imageRef.current = image as HTMLImageElement;
      if (imageRef.current) {
        // 初始設定縮小與隱藏
        imageRef.current.style.transform = 'scale(0)';
        imageRef.current.style.opacity = '0';
      }
    }
  }, [src]);

  useEffect(() => {
    if (imageRef.current) {
      requestAnimationFrame(() => {
        imageRef.current!.style.transition = 'transform 1s ease, opacity 2s ease';
        imageRef.current!.style.transform = 'scale(1)';
        imageRef.current!.style.opacity = '1';
      });
    }
  }, []);


  return (
    <img
      src={src}
      alt=""
      ref={imageRef}
    />
  );
};

export default Animate;

