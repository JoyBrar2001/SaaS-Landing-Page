"use client";

import React, { useRef } from "react";
import Button from "./Button";
import helixImage from "../assets/images/helix2.png";
import emojiStarImage from "../assets/images/emojistar.png";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [80, -40]);

  return (
    <div
      ref={containerRef}
      className="bg-black text-white py-[72px] sm:py-24 text-center"
    >
      <div className="container max-w-xl relative">
        <motion.div
          style={{ translateY }}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          className="cursor-grab active:cursor-grabbing touch-none"
        >
          <Image
            src={helixImage}
            alt="helix"
            className="absolute top-6 left-[calc(100%+36px)]"
            draggable={false}
          />
        </motion.div>

        <motion.div
          style={{ translateY }}
          drag
          dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          dragElastic={0.5}
          className="cursor-grab active:cursor-grabbing touch-none"
        >
          <Image
            src={emojiStarImage}
            alt="emojiStar"
            className="absolute -top-[120px] right-[calc(100%+24px)]"
            draggable={false}
          />
        </motion.div>

        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Get instant access</h2>

        <p className="text-xl text-white/70 mt-5">
          Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
        </p>

        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            placeholder="johndoe@mail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />

          <Button title="Get Access" />
        </form>
      </div>
    </div>
  );
}

export default CallToAction;