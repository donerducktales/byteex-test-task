import CTAButton from "@/components/CTAButton";
import Image from "next/image";

export default function OrderSection() {
   return (
      <section className={`max-w-[1168px] w-full flex flex-col items-center px-6 mt-[75px] ${'orderSection'}`}>
         <h1 className={`text-[2rem] tracking-[4%] text-primaryDarkBlue mb-12 ${'orderSectionHeader'}`}>
            Comfort made easy
         </h1>
         <div className={`flex lg:flex-row flex-col gap-10 justify-center items-center mb-[56px] ${'orderSectionCardsWrapper'}`}>
            <div className={`flex flex-col items-center justify-center max-w-[346px] w-full h-[321px] bg-primaryLightGrey rounded-lg p-9 ${'orderSectionCard'}`}>
               <Image
                  src={'/leaf-and-shoppingcart.svg'}
                  alt="leaf and shopping cart icon"
                  width={51}
                  height={51}
               />
               <h1 className={`mt-4 mb-5 tracking-[4%] text-[1.375rem] text-primaryDarkBlue ${'orderSectionCardHeader'}`}>
                  You save.
               </h1>
               <p className={`text-[0.938rem] tracking-[3%] text-primaryGrey text-center ${'orderSectionCardText'}`}>
                  Browse our comfort sets and save 15% when you bundle.
               </p>  
            </div>

            <div className={`flex flex-col items-center justify-center max-w-[346px] w-full h-[321px] bg-primaryCream rounded-lg p-9 ${'orderSectionCard'}`}>
               <Image
                  src={'/truck-icon.svg'}
                  alt="truck icon"
                  width={68.5}
                  height={49}
               />
               <h1 className={`mt-4 mb-5 tracking-[4%] text-[1.375rem] text-primaryDarkBlue ${'orderSectionCardHeader'}`}>
                  We ship.
               </h1>
               <p className={`text-[0.938rem] tracking-[3%] text-primaryGrey text-center ${'orderSectionCardText'}`}>
                  We ship your items within 1-2 days of receiving your order.
               </p>  
            </div>

            <div className={`flex flex-col items-center justify-center max-w-[346px] w-full h-[321px] bg-primaryLightGrey rounded-lg p-9 ${'orderSectionCard'}`}>
               <Image
                  src={'/sun-and-moon.svg'}
                  alt="leaf and shopping cart icon"
                  width={60}
                  height={60}
               />
               <h1 className={`mt-4 mb-5 tracking-[4%] text-[1.375rem] text-primaryDarkBlue ${'orderSectionCardHeader'}`}>
                  You enjoy!
               </h1>
               <p className={`text-[0.938rem] tracking-[3%] text-primaryGrey text-center ${'orderSectionCardText'}`}>
                  Wear hernest around the house, out on the town, or in bed.
               </p>  
            </div>
         </div>
         <CTAButton />
      </section>
   )
}
