'use client'

import { inter } from "@/assets/fonts";
import CTAButton from "@/components/CTAButton";
import useViewPortSize from "@/hooks/useViewPortSize";
import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function CTASection() {
   const windowSize = useViewPortSize();
   
   return (
      <section 
         className={`w-full flex flex-col items-center py-[84px] ${'CTASection'}`}
         style={{
            background: 'linear-gradient(0deg, var(--primaryCream) 0%, #ffffff 100%, var(--primaryCream) 18%)',
         }}
      >
         <div className={`w-full max-w-[845px] flex flex-col items-center px-5 ${'CTASectionWrapper'}`}>
            <h1 className={`text-[2rem] text-primaryDarkBlue tracking-[4%] text-center mb-4 ${'CTASectionHeader'}`}>
               Find something you love.
            </h1>
            <p className={`max-w-[587px] text-[0.968rem] text-center tracking-[3%] leading-6 text-primaryGrey mb-12 ${'CTASectionText'}`}>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.
            </p>
            <Image 
               src={'/ctaSection/cta-section-main-photo.png'}
               alt="CTA Section main photo"
               width={815}
               height={373}
               className="mb-[58px]"
            />
            {
               windowSize.width <= 1024 ? 
               <CTAButton /> :
               <div className={`w-full flex flex-col gap-4 items-center ${'CTASectionButtonAndInfo'}`}>
                  <div className={`w-full flex flex-col items-center gap-3 ${'CTASectionButtonWrapper'}`}>
                     <button className={`max-w-[356px] h-[56px] w-full flex flex-row justify-center items-center bg-primaryDarkBlue text-white rounded-[5px] gap-4 ${inter.className} ${'CTASectionButton'}`}>
                        Customize Your Outfit
                        <ArrowLongRightIcon className="w-6 text-white"/>
                     </button>
                     <div className={`flex flex-row items-center gap-4 justify-center mb-6 ${'CTASectionButtonShippingInfo'}`}>
                        <div className={`flex flex-row gap-1 items-center ${'shippingInfoWrapper'}`}>
                           <Image 
                              src={'/ctaSection/green-clock-icon.svg'}
                              alt="green clock icon"
                              width={11}
                              height={11}
                           />
                           <p className={`text-primaryGreen text-[0.625rem] tracking-[4%] ${inter.className}`}>
                              Ships in 1-2 Days
                           </p>
                        </div>
                        <Image 
                           src={'/ctaSection/payment-methods.png'}
                           alt="payment methods"
                           width={243}
                           height={22}
                           unoptimized={true}
                        /> 
                     </div>
                  </div>
               </div>
            }
         </div>
      </section>
   )
}
