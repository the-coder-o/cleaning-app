import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { IoMdMenu } from "react-icons/io";
import { Dialog, DialogClose, DialogTrigger } from "./ui/dialog";
import Modal from "./Modal";
import { Link } from "react-scroll";

export function SheetDemo() {
  return (
    <div className="">
      <ul className=" hidden gap-3 md:flex">
        <Link to="services" spy={true} smooth={true} offset={-120} duration={500}>
          Services
        </Link>
        <Dialog>
          <DialogTrigger>Contact us</DialogTrigger>
          <Modal />
        </Dialog>
        <a href="tel:(757) 272-9870" className=" text-[10px] font-semibold sm:text-sm md:text-base lg:text-base ">
          (757) 272-9870
        </a>
      </ul>
      <div className="flex md:hidden ">
        <Sheet>
          <SheetTrigger asChild>
            <IoMdMenu className="cursor-pointer" />
          </SheetTrigger>
          <SheetContent className="flex flex-col items-center bg-white text-center text-black">
            <SheetHeader className="mt-12">
              <SheetTitle>
                <DialogClose asChild>
                  <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
                    Services
                  </Link>
                </DialogClose>
              </SheetTitle>
            </SheetHeader>
            <SheetHeader>
              <SheetTitle>
                <Dialog>
                  <DialogTrigger className="flex items-start rounded-full bg-gradient-to-r  from-indigo-500 to-purple-600 px-6 py-1 text-center text-[10px] font-semibold text-white focus:bg-indigo-700 focus:outline-none md:px-5 md:py-2">Contact us</DialogTrigger>
                  <Modal />
                </Dialog>
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
