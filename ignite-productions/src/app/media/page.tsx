import { Metadata } from 'next';
import { MediaHero } from '@/components/sections/media-hero';
import { PodcastSection } from '@/components/sections/podcast-section';
import { EventHostingSection } from '@/components/sections/event-hosting-section';
import { MusicSection } from '@/components/sections/music-section';
import { YouTubeSection } from '@/components/sections/youtube-section';
import { DiscordSection } from '@/components/sections/discord-section';

export const metadata: Metadata = {
  title: 'Media | Igniting.ye',
  description: 'Explore our media content including podcasts, event hosting, and music production. Watch our latest videos and listen to inspiring conversations.',
  openGraph: {
    title: 'Media | Igniting.ye',
    description: 'Explore our media content including podcasts, event hosting, and music production.',
    url: '/media',
  },
};

export default function MediaPage() {
  return (
    <>
      <MediaHero />
      <PodcastSection />
      <EventHostingSection />
      <MusicSection />
      <YouTubeSection />
      <DiscordSection />
    </>
  );
}
