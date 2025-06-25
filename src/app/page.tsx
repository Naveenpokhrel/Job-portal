"use client";
import React from "react";
import { Home } from "./Home/Home";
import { SessionProvider } from "next-auth/react";
const Homepage = () => {
  return (
    <SessionProvider>
      <div className="overflow-hidden">
        <Home />

        <script
          src="//code.tidio.co/tdkdiqfuvucynjh1yopulojp1kanuqlq.js"
          async
        ></script>
      </div>
    </SessionProvider>
  );
};

export default Homepage;
