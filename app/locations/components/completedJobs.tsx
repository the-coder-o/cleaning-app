import React from "react";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import Image from "next/image";
import before1 from "@/images/jpg/before-clng.jpg";
import after1 from "@/images/jpg/after-clng.jpg";
import before2 from "@/images/jpg/flour-before.jpg";
import after2 from "@/images/jpg/flour-after.jpg";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Modal from "@/components/Modal";

const CompletedJobs = () => {
  return (
    <div className="container">
      <h1 className="montserrat ml-0 mt-12 w-full max-w-[900px] text-center text-[28px] font-bold text-black drop-shadow-2xl sm:text-[36px] md:mt-24  md:text-start md:text-[46px] xl:ml-12">
        For over 20 years of service we have completed more than <span className="text-lime-400 ">100 000</span> jobs
      </h1>

      <div className=" mt-16 flex flex-col items-center justify-evenly gap-3 px-2 lg:flex-row">
        <div className="">
          <ResizablePanelGroup direction="horizontal" className="h-full max-h-[450px] max-w-md rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="flex  items-center justify-center ">
                <Image src={before1} alt="before" className="h-[240px] w-[500px] object-cover" />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex items-center justify-center ">
                <Image src={after1} alt="after" className="h-[240px] w-[500px] object-cover" />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <div className="">
          <ResizablePanelGroup direction="horizontal" className="min-h-[200px] max-w-md rounded-lg border">
            <ResizablePanel defaultSize={50}>
              <div className="flex  items-center justify-center ">
                <Image src={before2} alt="before" className="h-[240px] w-[500px] object-cover" />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex  items-center justify-center ">
                <Image src={after2} alt="after" className="h-[240px] w-[500px] object-cover" />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

      <div className="flex items-center justify-center text-center">
        <Dialog>
          <DialogTrigger className="montserrat mx-3 mb-4 mt-4 flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center  text-base font-semibold  text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mt-12 md:px-2 md:py-3 md:text-lg xl:w-[225px] xl:px-3 xl:py-2">BOOK NOW</DialogTrigger>
          <Modal />
        </Dialog>
      </div>
    </div>
  );
};

export default CompletedJobs;
