import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nos services de gestion de copropriété | Harmonia Syndic & Gestion',
  description: 'Découvrez nos services complets de gestion administrative, financière, technique et conseil pour votre copropriété.',
};

interface ServiceItem {
  title: string;
  icon: string;
  description: string;
  items: string[];
}

const serviceItems: ServiceItem[] = [
  {
    title: 'Gestion administrative',
    icon: '📋',
    description: 'Nous assurons le pilotage administratif complet de votre copropriété avec professionnalisme et rigueur.',
    items: [
      'Convocation et organisation des AG',
      'Exécution des décisions de l\'AG',
      'Tenue des registres',
      'Gestion des contrats de prestataires',
      'Interface avec les administrations',
      'Suivi des sinistres et assurances',
    ],
  },
  {
    title: 'Gestion financière',
    icon: '💰',
    description: 'Une gestion financière transparente et maîtrisée pour assurer l\'équilibre budgétaire de votre immeuble.',
    items: [
      'Budget prévisionnel',
      'Appels de fonds trimestriels',
      'Comptabilité transparente',
      'Accès en ligne aux comptes',
      'Recouvrement des impayés',
      'Présentation annuelle des comptes',
    ],
  },
  {
    title: 'Gestion technique',
    icon: '🔧',
    description: 'Un suivi technique proactif pour maintenir votre immeuble en excellent état et anticiper les travaux.',
    items: [
      'Entretien courant des parties communes',
      'Suivi et pilotage des travaux',
      'Plan pluriannuel de travaux',
      'Diagnostic technique global',
      'Rénovation énergétique',
      'Carnet d\'entretien numérique',
    ],
  },
  {
    title: 'Conseil et accompagnement',
    icon: '💡',
    description: 'Un accompagnement expertise pour optimiser votre gestion et résoudre les enjeux complexes de copropriété.',
    items: [
      'Audit de charges',
      'Optimisation des contrats fournisseurs',
      'Accompagnement juridique',
      'Médiation entre copropriétaires',
      'Transition de syndic',
      'Mise en conformité réglementaire',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#0E7377' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Nos services de gestion de copropriété
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Une expertise complète pour une copropriété séreine et bien gérée
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-16">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="border-l-4 pl-8"
              style={{ borderLeftColor: '#0E7377' }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="text-4xl">{service.icon}</div>
                <div>
                  <h2
                    className="text-3xl font-bold mb-3"
                    style={{ color: '#0E7377' }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-gray-700 text-lg mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span
                          className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold"
                          style={{ backgroundColor: '#C4A35A' }}
                        >
                          ✓
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#FDF0EB' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#0E7377' }}>
            Découvrez comment Harmonia Syndic & Gestion peut transformer la gestion de
            votre copropriété
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour une consultation sans engagement et explorez
            comment nos services peuvent répondre à vos besoins spécifiques.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-transform hover:scale-105"
            style={{ backgroundColor: '#0E7377' }}
          >
            Demander un devis
          </a>
        </div>
      </section>
    </div>
  );
}
