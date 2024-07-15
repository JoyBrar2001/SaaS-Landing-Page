"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductShowcase = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end end']
  });

  const opacityValue = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
  const scaleValue = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotateXValue = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <div
      ref={imageContainerRef}
      className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px] sm:py-24"
    >
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">Intuitive Interface</h2>

        <div className="max-w-xl mx-auto">
          <p className="text-xl text-center text-white/70 mt-5">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes, one task at a time.</p>
        </div>

        <motion.div
          className="mt-14"
          style={{ 
            opacity: opacityValue,
            scale: scaleValue,
            rotateX: rotateXValue,
            transformPerspective: "800px",
          }}
        >
          <Image
            src={appScreen}
            alt="Product Screenshot"
            className="mx-auto"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default ProductShowcase;