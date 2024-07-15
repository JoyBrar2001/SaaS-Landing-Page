"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import clsx from 'clsx';

interface DraggableImageProps {
  src: StaticImageData;
  className?: string;
}

const DraggableImage = ({ src, className }: DraggableImageProps) => {
  return (
    <motion.div
      className={clsx(
        className,
        "hidden sm:inline absolute h-52 w-52",
        "cursor-grab active:cursor-grabbing touch-none",
      )}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      dragElastic={0.5}
    >
      <Image
        src={src}
        alt="Image"
        height={200}
        width={200}
        draggable={false}
      />
    </motion.div>
  )
}

export default DraggableImage