"use client"

import Image from "next/image";

export default function BenefitSection() {
   return (
      <section className={`max-w-[1324px] w-full flex flex-col items-center px-5 mt-28 mb-14 ${'benefitSection'}`}>
         <div className={`flex flex-row justify-between ${'benefitSectionWrapper'}`}>
            <div className={`flex flex-col items-start ml-9 ${'benefitSectionCol'}`}>
               <h1 className={`text-[2rem] text-primaryDarkBlue tracking-[4%] mb-20 ${'benefitHeader'}`}>
                  Loungewear you can be proud of.
               </h1>
               <div className={`flex flex-col gap-8 items-start ${'benefitSectionBenefitsList'}`}>
                  <div className={`flex flex-row items-start gap-8 ${'benefit'}`}>
                     <div className={`min-w-[42px] h-[42px] bg-primaryCream rounded-[100%] flex justify-center items-center ${'styledBenefitIcon'}`}>
                        <Image 
                           src={'/leaf-and-shoppingcart.svg'}
                           alt="leaf and shopping cart"
                           width={25}
                           height={19}
                        />
                     </div>
                     <div className={`flex flex-col gap-[14px] max-w-[500px] ${'styledBenefitTextWrapper'}`}>
                        <h1 className={`text-[1.375rem] text-primaryDarkBlue tracking-[4%] leading-6 font-normal ${'styledBenefitHeader'}`}>
                           Ethically sourced.
                        </h1>
                        <p className={`text-[0.938rem] tracking-[3%] leading-6 text-secondaryGrey ${'styledBenefitText'}`}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 
                        </p>
                     </div>
                  </div>

                  <div className={`flex flex-row items-start gap-8 ${'benefit'}`}>
                     <div className={`min-w-[42px] h-[42px] bg-primaryCream rounded-[100%] flex justify-center items-center ${'benefitIcon'}`}>
                        <Image 
                           src={'/leaf.svg'}
                           alt="leaf"
                           width={23}
                           height={23}
                        />
                     </div>
                     <div className={`flex flex-col gap-[14px] max-w-[500px] ${'styledbenefitTextWrapper'}`}>
                        <h1 className={`text-[1.375rem] text-primaryDarkBlue tracking-[4%] leading-6 font-normal ${'benefitHeader'}`}>
                           Responsibly made.
                        </h1>
                        <p className={`text-[0.938rem] tracking-[3%] leading-6 text-secondaryGrey ${'benefitText'}`}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 
                        </p>
                     </div>
                  </div>

                  <div className={`flex flex-row items-start gap-8 ${'benefit'}`}>
                     <div className={`min-w-[42px] h-[42px] bg-primaryCream rounded-[100%] flex justify-center items-center ${'styledBenefitIcon'}`}>
                        <Image 
                           src={'/sun-and-moon.svg'}
                           alt="sun-and-moon"
                           width={26}
                           height={26}
                        />
                     </div>
                     <div className={`flex flex-col gap-[14px] max-w-[500px] ${'styledBenefitTextWrapper'}`}>
                        <h1 className={`text-[1.375rem] text-primaryDarkBlue tracking-[4%] leading-6 font-normal ${'styledBenefitHeader'}`}>
                           Made for living in.
                        </h1>
                        <p className={`text-[0.938rem] tracking-[3%] leading-6 text-secondaryGrey ${'styledBenefitText'}`}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 
                        </p>
                     </div>
                  </div>

                  <div className={`flex flex-row items-start gap-8 ${'benefit'}`}>
                     <div className={`min-w-[42px] h-[42px] bg-primaryCream rounded-[100%] flex justify-center items-center ${'styledBenefitIcon'}`}>
                        <Image 
                           src={'/waves.svg'}
                           alt="waves"
                           width={22}
                           height={16}
                        />
                     </div>
                     <div className={`flex flex-col gap-[14px] max-w-[500px] ${'styledBenefitTextWrapper'}`}>
                        <h1 className={`text-[1.375rem] text-primaryDarkBlue tracking-[4%] leading-6 font-normal ${'styledBenefitHeader'}`}>
                           Unimaginably comfortable.
                        </h1>
                        <p className={`text-[0.938rem] tracking-[3%] leading-6 text-secondaryGrey ${'styledBenefitText'}`}>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}
