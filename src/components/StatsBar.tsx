export default function StatsBar() {
  const stats = [
    {
      number: '500',
      label: 'copropriétés sous gestion',
    },
    {
      number: '3 500',
      label: 'lots en gestion locative',
    },
    {
      number: '98%',
      label: 'de mandats renouvelés',
    },
    {
      number: '7j/7',
      label: 'disponibilité urgences',
    },
  ];

  return (
    <section className="bg-light section-padding">
      <div className="container-custom">
        <p className="text-center text-sm text-gray-600 mb-8 font-medium">
          Chiffres du réseau White Bird *
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-primary">{stat.number}</div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
