import CTAButton from "@/components/CTAButton";
import Image from "next/image";
import starUrl from '../../../public/star.svg';
import { inter } from "@/assets/fonts";

interface Users {
   id: number,
   name: string,
   review: string,
}

export default function UserSection() {
   const users: Users[] = [
      {
         id: 0,
         name: 'Jane, S.',
         review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
      },
      {
         id: 1,
         name: 'John, V.',
         review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales.',
      },
      {
         id: 2,
         name: 'Ivan, M.',
         review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed sollicitudin dolor, non sodales justo. Aenean eget aliquet mi.',
      },
   ];

   const stars = Array(5).fill(starUrl);
   
   return (
      <section className={`w-full mt-[74px] flex flex-col items-center ${'userSection'}`}>
         <h1 className={`tracking-[4%] text-[2rem] text-primaryDarkBlue text-center mx-6 mb-4 ${'userSectionHeader'}`}>
            What are our fans saying?
         </h1>
         <p className={`text-[0.938rem] tracking-[3%] text-center mx-6 text-primaryGrey max-w-[613px] leading-6 mb-[55px] ${'userSectionText'}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. Fusce non nibh luctus.
         </p>
         <Image 
            src={'/userSection/users.png'}
            alt="users"
            width={1465}
            height={262.53}
            className="mb-20"
         />
         <div className={`flex lg:flex-row flex-col items-center justify-center gap-[42px] w-full mb-16 px-4 ${'userSectionReviews'}`}>
            {users.map(el => 
               <div 
                  key={el.id}
                  className={`px-10 py-[31px] flex flex-col rounded-lg shadow-2xl items-start max-w-[338px] w-full gap-3 ${'userSectionReviewCard'}`}
               >
                  <div className={`flex flex-row gap-3 ${'userSectionReviewCardInfo'}`}>
                     <div className={`w-10 h-10 rounded-[100%] bg-secondaryBlue ${'reviewCardInfoAvatar'}`}>
                     </div>
                     <div className={`flex flex-col gap-1 ${'reviewCardInfoUser'}`}>
                        <div className={`flex flex-row items-center ${'reviewCardInfoUserStars'}`}>
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
                        <h1 className={`text-[0.968rem] text-primaryGrey tracking-[3%] ${'reviewCardInfoUserName'}`}>
                           {el.name}
                        </h1>
                     </div>
                  </div>
                  <p className={`text-xs text-primaryGrey tracking-[4%] leading-6 ${inter.className} ${'userSectionReviewCardText'}`}>
                     {el.review}
                  </p>
               </div>
            )}
         </div>
         <div className="px-4">
            <CTAButton />
         </div>
      </section>
   )
}
