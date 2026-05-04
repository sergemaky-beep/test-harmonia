import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatBot from '@/components/ChatBot';
import WhatsAppButton from '@/components/WhatsAppButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harmonia Syndic & Gestion | Syndic de copropriété Hauts-de-Seine, Yvelines',
  description: 'Harmonia Syndic & Gestion, cabinet indépendant membre du réseau White Bird. Syndic de copropriété dans les Hauts-de-Seine (92), Yvelines (78) et Seine-et-Marne (77). Neuilly-sur-Seine, Boulogne-Billancourt, Versailles, Levallois-Perret. Audit gratuit.',
  keywords: 'syndic de copropriété, Harmonia Syndic, gestion copropriété, syndic Hauts-de-Seine, syndic Yvelines, syndic Neuilly-sur-Seine, syndic Boulogne-Billancourt, syndic Versailles, syndic Levallois-Perret, syndic Saint-Germain-en-Laye, gestion locative, White Bird, charges copropriété, administrateur de biens, audit copropriété gratuit',
  openGraph: {
    title: 'Harmonia Syndic & Gestion | Syndic de copropriété 92, 78, 77',
    description: 'Syndic engagé, humain et ultra-performant. Hauts-de-Seine, Yvelines, Seine-et-Marne. Membre du réseau White Bird. Audit gratuit.',
    type: 'website',
    locale: 'fr_FR',
    url: 'https://harmonia-syndic.fr',
    siteName: 'Harmonia Syndic & Gestion',
    images: [
      {
        url: 'https://harmonia-syndic.fr/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Harmonia Syndic & Gestion – Syndic de copropriété Hauts-de-Seine, Yvelines, Seine-et-Marne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Harmonia Syndic & Gestion | Syndic de copropriété 92, 78, 77',
    description: 'Syndic engagé, humain et ultra-performant. Hauts-de-Seine, Yvelines, Seine-et-Marne. Membre du réseau White Bird. Audit gratuit.',
    images: ['https://harmonia-syndic.fr/images/og-image.png'],
  },
  alternates: {
    canonical: 'https://harmonia-syndic.fr',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://harmonia-syndic.fr',
    name: 'Harmonia Syndic & Gestion',
    description: 'Cabinet indépendant de syndic de copropriété, membre du réseau White Bird. Gestion administrative, financière et technique de votre copropriété dans les Hauts-de-Seine, Yvelines et Seine-et-Marne.',
    url: 'https://harmonia-syndic.fr',
    telephone: '+33189714354',
    email: 'harmonia.syndic@whitebird.immo',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '144 avenue Charles de Gaulle',
      addressLocality: 'Neuilly-sur-Seine',
      postalCode: '92200',
      addressRegion: 'Hauts-de-Seine',
      addressCountry: 'FR',
    },
    founder: {
      '@type': 'Person',
      name: 'Serge Maky',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine' },
      { '@type': 'AdministrativeArea', name: 'Yvelines' },
      { '@type': 'AdministrativeArea', name: 'Seine-et-Marne' },
      { '@type': 'City', name: 'Neuilly-sur-Seine' },
      { '@type': 'City', name: 'Boulogne-Billancourt' },
      { '@type': 'City', name: 'Levallois-Perret' },
      { '@type': 'City', name: 'Versailles' },
      { '@type': 'City', name: 'Le Vésinet' },
      { '@type': 'City', name: 'Saint-Germain-en-Laye' },
      { '@type': 'City', name: 'Poissy' },
      { '@type': 'City', name: 'Ozoir-la-Ferrière' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '19:00',
        description: 'Urgences',
      },
    ],
    sameAs: [
      'https://www.whitebird.immo/reseau/harmonia-syndic',
      'https://www.instagram.com/harmonia_syndic_et_gestion_/',
      'https://www.linkedin.com/company/109222050/',
      'https://www.facebook.com/share/1BEKAeeRNb/',
    ],
    memberOf: {
      '@type': 'Organization',
      name: 'Réseau White Bird',
      url: 'https://www.whitebird.immo',
    },
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-900`}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <ChatBot />
        <WhatsAppButton />
      </body>
    </html>
  );
}
