import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { IoMdMenu } from "react-icons/io";
import { Dialog, DialogClose, DialogTrigger } from "./ui/dialog";
import Modal from "./Modal";
import {Link} from 'react-scroll'

export function SheetDemo() {
  return (
    <div className="">
      <ul className='gap-12 hidden md:flex'>
        <Link to="services" spy={true} smooth={true} offset={-120} duration={500}>Services</Link>
        <Link to="faq" spy={true} smooth={true} offset={-120} duration={500}>FAQ</Link>
        <Dialog>
          <DialogTrigger>Contact us</DialogTrigger>
          <Modal />
        </Dialog>
      </ul>
      <div className="flex md:hidden ">
    <Sheet>
      <SheetTrigger asChild>
      <IoMdMenu  className="cursor-pointer"/>
      </SheetTrigger>
      <SheetContent className="flex bg-white text-black flex-col items-center text-center">
        <SheetHeader className="mt-12">
          <SheetTitle>
      <DialogClose asChild>
            <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>Services</Link>
        </DialogClose>
          </SheetTitle>
        </SheetHeader>
        <SheetHeader>
          <SheetTitle>
          <DialogClose asChild>
            <Link to="faq" spy={true} smooth={true} offset={-60} duration={500}>FAQ</Link>
            </DialogClose>
            </SheetTitle>
        </SheetHeader>
        <SheetHeader>
          <SheetTitle>
          <Dialog>
              <DialogTrigger className='flex text-[10px] items-start rounded-full  px-6 py-1 md:py-2 md:px-5 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>Contact us</DialogTrigger>
              <Modal />
            </Dialog>
          </SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    </div>
    </div>
  )
}
