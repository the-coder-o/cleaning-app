"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "../../images/png/logo.png";
import Link from "next/link";
import { SheetDemo } from "../Menu";

const Header = () => {
  const [navbar, setNavbar] = useState("py-4");
  useEffect(() => {
    const scrollHandler = () => {
      const changeNav = window.pageYOffset > 100 ? "py-4" : "py-2";
      setNavbar(changeNav);
    };
    window.addEventListener("scroll", scrollHandler);

    return window.removeEventListener("scroll", scrollHandler);
  }, []);
  return (
    <div className="fixed z-20 flex w-full items-center justify-between bg-white/70  px-3 py-3 backdrop-blur-xl ">
      <Link href={"/"} className="flex items-center gap-1 md:gap-2">
        <Image alt="logo" width={120} height={120} src={logo} />
      </Link>
      <a href="tel:(757) 272-9870" className="montserrat mr-20 block text-[10px] font-semibold sm:text-sm md:hidden md:text-base lg:text-lg xl:text-xl">
        (757) 272-9870
      </a>
      <SheetDemo />
    </div>
  );
};

export default Header;
