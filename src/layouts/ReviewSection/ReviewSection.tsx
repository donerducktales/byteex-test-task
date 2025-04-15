import Image from "next/image";
import starUrl from '../../../public/star.svg';
import { inter } from "@/assets/fonts";
import ReviewSectionCarousel from "@/components/ReviewSectionCarousel";

export default function ReviewSection() {
   const stars = Array(5).fill(starUrl);
   
   return (
      <section 
         className={`w-full flex flex-col items-center mt-24 max-lg:mt-12 max-h-[530px] ${'reviewSection'}`}
         style={{
            background: 'linear-gradient(180deg, var(--primaryCream) 0%, #ffffff 100%, var(--primaryCream) 18%)',
         }}
      >
         <div className={`max-w-[1324px] w-full flex flex-col lg:items-start items-center px-5 ${'reviewSectionWrapper'}`}>
            <div className={`flex flex-col gap-3 max-w-[416px] w-full min-h-[172px] px-5 py-4 rounded-lg bg-white relative max-xl:bottom-2 lg:bottom-24 md:bottom-12 max-md:bottom-12 shadow-md ${'reviewCard'}`}>
               <div className={`w-full flex flex-row max-[450px]:flex-col justify-center items-center gap-4 ${'reviewCardUserInfo'}`}>
                  <div className={`flex flex-row gap-[14px] items-center ${'reviewCardUser'}`}>
                     <Image 
                        src={'/reviewSection/Amy-P.png'}
                        alt="Amy P User"
                        width={39}
                        height={39}
                        unoptimized={true}
                     />
                     <p className={`text-primaryGrey text-[0.938rem] tracking-[3%] font-normal ${'reviewCardUserName'}`}>
                        Amy P.
                     </p>
                  </div>
                  <div className={`flex flex-row items-center ${'reviewCardStars'}`}>
                     {stars.map((el, index) => 
                        <Image 
                           key={index}
                           src={el}
                           alt="star"
                           width={10.15}
                           height={9.68}
                        />
                     )}
                  </div>
                  <p className={`text-secondaryGrey text-[0.688rem] tracking-[2%] ${inter.className}`}>
                     One of 500+ 5 Star Reviews Online
                  </p>
               </div>
               <p className={`text-xs tracking-[4%] text-primaryGrey leading-6 ${inter.className} ${'reviewCardDescription'}`}>
                  Overjoyed with my Loungewear set. I have the jogger and the sweatshirt. Quality product on every level. From the compostable packaging, to the supplied washing bag, even the garments smells like fresh herbs when I first held them. 
               </p>
            </div>
         </div>
         <ReviewSectionCarousel />
      </section>
   )
}
