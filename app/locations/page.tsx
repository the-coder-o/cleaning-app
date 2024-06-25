"use client";

import React from "react";
import Services from "./components/services";
import Hero from "@/components/hero/hero";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <div className="container">
        <Services />
      </div>
    </div>
  );
};

export default HomePage;
