import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
