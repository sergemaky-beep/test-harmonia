'use client';

import { useState } from 'react';

interface Review {
  id: string;
  rating: number;
  text: string;
  author: string;
  daysAgo: number;
}

const reviews: Review[] = [
  {
    id: '1',
    rating: 5,
    text: 'Excellent service ! L\'équipe d\'Harmonia Syndic est très professionnelle et réactive. Ils gèrent notre copropriété avec rigueur et transparence. Je recommande vivement !',
    author: 'Marie Dubois',
    daysAgo: 15,
  },
  {
    id: '2',
    rating: 5,
    text: 'Très satisfait de nos interactions avec Harmonia Syndic. Les conseillers sont à l\'écoute et comprennent bien nos besoins. Tarifs compétitifs et service de qualité.',
    author: 'Jean-Pierre Moreau',
    daysAgo: 28,
  },
  {
    id: '3',
    rating: 5,
    text: 'Depuis 5 ans avec Harmonia Syndic, nous n\'avons jamais eu de problème. Communication claire, gestion financière impeccable, et équipe disponible. Top !',
    author: 'Sophie Laurent',
    daysAgo: 45,
  },
  {
    id: '4',
    rating: 4,
    text: 'Très bon syndic avec une bonne connaissance du secteur. Quelques améliorations possibles dans la réactivité email, mais globalement très satisfait du service.',
    author: 'Philippe Rousseau',
    daysAgo: 62,
  },
];

export default function GoogleReviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const StarIcon = ({ filled }: { filled: boolean }) => (
    <svg
      className={`w-5 h-5 ${filled ? 'text-accent' : 'text-gray-300'}`}
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );

  const GoogleIcon = () => (
    <svg
      className="w-4 h-4 text-secondary"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );

  const averageRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1);
  const reviewCount = 24; // Simulated total review count

  const ReviewCard = ({ review }: { review: Review }) => (
    <div className="bg-white rounded-xl shadow-md p-5 min-w-72 border border-gray-100 hover:shadow-lg transition-shadow duration-300 flex-shrink-0">
      <div className="flex items-center gap-2 mb-3">
        <div className="flex">
          {[1, 2, 3, 4, 5].map((star) => (
            <StarIcon key={star} filled={star <= review.rating} />
          ))}
        </div>
        <GoogleIcon />
      </div>
      <p className="text-secondary text-sm leading-relaxed mb-3 line-clamp-3">{review.text}</p>
      <div className="border-t border-gray-100 pt-3">
        <p className="font-semibold text-secondary text-sm">{review.author}</p>
        <p className="text-gray-500 text-xs">il y a {review.daysAgo} jours</p>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-secondary text-center mb-12">
          Ce que nos copropriétaires disent de nous
        </h2>

        {/* Rating Summary */}
        <div className="flex flex-col items-center justify-center mb-12 bg-white rounded-xl shadow-md p-8 max-w-md mx-auto">
          <div className="text-5xl font-bold text-secondary mb-2">{averageRating}</div>
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <StarIcon key={star} filled={true} />
            ))}
          </div>
          <p className="text-gray-600 text-sm text-center">Basé sur {reviewCount} avis Google</p>
        </div>

        {/* Reviews Grid - Scrollable on Mobile, Grid on Desktop */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* Reviews Carousel - Mobile */}
        <div className="md:hidden mb-8">
          <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          <div className="flex gap-2 justify-center mt-4">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-6' : 'bg-gray-300 w-2'
                }`}
                aria-label={`Aller à l'avis ${index + 1}`}
              />
            ))}
          </div>
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

        {/* See all reviews */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?sca_esv=91f788fc0d48d683&authuser=0&hl=fr&gl=fr&output=search&q=HARMONIA+SYNDIC+%26+GESTION&ludocid=8806120368095164277&lsig=AB86z5VprmHJjZF7XsXvVbQJhjGi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-primary font-semibold hover:text-accent transition-colors text-sm"
          >
            Voir tous les avis sur Google &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
