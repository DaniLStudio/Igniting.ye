import { Metadata } from 'next';
import { EventsHero } from '@/components/sections/events-hero';
import { EventsGrid } from '@/components/sections/events-grid';
import { UpcomingEvents } from '@/components/sections/upcoming-events';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Events | Igniting.ye',
  description: 'Discover upcoming events, concerts, and special gatherings. Join us for worship, fellowship, and celebration in Christ-centered community.',
  keywords: [
    'upcoming events',
    'winter ball 2025',
    'christian concerts',
    'worship events',
    'formal events',
    'community gatherings',
  ],
};

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <UpcomingEvents />
      <EventsGrid />
      <CTASection />
    </>
  );
}
