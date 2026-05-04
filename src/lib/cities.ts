export interface City {
  slug: string;
  name: string;
  department: string;
  postalCode: string;
  description: string;
  population: string;
  numberOfCopros: number;
  averageCharges: number;
}

export const cities: City[] = [
  {
    slug: 'neuilly-sur-seine',
    name: 'Neuilly-sur-Seine',
    department: 'Hauts-de-Seine (92)',
    postalCode: '92200',
    description:
      'Neuilly-sur-Seine, ville du siège d\'Harmonia Syndic, compte de nombreuses copropriétés haut de gamme. Notre cabinet est idéalement situé au 144 avenue Charles de Gaulle pour accompagner les copropriétaires avec proximité et réactivité.',
    population: '62 000',
    numberOfCopros: 1200,
    averageCharges: 3800,
  },
  {
    slug: 'boulogne-billancourt',
    name: 'Boulogne-Billancourt',
    department: 'Hauts-de-Seine (92)',
    postalCode: '92100',
    description:
      'Boulogne-Billancourt est l\'une des villes les plus denses de France avec un parc immobilier collectif important. Harmonia Syndic intervient avec réactivité et expertise sur l\'ensemble du territoire boulonnais.',
    population: '120 000',
    numberOfCopros: 3500,
    averageCharges: 3200,
  },
  {
    slug: 'levallois-perret',
    name: 'Levallois-Perret',
    department: 'Hauts-de-Seine (92)',
    postalCode: '92300',
    description:
      'Levallois-Perret concentre une forte densité de copropriétés modernes et haussmanniennes. Notre cabinet accompagne les copropriétaires levalloisiens avec transparence et efficacité.',
    population: '67 000',
    numberOfCopros: 1800,
    averageCharges: 3400,
  },
  {
    slug: 'versailles',
    name: 'Versailles',
    department: 'Yvelines (78)',
    postalCode: '78000',
    description:
      'Versailles allie patrimoine architectural exceptionnel et dynamisme immobilier. Harmonia Syndic gère des copropriétés variées dans toute la ville, du centre historique aux quartiers résidentiels.',
    population: '87 000',
    numberOfCopros: 2200,
    averageCharges: 2800,
  },
  {
    slug: 'saint-germain-en-laye',
    name: 'Saint-Germain-en-Laye',
    department: 'Yvelines (78)',
    postalCode: '78100',
    description:
      'Saint-Germain-en-Laye offre un cadre résidentiel privilégié avec de nombreuses copropriétés de standing. Harmonia Syndic y propose une gestion sur-mesure adaptée aux exigences de ses copropriétaires.',
    population: '42 000',
    numberOfCopros: 900,
    averageCharges: 2900,
  },
  {
    slug: 'le-vesinet',
    name: 'Le Vésinet',
    department: 'Yvelines (78)',
    postalCode: '78110',
    description:
      'Le Vésinet, ville verdoyante et résidentielle, accueille de nombreuses copropriétés de qualité. Notre cabinet assure une gestion sereine et proactive pour les copropriétaires vesigondins.',
    population: '16 000',
    numberOfCopros: 350,
    averageCharges: 2600,
  },
  {
    slug: 'poissy',
    name: 'Poissy',
    department: 'Yvelines (78)',
    postalCode: '78300',
    description:
      'Poissy est une ville en plein développement immobilier avec un parc de copropriétés en expansion. Harmonia Syndic accompagne les copropriétés pissiactines avec expertise et disponibilité.',
    population: '37 000',
    numberOfCopros: 800,
    averageCharges: 1900,
  },
  {
    slug: 'ozoir-la-ferriere',
    name: 'Ozoir-la-Ferrière',
    department: 'Seine-et-Marne (77)',
    postalCode: '77330',
    description:
      'Ozoir-la-Ferrière, dans l\'ouest de la Seine-et-Marne, est une commune résidentielle dotée d\'un patrimoine immobilier collectif de qualité. Harmonia Syndic y garantit une gestion de proximité.',
    population: '21 000',
    numberOfCopros: 450,
    averageCharges: 1750,
  },
  {
    slug: 'paris',
    name: 'Paris',
    department: 'Paris (75)',
    postalCode: '75000',
    description:
      'Paris compte plus de 65 000 copropriétés, ce qui en fait le plus grand marché français. Les charges de copropriété sont parmi les plus élevées de France en raison des coûts immobiliers et de la densité urbaine. Harmonia Syndic gère les défis spécifiques à la capitale avec expertise.',
    population: '2 161 000',
    numberOfCopros: 65000,
    averageCharges: 3200,
  },
  {
    slug: 'lyon',
    name: 'Lyon',
    department: 'Rhône (69)',
    postalCode: '69000',
    description:
      'Deuxième ville de France, Lyon héberge environ 8 500 copropriétés résidentielles. Les quartiers de Presqu\'île et de Fourvière sont particulièrement denses en immeubles collectifs. Harmonia Syndic y maîtrise les problématiques de gestion ancienne et moderne.',
    population: '515 000',
    numberOfCopros: 8500,
    averageCharges: 2100,
  },
  {
    slug: 'marseille',
    name: 'Marseille',
    department: 'Bouches-du-Rhône (13)',
    postalCode: '13000',
    description:
      'Marseille possède un parc immobilier collectif de plus de 6 000 copropriétés. La gestion des immeubles anciens y est particulièrement importante, avec des enjeux de rénovation thermique. Notre expertise locale assure une gestion adaptée au contexte méditerranéen.',
    population: '869 000',
    numberOfCopros: 6000,
    averageCharges: 1800,
  },
  {
    slug: 'nice',
    name: 'Nice',
    department: 'Alpes-Maritimes (06)',
    postalCode: '06000',
    description:
      'Nice compte environ 3 500 copropriétés, principalement des résidences de standing et de prestige. Les copropriétés côtières représentent un segment très spécifique avec des enjeux de maintenance importants. Harmonia Syndic comprend les spécificités du marché azuréen.',
    population: '341 000',
    numberOfCopros: 3500,
    averageCharges: 2400,
  },
  {
    slug: 'toulouse',
    name: 'Toulouse',
    department: 'Haute-Garonne (31)',
    postalCode: '31000',
    description:
      'Toulouse enregistre une croissance importante avec plus de 4 500 copropriétés. La ville attire des habitants et vit une forte dynamique de construction collective. Harmonia Syndic accompagne cette expansion avec des solutions modernes et adaptées.',
    population: '479 000',
    numberOfCopros: 4500,
    averageCharges: 1950,
  },
  {
    slug: 'bordeaux',
    name: 'Bordeaux',
    department: 'Gironde (33)',
    postalCode: '33000',
    description:
      'Bordeaux compte environ 3 200 copropriétés, dont beaucoup sont des bâtiments haussmanniens et modernes. La rénovation urbaine et la valorisation du patrimoine sont des enjeux clés. Notre syndic offre une gestion patrimoniale de qualité.',
    population: '259 000',
    numberOfCopros: 3200,
    averageCharges: 1700,
  },
  {
    slug: 'nantes',
    name: 'Nantes',
    department: 'Loire-Atlantique (44)',
    postalCode: '44000',
    description:
      'Nantes compte plus de 2 800 copropriétés avec une urbanisation croissante. La gestion des espaces communs et la transition énergétique sont des priorités. Harmonia Syndic adapte ses services aux besoins des copropriétaires nantais.',
    population: '308 000',
    numberOfCopros: 2800,
    averageCharges: 1600,
  },
  {
    slug: 'strasbourg',
    name: 'Strasbourg',
    department: 'Bas-Rhin (67)',
    postalCode: '67000',
    description:
      'Strasbourg abrite environ 3 000 copropriétés, caractérisées par un habitat collectif diversifié. Les enjeux de performance énergétique sont majeurs dans la région. Notre syndic maîtrise les réglementations spécifiques alsaciennes.',
    population: '280 000',
    numberOfCopros: 3000,
    averageCharges: 1550,
  },
  {
    slug: 'montpellier',
    name: 'Montpellier',
    department: 'Hérault (34)',
    postalCode: '34000',
    description:
      'Montpellier connaît une croissance rapide avec environ 2 200 copropriétés. La ville attire une population jeune et dynamique, créant une demande importante en gestion immobilière. Harmonia Syndic soutient cette expansion régionale.',
    population: '285 000',
    numberOfCopros: 2200,
    averageCharges: 1450,
  },
  {
    slug: 'lille',
    name: 'Lille',
    department: 'Nord (59)',
    postalCode: '59000',
    description:
      'Lille possède environ 2 500 copropriétés, héritières d\'un patrimoine architectural diversifié. La gestion des anciens immeubles industriels rénovés est un domaine d\'expertise. Harmonia Syndic intervient avec efficacité dans le Nord.',
    population: '233 000',
    numberOfCopros: 2500,
    averageCharges: 1400,
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
