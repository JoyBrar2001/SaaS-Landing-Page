import React from 'react'
import Carousel from './Carousel';
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const imageUrls = [acmeLogo, quantumLogo, echoLogo, celestialLogo, pulseLogo, apexLogo, acmeLogo, quantumLogo, echoLogo, celestialLogo, pulseLogo, apexLogo];

const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px]">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">Trusted by the world's most innovative teams</h2>

        <Carousel imageUrls={imageUrls} />
      </div>
    </div>
  )
}

export default LogoTicker