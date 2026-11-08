import { Metadata } from 'next';
import Link from 'next/link';
import { cities } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Syndic de copropriété Hauts-de-Seine, Yvelines | Harmonia Syndic',
  description:
    'Harmonia Syndic, votre syndic de copropriété dans les Hauts-de-Seine (92), Yvelines (78) et Seine-et-Marne (77). Neuilly-sur-Seine, Boulogne-Billancourt, Levallois-Perret, Versailles, Saint-Germain-en-Laye. Audit gratuit, réponse sous 24h.',
  keywords: [
    'syndic copropriété Hauts-de-Seine',
    'syndic copropriété Yvelines',
    'syndic Neuilly-sur-Seine',
    'syndic Boulogne-Billancourt',
    'syndic Levallois-Perret',
    'syndic Versailles',
    'syndic Saint-Germain-en-Laye',
    'gestion copropriété 92',
    'gestion copropriété 78',
    'charges copropriété',
    'audit copropriété gratuit',
  ],
};

export default function SyndicCoproprieteIndex() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#0E7377] to-[#0E7377] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Votre syndic de copropriété partout en France
          </h1>
          <p className="text-lg text-[#FDF0EB] max-w-2xl">
            Harmonia Syndic gère vos copropriétés avec professionnalisme et transparence. Découvrez nos services locaux dans les principales villes françaises.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Intro Section */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mb-8">
            Depuis plusieurs années, Harmonia Syndic accompagne les copropriétaires et les syndics dans la gestion de leurs immeubles. Avec une présence locale dans les grandes villes françaises, nous offrons une expertise pointue et une approche personnalisée pour chaque copropriété.
          </p>
        </section>

        {/* Cities Grid */}
        <section>
          <h2 className="text-3xl font-bold text-[#0E7377] mb-12">Nos villes d'intervention</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/syndic-copropriete/${city.slug}`}
                className="group"
              >
                <div className="h-full bg-white border-2 border-[#FDF0EB] rounded-lg p-6 hover:border-[#0E7377] hover:shadow-lg transition-all duration-300">
                  {/* City Header */}
                  <div className="mb-4 pb-4 border-b border-[#FDF0EB]">
                    <h3 className="text-2xl font-bold text-[#0E7377] group-hover:text-[#0E7377] transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-gray-600">{city.department}</p>
                  </div>

                  {/* Stats */}
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-start">
                      <span className="text-gray-700 font-medium">Copropriétés dans la ville:</span>
                      <span className="text-[#C4A35A] font-bold">{city.numberOfCopros.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-700 font-medium">Charges moyennes:</span>
                      <span className="text-[#C4A35A] font-bold">
                        {city.averageCharges.toLocaleString()} €/an
                      </span>
                    </div>
                    <div className="flex justify-between items-start">
                      <span className="text-gray-700 font-medium">Population:</span>
                      <span className="text-gray-600">{city.population}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-[#FDF0EB]">
                    <span className="inline-flex items-center text-[#0E7377] font-semibold group-hover:translate-x-1 transition-transform">
                      En savoir plus
                      <span className="ml-2">→</span>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Trust Section */}
        <section className="mt-20 bg-[#FDF0EB] rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold text-[#0E7377] mb-8">Pourquoi faire confiance à Harmonia Syndic ?</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl mb-4">👥</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Équipes locales</h3>
              <p className="text-gray-700">
                Des professionnels présents sur le terrain connaissant les spécificités de chaque région.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-4">📊</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Transparence financière</h3>
              <p className="text-gray-700">
                Comptes détaillés et communications claires sur l'utilisation des charges de copropriété.
              </p>
            </div>

            <div>
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">Services complets</h3>
              <p className="text-gray-700">
                De la gestion administrative à la maintenance, nous gérons tous les aspects de votre immeuble.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-20 text-center">
          <h2 className="text-3xl font-bold text-[#0E7377] mb-6">
            Prêt à confier votre copropriété à des experts ?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contactez nos équipes pour un devis gratuit et sans engagement. Harmonia Syndic adapte ses solutions à votre situation.
          </p>
          <Link
            href="/demande-devis"
            className="inline-block bg-[#C4A35A] hover:bg-[#B39349] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            Demander un devis gratuit
          </Link>
        </section>
      </main>

      {/* Footer note */}
      <div className="bg-gray-50 mt-20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-600 text-center">
            Harmonia Syndic est votre partenaire de confiance pour la gestion de copropriété dans toute la France. Sélectionnez votre ville pour découvrir nos services spécifiques.
          </p>
        </div>
      </div>
    </div>
  );
}
