"use client"

import { inter } from "@/assets/fonts";
import useViewPortSize from "@/hooks/useViewPortSize";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export default function HeroSection() {
   const windowSize = useViewPortSize();

   return (
      <section className={`flex flex-col items-center px-6 w-full mb-8 ${'heroSection'}`}>
         <div className={`flex flex-row lg:justify-start justify-center max-w-[1272px] w-full mt-8 ${'logo'}`}>
            <Image 
               src={'/byteex-logo.svg'}
               alt="byteex logo"
               width={200}
               height={36}
            />
         </div>
         <div className={`lg:mt-16 mt-4 flex flex-col items-center max-w-[1266px] ${'heroSectionContent'}`}>
            <div className={`flex lg:flex-row flex-col justify-between w-full ${'heroSectionContentWrapper'}`}>
               <div className={`flex flex-col max-lg:items-center ${'heroSectionContentCol'}`}>
                  <h1 className={`max-w-[592px] lg:text-[2.375rem] text-[1.625rem] text-primaryDarkBlue font-normal tracking-[4%] leading-11 mb-6 max-lg:text-center ${'heroSectionHeader'}`}>
                     Don’t apologize for being comfortable.
                  </h1>
                  {
                     windowSize.width <= 1024 && 
                     <Image 
                        src={'/heroSection/heroSectionMainPhoto.png'}
                        alt="hero section main photo"
                        width={725}
                        height={422.48}
                     />
                  }
                  <div className={`flex flex-col gap-5 mb-10 ${'benefits'}`}>
                     <div className={`flex flex-row gap-[10px] items-center ${'benefit'}`}>
                        <div className={`min-w-[31px] h-[31px] bg-primaryCream rounded-[100%] flex justify-center items-center ${'benefitIcon'}`}>
                           <Image 
                              src={'/sun-and-moon.svg'}
                              alt="sun and moon icon"
                              width={20.5}
                              height={20.5}
                           />
                        </div>
                        <p className={`max-w-[425px] md:text-[0.938rem] text-[0.813rem] text-primaryGrey tracking-[3%] leading-6 font-normal ${'benefitText'}`}>
                           Beautiful, comfortable loungewear for day or night.
                        </p>
                     </div> 

                     <div className={`flex flex-row gap-[10px] items-center ${'benefit'}`}>
                        <div className={`min-w-[31px] h-[31px] bg-primaryCream rounded-[100%] flex justify-center items-center ${'benefitIcon'}`}>
                           <Image 
                              src={'/leaf-and-shoppingcart.svg'}
                              alt="leaf and shopping cart"
                              width={20.5}
                              height={20.5}
                           />
                        </div>
                        <p className={`max-w-[425px] md:text-[0.938rem] text-[0.813rem] text-primaryGrey tracking-[3%] leading-6 font-normal ${'benefitText'}`}>
                           No wasteful extras, like tags or plastic packaging.
                        </p>
                     </div> 

                     <div className={`flex flex-row gap-[10px] items-center ${'benefit'}`}>
                        <div className={`min-w-[31px] h-[31px] bg-primaryCream rounded-[100%] flex justify-center items-center ${'benefitIcon'}`}>
                           <Image 
                              src={'/waves.svg'}
                              alt="waves"
                              width={14}
                              height={13}
                           />
                        </div>
                        <p className={`max-w-[425px] md:text-[0.938rem] text-[0.813rem] text-primaryGrey tracking-[3%] leading-6 font-normal ${'benefitText'}`}>
                           Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.
                        </p>
                     </div> 
                  </div>
                  <button className={`max-w-[356px] w-full h-[56px] bg-primaryDarkBlue text-white rounded-sm flex flex-row justify-center items-center ${'heroSectionButton'} ${inter.className}`}>
                     Customize Your Outfit 
                     <ArrowLongRightIcon className="w-8 h-4 text-white mt-8 ml-6"/>
                  </button>
               </div>
               {
                  windowSize.width > 1024 && 
                  <Image 
                     src={'/heroSection/heroSectionMainPhoto.png'}
                     alt="hero section main photo"
                     width={725}
                     height={422.48}
                  />
               }
            </div>
         </div>
      </section>
   )
}
