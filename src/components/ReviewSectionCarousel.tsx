"use client"

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReviewSectionCarousel() {
   const brands = [
      {
         id: 0,
         name: 'Eco Stylist',
         url: '/reviewSection/eco-stylist.png',
         width: 178,
         height: 22,
      },
      {
         id: 1,
         name: 'Canadian Living',
         url: '/reviewSection/canadian-living.png',
         width: 111,
         height: 52,
      },
      {
         id: 2,
         name: 'Jillian Harris',
         url: '/reviewSection/jillian-harris.png',
         width: 271,
         height: 53,
      },
      {
         id: 3,
         name: 'The Eco Hub',
         url: '/reviewSection/the-eco-hub.png',
         width: 194,
         height: 37,
      },
      {
         id: 4,
         name: 'Trend Hunter',
         url: '/reviewSection/trendhunter.png',
         width: 192,
         height: 58,
      },
   ]
   
   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
   
   useEffect(() => {
      if (emblaApi) {
         emblaApi.slideNodes();
      }
   }, [emblaApi]);
   
   return (
      <div className={`w-full flex flex-col items-center ${'reviewSectionCarousel'}`}>
         <h1 className={`text-secondaryGrey text-xl tracking-[3%] ${'reviewSectionCarouselHeader'}`}>
            as seen in
         </h1>
         <div className={`min-h-[60px] w-full max-w-[1266px] ${'embla'}`}>
            <div className={`${'embla__viewport'}`} ref={emblaRef}>
               <div className={`gap-4 flex max-w-[1266px] items-center ${'embla__container'}`}>
                  {brands.map(el => 
                     <div 
                        key={el.id}
                        className={`flex max-lg:justify-center lg:flex-[0_0_20%] sm:flex-[0_0_33%] flex-[0_0_100%] ${'embla__slide'}`}   
                     >
                        <Image 
                           src={el.url}
                           alt={el.name}
                           width={el.width}
                           height={el.height}
                        />
                     </div>
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}
