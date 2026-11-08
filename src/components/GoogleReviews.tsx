const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?sca_esv=91f788fc0d48d683&authuser=0&hl=fr&gl=fr&output=search&q=HARMONIA+SYNDIC+%26+GESTION&ludocid=8806120368095164277&lsig=AB86z5VprmHJjZF7XsXvVbQJhjGi';

// Aucun avis n'est recopié ni simulé ici : seuls les avis réels publiés sur la fiche Google font foi.
export default function GoogleReviews() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary text-center mb-4">
          Ce que nos copropriétaires disent de nous
        </h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Nos avis sont publiés directement par nos clients sur notre fiche Google. Consultez-les en toute transparence.
        </p>
        <div className="text-center mb-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300"
          >
            Lire nos avis vérifiés sur Google &rarr;
          </a>
        </div>

        {/* Leave a review CTA */}
        <div className="mt-12 rounded-2xl bg-gradient-to-br from-secondary to-primary text-white p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xl md:text-2xl font-bold mb-2">Vous etes copropriétaire avec nous ?</p>
            <p className="text-blue-100 max-w-xl">
              Votre avis aide d'autres copropriétaires a choisir un syndic de confiance. Cela ne prend que 2 minutes et c'est precieux pour notre visibilite locale.
            </p>
          </div>
          <a
            href="https://www.google.com/search?sca_esv=91f788fc0d48d683&authuser=0&hl=fr&gl=fr&output=search&q=HARMONIA+SYNDIC+%26+GESTION&ludocid=8806120368095164277&lsig=AB86z5VprmHJjZF7XsXvVbQJhjGi#lrd=0x0:0x7a35a12cf3c95575,1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 bg-white text-secondary font-bold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Laisser un avis Google
          </a>
        </div>

      </div>
    </section>
  );
}
