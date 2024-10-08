import Image from "next/image";
import React from "react";
import bg from "@/images/jpg/bg.jpg";
import diamond from "@/images/svg/diamond_1.svg";
import safety from "@/images/svg/healthcare-and-medic.svg";
import checked from "@/images/svg/checked_1.svg";
import teach from "@/images/svg/teach_1.svg";
import { Card } from "@/components/ui/card";

const ChooseUs = () => {
  return (
    <div className="bg-img">
      <div className="mt-12 md:mt-32">
        <h2 className="montserrat ml-0 text-center text-[28px] font-bold sm:text-[46px] md:ml-12 md:text-start">Why you should choose us</h2>
        <h4 className="montserrat ml-0 text-center text-[30px] md:ml-12 md:text-start">We work - you rest</h4>

        <div className="mt-24 flex flex-wrap items-center justify-center">
          <Card className="flexbox ">
            <Image src={diamond} alt={"card-img"} className="" />
            <h5 className="montserrat text-[24px]  font-semibold">Efficiency</h5>
            <p className="montserrat text-[16px]  ">We use nontoxic chemicals and professional powerful equipment for the best job results.</p>
          </Card>
          <Card className="flexbox">
            <Image src={safety} alt={"card-img"} className="" />
            <h5 className="montserrat text-[24px]  font-semibold">Safety</h5>
            <p className="montserrat text-[16px] ">We provide especial precautions for your and our safety. Our technicians wear masks, shoe covers and gloves. Equipment is disinfected and sanitized after each job.</p>
          </Card>
          <Card className="flexbox">
            <Image src={checked} alt={"card-img"} className="" />
            <h5 className="montserrat text-[24px]  font-semibold">Reliability</h5>
            <p className="montserrat text-[16px] ">We have professional, certified, background checked technicians. We are licensed and insured.</p>
          </Card>
          <Card className="flexbox ">
            <Image src={teach} alt={"card-img"} className="" />
            <h5 className="montserrat text-[24px]  font-semibold">Professionality</h5>
            <p className="montserrat text-[16px] ">We use nontoxic chemicals and professional powerful equipment for the best job results.</p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
