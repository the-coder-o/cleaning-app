import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  return (
    <div className='mt-7 md:mt-24 px-3' id='faq'>
      <h2 className='text-center asap text-[24px] md:text-[36px] font-semibold'>Frequently Asked Questions</h2>
      <div className="">
        <Accordion type="single" collapsible className="w-full mt-6">
          <AccordionItem value="item-1">
            <AccordionTrigger>WHAT METHOD OF CARPET CLEANING DO YOU USE?</AccordionTrigger>
            <AccordionContent>
              We use powerfull TRUCK-MOUNTED mounted steam cleaning (Hot Water Extraction) It is the most effective carpet cleaning method.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>CAN I WALK ON THE CARPET AFTER IT HAS BEEN CLEANED?</AccordionTrigger>
            <AccordionContent>
              Better is to avoid heavy traffic until the carpet is completely dry but it is acceptable to walk on the carpet with clean shoes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>DO YOU TAKE CARE OF PET STAINS AND ODORS?</AccordionTrigger>
            <AccordionContent>
              Yes. We offer special pet stain and odor removal with antimicrobial solution that helps to target pet-related odors, an odor-eliminating injection.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>ARE YOUR CHEMICALS SAFE FOR MY PETS AND MY FAMILY?</AccordionTrigger>
            <AccordionContent>
              Yes it&apos;s safe. We use nontoxic bridgepoint chemical solutions, that are formulated to help you meet and exceed cleaning and restoration standards and guidelines set forth by the Institute of Inspection, Cleaning, and Restoration Certification Standards (IICRC)
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>HOW DO YOU GUARANTEE CUSTOMER SATISFACTION?</AccordionTrigger>
            <AccordionContent>
              We definitely guarantee the best possible results due to our experience. If you not satisfied from our service - we have Free recleaning option within 7 days of your service date. We are not satisfied until you are.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>DO YOU MOVE FURNITURE?</AccordionTrigger>
            <AccordionContent>
              Yes we do move lightweight furniture sofa, chairs, coffee tables etc. We don&apos;t move beds, dressers, electronics, cabinets etc.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>DO YOU GUARANTEE REMOVAL ALL STAINS ?</AccordionTrigger>
            <AccordionContent>
              Yes we do move lightweight furniture sofa, chairs, coffee tables etc. We don&apos;t move beds, dressers, electronics, cabinets etc.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

export default Faq