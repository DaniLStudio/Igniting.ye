import { Metadata } from 'next';
import { PurchaseHero } from '@/components/sections/purchase-hero';
import { TicketForm } from '@/components/sections/ticket-form';
import { PaymentSection } from '@/components/sections/payment-section';
import { EventSummary } from '@/components/sections/event-summary';

export const metadata: Metadata = {
  title: 'Purchase Tickets - Winter Ball 2026 | Igniting.ye',
  description: 'Pre-order your tickets for Winter Ball 2026. Secure your spot at this exclusive formal event with early bird pricing.',
  keywords: [
    'winter ball 2026 tickets',
    'purchase tickets',
    'formal event tickets',
    'christian event tickets',
    'early bird pricing',
  ],
};

export default function PurchasePage() {
  return (
    <>
      <PurchaseHero />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-width-content container-padding section-padding">
        <div className="lg:col-span-2">
          <TicketForm />
        </div>
        <div className="lg:col-span-1">
          <EventSummary />
        </div>
      </div>
      <PaymentSection />
    </>
  );
}
