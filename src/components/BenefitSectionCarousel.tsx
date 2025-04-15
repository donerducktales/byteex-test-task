'use client'

import { inter } from "@/assets/fonts";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useCallback, useEffect } from "react";

export default function BenefitSectionCarousel() {
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
      
   useEffect(() => {
      if (emblaApi) {
         emblaApi.slideNodes();
      }
   }, [emblaApi]);

   const scrollPrev = useCallback(() => {
      if (emblaApi) emblaApi.scrollPrev();
   }, [emblaApi]);

   const scrollNext = useCallback(() => {
      if (emblaApi) emblaApi.scrollNext();
   }, [emblaApi]);
   
   return (
      <div className={`w-full flex flex-col items-center ${'benefitSectionCarousel'}`}>
         <div className={`h-[648px] max-sm:h-[453px] max-w-[505px] flex flex-row ${'embla'}`}>
            <button 
               onClick={scrollPrev}
               className={`z-20 mr-5 ${'embla__prev'}`}
            >
               <ChevronLeftIcon className="w-6 h-12 text-primaryGrey"/>
            </button>
            <div className={`max-sm:h-[453px] ${'embla__viewport'}`} ref={emblaRef}>
               <div className={`flex max-w-[433px] items-center ${'embla__container'}`}>
                  <div className={`flex-[0_0_100%] ${'embla__slide'}`}>
                     <Image 
                        src={'/benefitSection/woman-in-robe.png'}
                        alt="woman in robe"
                        unoptimized={true}
                        width={433}
                        height={648}
                        className="max-sm:w-[300px] max-sm:max-h-[453px] max-[425px]:w-[290px] max-[425px]:max-h-[363px]"
                     />
                  </div>
               </div>
            </div>
            <button 
               onClick={scrollNext}
               className={`z-20 ml-5 ${'embla__next'}`}
            >
               <ChevronRightIcon className="w-6 h-12 text-primaryGrey"/>
            </button>
         </div>
         <p className={`text-[0.813rem] max-sm:text-base tracking-[3%] text-primaryGrey ${inter.className} ${'benefitSectionCarouselText'}`}>
            White Robe
         </p>
      </div>
   );
}
