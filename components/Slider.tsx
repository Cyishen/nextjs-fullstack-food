"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const data = [
  { id: 1, title: "Salmon", image: "/slide1.png" },
  // { id: 2, title: "Meal", image: "/slide2.png" },
  // { id: 3, title: "Beef", image: "/slide3.png" },
];


const Slider = () => {

  const [currentSlider, setCurrentSlider] = useState(0)

  useEffect( ()=> {
    const interval = setInterval( ()=> {
      setCurrentSlider( (prev) => (prev + 1) % data.length)
    }, 5000)

    return ()=> clearInterval(interval)
  }, [])


  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex justify-center items-center'>
        <Image 
          src={data[currentSlider].image} 
          alt='Slider' 
          fill 
          className='object-contain max-w-5xl flex items-center justify-center mx-auto'/>
      </div>
    </div>
  )
}

export default Slider