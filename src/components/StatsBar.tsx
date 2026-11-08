// Source à confirmer avant mise en production : chiffres officiels communiqués par White Bird.
const WHITE_BIRD_SOURCE = 'source : White Bird, 2026';

export default function StatsBar() {
  const stats = [
    { number: '500', label: 'copropriétés gérées par le réseau' },
    { number: '3 500', label: 'lots en gestion locative dans le réseau' },
    { number: '98 %', label: 'de mandats renouvelés' },
    { number: '7j/7', label: 'disponibilité urgences' },
  ];

  return (
    <section className="bg-light section-padding">
      <div className="container-custom">
        <p className="text-center text-sm text-gray-600 mb-8 font-medium">
          La force du réseau White Bird *
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">{stat.number}</div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-500 mt-8">
          * Chiffres du réseau White Bird, dont Harmonia Syndic &amp; Gestion est membre ({WHITE_BIRD_SOURCE}).
        </p>
      </div>
    </section>
  );
}
