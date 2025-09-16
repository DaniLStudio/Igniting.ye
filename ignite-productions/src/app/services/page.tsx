import { Metadata } from 'next';
import { ServicesHero } from '@/components/sections/services-hero';
import { ServicesGrid } from '@/components/sections/services-grid';
import { ProcessSection } from '@/components/sections/process-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Services | Igniting.ye',
  description: 'Professional music production, live shows, event planning, and digital marketing services. Christ-centered excellence in every project.',
  keywords: [
    'music production services',
    'live event production',
    'church event planning',
    'worship production',
    'digital marketing',
    'christian music services',
  ],
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
