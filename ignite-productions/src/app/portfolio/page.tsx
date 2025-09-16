import { Metadata } from 'next';
import { PortfolioHero } from '@/components/sections/portfolio-hero';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { StatsSection } from '@/components/sections/stats-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Portfolio | Igniting.ye',
  description: 'Explore our portfolio of successful events, music productions, and creative projects. See how we bring Christ-centered excellence to every project.',
  keywords: [
    'event portfolio',
    'music production examples',
    'live event photos',
    'christian event planning',
    'worship production',
    'formal events',
  ],
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioHero />
      <PortfolioGrid />
      <StatsSection />
      <CTASection />
    </>
  );
}
