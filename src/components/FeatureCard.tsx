"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import EcosystemIcon from "../assets/icons/ecosystem.svg";

interface Feature {
  title: string;
  desc: string;
}

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  const borderRef = useRef<HTMLDivElement>(null);
  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      e.clientX;

      if (!borderRef.current) return;

      const rect = borderRef.current?.getBoundingClientRect();
      offsetX.set(e.clientX - rect?.x);
      offsetY.set(e.clientY - rect?.y);
    }

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    }
  }, []);

  return (
    <div ref={borderRef} className="rounded-xl px-5 py-10 text-center sm:flex-1 relative">
      <div className="absolute inset-0 border-2 border-white/20 rounded-xl" />
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-xl"
        style={{
          WebkitMaskImage: maskImage,
          maskImage,
        }}
      />

      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{feature.title}</h3>
      <h3 className="mt-2 text-white/70">{feature.desc}</h3>
    </div>
  );
}

export default FeatureCard;