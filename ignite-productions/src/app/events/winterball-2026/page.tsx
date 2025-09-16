import { Metadata } from 'next';
import { WinterBall2026Hero } from '@/components/sections/winterball-2026-hero';
import { EventDetails } from '@/components/sections/event-details';
import { PricingSection } from '@/components/sections/pricing-section';
import { TestimonialsSection } from '@/components/sections/testimonials-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Winter Ball 2026 | Igniting.ye',
  description: 'Join us for an unforgettable evening of elegance, worship, and celebration at Winter Ball 2026. Pre-order your tickets now for early bird pricing.',
  keywords: [
    'winter ball 2026',
    'formal event',
    'christian event',
    'elegant dinner',
    'worship celebration',
    'pre-order tickets',
  ],
};

export default function WinterBall2026Page() {
  return (
    <>
      <WinterBall2026Hero />
      <EventDetails />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
