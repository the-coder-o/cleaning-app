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
    <div className='container'>
      <h1 className= 'text-center md:text-start ml-0 xl:ml-12 mt-12 md:mt-24 drop-shadow-2xl text-[28px] sm:text-[36px] md:text-[46px] text-black w-full  max-w-[900px] montserrat font-bold'>For over 20 years of service we have completed more than <span className='bg-gradient-to-tr from-blue-500 to-red-500 text-transparent bg-clip-text '>100 000</span> jobs</h1>

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

      <div className="flex justify-center text-center items-center">
      <Dialog>
        <DialogTrigger className='mt-4 mx-3 md:mt-12 mb-4 w-96 block rounded-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-black/65  via-gray-600 to-black/65 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
        <Modal />
      </Dialog>
      </div>
    </div>
  );
};

export default CompletedJobs;
