import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Demande de Devis Gratuit | Harmonia Syndic & Gestion',
  description: 'Obtenez une proposition personnalisée pour votre copropriété en quelques minutes. Harmonia Syndic vous propose un devis gratuit adapté à vos besoins.',
};

export default function DemandeDevisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
