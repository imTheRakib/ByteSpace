import { CoursesSection } from "@/components/home/CoursesSection";
import { CtaSection } from "@/components/home/CtaSection";
import { GrowthSection } from "@/components/home/GrowthSection";
import { HeroSection } from "@/components/home/HeroSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <PartnersSection />
        <CoursesSection />
        <GrowthSection />
        <CtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
}
