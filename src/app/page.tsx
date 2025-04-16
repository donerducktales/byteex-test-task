import AboutSection from "@/layouts/AboutSection/AboutSection";
import BenefitSection from "@/layouts/BenefitSection/BenefitSection";
import CTASection from "@/layouts/CTASection/CTASection";
import FAQSection from "@/layouts/FAQSection/FAQSection";
import HeroSection from "@/layouts/HeroSection/HeroSection";
import InfoSection from "@/layouts/InfoSection/InfoSection";
import OrderSection from "@/layouts/OrderSection/OrderSection";
import ReviewSection from "@/layouts/ReviewSection/ReviewSection";
import UserSection from "@/layouts/UserSection/UserSection";

export default function Home() {
   return (
      <main className={`flex flex-col items-center ${'main'}`}>
         <HeroSection />
         <ReviewSection />
         <BenefitSection />
         <AboutSection />
         <OrderSection />
         <UserSection />
         <FAQSection />
         <InfoSection />
         <CTASection />
      </main>
   );
}
