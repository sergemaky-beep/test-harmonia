export interface Guide {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  excerpt: string;
  content: string;
  publishedDate: string;
  readTime: number;
}

export const guides: Guide[] = [
  // Category: Le syndic
  {
    slug: "comment-changer-de-syndic-de-copropriete",
    title: "Comment changer de syndic de copropriété ?",
    category: "Le syndic",
    categorySlug: "le-syndic",
    excerpt: "Votre syndic actuel ne vous satisfait plus ? Découvrez la procédure complète pour changer de syndic : les motifs justifiés, les délais à respecter, les modalités de vote en assemblée générale, et comment assurer une transition en douceur.",
    content: `La résiliation d'un contrat de syndic et son remplacement par un nouveau gestionnaire est un processus qui suit des règles précises fixées par la loi. Que vous trouviez votre syndic trop cher, inefficace, ou simplement non-adapté à vos besoins, vous avez le droit de le changer. Cependant, cette démarche nécessite de respecter plusieurs étapes obligatoires et de prévoir un délai de transition.

## Quelles sont les raisons valables pour changer de syndic ?

Il n'existe pas de liste officiellement définie de motifs justifiés, mais la jurisprudence reconnaît plusieurs raisons valables. Vous pouvez vous séparer de votre syndic si les honoraires facturés sont manifestement excessifs comparés au marché local, si la gestion est défaillante ou caractérisée par des négligences répétées (comptes non actualisés, impayés non poursuivis, factures erronées). Un manque de communication, une indisponibilité chronique, ou un refus d'exécuter les décisions votées en assemblée générale constituent également des motifs recevables. Enfin, des conflits d'intérêts avérés ou une mauvaise gestion financière justifient pleinement un changement.

## Quels sont les délais à respecter ?

Le délai de préavis standard est de trois mois. Cela signifie que si vous votez la résiliation d'un syndic en assemblée générale, le contrat prendra fin trois mois après la notification officielle adressée par lettre recommandée avec accusé de réception. Certains contrats de syndic peuvent prévoir des délais différents, parfois plus courts (deux mois) ou plus longs (jusqu'à six mois). Il est donc essentiel de vérifier votre contrat actuel pour connaître les conditions exactes de résiliation. Il est recommandé de préparer les démarches au moins quatre à cinq mois avant la date souhaitée d'effectivité du changement.

## Comment se déroule le vote en assemblée générale ?

Le changement de syndic doit être voté lors d'une assemblée générale extraordinaire. L'ordre du jour doit explicitement mentionner "résiliation du contrat avec le syndic [nom]" et, idéalement, "élection d'un nouveau syndic". La majorité requise dépend du type de résiliation : une majorité simple (plus de 50 % des votes) suffit pour résilier le contrat actuel pour causes valables. Cependant, pour résilier à titre préventif (sans cause avancée), une majorité des trois-quarts peut être exigée selon votre règlement de copropriété. Il est judicieux de bien préparer ce vote en communiquant en amont avec vos copropriétaires sur les raisons du changement et en présentant un nouveau syndic potentiel.

## Comment choisir un nouveau syndic ?

Avant le vote, il est conseillé d'effectuer une mise en concurrence auprès de plusieurs entreprises de syndic. Sollicitez au moins trois devis détaillés pour comparer les honoraires, les services offerts, les modes de paiement (encaissement à l'ordre ou tiers payant), et les technologies utilisées (portail en ligne, télétransmission, dématérialisation). Certaines copropriétés constituent une commission de sélection avec un président de séance, deux copropriétaires représentants, et éventuellement l'ancien syndic, pour examiner les propositions. Cette procédure confère plus de légitimité au choix et démontre une gestion collective responsable.

## Quelle est la procédure de transition ?

Une fois le changement voté, il faut fixer une date d'effet, idéalement à la fin d'un mois ou d'un trimestre pour faciliter la gestion comptable. Vous enverrez une lettre recommandée au syndic sortant lui notifiant la résiliation et la date d'effet. Durant les trois derniers mois précédant cette date, le nouveau syndic peut demander l'accès aux archives et documents de la copropriété. À la date d'effet, un procès-verbal de remise-reprise doit être signé entre les deux syndics, détaillant l'état de tous les comptes, les créances, les sinistres en cours, et les documents transmis. C'est un moment critique : vérifiez que rien n'est oublié et que tous les fichiers (habitants, paiements, assurances) sont correctement transférés. Une transition bien organisée prévient les malentendus ultérieurs et assure la continuité des services.`,
    publishedDate: "2024-03-15",
    readTime: 8,
  },
  {
    slug: "syndic-professionnel-vs-syndic-benevole",
    title: "Syndic professionnel vs syndic bénévole : comment choisir ?",
    category: "Le syndic",
    categorySlug: "le-syndic",
    excerpt: "Faut-il opter pour un syndic professionnel rémunéré ou un syndic bénévole ? Découvrez les avantages et inconvénients de chaque modèle pour prendre la meilleure décision selon la taille et les besoins de votre copropriété.",
    content: `Le choix entre un syndic professionnel et un syndic bénévole est une décision fondamentale qui influe sur la gestion quotidienne et la vie de votre copropriété. Ces deux modèles présentent des caractéristiques, des avantages et des défis très différents. Comprendre ces distinctions est essentiel pour adapter le mode de gestion à votre situation.

## Qu'est-ce qu'un syndic professionnel ?

Un syndic professionnel est une entreprise, souvent constituée en SARL ou SAS, spécialisée dans la gestion de copropriétés. Son équipe comprend des gestionnaires, des agents administratifs, et parfois des spécialistes (médiateurs, experts immobiliers). Cette entreprise est assujettie au régime des professionnels de l'immobilier, avec obligations d'assurance responsabilité civile, de formation continue, et de respect de normes comptables strictes. Le syndic professionnel exerce contre rémunération, généralement sous forme d'honoraires mensuels ou annuels, calculés selon des pourcentages sur les charges générales ou des tarifs fixes. Il agit sous la supervision du conseil syndical et doit produire régulièrement comptes, rapports et justificatifs.

## Qu'est-ce qu'un syndic bénévole ?

Un syndic bénévole est un copropriétaire volontaire, élu par l'assemblée générale, qui assume les responsabilités du syndic sans rémunération (bien que les frais de gestion puissent être remboursés). Il peut être soutenu par des habitants volontaires formant une équipe administrative. Bien que bénévole quant à la rémunération, cette fonction impose des responsabilités légales identiques à celles du syndic professionnel. Un syndic bénévole n'est pas obligatoirement formé à la gestion immobilière et s'appuie souvent sur son expérience personnelle ou son dévouement civique.

## Les avantages du syndic professionnel

Le syndic professionnel offre un service structuré, fiable et complet. Grâce à son expertise, il garantit une connaissance maîtrisée de la loi, du droit immobilier et des meilleures pratiques en matière de gestion. La comptabilité est tenue de manière rigoureuse, avec suivi des créances, encaissement des charges, paiement des prestataires, et production de documents comptables détaillés. Disponibilité et réactivité sont assurées : les appels téléphoniques sont pris en charge, les urgences (fuites, pannes) sont gérées 24h/24, et les dossiers complexes (contentieux, travaux) bénéficient d'une expertise pointue. Le professionnel peut aussi dégager des économies par mise en concurrence régulière des prestataires. Enfin, il assume les responsabilités légales et dispose des assurances nécessaires pour couvrir ses fautes.

## Les inconvénients du syndic professionnel

Le coût est le premier inconvénient : les honoraires peuvent représenter 5 à 15 % des charges générales, selon la taille et la complexité de la copropriété. Ces frais se répercutent directement sur les budgets des copropriétaires. Certains syndics professionnels souffrent aussi d'un manque de proximité ou de connaissance fine de la copropriété : ils gèrent parfois plusieurs centaines d'immeubles et ne nouent pas de relations durables avec les habitants. Des syndics peu scrupuleux peuvent pratiquer des facturations opaques, des majorations de charges disproportionnées, ou maintenir des habitudes de travail dépassées. Le turnover du personnel peut également entraîner des pertes d'information d'une année à l'autre.

## Les avantages du syndic bénévole

Le premier atout du syndic bénévole est l'économie substantielle : aucun honoraire ne s'ajoute aux charges, ce qui représente une économie de 5 à 15 % pour les copropriétaires. Cette solution renforce aussi le lien social et l'implication civique : les habitants prennent directement part à la gestion et nouent des relations de confiance. Un syndic bénévole connaît intimement la copropriété, ses habitants et leurs enjeux ; il réagit rapidement aux demandes et s'investit personnellement dans la vie collective. Enfin, cette approche responsabilise l'ensemble des copropriétaires et crée une dynamique participative.

## Les inconvénients du syndic bénévole

L'absence de formation professionnelle est un risque majeur : un syndic bénévole peut ignorer les obligations légales, commettre des erreurs comptables, ou méconnaître les droits des copropriétaires. Surcharge de travail : la gestion d'une copropriété est très chronophage ; un syndic bénévole risque l'épuisement et les démotivations. Manque de sérieux administratif : les délais sont parfois non respectés, les archives mal tenues, les décisions tardives. Responsabilité personnelle accrue : contrairement au professionnel assuré, le syndic bénévole peut être poursuivi personnellement en cas d'erreur grave. Enfin, si le syndic bénévole démissionne soudainement, la copropriété se trouve sans gestionnaire et doit organiser rapidement un remplacement.

## Comment choisir selon votre situation ?

Pour une petite copropriété (moins de 10 lots) sans enjeux complexes (bâtiment récent, peu de travaux), un syndic bénévole est souvent viable si des copropriétaires volontaires et sérieux acceptent de s'investir. Pour une copropriété moyenne ou grande (plus de 20 lots) ou si l'immeuble présente des enjeux importants (vétusté, copropriétaires nombreux, syndical conflictuel), un syndic professionnel est fortement recommandé. Une solution intermédiaire existe : le syndic professionnel ultra-simplifié, formule minimaliste et moins onéreuse, adaptée aux petits collectifs, combinant coûts réduits et professionnalisme basique.`,
    publishedDate: "2024-02-20",
    readTime: 10,
  },

  // Category: Les charges
  {
    slug: "comprendre-vos-charges-de-copropriete",
    title: "Comprendre vos charges de copropriété",
    category: "Les charges",
    categorySlug: "les-charges",
    excerpt: "Les charges de copropriété peuvent sembler complexes. Apprenez à distinguer les charges générales des charges spéciales, comment elles sont réparties entre copropriétaires, et ce qu'est le budget prévisionnel.",
    content: `Les charges de copropriété sont souvent source de confusion et de mécontentement parmi les habitants. Pourtant, comprendre leur nature, leur structure et leur répartition est essentiel pour maîtriser votre budget et pour vérifier que votre syndic gère équitablement les frais collectifs. Explorons ensemble les mécanismes qui régissent ces charges inévitables.

## Qu'est-ce que les charges de copropriété ?

Les charges de copropriété sont l'ensemble des dépenses engagées pour assurer le fonctionnement, l'entretien et la conservation des parties communes d'un immeuble. Ces dépenses sont mutualisées et réparties entre les copropriétaires selon les modalités prévues par la loi et le règlement de la copropriété. Contrairement au loyer ou à la rente, les charges ne rémunèrent pas un propriétaire unique ; elles financent des services et des infrastructures bénéficiant à tous les habitants. Les charges constituent une obligation légale : tout copropriétaire doit y contribuer, sauf s'il peut justifier d'une exemption particulière (certains petits logements, propriétaires décédés, etc.). Méconnaître ou refuser de payer ses charges expose à des poursuites judiciaires et à l'inscriptions d'hypothèques sur le bien.

## Les charges générales : définition et contenu

Les charges générales, aussi appelées charges de copropriété ou charges collectives, couvrent toutes les dépenses liées aux parties communes utilisées par l'ensemble ou la majorité des copropriétaires. Elles incluent : l'entretien des toitures et façades, la réparation des escaliers et couloirs, l'éclairage et le chauffage des espaces communs, la maintenance des installations communes (ascenseur, interphone, portail), la fourniture de gardiennage ou de concierge si existant, l'assurance multirisques de l'immeuble, les frais de syndic (honoraires de gestion), les impôts et taxes spécifiques à l'immeuble (taxe foncière partagée, cotisation syndicale), et les frais de réparation d'urgence non prévisibles. À titre subsidiaire, les charges générales peuvent aussi financer des études techniques, des appels d'offres pour travaux, ou des frais juridiques relatifs à la gestion collective.

## Les charges spéciales : définition et contenu

Les charges spéciales sont celles destinées au financement de travaux ou services bénéficiant seulement à une partie des copropriétaires, non à la totalité. Elles sont réparties exclusivement entre les habitants directement concernés. Exemples : ravalement de la façade avant (pris en charge par les seuls résidents des appartements donnant sur cette façade), remplacement de la chaudière (imputé aux habitants raccordés au chauffage collectif), accès personnalisé au jardin (dépense réservée aux copropriétaires disposant d'une terrasse), ou clés d'accès à la cave privative (frais partagés entre les propriétaires de caves). Les charges spéciales ne figurent pas dans le budget prévisionnel annuel générique ; elles sont facturées au moment des travaux ou décidées en assemblée générale de manière ciblée. Elles doivent être clairement justifiées et régulièrement expliquées aux copropriétaires concernés.

## Comment sont réparties les charges générales ?

La répartition des charges générales entre copropriétaires s'opère selon les « tantièmes » ou « millièmes » de chaque logement. Ces coefficients, inscrits dans l'état descriptif de division et le règlement de copropriété, reflètent la part de propriété de chaque lot dans la copropriété. Généralement, les tantièmes sont calculés en fonction de la surface habitable du logement, mais d'autres critères peuvent être utilisés (étage, exposition, équipements). Un logement représentant 100 millièmes sur 1 000 totaux paiera 10 % des charges générales ; un autre avec 80 millièmes ne paiera que 8 %. Ces tantièmes sont théoriquement immuables et inscrits au fichier immobilier, sauf modification votée à l'unanimité ou décision judiciaire. Certains anciens règlements de copropriété utilisent des formules alternatives (par exemple, parts égales entre copropriétaires, ou répartition selon le nombre de portes), mais le système des tantièmes reste le standard moderne.

## Le budget prévisionnel : qu'est-ce que c'est ?

Le budget prévisionnel, aussi appelé budget de fonctionnement ou budget annuel de charges, est le document préparé par le syndic et approuvé chaque année en assemblée générale. Il recense toutes les dépenses prévisionnelles pour l'année à venir : entretien régulier, assurances, syndic, fluides (eau, gaz, électricité communes), maintenance des équipements, etc. Le budget prévisionnel permet à chaque copropriétaire de calculer sa quote-part prévisionnelle de charges. Par exemple, si le budget total s'élève à 120 000 euros et que votre logement représente 100 millièmes sur 1 000, votre contribution annuelle est estimée à 12 000 euros, soit 1 000 euros par mois.

## Comment les appels de charges se font-ils ?

Les appels de charges sont les demandes de paiement adressées aux copropriétaires pour verser leur quote-part. Généralement, le syndic effectue quatre appels annuels (trimestriels) ou douze appels mensuels, chacun correspondant à un tiers ou un douzième du budget prévisionnel. À la fin de l'année, lors de l'assemblée générale, le syndic présente les comptes définitifs. Si les dépenses réelles dépassent les prévisions, un appel supplémentaire (appel de charges complémentaires) est effectué. À l'inverse, si les dépenses sont inférieures au budget, un remboursement est effectué. Les modalités de paiement (virement, prélèvement, tiers payant) sont précisées dans le contrat de syndic. Attention : le non-paiement des charges crée des dettes exigibles et peut déboucher sur des procédures d'exécution forcée et des frais supplémentaires.

## Les écarts de charges : comprendre les régularisations

À la fin de l'exercice, le budget prévisionnel est comparé aux dépenses réelles. Si les réalités (hausse du gaz, urgence non prévue) ont surpassé les prévisions, une régularisation positive est demandée aux copropriétaires. Inversement, une régularisation négative leur rembourse un excédent d'appels. Ces régularisations peuvent être significatives : une copropriété ayant mal estimé ses consommations énergétiques ou ayant dû faire face à des travaux imprévus peut facturer 20 à 30 % de charges supplémentaires. C'est pourquoi il est crucial que le syndic justifie précisément ses estimations et que les copropriétaires examinent les justificatifs (factures fournisseurs, devis, factures de travaux) pour vérifier l'honnêteté des chiffres.`,
    publishedDate: "2024-01-10",
    readTime: 12,
  },
  {
    slug: "comment-reduire-ses-charges-de-copropriete",
    title: "Comment réduire ses charges de copropriété ?",
    category: "Les charges",
    categorySlug: "les-charges",
    excerpt: "Les charges de copropriété grèvent lourdement votre budget ? Découvrez comment réaliser un audit, renégocier vos contrats, optimiser l'énergie et mettre en concurrence les prestataires pour alléger votre facture.",
    content: `Face à la hausse régulière des charges de copropriété, nombreux sont les copropriétaires qui cherchent des solutions pour réduire cette dépense inévitable. Heureusement, plusieurs leviers existent : une gestion attentive, une mise en concurrence rigoureuse des prestataires, des investissements ciblés en efficacité énergétique, et une transparence accrue des comptes. Voici comment procéder concrètement pour alléger votre facture.

## Réaliser un audit des charges : première étape indispensable

L'audit des charges commence par une analyse détaillée des comptes des trois à cinq dernières années. Demandez au syndic un document récapitulatif listant chaque poste de dépenses (syndic, assurances, eau, électricité, chauffage, ascenseur, entretien, travaux, etc.) avec montants et tendances. Comparez ces chiffres avec ceux d'autres copropriétés similaires de votre quartier ou disponibles auprès de fédérations de syndics. Des écarts anormaux signalent des anomalies : une facture de gaz multipliée par deux en un an sans raison climatique, des frais de syndic supérieurs à 10 % du budget, une assurance surévaluée, ou des dépenses d'entretien sans justificatif. N'hésitez pas à demander au syndic l'accès à tous les justificatifs (factures fournisseurs, devis, rapports d'expertise) pour valider les montants facturés. Un bon syndic appréciera cette transparence et fournira tous les documents sans problème. Si des résistances apparaissent, c'est un signal d'alerte qui mérite approfondissement.

## Renégocier les contrats existants

Une fois les postes de dépenses identifiés, il est temps de renégocier avec les prestataires actuels. L'assurance multirisques est souvent un premier candidat : obtenez plusieurs devis d'autres assureurs, comparez les garanties et les franchises, et présentez les offres concurrentes à votre assureur actuel pour obtenir une réduction. Pour l'entretien d'ascenseur, le gaz, l'électricité, ou l'eau, réclamez au syndic les tarifs pratiqués et mettez en concurrence ces services. Une renégociation simple peut générer 5 à 15 % de réductions. Attention toutefois aux contrats avec clauses de révision automatique : certains contrats contiennent des clauses d'indexation qui ajustent les prix selon des indices (inflation, prix du gaz, etc.). Ces clauses sont légales mais doivent être explicites et justifiées. Si la révision vous semble anormale, vous pouvez contester la base de calcul. Enfin, vérifiez que les prestataires facturent réellement les services que vous payez : un contrat d'éclairage LED suppose-t-il vraiment que les ampoules ont été remplacées ? Un contrat de nettoyage des gouttières a-t-il été effectué au complet ?

## Optimiser la consommation énergétique

Le chauffage et l'eau chaude représentent souvent 30 à 50 % des charges communes. Des gains significatifs sont possibles via des investissements ciblés. Un audit énergétique (généralement financé à titre obligatoire ou subventionné) identifie les pertes thermiques : isolation insuffisante des toitures, fuites dans les tuyauteries, chaudière obsolète, robinetterie inefficace. Le remplacement d'une chaudière gaz par une pompe à chaleur ou une chaudière gaz condensation peut réduire la facture de 20 à 40 % sur la durée. L'isolation des toits et des cloisons apporte aussi des économies durables. L'installation de robinets thermostatiques individuels sur les radiateurs permet à chaque logement de moduler sa température et réalise des économies de 10 à 20 %. Un système de compteurs individualisés (coûteux à l'installation mais rentable) responsabilise chaque copropriétaire et génère naturellement moins de gaspillage. La maintenance préventive (détartrage des tuyauteries, équilibrage des circuits de chauffage, nettoyage des brûleurs) prolonge la durée de vie des équipements et garantit une efficacité optimale.

## Mettre en concurrence les prestataires régulièrement

Un point trop souvent négligé : les contrats de service (syndic, ascenseur, nettoyage, gardiennage) doivent être mis en concurrence tous les trois à cinq ans. Ne pas le faire revient à accepter implicitement des hauses progressives sans justification. Sollicitez au moins trois devis détaillés auprès de nouveaux prestataires candidats. Ces devis doivent préciser : les prestations exactes (nombre de passages, horaires, étendue du service), les tarifs détaillés (forfait mensuel, frais variables, dépannage d'urgence), les conditions de révision des prix, les délais de préavis en cas de résiliation. Organisez une commission d'évaluation (conseil syndical + syndic + copropriétaires volontaires) pour examiner les offres selon des critères objectifs : prix, qualité du service, disponibilité, références d'autres copropriétés. Changez de prestataire si une meilleure offre se présente : c'est le principe de la libre concurrence, bénéfique à tous. Le turnover des prestataires éloigne aussi les accords "entre copains" qui cristallisent les coûts.

## Impliquer le conseil syndical dans le suivi des dépenses

Un conseil syndical actif et attentif joue un rôle préventif crucial. Les conseillers syndiqués (généralement 3 à 6 copropriétaires bénévoles) reçoivent l'accès aux comptes du syndic et doivent les examiner régulièrement. Lors de chaque réunion du conseil (au minimum trimestrielle), demandez une synthèse des dépenses, posez des questions sur les postes inhabituels, et vérifiez que les contrats sont bien exécutés. Un conseil syndical scrutateur dissuade les dérives, optimise la gestion et renforce la confiance envers le syndic. Si votre copropriété ne dispose pas encore d'un conseil syndical, proposez d'en constituer un : cette structure est un atout majeur de gouvernance et de transparence.

## Facturer correctement les dépenses spéciales à qui de droit

Parfois, certaines dépenses sont indûment imputées à l'ensemble des copropriétaires alors qu'elles devraient être facturées uniquement aux bénéficiaires directs. Par exemple, le ravalement d'une façade avant ne devrait concerner que les copropriétaires de cette face ; un remplacement de balcon ne devrait payer que les propriétaires de balcons. Vérifiez que le syndic respecte cette distinction et que les charges spéciales sont bien réparties selon les règles légales et le règlement de copropriété. Demander un audit spécifique sur ce point peut révéler d'importantes facturations erronées et générer des régularisations en votre faveur.

## Envisager des travaux d'économies d'énergie via les aides publiques

Le gouvernement et les collectivités locales financent des programmes de rénovation énergétique des immeubles. MaPrimeRénov', l'Éco-PTZ (éco-prêt à taux zéro), les certificats d'économies d'énergie (CEE), et les exonérations de taxe foncière pour amélioration énergétique offrent des subventions substantielles. Un syndic avisé explore ces aides pour les travaux d'isolation, remplacement de chaudière, ou pose de panneaux solaires. Ces investissements, largement subventionnés ou étalés sur prêts sans intérêt, amortissent rapidement leur coût initial par les économies réalisées, tout en valorisant le patrimoine immobilier et en réduisant les charges dès les mois suivants.`,
    publishedDate: "2024-02-05",
    readTime: 11,
  },

  // Category: La copropriété
  {
    slug: "les-droits-et-devoirs-des-coproprietaires",
    title: "Les droits et devoirs des copropriétaires",
    category: "La copropriété",
    categorySlug: "la-copropriete",
    excerpt: "Posséder un bien en copropriété implique des droits mais aussi des responsabilités. Découvrez vos droits de vote, vos obligations de paiement, et les règles du vivre-ensemble qui structurent la vie collective.",
    content: `Être copropriétaire, c'est être à la fois propriétaire d'un bien privé (son logement) et associé d'une structure collective (la copropriété). Ce statut hybride crée un équilibre de droits et de devoirs parfois méconnus. Comprendre cet équilibre est essentiel pour exercer pleinement votre rôle de copropriétaire responsable et pour défendre vos intérêts légitimes.

## Le droit de propriété du copropriétaire

En copropriété, vous êtes propriétaire exclusif de votre logement (la "partie privée" ou "lot"). Vous pouvez l'occuper, le louer, le vendre, ou le léguer sans restrictions imposées par les autres habitants, dès lors que vous respectez les lois et le règlement de copropriété. Vous pouvez aussi le modifier librement à titre intérieur (peinture, revêtements, électricité intérieure, salle de bains) sans autorisation. Cependant, les modifications structurelles (création de fenêtres en façade, suppression de cloison porteuse, création d'une porte de cave) exigent l'accord du syndic ou de l'assemblée générale car elles affectent les parties communes ou l'apparence globale de l'immeuble. Vous ne pouvez jamais modifier la structure, la façade, ou les installations collectives sans autorisation formelle.

## Le droit de vote à l'assemblée générale

Le droit de vote est votre principal levier d'influence sur la gestion de la copropriété. Chaque copropriétaire dispose d'un nombre de voix égal à son nombre de millièmes (parts dans la copropriété). Un propriétaire avec 100 millièmes sur 1 000 totaux détient 100 voix ; un autre avec 80 millièmes en détient 80. Cette pondération reflète la part économique de chacun. Vous votez lors des assemblées générales qui se réunissent au minimum une fois par an, plus souvent si des enjeux importants (travaux, changement de syndic) le justifient. Vous pouvez voter en personne (physiquement), par procuration (en déléguant votre voix à un tiers, copropriétaire ou non), par correspondance (coupon de vote par courrier), ou par visioconférence (si les statuts le permettent). Votre vote est confidentiel et secret. Vous avez le droit de recevoir l'ordre du jour à l'avance, de prendre connaissance des documents pertinents, et de poser des questions avant de voter.

## La participation aux assemblées générales

Participer aux assemblées générales est un devoir civique qui consolide votre implication. Les copropriétaires reçoivent une convocation au minimum deux semaines avant l'AG (délai légal), indiquant la date, l'heure, le lieu, et l'ordre du jour détaillé. Vous devez accuser réception de la convocation ou envoyer votre justificatif de procuration. Lors de l'AG, vous écoutez les rapports du syndic, du conseil syndical, et des experts. Vous pouvez poser des questions, demander des explications sur les comptes, contester les décisions, ou présenter des améliorations. Votre participation renforce la légitimité des décisions votées et augmente le taux de quorum (pourcentage de copropriétaires présents requis pour valider certaines décisions, notamment les travaux : 25 % pour une première délibération, 50 % pour une deuxième). Une copropriété où les habitants participent massivement gère mieux ses affaires qu'une copropriété où seuls 10 % des copropriétaires assistent aux AG.

## L'obligation de payer les charges

Vous avez l'obligation légale de verser vos charges de copropriété selon les appels émis par le syndic. Cette obligation est non-négociable : même si vous contestez la gestion, même si le syndic vous déplaît, vous devez payer vos charges (sauf cas exceptionnels d'annulation judiciaire d'une charge ou d'erreur manifeste de répartition). Le non-paiement expose à des poursuites : mise en demeure, commandement de payer, saisie du bien, inscription d'une hypothèque judiciaire, voire expulsion en cas de dette très ancienne. Les frais de procédure et intérêts de retard s'ajoutent à la somme initiale, creusant votre dette. Même si vous vendez votre bien, une dette de charges impayées peut bloquer la transaction ou être imputée sur le prix. Enfin, une copropriété avec des impayés nombreux risque des difficultés financières graves : le syndic ne peut pas financer les réparations d'urgence, l'assurance peut être impayée, menaçant la stabilité collective.

## Le respect du règlement de copropriété

Le règlement de copropriété est le "code civil" local de votre immeuble. Il définit les règles de savoir-vivre, les usage des parties communes, les restrictions d'usage des lots privés (bruits, animaux, fumée, activité professionnelle), et les horaires de certains travaux. Vous devez le respecter scrupuleusement. Par exemple, si le règlement interdit les animaux de plus de 10 kg ou prohibe le séchage de linge en balcon, vous ne pouvez pas ignorer ces interdictions. Un copropriétaire qui viole le règlement (bruit excessif, rénovation sans autorisation, activité commerciale non autorisée) expose à des sanctions : mise en demeure, jugement de condamnation, amende civile, voire expulsion si les violations sont graves et répétées. Le conseil syndical ou un copropriétaire peut engager une action pour vous forcer au respect du règlement.

## L'obligation de participer aux travaux obligatoires

Certains travaux imposés par la loi (entretien de la structure, réparations de sécurité, mise aux normes) sont obligatoires pour tous. Si l'assemblée générale vote des travaux obligatoires (par exemple, renforcement de la structure du bâtiment, mise en conformité électrique), vous devez y contribuire financièrement, même si vous les jugez inopportuns. Cependant, il existe un plafond : les travaux votés à majorité simple ne peuvent pas coûter plus de deux fois le budget annuel total sans consentement ultérieur (pour les travaux à majorité renforcée, le plafond est levé). De plus, vous pouvez bénéficier de délais de paiement ou de financements (éco-PTZ) pour les travaux d'efficacité énergétique.

## Le droit d'accès aux documents et aux comptes

Vous avez le droit de consulter tous les documents pertinents : comptes du syndic, procès-verbaux d'AG, rapports d'expertise, contrats avec les prestataires, justificatifs de dépenses, plans de l'immeuble, etc. Ces documents doivent être tenus à la disposition des copropriétaires à la copropriété (syndic ou conseil syndical). Vous pouvez en demander copie (frais de reproduction supportés). Cette transparence est crucial pour vérifier la gestion, préparer votre vote en AG, et contester d'éventuelles anomalies. Un syndic qui refuse l'accès aux documents viole ses obligations légales et constitue un motif légitime de résiliation.

## Le droit d'expression et de contestation

Vous avez le droit de critiquer la gestion, de proposer des améliorations, de contester les décisions votées, et d'engager des actions légales si nécessaire. Vous pouvez écrire au syndic, demander une réunion du conseil syndical, demander la convocation d'une AG extraordinaire pour débattre de sujets urgents, ou saisir les juridictions compétentes (tribunal de proximité pour litiges simples, tribunal judiciaire pour litiges complexes). Cependant, votre droit d'expression n'est pas absolu : les critiques doivent rester factuelles et proportionnées ; les attaques personnelles contre syndic ou copropriétaires, l'incitation à la violence, ou la divulgation de données confidentielles peuvent vous exposer à des poursuites pour diffamation ou atteinte à la vie privée.

## Les devoirs envers les autres copropriétaires

Au-delà des obligations légales, vous avez des devoirs éthiques envers vos voisins : maintenir votre logement en bon état (pas de dégradations visibles, pas de fuites affectant les voisins), limiter les nuisances sonores (musique, rénovations bruyantes), éviter la pollution (fumée de tabac, odeurs de cuisine), maintenir l'ordre et la propreté des espaces communs, et respecter les règles de cohabitation. Un copropriétaire qui laisse son logement se délabrer, qui génère des nuisances permanentes, ou qui adopte une attitude agressive envers autrui perturbe la sérénité collective et crée un environnement toxique. La médiation ou l'intervention judiciaire peut devenir nécessaire en cas de conflits graves, mais la bonne volonté de chacun prévient généralement ces escalades.`,
    publishedDate: "2024-01-25",
    readTime: 13,
  },
  {
    slug: "l-assemblee-generale-de-copropriete-guide-complet",
    title: "L'assemblée générale de copropriété : guide complet",
    category: "La copropriété",
    categorySlug: "la-copropriete",
    excerpt: "L'assemblée générale est le moment clé où les copropriétaires prennent des décisions ensemble. Découvrez comment elle est convoquée, ce qu'est l'ordre du jour, les majorités requises, et comment contester une décision.",
    content: `L'assemblée générale (AG) de copropriété est l'organe souverain de la copropriété où réside le pouvoir de décision collectif. C'est le moment où chaque copropriétaire, armé de son droit de vote, participe activement à la gouvernance de son immeuble. Comprendre le fonctionnement de l'AG, ses procédures, ses majorités, et les possibilités de contestation est essentiel pour exercer efficacement vos droits et pour assurer la légitimité des décisions.

## Qu'est-ce qu'une assemblée générale de copropriété ?

L'assemblée générale est une réunion de copropriétaires convoquée par le syndic ou, en son absence, par un copropriétaire mandaté (ou le conseil syndical). Elle réunit les propriétaires pour entendre les rapports de gestion, approuver les comptes, voter les décisions concernant l'immeuble, élire le conseil syndical, et débattre des sujets touchant la vie collective. L'AG tient sa légitimité de la loi et du règlement de copropriété : c'est elle qui décide, pas le syndic. Le syndic est simplement l'exécutant des décisions votées par l'AG. Il existe deux types d'AG : l'AG ordinaire, tenue au minimum une fois par an (généralement en premier trimestre de l'année), débattant des comptes et décisions de routine ; et l'AG extraordinaire, convoquée en cas d'enjeu urgent (travaux majeurs, changement de syndic, modifications du règlement) hors du calendrier annuel.

## La convocation à l'assemblée générale : procédure stricte

Le syndic doit adresser une convocation écrite à chaque copropriétaire au minimum deux semaines avant l'AG (délai légal). La convocation doit mentionner : la date, l'heure exacte, et le lieu de la réunion ; l'ordre du jour détaillé listant chaque point à débattre ; la composition du bureau de séance (président, secrétaire, scrutateur) ; et les modalités de vote (présence, procuration, correspondance, éventuellement visioconférence). Tout copropriétaire peut demander l'addition de points à l'ordre du jour, à condition de le faire par écrit au syndic au moins une semaine avant l'AG. Cette demande ne peut être refusée que si le point porte sur un sujet déjà à l'ordre du jour ou s'il relève du droit d'usage et non de la gestion (par exemple, plainte contre un voisin bruyant). Un ordre du jour incomplet ou ambigu peut justifier l'annulation de l'AG et donc des décisions votées.

## Les modalités de vote

Vous pouvez voter selon trois modalités : en votant physiquement en AG (le plus courant) ; par procuration écrite, en mandatant un tiers pour voter en votre nom (ce tiers peut être un copropriétaire, le syndic, ou toute autre personne) ; ou par correspondance (coupon de vote envoyé au syndic par courrier). Depuis 2020, la loi autorise aussi le vote par voie électronique si les statuts l'acceptent explicitement. Pour le vote par procuration, vous devez rédiger une procuration manuscrite ou électronique signée, spécifiant exactement pour quels points votre mandataire vote en votre nom, ou accordant un mandat général. N'accordez jamais un mandat blanc. Vous gardez le droit de révoquer votre procuration jusqu'au jour de l'AG. Le secret du vote est obligatoire pour toutes les élections (conseil syndical, syndic) et recommandé pour les décisions sensibles. Les votes sont comptabilisés proportionnellement aux millièmes de chaque copropriétaire : un vote ne compte pas "un vote" mais "autant de voix que le copropriétaire possède de millièmes".

## L'ordre du jour et les points débattus

L'ordre du jour type comporte plusieurs rubriques. D'abord, l'approbation des comptes de l'exercice précédent et du budget prévisionnel pour l'exercice suivant : c'est le moment d'examiner la gestion financière du syndic, de poser des questions, et de contester d'éventuelles anomalies. Ensuite, les décisions relatives aux travaux : entretien régulier, réparations urgentes, amélioration de l'immeuble, ou travaux de rénovation énergétique. Les travaux votés à titre préventif (sans caractère obligatoire) ne requièrent qu'une majorité simple ; les travaux obligatoires (sécurité, structure) requièrent parfois des majorités renforcées. L'ordre du jour inclut aussi les décisions relatives à la gestion (changement de syndic, modification du règlement, constitution d'un conseil syndical). Enfin, les copropriétaires élisent les membres du conseil syndical, qui supervisera le syndic l'année suivante.

## Les majorités de vote

La loi fixe plusieurs seuils de majorité selon l'importance de la décision. La majorité simple (plus de 50 % des voix exprimées) s'applique à la plupart des décisions courantes : approbation des comptes, travaux non obligatoires, élection du conseil syndical. La majorité des trois-quarts (75 % des voix) s'impose pour les décisions plus lourdes : travaux obligatoires de sécurité, modification substantielle du règlement de copropriété, changement du mode d'occupation (passage de résidence principale à location). L'unanimité est exigée pour certains changements majeurs : modification des tantièmes de répartition (avec exceptions pour raisons justifiées), suppression de la copropriété, ou vente d'une partie de l'immeuble. À noter : seules les voix exprimées (votes pour + votes contre) comptent dans le calcul des majorités ; les abstentions et les absences n'entrent pas dans le dénominateur. Cela signifie qu'une décision peut être votée avec seulement 40 % des copropriétaires présents ou représentés, si cette présence représente la majorité requise.

## Le quorum : condition préalable à la validité

Certaines décisions exigent un quorum, c'est-à-dire un seuil minimal de présence. La loi prévoit : pas de quorum pour les AG ordinaires (l'AG peut valider les comptes et travaux courants même avec peu de participants) ; 25 % de quorum pour une première délibération sur certains travaux lourds ; 50 % pour une deuxième délibération (réunion ultérieure) sur ces mêmes travaux. Faible participation à l'AG ? Le syndic doit reconvoquer pour une seconde AG si le quorum des 50 % n'est pas atteint ; cette seconde AG peut valider les travaux dès lors que la majorité requise est atteinte (indépendamment du quorum). Cette règle des deux délibérations assure que les travaux importants bénéficient d'une approbation plus robuste.

## Le procès-verbal de l'assemblée générale

Tout ce qui se dit et se vote à l'AG doit être consigné dans un procès-verbal écrit, signé par le président, le secrétaire et le scrutateur. Ce document enregistre : la date et l'heure, le nombre de copropriétaires présents et représentés, le quorum atteint, chaque point débattu, les questions posées et les réponses apportées, les votes et leurs résultats exacts (nombre de voix pour, contre, abstentions), et les décisions adoptées. Le procès-verbal doit être lu et approuvé lors de la réunion même ou lors d'une AG ultérieure. Une fois approuvé, il devient un document authentique, preuve des décisions votées. Les copropriétaires reçoivent un exemplaire du procès-verbal quelques semaines après l'AG. Ce document est essentiel : il justifie l'exécution de travaux, l'imputation de charges, ou les actions du syndic. Un procès-verbal incomplet, ambigu, ou contestable ouvre la porte à des recours légaux ultérieurs.

## Comment contester une décision d'assemblée générale ?

Tout copropriétaire qui estime qu'une décision de l'AG viole la loi, le règlement de copropriété, ou les procédures légales peut la contester. Les motifs valables incluent : convocation défectueuse (délai insuffisant, ordre du jour incomplet), absence de quorum requis, calcul de majorité erroné, vote d'une décision ultra-vires (dépassant les compétences de l'AG), ou irrégularité grave dans le procès-verbal. La procédure de contestation requiert de saisir le tribunal judiciaire compétent (du ressort de la copropriété) par requête ou assignation. Le délai de recours est de deux mois à compter de la réception du procès-verbal. Attention : ce délai court et doit être respecté ; passé ce délai, la contestation devient irrecevable. Pendant le procès, la décision contestée peut rester exécutée (travaux commencés) ou être suspendue selon la décision du juge. Un jugement d'annulation invalide la décision et peut déboucher sur la reconvocation de l'AG. Les frais de procédure et les frais d'avocat demeurent à charge du demandeur (sauf décision de justice prévoyant un partage des dépens).

## Les défis courants et bonnes pratiques

Les AG sont souvent marquées par des tensions, des conflits de personnes, ou des décisions précipitées. Pour fluidifier les débats, une bonne pratique consiste à bien préparer l'ordre du jour, à fournir les documents pertinents (rapports, devis) à l'avance, et à ménager du temps pour les questions. Un président de séance compétent et neutre limite les dérives et préserve le civisme. La présence active du conseil syndical renforce le contrôle et la légitimité. Enfin, la médiation (plutôt que le procès) résout souvent plus vite et moins onéreusement les litiges naissants.`,
    publishedDate: "2024-03-01",
    readTime: 14,
  },
];

export const categories = [
  { name: "Le syndic", slug: "le-syndic" },
  { name: "Les charges", slug: "les-charges" },
  { name: "La copropriété", slug: "la-copropriete" },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(categorySlug: string): Guide[] {
  return guides.filter((guide) => guide.categorySlug === categorySlug);
}

export function getRelatedGuides(slug: string, limit: number = 2): Guide[] {
  const guide = getGuideBySlug(slug);
  if (!guide) return [];

  return guides
    .filter(
      (g) => g.categorySlug === guide.categorySlug && g.slug !== guide.slug
    )
    .slice(0, limit);
}
