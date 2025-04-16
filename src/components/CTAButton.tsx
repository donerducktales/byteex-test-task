import { ArrowLongRightIcon } from "@heroicons/react/24/solid";
import starUrl from './../../public/star.svg';
import { inter } from "@/assets/fonts";
import Image from "next/image";

export default function CTAButton() {
   const stars = Array(5).fill(starUrl);

   return (
      <div className={`w-full flex flex-col items-center gap-3 ${'CTA'}`}>
            <button className={`max-w-[356px] h-[56px] w-full flex flex-row justify-center items-center bg-primaryDarkBlue text-white rounded-[5px] gap-4 ${inter.className} ${'CTAButton'}`}>
               Customize Your Outfit
               <ArrowLongRightIcon className="w-6 text-white"/>
            </button>
            <div className={`flex flex-row gap-4 ${'CTAReviews'}`}>
               <div className={`flex flex-row items-center ${'CTAStars'}`}>
                  {stars.map((el, index) => 
                     <Image
                        key={index}
                        src={el}
                        alt="star"
                        width={13.6}
                        height={13}
                     />
                  )}
               </div>
               <p className={`text-secondaryGrey text-xs tracking-[2%] ${inter.className}`}>
                  One of 500+ 5 Star Reviews Online
               </p>
            </div>
         </div>
   )
}
