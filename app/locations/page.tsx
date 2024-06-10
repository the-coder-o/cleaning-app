"use client";

import React from "react";

import Services from "./components/services";
import ChooseUs from "./components/chooseUs";
import CompletedJobs from "./components/completedJobs";
import Faq from "./components/faq";
import Opinions from "./components/opinions";
import Hero from "@/components/hero/hero";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <div className="container">
        <Services />
        <ChooseUs />
        <CompletedJobs />
        <Faq />
      </div>
      <Opinions />
    </div>
  );
};

export default HomePage;
