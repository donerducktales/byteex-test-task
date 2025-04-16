import Image from "next/image";

export default function InfoSection() {
   return (
      <section className={`bg-primaryLightGrey py-10 w-full flex flex-col items-center ${'infoSection'}`}>
         <h1 className={`text-[1.563rem] text-primaryDarkBlue text-center tracking-[4%] mb-6 ${'infoSectionHeader'}`}>
            Our total green impact
         </h1>
         <div className={`flex md:flex-row flex-col items-center justify-center md:gap-24 gap-12 ${'infoSectionBenefits'}`}>
            <div className={`flex flex-col items-center ${'infoSectionBenefit'}`}>
               <div className={`rounded-[100%] bg-[#E4E4E4] h-[42px] w-[42px] flex justify-center items-center mb-4 ${'infoSectionBenefitIcon'}`}>
                  <Image 
                     src={'/co2-icon.svg'}
                     alt="co2 icon"
                     width={30.63}
                     height={20.18}
                  />
               </div>
               <h1 className={`text-[1.375rem] font-semibold text-secondaryBlue tracking-[2%] mb-1 ${'infoSectionBenefitHeader'}`}>
                  3,927 kg
               </h1>
               <p className={`text-sm text-secondaryBlue tracking-[3%] ${'infoSectionBenefitText'}`}>
                  of CO2 saved
               </p>
            </div>

            <div className={`flex flex-col items-center ${'infoSectionBenefit'}`}>
               <div className={`rounded-[100%] bg-[#E4E4E4] h-[42px] w-[42px] flex justify-center items-center mb-4 ${'infoSectionBenefitIcon'}`}>
                  <Image 
                     src={'/h2o-icon.svg'}
                     alt="h2o icon"
                     width={22.49}
                     height={31}
                  />
               </div>
               <h1 className={`text-[1.375rem] font-semibold text-secondaryBlue tracking-[2%] mb-1 ${'infoSectionBenefitHeader'}`}>
                  2,546,167 days
               </h1>
               <p className={`text-sm text-secondaryBlue tracking-[3%] ${'infoSectionBenefitText'}`}>
                  of drinking water saved
               </p>
            </div>

            <div className={`flex flex-col items-center ${'infoSectionBenefit'}`}>
               <div className={`rounded-[100%] bg-[#E4E4E4] h-[42px] w-[42px] flex justify-center items-center mb-4 ${'infoSectionBenefitIcon'}`}>
                  <Image 
                     src={'/lightning-icon.svg'}
                     alt="lightning icon"
                     width={19}
                     height={28}
                  />
               </div>
               <h1 className={`text-[1.375rem] font-semibold text-secondaryBlue tracking-[2%] mb-1 ${'infoSectionBenefitHeader'}`}>
                  7,321 kWh
               </h1>
               <p className={`text-sm text-secondaryBlue tracking-[3%] ${'infoSectionBenefitText'}`}>
                  of energy saved
               </p>
            </div>
         </div>
      </section>
   )
}
