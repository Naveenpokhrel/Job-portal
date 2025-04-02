import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Features from "./features";
import Center from "./center";
import Footer from "./footer";
import JobData from "../../jobdata/page";

export  function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Features />
      <Center />
      <Footer />
    </div>
  );
}
