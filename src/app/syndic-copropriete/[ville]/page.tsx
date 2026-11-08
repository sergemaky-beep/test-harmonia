import { Metadata } from 'next';
import Link from 'next/link';
import { getCityBySlug, getAllCitySlugs, cities } from '@/lib/cities';
import { notFound } from 'next/navigation';

interface Props {
  params: Promise<{ ville: string }>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const city = getCityBySlug(params.ville);

  if (!city) {
    return {
      title: 'Page non trouvée',
      description: 'La page que vous recherchez n\'existe pas.',
    };
  }

  return {
    title: `Syndic de copropriété à ${city.name} | Harmonia Syndic`,
    description: `Trouvez votre syndic de copropriété à ${city.name}. Gestion complète de copropriété, charges moyennes ${city.averageCharges}€/an. Devis gratuit et transparent.`,
    keywords: [
      `syndic ${city.name}`,
      `copropriété ${city.name}`,
      `gestion copropriété ${city.name}`,
      `charges copropriété ${city.name}`,
      `syndic de copropriété ${city.department}`,
    ],
    openGraph: {
      title: `Syndic de copropriété à ${city.name}`,
      description: `Services de gestion de copropriété à ${city.name}. Devis gratuit et transparent.`,
      type: 'website',
      url: `https://harmoniasyndic.fr/syndic-copropriete/${city.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((slug) => ({
    ville: slug,
  }));
}

export default async function CityPage(props: Props) {
  const params = await props.params;
  const city = getCityBySlug(params.ville);

  if (!city) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#0E7377] to-[#0E7377] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#FDF0EB] mb-2">Syndic de copropriété</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Harmonia Syndic — Votre syndic de copropriété à {city.name}
          </h1>
          <p className="text-lg text-[#FDF0EB] max-w-2xl">{city.description}</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Key Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#0E7377] mb-10">À propos de {city.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#FDF0EB] rounded-lg p-8">
              <div className="text-5xl font-bold text-[#C4A35A] mb-3">
                {city.population}
              </div>
              <h3 className="text-lg font-semibold text-[#0E7377]">Population</h3>
              <p className="text-gray-700 mt-2">
                Une ville dynamique avec une importante activité immobilière.
              </p>
            </div>

            <div className="bg-[#FDF0EB] rounded-lg p-8">
              <div className="text-5xl font-bold text-[#C4A35A] mb-3">
                {city.numberOfCopros.toLocaleString()}
              </div>
              <h3 className="text-lg font-semibold text-[#0E7377]">Copropriétés dans la ville (estimation)</h3>
              <p className="text-gray-700 mt-2">
                Ordre de grandeur du parc de copropriétés de la commune.
              </p>
            </div>

            <div className="bg-[#FDF0EB] rounded-lg p-8">
              <div className="text-5xl font-bold text-[#C4A35A] mb-3">
                {city.averageCharges.toLocaleString()} €
              </div>
              <h3 className="text-lg font-semibold text-[#0E7377]">Charges moyennes/an</h3>
              <p className="text-gray-700 mt-2">
                Charges estimées par lot annuelles à {city.name}.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Harmonia Section */}
        <section className="mb-16 py-12 border-t-2 border-b-2 border-[#FDF0EB]">
          <h2 className="text-3xl font-bold text-[#0E7377] mb-12">
            Pourquoi choisir Harmonia Syndic à {city.name} ?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Connaissance locale fine
                </h3>
                <p className="text-gray-700">
                  Notre équipe à {city.name} connaît les spécificités architecturales, les réglementations locales et les prestataires fiables de votre région.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">💰</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Maîtrise des charges
                </h3>
                <p className="text-gray-700">
                  Nous optimisons les dépenses de copropriété à {city.name} en comparant les devis et en négociant les contrats pour réduire les charges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🔒</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Transparence garantie
                </h3>
                <p className="text-gray-700">
                  À {city.name} comme ailleurs, nous produisons des comptes clairs et détaillés, accessible en ligne 24h/24 pour tous les copropriétaires.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-4xl flex-shrink-0">🚀</div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-2">
                  Services modernes et innovants
                </h3>
                <p className="text-gray-700">
                  Plateforme numérique, appels d'offres dématérialisés, suivi de travaux en temps réel : tout pour simplifier la gestion à {city.name}.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#0E7377] mb-10">
            Nos services à {city.name}
          </h2>

          <div className="bg-gradient-to-br from-[#FDF0EB] to-white rounded-lg p-10">
            <p className="text-gray-700 mb-6">
              Harmonia Syndic propose une gamme complète de services adaptés à vos copropriétés à {city.name} :
            </p>

            <ul className="grid md:grid-cols-2 gap-4">
              <li className="flex items-start gap-3">
                <span className="text-[#C4A35A] font-bold">✓</span>
                <span className="text-gray-700">
                  <strong>Gestion administrative :</strong> assemblées générales, procédures légales, courriers.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C4A35A] font-bold">✓</span>
                <span className="text-gray-700">
                  <strong>Gestion financière :</strong> budgets, appels de fonds, comptes annuels.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C4A35A] font-bold">✓</span>
                <span className="text-gray-700">
                  <strong>Gestion technique :</strong> maintenance, travaux, diagnostics.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C4A35A] font-bold">✓</span>
                <span className="text-gray-700">
                  <strong>Transition énergétique :</strong> audits, MaPrimeRénov', CEE.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C4A35A] font-bold">✓</span>
                <span className="text-gray-700">
                  <strong>Plateforme numérique :</strong> accès aux documents, consultation copropriétaires.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#C4A35A] font-bold">✓</span>
                <span className="text-gray-700">
                  <strong>Appels d'offres :</strong> sélection des prestataires à {city.name}.
                </span>
              </li>
            </ul>
          </div>
        </section>

        {/* Charges Section */}
        <section className="mb-16 py-12 bg-[#FDF0EB] rounded-lg px-8">
          <h2 className="text-3xl font-bold text-[#0E7377] mb-6">
            Charges de copropriété à {city.name}
          </h2>

          <p className="text-gray-700 mb-6">
            À {city.name}, les charges moyennes de copropriété s'élèvent à{' '}
            <strong>{city.averageCharges.toLocaleString()} € par lot et par an</strong>. Ce montant varie en fonction de :
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div>
              <h3 className="font-bold text-[#0E7377] mb-3">Facteurs qui influencent les charges :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• La taille et l'ancienneté de l'immeuble</li>
                <li>• La localisation précise à {city.name}</li>
                <li>• Les équipements collectifs (ascenseur, chauffage, etc.)</li>
                <li>• L'état général et les travaux en cours</li>
                <li>• La gestion des impayés et provisions</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-[#0E7377] mb-3">Comment nous réduisons vos charges :</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Négociation des contrats avec les prestataires</li>
                <li>• Mise en concurrence pour les appels d'offres</li>
                <li>• Optimisation énergétique et accompagnement aux aides</li>
                <li>• Prévention des dépenses inutiles</li>
                <li>• Gestion rigoureuse des réserves de copropriété</li>
              </ul>
            </div>
          </div>

          <Link
            href="/estimateur-charges"
            className="inline-block bg-[#C4A35A] hover:bg-[#B39349] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Utiliser notre estimateur de charges
          </Link>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#0E7377] mb-10">
            Questions fréquentes sur la copropriété à {city.name}
          </h2>

          <div className="space-y-4">
            {/* FAQ 1 */}
            <details className="border-2 border-[#FDF0EB] rounded-lg overflow-hidden">
              <summary className="bg-[#FDF0EB] px-6 py-4 cursor-pointer font-bold text-[#0E7377] flex items-center justify-between hover:bg-[#D6F0F2] transition-colors">
                <span>Comment changer de syndic de copropriété à {city.name} ?</span>
                <span>+</span>
              </summary>
              <div className="px-6 py-4 bg-white text-gray-700">
                <p className="mb-4">
                  Le changement de syndic à {city.name} doit être approuvé en assemblée générale par une majorité des copropriétaires. Voici les étapes :
                </p>
                <ol className="list-decimal list-inside space-y-2 mb-4">
                  <li>Recueil des demandes de changement</li>
                  <li>Inscription à l'ordre du jour de l'assemblée générale</li>
                  <li>Vote lors de l'assemblée</li>
                  <li>Approbation du nouveau syndic (délai d'un mois)</li>
                  <li>Transition administrative et remise des dossiers</li>
                </ol>
                <p>
                  <strong>Harmonia Syndic</strong> gère facilement cette transition à {city.name} pour assurer la continuité de service.
                </p>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="border-2 border-[#FDF0EB] rounded-lg overflow-hidden">
              <summary className="bg-[#FDF0EB] px-6 py-4 cursor-pointer font-bold text-[#0E7377] flex items-center justify-between hover:bg-[#D6F0F2] transition-colors">
                <span>Quel est le coût moyen d'un syndic à {city.name} ?</span>
                <span>+</span>
              </summary>
              <div className="px-6 py-4 bg-white text-gray-700">
                <p className="mb-4">
                  Les tarifs de syndic varient selon plusieurs critères à {city.name} :
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    <strong>Par lot :</strong> entre 60 € et 150 € HT par mois selon les services
                  </li>
                  <li>
                    <strong>Par m² :</strong> entre 1,50 € et 3,50 € HT par m² et par an
                  </li>
                  <li>
                    <strong>Charges supplétives :</strong> frais de gestion des travaux, syndics co-gestionnaires, etc.
                  </li>
                </ul>
                <p>
                  Harmonia Syndic propose à {city.name} des tarifs compétitifs avec une transparence complète des frais.
                </p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="border-2 border-[#FDF0EB] rounded-lg overflow-hidden">
              <summary className="bg-[#FDF0EB] px-6 py-4 cursor-pointer font-bold text-[#0E7377] flex items-center justify-between hover:bg-[#D6F0F2] transition-colors">
                <span>Quels sont mes droits en tant que copropriétaire à {city.name} ?</span>
                <span>+</span>
              </summary>
              <div className="px-6 py-4 bg-white text-gray-700">
                <p className="mb-4">
                  Selon la loi Alur et le Code civil, vous avez des droits importants comme copropriétaire à {city.name} :
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Droit de consultation des documents de gestion (comptes, procès-verbaux)</li>
                  <li>Droit de participer aux assemblées générales</li>
                  <li>Droit de voter sur les décisions importantes</li>
                  <li>Droit d'accès à la plateforme numérique de syndic</li>
                  <li>Droit de recours en cas de litige</li>
                  <li>Droit de demander une mise en concurrence des contrats</li>
                </ul>
                <p>
                  Harmonia Syndic respecte scrupuleusement ces droits et les facilite à {city.name}.
                </p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="border-2 border-[#FDF0EB] rounded-lg overflow-hidden">
              <summary className="bg-[#FDF0EB] px-6 py-4 cursor-pointer font-bold text-[#0E7377] flex items-center justify-between hover:bg-[#D6F0F2] transition-colors">
                <span>Comment réduire les charges de copropriété à {city.name} ?</span>
                <span>+</span>
              </summary>
              <div className="px-6 py-4 bg-white text-gray-700">
                <p className="mb-4">
                  Plusieurs leviers existent pour réduire vos charges à {city.name} :
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>
                    <strong>Transition énergétique :</strong> isolation, chauffage performant, LED
                  </li>
                  <li>
                    <strong>Aides publiques :</strong> MaPrimeRénov', CEE, éco-PTZ
                  </li>
                  <li>
                    <strong>Mise en concurrence :</strong> renégociation des contrats d'assurance, maintenance
                  </li>
                  <li>
                    <strong>Gestion rigoureuse :</strong> suivi des dépenses, lutte contre les impayés
                  </li>
                  <li>
                    <strong>Travaux collectifs :</strong> entretien préventif plutôt que curatif
                  </li>
                </ul>
                <p>
                  Notre équipe à {city.name} identifie ces opportunités et les met en œuvre pour vous.
                </p>
              </div>
            </details>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#0E7377] to-[#0E7377] rounded-lg p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt pour une meilleure gestion de copropriété à {city.name} ?
          </h2>
          <p className="text-lg mb-8 text-[#FDF0EB] max-w-2xl mx-auto">
            Demandez votre devis gratuit et sans engagement. Nos équipes vous rappelleront rapidement pour discuter de vos besoins spécifiques.
          </p>
          <Link
            href="/demande-devis"
            className="inline-block bg-[#C4A35A] hover:bg-[#B39349] text-white font-bold py-4 px-8 rounded-lg transition-colors duration-300"
          >
            Demander un devis gratuit pour {city.name}
          </Link>
        </section>
      </main>

      {/* Navigation to other cities */}
      <div className="bg-[#FDF0EB] py-12 px-4 mt-16">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-xl font-bold text-[#0E7377] mb-6">
            Retrouvez nos services dans d'autres villes
          </h3>
          <div className="flex flex-wrap gap-3">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((otherCity) => (
                <Link
                  key={otherCity.slug}
                  href={`/syndic-copropriete/${otherCity.slug}`}
                  className="px-4 py-2 bg-white border-2 border-[#0E7377] text-[#0E7377] rounded-lg hover:bg-[#0E7377] hover:text-white transition-colors font-medium"
                >
                  {otherCity.name}
                </Link>
              ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="bg-white py-8 px-4 border-t-2 border-[#FDF0EB]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-700 mb-4">
            Vous ne trouvez pas votre ville ? Contactez-nous pour vérifier notre couverture d'intervention.
          </p>
          <Link
            href="/contact"
            className="text-[#0E7377] font-bold hover:underline"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
