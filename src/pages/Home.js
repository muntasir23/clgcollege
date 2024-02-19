import React from "react";
import Footer from "../component/Footer";
import Contact from "../component/Hero/Contact";
import Details from "../component/Hero/Details";
import Hero from "../component/Hero/Hero";
import HeroNotice from "../component/Hero/HeroNotice";
import Slider from "../component/Hero/Slider";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <Details />
      <HeroNotice />
      <Contact />
      <Footer />
    </div>
  );
}
