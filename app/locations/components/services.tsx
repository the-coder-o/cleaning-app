import Image from "next/image";
import React from "react";
import card1 from "@/images/jpg/carpet-img.jpg";
import card2 from "@/images/jpg/upholstery-img.jpg";
import card3 from "@/images/png/image_13.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="px-3" id="services">
      <div className="">
        <h2 className=" montserrat pl-0 text-center text-[36px] font-bold sm:text-start sm:text-[46px] md:pl-12">Our Services</h2>
      </div>
      <div className="mt-12 flex px-2 flex-wrap items-center justify-around gap-4 text-center ">
        <Link href={"/prices/carpet-cleaning"}>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative mx-4 -mt-6 overflow-hidden shadow-lg bg-clip-border rounded-xl  shadow-blue-gray-500/40">
              <Image
                src={card1}
                alt="card-image" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Carpet cleaning
              </h5>
            </div>
            <div className="p-6 pt-0">
              <Button
                type="button">  
                learn more
              </Button>
            </div>
          </div>
        </Link>
        <Link href={"/prices/upholstery-cleaning"}>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative mx-4 -mt-6 overflow-hidden text-white shadow-2xl bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={card2} alt="card-img" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Upholstery cleaning
              </h5>
            </div>
            <div className="p-6 pt-0">
              <Button
                type="button">
                learn more
              </Button>
            </div>
          </div>
        </Link>
        <Link href={"/prices/air-duct"}>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <Image
                src={card3}
                alt="card-image" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Air duct & dryer vent cleaning
              </h5>

            </div>
            <div className="p-6 pt-0">
              <Button
                type="button">
                learn more
              </Button>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
