'use client';

import { useState } from 'react';
import { Metadata } from 'next';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: 'Quelles sont vos zones d\'intervention ?',
    answer:
      'Nous intervenons dans les Hauts-de-Seine (92), les Yvelines (78) et l\'ouest de la Seine-et-Marne (77) : Neuilly-sur-Seine, Boulogne-Billancourt, Levallois-Perret, Versailles, Saint-Germain-en-Laye, Le Vésinet, Poissy, Ozoir-la-Ferrière.',
  },
  {
    question: 'Proposez-vous un audit gratuit de copropriété ?',
    answer:
      'Oui, nous réalisons un audit gratuit et sans engagement de votre copropriété : analyse des charges, des contrats en cours et des axes d\'optimisation. Contactez-nous au 01 89 71 43 54 ou sur harmonia-syndic.fr',
  },
  {
    question: 'Quel est votre délai de réponse ?',
    answer:
      'Nous garantissons une réponse à toutes les sollicitations en moins de 24h. Notre temps de réponse moyen aux emails est de 5h30. Astreinte urgences disponible 7j/7 de 9h à 19h.',
  },
  {
    question: 'Comment changer de syndic pour Harmonia Syndic ?',
    answer:
      'Le changement se vote en assemblée générale. Nous gérons l\'intégralité de la transition : préparation du dossier, présentation en AG, reprise des archives. Contactez-nous pour un accompagnement gratuit.',
  },
  {
    question: 'Êtes-vous membre d\'un réseau national ?',
    answer:
      'Oui, Harmonia Syndic & Gestion est membre du réseau White Bird, qui regroupe plus de 25 cabinets indépendants en France. Cela nous donne accès à des outils digitaux avancés, un réseau de prestataires nationaux et des standards de qualité élevés.',
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-lg overflow-hidden transition-all"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-50 flex items-center justify-between transition-colors"
            style={{ color: '#0E7377' }}
          >
            <span>{item.question}</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#0E7377' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Questions Fréquemment Posées
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Trouvez les réponses aux questions les plus courantes sur nos services
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion />
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#FDF0EB' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#0E7377' }}>
            Vous avez d'autres questions ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Notre équipe est disponible pour répondre à vos questions et discuter de vos besoins en matière de gestion de copropriété.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-transform hover:scale-105"
              style={{ backgroundColor: '#0E7377' }}
            >
              Nous contacter
            </a>
            <a
              href="tel:+33189714354"
              className="inline-block px-8 py-4 font-semibold rounded-lg border-2 transition-colors"
              style={{ color: '#0E7377', borderColor: '#0E7377' }}
            >
              Appeler : 01 89 71 43 54
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
