"use client";

import React, { useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion, useAnimate, useAnimation } from 'framer-motion';

interface CarouselProps {
  imageUrls: StaticImageData[];
}

const Carousel = ({ imageUrls }: CarouselProps) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleAnimation = async () => {
      await animate(scope.current, { x: "-80%" }, { duration: 50, repeat: Infinity, ease: "linear" });
    }
    handleAnimation();
  }, []);

  return (
    <div className="relative overflow-hidden mt-9">
      <div
        ref={scope}
        className="flex gap-8 md:gap-16"
      >
        {[...imageUrls, ...imageUrls].map((src, index) => (
          <div key={index} className="flex-none">
            <Image
              src={src}
              alt={`Carousel-${index}`}
              className="flex-none h-6 md:h-8 w-auto"
              height={100}
              width={200}
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black pointer-events-none"></div>
    </div>
  );
}

export default Carousel;