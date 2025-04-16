'use client'

import Image from "next/image";
import { useState } from "react";

interface Questions {
   id: number,
   header: string,
   answear: string
}

export default function FAQSection() {
   const questions: Questions[] = [
      {
         id: 0,
         header: 'lorem ipsum dolor sit amet 1',
         answear: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 1'
      },
      {
         id: 1,
         header: 'lorem ipsum dolor sit amet 2',
         answear: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 2'
      },
      {
         id: 2,
         header: 'lorem ipsum dolor sit amet 3',
         answear: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat. 3'
      },
      {
         id: 3,
         header: 'lorem ipsum dolor sit amet',
         answear: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.'
      },
      {
         id: 4,
         header: 'lorem ipsum dolor sit amet',
         answear: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.'
      },
      {
         id: 5,
         header: 'lorem ipsum dolor sit amet',
         answear: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.'
      },
      {
         id: 6,
         header: 'lorem ipsum dolor sit amet',
         answear: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lobortis sapien facilisis tincidunt pellentesque. In eget ipsum et felis finibus consequat.'
      },
   ];
   
   const [answear, setAnswear] = useState<number | null>(null);

   const handleClick = (id: number) => {
      setAnswear(prevId => (prevId === id ? null : id));
   };

   return (
      <section className={`w-full mt-[110px] mb-[42px] flex flex-col items-center ${'FAQSection'}`}>
         <div className={`max-w-[1304px] xl:gap-12 w-full px-5 flex flex-row justify-between ${'FAQSectionWrapper'}`}>
            <div className={`w-full flex flex-col xl:items-start items-center ${'FAQSectionQuestions'}`}>
               <h1 className={`text-center text-[2rem] text-primaryDarkBlue tracking-[4%] leading-10 mb-16 ${'FAQSectionQuestionsHeader'}`}>
                  Frequently asked questions.
               </h1>
               {
                  questions.map(el => 
                     <div
                        key={el.id}
                        className={`max-w-[630px] w-full border-t border-b border-[#EAEAEA] ${'FAQSectionQuestionCard'}`}
                     >
                        <div className={`flex flex-row justify-between items-center ${'QuestionCardHeaderAndButton'}`}>
                           <h1 className={`tracking-[4%] text-lg text-primaryDarkBlue ${'QuestionCardHeader'}`}>
                              {el.header}
                           </h1>
                           <button 
                              className={`text-primaryDarkBlue text-[2.6rem] ${'QuestionCardButton'}`}
                              onClick={() => handleClick(el.id)}
                           >
                              {answear === el.id ? '—' : '+'}
                           </button>
                        </div>
                        <p className={`mb-6 max-w-[567px] w-full text-[0.968rem] text-primaryGrey tracking-[3%] leading-6 ${'QuestionCardAnswear'}`}>
                           {answear === el.id ? el.answear : ''}
                        </p>
                     </div>
                  )
               }
            </div>
            <Image 
               src={'/faqSection/faq-section-main-photo.png'}
               alt="FAQ Section main photo"
               width={430}
               height={640}
               className="max-w-[430px] w-full max-h-[640px] h-full max-xl:hidden"
            />
         </div>
      </section>
   );
}
