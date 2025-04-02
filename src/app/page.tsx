"use client";
import React from "react";
import { Home } from "./components/Home/Home";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
const Homepage = () => {
  return (
    <SessionProvider>
      <div className="overflow-hidden">
        <Home />
        <script
          src="//code.tidio.co/m6zbfeg4ulpjyocn9v680el9v1rmzq2y.js"
          async
        ></script>
      </div>
    </SessionProvider>
  );
};

export default Homepage;
