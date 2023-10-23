"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";

const heroImages = [
  { imgUrl: '/slide1.png', alt: 'salmon'},
  { imgUrl: '/slide2.png', alt: 'meal'},
  { imgUrl: '/slide3.png', alt: 'beef'},
]

const HeroCarousel = () => {

  return (
    // <section className="bg-slate-400 px-10 py-10">
    //   <div className="flex flex0col justify-center items-center">

    //   </div>
    // </section>
    <div className="relative sm:px-10 py-5 sm:pt-10 max-w-7xl w-full mx-auto mb-[150px]">
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={5000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image) => (
          <Image 
            src={image.imgUrl}
            alt={image.alt}
            width={484}
            height={484}
            className="object-contain"
            key={image.alt}
          />
        ))}
      </Carousel>
  </div>
  )
}

export default HeroCarousel