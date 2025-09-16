import { Metadata } from 'next';
import { AboutHero } from '@/components/sections/about-hero';
import { MissionSection } from '@/components/sections/mission-section';
import { TeamSection } from '@/components/sections/team-section';
import { ValuesSection } from '@/components/sections/values-section';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'About Us | Igniting.ye',
  description: 'Learn about Igniting.ye\'s mission to serve the body of Christ through excellence in music production, live events, and creative services.',
  keywords: [
    'about igniting.ye',
    'christian music production',
    'ministry services',
    'our mission',
    'our team',
    'our values',
  ],
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
      <CTASection />
    </>
  );
}
