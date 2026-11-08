export interface City {
  slug: string;
  name: string;
  department: string;
  postalCode: string;
  description: string;
  population: string;
  numberOfCopros?: number;
  averageCharges?: number;
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
    slug: 'montreuil',
    name: 'Montreuil',
    department: 'Seine-Saint-Denis (93)',
    postalCode: '93100',
    description:
      'Montreuil, aux portes de Paris, mêle immeubles anciens, résidences des années 60-70 et programmes récents. Harmonia Syndic y accompagne des copropriétés à taille humaine avec une gestion de proximité.',
    population: '111 000',
  },
  {
    slug: 'creteil',
    name: 'Créteil',
    department: 'Val-de-Marne (94)',
    postalCode: '94000',
    description:
      'Préfecture du Val-de-Marne, Créteil compte de nombreuses résidences collectives où les enjeux de travaux et de maîtrise des charges sont importants. Harmonia Syndic y intervient avec un suivi technique rigoureux.',
    population: '92 000',
  },
  {
    slug: 'saint-maurice',
    name: 'Saint-Maurice',
    department: 'Val-de-Marne (94)',
    postalCode: '94410',
    description:
      'Saint-Maurice, entre Bois de Vincennes et bords de Marne, offre un parc résidentiel recherché. Harmonia Syndic y gère des copropriétés avec une présence régulière sur le terrain.',
    population: '14 500',
  },
  {
    slug: 'langon',
    name: 'Langon',
    department: 'Gironde (33)',
    postalCode: '33210',
    description:
      'Langon, sous-préfecture du Sud-Gironde, voit son parc de petites copropriétés se développer. Harmonia Syndic accompagne les copropriétaires du Langonnais avec une gestion de proximité.',
    population: '7 600',
  },
  {
    slug: 'libourne',
    name: 'Libourne',
    department: 'Gironde (33)',
    postalCode: '33500',
    description:
      'Libourne, capitale du Libournais, associe immeubles anciens du centre et résidences récentes. Harmonia Syndic y propose une gestion transparente et réactive.',
    population: '25 000',
  },
  {
    slug: 'merignac',
    name: 'Mérignac',
    department: 'Gironde (33)',
    postalCode: '33700',
    description:
      'Mérignac, deuxième ville de Gironde, dispose d\'un important parc de résidences collectives. Harmonia Syndic y accompagne les copropriétés dans leur gestion courante et leurs travaux.',
    population: '73 000',
  },
  {
    slug: 'pessac',
    name: 'Pessac',
    department: 'Gironde (33)',
    postalCode: '33600',
    description:
      'Pessac, ville universitaire de la métropole bordelaise, compte de nombreuses copropriétés étudiantes et familiales. Harmonia Syndic y assure une gestion rigoureuse et accessible.',
    population: '66 000',
  },
  {
    slug: 'schiltigheim',
    name: 'Schiltigheim',
    department: 'Bas-Rhin (67)',
    postalCode: '67300',
    description:
      'Schiltigheim, au nord de Strasbourg, connaît un fort renouvellement de son parc collectif. Harmonia Syndic y accompagne les copropriétés dans le respect du droit local alsacien (livre foncier).',
    population: '34 000',
  },
  {
    slug: 'illkirch-graffenstaden',
    name: 'Illkirch-Graffenstaden',
    department: 'Bas-Rhin (67)',
    postalCode: '67400',
    description:
      'Illkirch-Graffenstaden, au sud de l\'Eurométropole, réunit résidences familiales et programmes récents. Harmonia Syndic y propose une gestion de proximité adaptée au droit local.',
    population: '27 000',
  },
  {
    slug: 'haguenau',
    name: 'Haguenau',
    department: 'Bas-Rhin (67)',
    postalCode: '67500',
    description:
      'Haguenau, deuxième ville du Bas-Rhin, dispose d\'un parc de copropriétés en croissance. Harmonia Syndic y accompagne les copropriétaires avec réactivité.',
    population: '35 000',
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((city) => city.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((city) => city.slug);
}
