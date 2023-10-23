"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Ghost from "./Ghost";


const Halloween = () => {
  const [ghostVisible, setGhostVisible] = useState(false);
  
    const handleGhostButtonClick = () => {
      setGhostVisible(true);
    };
  
    return (
      <div className="flex justify-center">
        <Ghost visible={ghostVisible} onToggleVisibility={() => setGhostVisible(false)} />
        <Image 
          src="/gifs/ghost4.gif" 
          alt="" 
          width={56} 
          height={56}
          className="border bg-black rounded-full cursor-pointer border-none" 
          onClick={handleGhostButtonClick}
        />
      </div>
    );
}

export default Halloween;
// export {Halloween, Ghost};
