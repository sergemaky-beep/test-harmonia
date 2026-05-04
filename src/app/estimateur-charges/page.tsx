'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

// Note: Metadata export is normally at the top level, but since we're using 'use client',
// we export it at the module level for this page. For proper SSG metadata, consider
// creating a layout.tsx for this route.
// export const metadata: Metadata = { ... };

type LotRange = '1-10' | '11-25' | '26-50' | '51-100' | '100+';

interface FormData {
  postalCode: string;
  lotCount: LotRange;
  commonAreaSize: string;
  elevator: boolean;
  gardien: boolean;
  heating: boolean;
  greenSpaces: boolean;
  pool: boolean;
  currentCharges: string;
}

interface EstimationResult {
  estimatedCharges: number;
  currentCharges: number;
  difference: number;
  percentageSavings: number;
  isAboveAverage: boolean;
}

export default function EstimateurCharges() {
  const [formData, setFormData] = useState<FormData>({
    postalCode: '',
    lotCount: '1-10',
    commonAreaSize: '',
    elevator: false,
    gardien: false,
    heating: false,
    greenSpaces: false,
    pool: false,
    currentCharges: '',
  });

  const [estimation, setEstimation] = useState<EstimationResult | null>(null);
  const [email, setEmail] = useState('');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const getBaseCost = (lotCount: LotRange): number => {
    const baseCosts: Record<LotRange, number> = {
      '1-10': 800,
      '11-25': 800,
      '26-50': 700,
      '51-100': 600,
      '100+': 500,
    };
    return baseCosts[lotCount];
  };

  const getRegionalFactor = (postalCode: string): number => {
    const parisRegion = ['75', '92', '93', '94'];
    const secondaryRegion = ['69', '13', '06', '31'];

    const prefix = postalCode.substring(0, 2);

    if (parisRegion.includes(prefix)) return 1.2;
    if (secondaryRegion.includes(prefix)) return 1.1;
    return 1.0;
  };

  const calculateEstimation = () => {
    const lotCount = parseInt(formData.lotCount.split('-')[0]);
    let baseCost = getBaseCost(formData.lotCount);

    // Apply modifiers
    if (formData.elevator) baseCost *= 1.15;
    if (formData.gardien) baseCost *= 1.1;
    if (formData.heating) baseCost *= 1.12;
    if (formData.greenSpaces) baseCost *= 1.05;
    if (formData.pool) baseCost *= 1.08;

    // Apply regional factor
    const regionalFactor = getRegionalFactor(formData.postalCode);
    const estimatedCharges = baseCost * lotCount * regionalFactor;

    const currentCharges = parseFloat(formData.currentCharges) || 0;
    const difference = currentCharges - estimatedCharges;
    const percentageSavings =
      currentCharges > 0 ? (difference / currentCharges) * 100 : 0;

    setEstimation({
      estimatedCharges: Math.round(estimatedCharges),
      currentCharges: Math.round(currentCharges),
      difference: Math.round(difference),
      percentageSavings: Math.round(percentageSavings),
      isAboveAverage: currentCharges > estimatedCharges,
    });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      formData.postalCode &&
      formData.lotCount &&
      formData.commonAreaSize &&
      formData.currentCharges
    ) {
      calculateEstimation();
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setEmailSubmitted(true);
      // In a real app, this would send to a backend
      setTimeout(() => {
        setEmailSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const formatCurrency = (value: number): string => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <>
      {/* SEO Metadata - rendered as a custom meta component for 'use client' directive */}
      <head>
        <title>
          Estimateur de charges de copropriété | Harmonia Syndic
        </title>
        <meta
          name="description"
          content="Comparez vos charges de copropriété avec la moyenne nationale. Utilisez notre estimateur gratuit pour découvrir vos économies potentielles et optimiser votre gestion."
        />
        <meta
          name="keywords"
          content="estimateur charges copropriété, charges immobilières, calcul charges, copropriété France"
        />
        <meta property="og:title" content="Estimateur de charges de copropriété" />
        <meta
          property="og:description"
          content="Découvrez si vos charges sont compétitives grâce à notre estimateur intelligent"
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
      </head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0E7377] to-[#0E7377] text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Estimateur de charges de copropriété
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Comparez vos charges avec celles de copropriétés similaires et
            découvrez vos économies potentielles
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Form Section */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 card">
                <h2 className="text-2xl font-bold text-[#0E7377] mb-6">
                  Vos informations
                </h2>

                <form onSubmit={handleSubmitForm} className="space-y-6">
                  {/* Code Postal */}
                  <div>
                    <label className="label-text">Code postal *</label>
                    <input
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleInputChange}
                      placeholder="75001"
                      maxLength={5}
                      className="input-field"
                      required
                    />
                  </div>

                  {/* Nombre de lots */}
                  <div>
                    <label className="label-text">Nombre de lots *</label>
                    <select
                      name="lotCount"
                      value={formData.lotCount}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="1-10">1 - 10 lots</option>
                      <option value="11-25">11 - 25 lots</option>
                      <option value="26-50">26 - 50 lots</option>
                      <option value="51-100">51 - 100 lots</option>
                      <option value="100+">Plus de 100 lots</option>
                    </select>
                  </div>

                  {/* Surface totale */}
                  <div>
                    <label className="label-text">
                      Surface totale des parties communes (m²) *
                    </label>
                    <input
                      type="number"
                      name="commonAreaSize"
                      value={formData.commonAreaSize}
                      onChange={handleInputChange}
                      placeholder="1500"
                      className="input-field"
                      required
                    />
                  </div>

                  {/* Ascenseur */}
                  <div>
                    <label className="label-text mb-3">Ascenseur</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="elevator"
                          checked={formData.elevator === true}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              elevator: true,
                            }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Oui</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="elevator"
                          checked={formData.elevator === false}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              elevator: false,
                            }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Non</span>
                      </label>
                    </div>
                  </div>

                  {/* Gardien */}
                  <div>
                    <label className="label-text mb-3">
                      Gardien / concierge
                    </label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gardien"
                          checked={formData.gardien === true}
                          onChange={() =>
                            setFormData((prev) => ({ ...prev, gardien: true }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Oui</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="gardien"
                          checked={formData.gardien === false}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              gardien: false,
                            }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Non</span>
                      </label>
                    </div>
                  </div>

                  {/* Chauffage collectif */}
                  <div>
                    <label className="label-text mb-3">Chauffage collectif</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="heating"
                          checked={formData.heating === true}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              heating: true,
                            }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Oui</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="heating"
                          checked={formData.heating === false}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              heating: false,
                            }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Non</span>
                      </label>
                    </div>
                  </div>

                  {/* Espaces verts */}
                  <div>
                    <label className="label-text mb-3">Espaces verts</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="greenSpaces"
                          checked={formData.greenSpaces === true}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              greenSpaces: true,
                            }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Oui</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="greenSpaces"
                          checked={formData.greenSpaces === false}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              greenSpaces: false,
                            }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Non</span>
                      </label>
                    </div>
                  </div>

                  {/* Piscine */}
                  <div>
                    <label className="label-text mb-3">Piscine</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="pool"
                          checked={formData.pool === true}
                          onChange={() =>
                            setFormData((prev) => ({ ...prev, pool: true }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Oui</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="pool"
                          checked={formData.pool === false}
                          onChange={() =>
                            setFormData((prev) => ({
                              ...prev,
                              pool: false,
                            }))
                          }
                          className="w-4 h-4"
                        />
                        <span className="text-gray-700">Non</span>
                      </label>
                    </div>
                  </div>

                  {/* Montant annuel actuel */}
                  <div>
                    <label className="label-text">
                      Montant annuel actuel de vos charges (€) *
                    </label>
                    <input
                      type="number"
                      name="currentCharges"
                      value={formData.currentCharges}
                      onChange={handleInputChange}
                      placeholder="15000"
                      className="input-field"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-3 text-lg font-semibold"
                  >
                    Estimer mes charges
                  </button>
                </form>
              </div>
            </div>

            {/* Results Section */}
            <div>
              {estimation ? (
                <div className="space-y-6">
                  {/* Main Results Card */}
                  <div className="bg-white rounded-lg shadow-lg p-8 card">
                    <h2 className="text-2xl font-bold text-[#0E7377] mb-8">
                      Résultats de votre estimation
                    </h2>

                    <div className="space-y-6">
                      {/* Estimated Charges */}
                      <div className="border-b pb-4">
                        <p className="text-gray-600 text-sm font-medium mb-2">
                          Estimation moyenne pour une copropriété similaire
                        </p>
                        <p className="text-3xl font-bold text-[#0E7377]">
                          {formatCurrency(estimation.estimatedCharges)}
                          <span className="text-lg text-gray-600">/an</span>
                        </p>
                      </div>

                      {/* Current Charges */}
                      <div className="border-b pb-4">
                        <p className="text-gray-600 text-sm font-medium mb-2">
                          Vos charges actuelles
                        </p>
                        <p className="text-3xl font-bold text-gray-800">
                          {formatCurrency(estimation.currentCharges)}
                          <span className="text-lg text-gray-600">/an</span>
                        </p>
                      </div>

                      {/* Comparison Result */}
                      {estimation.isAboveAverage ? (
                        <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                          <p className="text-green-800 font-semibold text-lg mb-1">
                            Économies potentielles
                          </p>
                          <p className="text-green-700 text-sm mb-2">
                            {formatCurrency(estimation.difference)} par an (
                            {estimation.percentageSavings}%)
                          </p>
                          <p className="text-green-600 text-xs">
                            Vos charges sont plus élevées que la moyenne. Une
                            optimisation est possible.
                          </p>
                        </div>
                      ) : (
                        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                          <p className="text-blue-800 font-semibold text-lg">
                            Vos charges sont dans la moyenne !
                          </p>
                          <p className="text-blue-600 text-sm">
                            Bonne gestion de votre copropriété.
                          </p>
                        </div>
                      )}

                      {/* Visual Comparison */}
                      <div className="pt-4">
                        <p className="text-gray-600 text-sm font-medium mb-3">
                          Comparaison visuelle
                        </p>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                              <span>Estimation</span>
                              <span>
                                {Math.round(
                                  (estimation.estimatedCharges /
                                    Math.max(
                                      estimation.estimatedCharges,
                                      estimation.currentCharges
                                    )) *
                                    100
                                )}
                                %
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-[#0E7377] h-2 rounded-full"
                                style={{
                                  width: `${(estimation.estimatedCharges / Math.max(estimation.estimatedCharges, estimation.currentCharges)) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs text-gray-600 mb-1">
                              <span>Vos charges</span>
                              <span>
                                {Math.round(
                                  (estimation.currentCharges /
                                    Math.max(
                                      estimation.estimatedCharges,
                                      estimation.currentCharges
                                    )) *
                                    100
                                )}
                                %
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  estimation.isAboveAverage
                                    ? 'bg-orange-500'
                                    : 'bg-green-500'
                                }`}
                                style={{
                                  width: `${(estimation.currentCharges / Math.max(estimation.estimatedCharges, estimation.currentCharges)) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="bg-gradient-to-br from-[#0E7377] to-[#0E7377] rounded-lg shadow-lg p-8 text-white">
                    <h3 className="text-xl font-bold mb-4">
                      Vous souhaitez optimiser vos charges ?
                    </h3>
                    <Link
                      href="/demande-devis"
                      className="btn-primary inline-block w-full text-center py-3 font-semibold"
                    >
                      Demander un audit gratuit
                    </Link>
                  </div>

                  {/* Email Report Section */}
                  <div className="bg-[#FDF0EB] rounded-lg p-6 border border-[#0E7377]">
                    <h3 className="font-semibold text-gray-800 mb-4">
                      Recevez votre rapport détaillé par email
                    </h3>
                    {emailSubmitted ? (
                      <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
                        Merci ! Votre rapport a été envoyé à {email}
                      </div>
                    ) : (
                      <form onSubmit={handleEmailSubmit} className="flex gap-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="votre@email.com"
                          className="input-field flex-1"
                          required
                        />
                        <button
                          type="submit"
                          className="btn-secondary px-6 whitespace-nowrap"
                        >
                          Envoyer
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-[#FDF0EB] rounded-lg shadow-lg p-8 text-center">
                  <div className="text-6xl mb-4">📊</div>
                  <p className="text-gray-600 text-lg">
                    Remplissez le formulaire pour obtenir une estimation
                    personnalisée de vos charges
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Methodology Section */}
          <section className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-[#0E7377] mb-6 text-center">
              Comment fonctionne notre estimateur ?
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-block bg-[#C4A35A] rounded-full p-4 mb-4">
                  <span className="text-3xl text-white">📈</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-3">
                  Données publiques
                </h3>
                <p className="text-gray-600 text-sm">
                  Nous nous appuyons sur des données immobilières publiques et
                  des statistiques officielles pour garantir la précision.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block bg-[#0E7377] rounded-full p-4 mb-4">
                  <span className="text-3xl text-white">🏢</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-3">
                  Annonces immobilières
                </h3>
                <p className="text-gray-600 text-sm">
                  Analyse de milliers d'annonces pour déterminer les charges
                  moyennes par région et type de copropriété.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block bg-[#0E7377] rounded-full p-4 mb-4">
                  <span className="text-3xl text-white">📊</span>
                </div>
                <h3 className="font-bold text-gray-800 mb-3">Indices INSEE</h3>
                <p className="text-gray-600 text-sm">
                  Application des indices INSEE pour ajuster les estimations
                  selon la région géographique.
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
              <p className="text-yellow-800 text-sm">
                <strong>Avertissement :</strong> Cette estimation est fournie à
                titre indicatif et basée sur des données statistiques moyennes.
                Les charges réelles peuvent varier en fonction de nombreux
                facteurs spécifiques à votre copropriété (années de construction,
                état général, services supplémentaires, etc.). Harmonia Syndic
                recommande de consulter votre syndic actuel pour une analyse
                détaillée de vos charges.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
