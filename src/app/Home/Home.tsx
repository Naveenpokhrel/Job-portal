import React from "react";
import Hero from "./Hero";
import Categories from "./Categories";
import Features from "./features";
import Center from "./center";
import Footer from "./footer";
import StudentFeedback from "./feedback";

export function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      <Features />
      <Center />
      <StudentFeedback />
      <Footer />
    </div>
  );
}
