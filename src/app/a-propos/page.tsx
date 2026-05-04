import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'À propos d\'Harmonia Syndic | Gestion de copropriété',
  description: 'En savoir plus sur Harmonia Syndic, notre mission, nos valeurs et notre engagement envers la gestion de copropriété de qualité.',
};

interface Value {
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  initials: string;
  role: string;
  description: string;
  bgColor: string;
}

const values: Value[] = [
  {
    title: 'Transparence',
    description:
      'Nous vous tenons informés à chaque étape avec des reportings clairs et détaillés.',
  },
  {
    title: 'Optimisation',
    description:
      'Nous optimisons vos charges et ressources pour une gestion efficace de votre copropriété.',
  },
  {
    title: 'Efficacité',
    description:
      'Une gestion rigoureuse et performante qui répond à tous vos besoins de copropriété.',
  },
  {
    title: 'Réactivité',
    description:
      'Une équipe disponible et réactive pour répondre à vos demandes rapidement.',
  },
];

const teamMembers: TeamMember[] = [
  {
    name: 'Serge Maky',
    initials: 'SM',
    role: 'Directeur du cabinet',
    description:
      'Directeur du cabinet avec une expertise reconnue en gestion de copropriété. Serge pilote la stratégie globale et assure l\'excellence de nos services.',
    bgColor: '#0E7377',
  },
  {
    name: 'Marc Dupont',
    initials: 'MD',
    role: 'Responsable gestion administrative et financière',
    description:
      'Spécialiste en comptabilité et gestion administrative. Marc garantit la conformité et la transparence de tous nos processus.',
    bgColor: '#C4A35A',
  },
  {
    name: 'Céline Renault',
    initials: 'CR',
    role: 'Responsable gestion technique',
    description:
      'Ingénieure technique expérimentée. Céline supervise tous les projets de travaux et d\'amélioration technique.',
    bgColor: '#0E7377',
  },
];

const commitments = [
  { icon: '⏱️', text: 'Réponse sous 24h à toute demande' },
  { icon: '🔐', text: 'Accès en ligne 24/7 à vos documents' },
  { icon: '📊', text: 'Rapport annuel détaillé et transparent' },
  { icon: '✨', text: 'Satisfaction garantie de nos copropriétaires' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#0E7377' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            À propos d'Harmonia Syndic
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Notre mission : une copropriété sereine et bien gérée
          </p>
        </div>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#0E7377' }}>
            Notre histoire
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              Harmonia Syndic a été créée sur la conviction fondamentale que la
              gestion de copropriété doit être transparente, réactive et
              profondément humaine. Nous avons observé les frustrations des
              copropriétaires face à une gestion souvent opaque et des délais
              administratifs interminables.
            </p>
            <p>
              C'est pourquoi nous avons bâti Harmonia Syndic autour de trois
              piliers : écouter nos clients, innover dans nos processus et
              maintenir une excellence opérationnelle constante. Chaque membre
              de notre équipe partage cette vision d'une gestion de copropriété
              qui apaise plutôt qu'elle ne stress.
            </p>
            <p>
              Aujourd'hui, Harmonia Syndic & Gestion accompagne les copropriétés avec une
              satisfaction client remarquable et une relation de confiance
              durable. Nous sommes membres du réseau White Bird, un réseau de plus de 25 cabinets indépendants en France.
            </p>
          </div>
        </div>
      </section>

      {/* Fondateur - Serge Maky */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0E7377' }}>
                Serge Maky
              </h2>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#0E7377' }}>
                Directeur du cabinet Harmonia Syndic
              </h3>
              <p className="text-gray-700 mb-4">
                Directeur du cabinet Harmonia Syndic, nous avons intégré le réseau White Bird pour bénéficier des meilleurs outils pour son quotidien et d'une équipe support dédiée.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/serge-maky.png"
                alt="Serge Maky - Directeur du cabinet Harmonia Syndic"
                width={300}
                height={400}
                className="rounded-lg shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#FDF0EB' }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#0E7377' }}>
            Nos valeurs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-lg shadow-md"
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: '#0E7377' }}
                >
                  {value.title}
                </h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Équipe - White Bird */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#FDF0EB' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#0E7377' }}>
                Notre équipe
              </h2>
              <p className="text-gray-700 mb-4">
                Les gestionnaires membres du réseau white Bird sont sélectionnés pour leurs connaissances en matière immobilière, juridique et technique et ont une excellente connaissance de leur marché immobilier local.
              </p>
              <p className="text-gray-700 mb-4">
                Pour vous accompagner dans la gestion de votre copropriété le réseau white Bird met également à votre disposition un <span className="font-semibold text-[#0E7377]">comptable référent</span>, un <span className="font-semibold text-[#0E7377]">support client</span>, et une personne <span className="font-semibold text-[#0E7377]">responsable de l'intégration de la copropriété</span>.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/equipe.png"
                alt="L'équipe Harmonia Syndic & Gestion - Membres du réseau White Bird"
                width={500}
                height={400}
                className="rounded-2xl shadow-lg object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Engagements */}
      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#FDF0EB' }}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#0E7377' }}>
            Nos engagements envers vous
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commitments.map((commitment, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{commitment.icon}</div>
                <p className="text-lg text-gray-700 pt-2">{commitment.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#0E7377' }}>
            Prêt à confier la gestion de votre copropriété à des experts ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contactez-nous pour discuter de vos besoins et découvrir comment
            Harmonia Syndic & Gestion peut apporter l'harmonie dans la gestion de votre
            immeuble.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 text-white font-semibold rounded-lg transition-transform hover:scale-105"
            style={{ backgroundColor: '#0E7377' }}
          >
            Nous contacter
          </a>
        </div>
      </section>
    </div>
  );
}
