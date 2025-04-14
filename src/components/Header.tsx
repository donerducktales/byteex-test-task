'use client'

import { inter } from "@/assets/fonts";
import useViewPortSize from "@/hooks/useViewPortSize";

export default function Header() {
   const windowSize = useViewPortSize();
   
   return (
      <header className={`h-9 bg-primaryCream flex justify-center items-center ${'header'}`}>
         <p className={`text-[0.688rem] text-primaryGrey text-center mx-4 tracking-[8%] ${inter.className}`}>
            {windowSize.width > 768 ? 'CONSCIOUSLY MADE BUTTER SOFT STAPLES FOR EVERY DAY (OR NIGHT) | FREE SHIPPING on orders > $200 | easy 45 day return window.' : 'FREE SHIPPING on orders > $200'}
         </p>
      </header>
   )
}
