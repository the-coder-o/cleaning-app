import Image from "next/image";
import React from "react";
import careers_img from "@/images/png/master-careers.png";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Modal from "@/components/Modal";

const JoinTeam = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-between px-6 text-center md:flex-row md:px-12 md:text-start">
      <div className="montserrat space-y-4 xl:space-y-12">
        <h2 className="text-[18px] font-bold  text-black/70 sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]">Join our team</h2>
        <p className="text-[14px] font-semibold text-black/70 sm:text-[18px] md:text-[22px] xl:text-[26px]">You can contact our department at this number.</p>
        <a className="text-[16px] font-bold text-black/70 sm:text-[20px] md:text-[24px] lg:text-[31px]" href="tel:(877) 340-1327 ">
          (877) 340-1327
        </a>
        <p className="text-[14px] font-semibold text-black/70 sm:text-[18px] lg:text-[22px]">Or we can contact you</p>
        <div className="flex items-center justify-center md:items-start md:justify-start ">
          <Dialog>
            <DialogTrigger className="mt-auto w-full rounded-full bg-gradient-to-r from-indigo-500  to-purple-600 px-4 py-2 text-center text-[10px] font-semibold text-white focus:bg-indigo-700 focus:outline-none sm:text-[12px] md:px-12 md:text-[16px]">BOOK NOW</DialogTrigger>
            <Modal />
          </Dialog>
        </div>
      </div>
      <div className="">
        <Image src={careers_img} alt="careers-img" className="h-[250px] w-[320px] sm:h-[330px] sm:w-[360px] md:h-[300px] md:w-[400px] lg:h-[350px] lg:w-[450px] xl:h-[395px] xl:w-[500px]" />
      </div>
    </div>
  );
};

export default JoinTeam;
