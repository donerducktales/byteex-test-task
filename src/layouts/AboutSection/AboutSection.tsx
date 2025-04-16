import { inter } from "@/assets/fonts"
import { ArrowLongRightIcon } from "@heroicons/react/20/solid"
import Image from "next/image"

export default function AboutSection() {
   return (
      <section className={`w-full flex flex-col items-center px-5 bg-primaryLightGrey ${'aboutSection'}`}>
         <div className={`w-full max-w-[1324px] flex flex-row justify-between mt-[83px] mb-[56px] gap-12 ${'aboutSectionWrapper'}`}>
            <div className={`w-full max-lg:hidden ${'aboutSectionImage'}`}>
               <Image
                  src={'/aboutSection/about-section-main-photo.png'}
                  alt="about section main photo"
                  width={524}
                  height={664}
                  unoptimized={true}
               />
            </div>
            <div className={`flex flex-col lg:items-start items-center w-full ${'aboutSectionCol'}`}>
               <h1 className={`text-[2rem] text-primaryDarkBlue tracking-[4%] mb-8 ${'aboutSectionColHeader'}`}>
                  Be your best self.
               </h1>
                  <div className={`w-full flex justify-center max-lg:mb-12 lg:hidden ${'aboutSectionImage'}`}>
                     <Image
                        src={'/aboutSection/about-section-main-photo.png'}
                        alt="about section main photo"
                        width={524}
                        height={664}
                        unoptimized={true}
                     />
                  </div>
               <div className={`flex flex-col gap-6 text-[0.938rem] tracking-[3%] leading-6 text-secondaryGrey mb-8 ${'aboutSectionColText'}`}>
                  <p>
                     Hi! My name’s [Insert Name], and I founded [Insert] in ____. 
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 
                  </p>
                  <p>
                     Fusce non nibh luctus, dignissim risus quis, bibendum dolor. Donec placerat volutpat ligula, ac consectetur felis varius non. Aliquam a nunc rutrum, porttitor dolor eu, pellentesque est. Vivamus id arcu congue, faucibus libero nec, placerat ligula. 
                  </p>
                  <p>
                     Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed eu nisl a metus ultrices sodales. 
                  </p>
                  <p>
                     Fusce non ante velit. Sed auctor odio eu semper molestie. Nam mattis, sapien eget lobortis fringilla, eros ipsum tristique tellus, ac convallis urna massa at nibh. 
                  </p>
                  <p>
                     Duis non fermentum augue. Vivamus laoreet aliquam risus, sed euismod leo aliquam ut. Vivamus in felis eu lacus feugiat aliquam nec in sapien. 
                  </p>
                  <p>
                     Cras mattis varius mollis.
                  </p>
               </div>
               <button className={`max-w-[356px] h-[56px] w-full flex flex-row justify-center items-center bg-primaryDarkBlue text-white rounded-[5px] gap-4 ${inter.className} ${'aboutSectionColButton'}`}>
                  Customize Your Outfit
                  <ArrowLongRightIcon className="w-6 text-white"/>
               </button>
            </div>
         </div>
      </section>
   )
}
