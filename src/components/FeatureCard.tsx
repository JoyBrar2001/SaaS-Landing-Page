import React from "react";
import EcosystemIcon from "../assets/icons/ecosystem.svg";

interface Feature{
  title: string;
  desc: string;
}

interface FeatureCardProps{
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => {
  return (
    <div className="border border-white/30 rounded-xl px-5 py-10 text-center sm:flex-1">
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg">
        <EcosystemIcon />
      </div>
      <h3 className="mt-6 font-bold">{feature.title}</h3>
      <h3 className="mt-2 text-white/70">{feature.desc}</h3>
    </div>
  );
}

export default FeatureCard;