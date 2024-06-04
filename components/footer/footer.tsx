import React from "react";
import logo from "../../images/jpg/master-cleaning.jpg";
import certificate1 from "../../images/png/warantee.png";
import certificate2 from "../../images/png/family-owned.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between bg-[#f5f5f5] px-12 py-10 mt-[200px]">
      <div className="flex flex-col items-center">
        <Image alt="logo" className="h-[30px] w-[35px] md:h-[75px] md:w-[90px] lg:h-[90px] lg:w-[105px] xl:h-[105px] xl:w-[120px]" width={120} height={105} src={logo} />
        <div className="gap[3px] flex  flex-col items-center md:flex md:flex-row md:gap-4">
          <Image className="hidden lg:block lg:h-[67.5px] lg:w-[70px]" width={70} height={67.5} src={certificate1} alt="cer1" />
          <Image className="hidden lg:block  lg:h-[48.5px] lg:w-[50px] " width={50} height={48.5} src={certificate2} alt="cer2" />
        </div>
      </div>
      <ul className="montserrat flex flex-col space-y-3">
        <li className="text-[18px] font-semibold">Site map</li>
        <Link className="text[17px]" href={"/"}>
          Home
        </Link>
        <Link className="text[17px]" href={"/careers"}>
          Careers
        </Link>
        <Link className="text[17px]" href={"/commercial-services"}>
          Commercial Janitorial Services
        </Link>
      </ul>
      <ul className="montserrat flex flex-col space-y-3">
        <li className="text[18px] font-semibold">Locations</li>
        <Link className="text[17px]" href={"/locations"}>
          Washington
        </Link>
      </ul>
      <ul className="montserrat flex flex-col space-y-3">
        <li className="text[18px] font-semibold">Popular Services</li>
        <Link className="text[17px]" href={"/prices/carpet-cleaning"}>
          Carpet Cleaning
        </Link>
        <Link className="text[17px]" href={"/prices/upholstery-cleaning"}>
          Upholstery Cleaning
        </Link>
        <Link className="text[17px]" href={"/prices/air-duct"}>
          Air Duct & Dryer Vent
        </Link>
      </ul>
      <div className="montserrat flex flex-col space-y-3">
        <h5 className="text[18px] font-semibold">Contact Us</h5>
        <a href="tel:(877) 340 - 1327" className=" montserrat text-[10px]  leading-[9px] sm:text-sm md:text-base lg:text-lg xl:text-xl">
          (877) 340 - 1327
        </a>
      </div>
    </div>
  );
};

export default Footer;
