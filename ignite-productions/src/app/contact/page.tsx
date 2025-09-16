import { Metadata } from 'next';
import { ContactHero } from '@/components/sections/contact-hero';
import { ContactForm } from '@/components/sections/contact-form';
import { ContactInfo } from '@/components/sections/contact-info';
import { CTASection } from '@/components/sections/cta-section';

export const metadata: Metadata = {
  title: 'Contact Us | Igniting.ye',
  description: 'Get in touch with Igniting.ye for your next event, music production, or creative project. We\'re here to help bring your vision to life.',
  keywords: [
    'contact igniting.ye',
    'book consultation',
    'event planning contact',
    'music production inquiry',
    'get quote',
    'project consultation',
  ],
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
      <ContactInfo />
      <CTASection />
    </>
  );
}
