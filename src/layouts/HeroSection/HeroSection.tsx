"use client"

import { inter } from "@/assets/fonts";
import useViewPortSize from "@/hooks/useViewPortSize";
import { ArrowLongRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import styled from "styled-components";

const StyledListItem = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 10px;

   .styledListItemIcon {
      min-width: 31px;
      height: 31px;
      background-color: var(--primaryCream);
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
   }

   p {
      max-width: 425px;
      font-size: 0.938rem;
      color: var(--primaryGrey);
      letter-spacing: 3%;
      line-height: 23px;
      font-weight: 400px;
   }

   @media (max-width: 768px) {
      p {
         font-size: 0.813rem;
      }
   }
`;

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
                     <StyledListItem>
                        <div className="styledListItemIcon">
                           <Image 
                              src={'/heroSection/sun-and-moon.svg'}
                              alt="sun and moon icon"
                              width={20.5}
                              height={20.5}
                           />
                        </div>
                        <p>
                           Beautiful, comfortable loungewear for day or night.
                        </p>
                     </StyledListItem>
                     <StyledListItem>
                        <div className="styledListItemIcon">
                           <Image 
                              src={'/heroSection/leaf-and-shoppingcart.svg'}
                              alt="sun and moon icon"
                              width={20.5}
                              height={20.5}
                           />
                        </div>
                        <p>
                           No wasteful extras, like tags or plastic packaging.
                        </p>
                     </StyledListItem>
                     <StyledListItem>
                        <div className="styledListItemIcon">
                           <Image 
                              src={'/heroSection/waves.svg'}
                              alt="sun and moon icon"
                              width={14}
                              height={13}
                           />
                        </div>
                        <p>
                           Our signature fabric is incredibly comfortable — unlike anything you’ve ever felt.
                        </p>
                     </StyledListItem>
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
