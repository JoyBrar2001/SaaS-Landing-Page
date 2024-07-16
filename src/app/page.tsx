"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoTicker from "@/components/LogoTicker";
import Features from "@/components/Features";
import ProductShowcase from "@/components/ProductShowcase";
import FAQs from "@/components/FAQs";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])


  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
