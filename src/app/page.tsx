import BenefitSection from "@/layouts/BenefitSection/BenefitSection";
import HeroSection from "@/layouts/HeroSection/HeroSection";
import ReviewSection from "@/layouts/ReviewSection/ReviewSection";

export default function Home() {
   return (
      <main className={`flex flex-col items-center ${'main'}`}>
         <HeroSection />
         <ReviewSection />
         <BenefitSection />
      </main>
   );
}
