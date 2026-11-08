import StatsBar from '@/components/StatsBar';
import FeatureCard from '@/components/FeatureCard';
import CTASection from '@/components/CTASection';
import GuideCard from '@/components/GuideCard';
import GoogleReviews from '@/components/GoogleReviews';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-primary text-white py-20 md:py-32">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Votre patrimoine mérite l'excellence.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Un syndic engagé, humain et ultra-performant. Cabinet indépendant, membre du réseau White Bird.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-accent text-white hover:opacity-90">
              Demander un devis gratuit
            </button>
            <button className="btn-outline text-white border-white hover:bg-white hover:text-secondary">
              Estimer vos charges
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsBar />

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nos services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Un syndic de proximité, de la gestion courante aux travaux
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon="🏢"
              title="Syndic de copropriété"
              description="Gestion administrative, financière et technique de votre copropriété avec un gestionnaire dédié, présent 70% du temps sur le terrain."
            />
            <FeatureCard
              icon="🗳️"
              title="Assemblées générales"
              description="Préparation des convocations, tenue de l'AG, procès-verbaux et exécution rapide des décisions votées."
            />
            <FeatureCard
              icon="🛠️"
              title="Travaux & entretien"
              description="Mise en concurrence des entreprises, suivi des chantiers et gestion des urgences avec un réseau d'artisans qualifiés."
            />
            <FeatureCard
              icon="📊"
              title="Comptabilité transparente"
              description="Budget, appels de fonds et comptes accessibles en ligne à tout moment par chaque copropriétaire."
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-8">
            Gestion locative et projets d&apos;achat ou de vente : sur demande, assurés par nos partenaires.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="pourquoi" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Pourquoi choisir Harmonia Syndic ?
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="card p-8 border-t-4 border-accent">
              <div className="text-4xl mb-4">🔓</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Transparence</h3>
              <p className="text-gray-600">
                Un accompagnement en toute transparence grâce à notre espace client. Communication privilégiée avec le Conseil Syndical.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-accent">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Optimisation</h3>
              <p className="text-gray-600">
                Des charges optimisées. Audit des contrats lors de la reprise. Des experts métiers à votre service.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-accent">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Efficacité</h3>
              <p className="text-gray-600">
                Les meilleurs partenaires métiers au service de votre copropriété. Un réseau de fournisseurs locaux réactifs.
              </p>
            </div>

            <div className="card p-8 border-t-4 border-accent">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Réactivité</h3>
              <p className="text-gray-600">
                Équipe dédiée à votre copropriété, astreinte 7/7. Réponse aux mails en 5h30 en moyenne. Gestionnaire engagé sur le terrain.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* White Bird Network Section */}
      <section className="section-padding bg-primary text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Membre du réseau White Bird
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed mb-8">
              Le réseau White Bird c'est plus de 25 cabinets indépendants partout en France qui exercent le métier d'Administrateur de Biens et qui le transforment de l'intérieur avec succès en mettant l'accent sur l'efficacité et la proximité.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start">
              <div className="text-2xl mr-4 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Accès à toutes les informations en 2 clics</h3>
                <p className="text-blue-100">Système centralisé et transparent</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Support client et ligne d'urgence 7/7</h3>
                <p className="text-blue-100">Disponibilité garantie</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Comptabilité transparente en temps réel</h3>
                <p className="text-blue-100">Traçabilité complète</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Réseau de fournisseurs nationaux de premier rang</h3>
                <p className="text-blue-100">Qualité et compétitivité</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Outils de pilotage dédiés aux conseils syndicaux</h3>
                <p className="text-blue-100">Gouvernance facilitée</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="text-2xl mr-4 flex-shrink-0">✓</div>
              <div>
                <h3 className="font-semibold mb-2">Continuité de service et qualité constante</h3>
                <p className="text-blue-100">Fiabilité pérenne</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Espace Client Section */}
      <section className="section-padding bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Votre copropriété, à portée de main
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Grâce à notre espace client sécurisé et intuitif, vous accédez à toutes les informations essentielles en temps réel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl mb-4">📢</div>
              <h3 className="font-semibold text-primary mb-2">Notifications</h3>
              <p className="text-gray-600">Restez informé en temps réel</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="font-semibold text-primary mb-2">Comptes</h3>
              <p className="text-gray-600">Suivi financier transparent</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">📄</div>
              <h3 className="font-semibold text-primary mb-2">Documents</h3>
              <p className="text-gray-600">Accès à tous les documents</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">👥</div>
              <h3 className="font-semibold text-primary mb-2">Assemblées générales</h3>
              <p className="text-gray-600">Convocations et procédures</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="font-semibold text-primary mb-2">Conseil syndical</h3>
              <p className="text-gray-600">Outils collaboratifs</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">❓</div>
              <h3 className="font-semibold text-primary mb-2">FAQ</h3>
              <p className="text-gray-600">Réponses à vos questions</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">💳</div>
              <h3 className="font-semibold text-primary mb-2">Paiement en ligne</h3>
              <p className="text-gray-600">Sécurisé et simple</p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔐</div>
              <h3 className="font-semibold text-primary mb-2">Sécurité</h3>
              <p className="text-gray-600">Données protégées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zones d'intervention */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Nos zones d'intervention
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Harmonia Syndic intervient en Île-de-France : Hauts-de-Seine (92), Yvelines (78) et Ouest Seine-et-Marne (77).
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="rounded-xl border-2 border-accent/20 p-6">
              <div className="text-2xl font-bold text-accent mb-1">92</div>
              <h3 className="text-lg font-semibold text-primary mb-3">Hauts-de-Seine</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Neuilly-sur-Seine</li>
                <li>• Boulogne-Billancourt</li>
                <li>• Levallois-Perret</li>
                <li>• Et toutes les communes du 92</li>
              </ul>
            </div>

            <div className="rounded-xl border-2 border-accent/20 p-6">
              <div className="text-2xl font-bold text-accent mb-1">78</div>
              <h3 className="text-lg font-semibold text-primary mb-3">Yvelines</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Versailles</li>
                <li>• Saint-Germain-en-Laye</li>
                <li>• Le Vésinet</li>
                <li>• Poissy</li>
              </ul>
            </div>

            <div className="rounded-xl border-2 border-accent/20 p-6">
              <div className="text-2xl font-bold text-accent mb-1">77</div>
              <h3 className="text-lg font-semibold text-primary mb-3">Seine-et-Marne (ouest)</h3>
              <ul className="space-y-1 text-gray-600 text-sm">
                <li>• Ozoir-la-Ferrière</li>
                <li>• Et communes limitrophes</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="/syndic-copropriete" className="inline-block text-primary font-semibold hover:text-accent transition-colors">
              Voir toutes nos villes d'intervention →
            </a>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Social Media Community Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Rejoignez notre communauté
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Conseils pratiques, actualités de la copropriété, coulisses du métier de syndic et témoignages de copropriétaires — suivez-nous pour ne rien manquer.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/harmonia_syndic_et_gestion_/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-gray-100 p-6 hover:border-[#E1306C] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Instagram</span>
              <span className="font-bold text-secondary text-sm mb-2">@harmonia_syndic_et_gestion_</span>
              <p className="text-gray-500 text-xs">Coulisses, conseils copropriété & lifestyle immobilier</p>
              <span className="mt-4 text-[#E1306C] font-semibold text-xs group-hover:underline">Suivre</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1BEKAeeRNb/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-gray-100 p-6 hover:border-[#1877F2] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#1877F2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Facebook</span>
              <span className="font-bold text-secondary text-sm mb-2">Harmonia Syndic & Gestion</span>
              <p className="text-gray-500 text-xs">Actualités, AG en direct & FAQ copropriété</p>
              <span className="mt-4 text-[#1877F2] font-semibold text-xs group-hover:underline">Aimer la page</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/109222050/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-gray-100 p-6 hover:border-[#0A66C2] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-[#0A66C2] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">LinkedIn</span>
              <span className="font-bold text-secondary text-sm mb-2">Harmonia Syndic & Gestion</span>
              <p className="text-gray-500 text-xs">Expertise, réglementation & vision du métier</p>
              <span className="mt-4 text-[#0A66C2] font-semibold text-xs group-hover:underline">Suivre</span>
            </a>

            {/* Google My Business */}
            <a
              href="https://www.google.com/search?sca_esv=91f788fc0d48d683&authuser=0&hl=fr&gl=fr&output=search&q=HARMONIA+SYNDIC+%26+GESTION&ludocid=8806120368095164277&lsig=AB86z5VprmHJjZF7XsXvVbQJhjGi"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border-2 border-gray-100 p-6 hover:border-[#EA4335] hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Google</span>
              <span className="font-bold text-secondary text-sm mb-2">Avis Google</span>
              <p className="text-gray-500 text-xs">Votre avis compte — aidez d'autres copropriétaires</p>
              <span className="mt-4 text-[#EA4335] font-semibold text-xs group-hover:underline">Laisser un avis</span>
            </a>
          </div>

          {/* Social proof banner */}
          <div className="rounded-2xl bg-gradient-to-r from-primary to-secondary text-white p-8 text-center">
            <p className="text-xl md:text-2xl font-bold mb-2">
              Des milliers de copropriétaires nous font déjà confiance.
            </p>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Rejoignez notre communauté en ligne pour accéder à des conseils exclusifs, des alertes réglementaires et les bonnes pratiques de la gestion de copropriété.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />

      {/* Guides Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Guides pratiques de la copropriété
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Accédez à nos ressources gratuites pour mieux comprendre la gestion de votre copropriété
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GuideCard
              icon="📖"
              title="Comment changer de syndic ?"
              description="Les étapes clés pour migrer vers un nouveau syndic sans complications."
              slug="comment-changer-de-syndic"
            />
            <GuideCard
              icon="💵"
              title="Comprendre vos charges de copropriété"
              description="Décryptez les différentes charges et apprenez à optimiser votre budget."
              slug="comprendre-charges-copropriete"
            />
            <GuideCard
              icon="⚖️"
              title="Les droits des copropriétaires"
              description="Connaître vos droits pour mieux défendre vos intérêts en copropriété."
              slug="droits-coproprietes"
            />
          </div>

          <div className="text-center">
            <a href="/guides-copropriete" className="inline-block text-primary font-semibold hover:text-accent transition-colors">
              Voir tous nos guides →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
