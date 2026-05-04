import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contactez-nous | Harmonia Syndic & Gestion',
  description: 'Contactez Harmonia Syndic & Gestion pour toute demande concernant la gestion de votre copropriété. Notre équipe est disponible 7j/7.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
