'use client';

import { useState } from 'react';

// Types for form state
interface FormData {
  // Step 1
  codePostal: string;
  ville: string;
  nombreLots: string;
  typeCopropriete: string;
  // Step 2
  avezSyndicActuel: string;
  satisfactionSyndicActuel: string;
  motifRecherche: string;
  // Step 3
  servicesInteres: string[];
  commentaires: string;
  // Step 4
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  role: string;
  acceptRgpd: boolean;
}

export default function DemandeDevisPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<FormData>({
    codePostal: '',
    ville: '',
    nombreLots: '',
    typeCopropriete: '',
    avezSyndicActuel: '',
    satisfactionSyndicActuel: '',
    motifRecherche: '',
    servicesInteres: [],
    commentaires: '',
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    role: '',
    acceptRgpd: false,
  });

  // Validate current step
  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.codePostal.trim()) {
        newErrors.codePostal = 'Code postal requis';
      }
      if (!formData.ville.trim()) {
        newErrors.ville = 'Ville requise';
      }
      if (!formData.nombreLots) {
        newErrors.nombreLots = 'Nombre de lots requis';
      }
      if (!formData.typeCopropriete) {
        newErrors.typeCopropriete = 'Type de copropriété requis';
      }
    } else if (step === 2) {
      if (!formData.avezSyndicActuel) {
        newErrors.avezSyndicActuel = 'Veuillez répondre à cette question';
      }
      if (
        formData.avezSyndicActuel === 'oui' &&
        !formData.satisfactionSyndicActuel
      ) {
        newErrors.satisfactionSyndicActuel =
          'Veuillez indiquer votre niveau de satisfaction';
      }
      if (!formData.motifRecherche) {
        newErrors.motifRecherche = 'Veuillez sélectionner un motif';
      }
    } else if (step === 3) {
      if (formData.servicesInteres.length === 0) {
        newErrors.servicesInteres = 'Sélectionnez au moins un service';
      }
    } else if (step === 4) {
      if (!formData.nom.trim()) {
        newErrors.nom = 'Nom requis';
      }
      if (!formData.prenom.trim()) {
        newErrors.prenom = 'Prénom requis';
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email requis';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Email invalide';
      }
      if (!formData.telephone.trim()) {
        newErrors.telephone = 'Téléphone requis';
      }
      if (!formData.role) {
        newErrors.role = 'Rôle requis';
      }
      if (!formData.acceptRgpd) {
        newErrors.acceptRgpd = 'Vous devez accepter le traitement des données';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear error for this field
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle radio button changes
  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Handle checkbox services
  const handleServiceChange = (service: string) => {
    setFormData((prev) => {
      const services = prev.servicesInteres.includes(service)
        ? prev.servicesInteres.filter((s) => s !== service)
        : [...prev.servicesInteres, service];

      return {
        ...prev,
        servicesInteres: services,
      };
    });

    if (errors.servicesInteres) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors.servicesInteres;
        return newErrors;
      });
    }
  };

  // Navigate to next step
  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Navigate to previous step
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (validateStep(currentStep)) {
      try {
        const res = await fetch('/api/devis', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (!res.ok) throw new Error();

        setSubmitted(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch {
        setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.' });
      }
    }
  };

  // Success screen
  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center px-4 py-12">
        <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          {/* Success checkmark */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Votre demande a bien été envoyée !
          </h2>

          <p className="text-gray-600 mb-8">
            Notre équipe vous recontactera sous 24h pour discuter de vos besoins
            et vous proposer une solution adaptée à votre copropriété.
          </p>

          <button
            onClick={() => {
              window.location.href = '/';
            }}
            className="w-full bg-gradient-to-r from-blue-800 to-blue-700 hover:from-teal-600 hover:to-teal-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Demande de devis gratuit
          </h1>
          <p className="text-lg text-gray-700">
            Obtenez une proposition personnalisée en quelques minutes
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-gray-700">
              Étape {currentStep} sur 4
            </h2>
            <span className="text-sm text-gray-600">
              {Math.round((currentStep / 4) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-teal-700 to-teal-600 h-full rounded-full transition-all duration-500"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          {/* Step 1: Votre copropriété */}
          {currentStep === 1 && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center mr-3 text-lg font-bold">
                  1
                </span>
                Votre copropriété
              </h3>

              <div className="space-y-6">
                {/* Code Postal */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Code postal <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="codePostal"
                    value={formData.codePostal}
                    onChange={handleInputChange}
                    placeholder="75001"
                    className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                      errors.codePostal
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-teal-500'
                    }`}
                  />
                  {errors.codePostal && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.codePostal}
                    </p>
                  )}
                </div>

                {/* Ville */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Ville <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="ville"
                    value={formData.ville}
                    onChange={handleInputChange}
                    placeholder="Paris"
                    className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                      errors.ville
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-teal-500'
                    }`}
                  />
                  {errors.ville && (
                    <p className="text-red-500 text-sm mt-1">{errors.ville}</p>
                  )}
                </div>

                {/* Nombre de lots */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre de lots <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="nombreLots"
                    value={formData.nombreLots}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                      errors.nombreLots
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-teal-500'
                    }`}
                  >
                    <option value="">Sélectionnez</option>
                    <option value="1-10">1 - 10 lots</option>
                    <option value="11-25">11 - 25 lots</option>
                    <option value="26-50">26 - 50 lots</option>
                    <option value="51-100">51 - 100 lots</option>
                    <option value="100+">100+ lots</option>
                  </select>
                  {errors.nombreLots && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.nombreLots}
                    </p>
                  )}
                </div>

                {/* Type de copropriété */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type de copropriété <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="typeCopropriete"
                    value={formData.typeCopropriete}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                      errors.typeCopropriete
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-teal-500'
                    }`}
                  >
                    <option value="">Sélectionnez</option>
                    <option value="residentielles">Résidentielle</option>
                    <option value="mixte">Mixte</option>
                    <option value="commerciale">Commerciale</option>
                  </select>
                  {errors.typeCopropriete && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.typeCopropriete}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Votre situation actuelle */}
          {currentStep === 2 && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center mr-3 text-lg font-bold">
                  2
                </span>
                Votre situation actuelle
              </h3>

              <div className="space-y-6">
                {/* Avez-vous actuellement un syndic */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Avez-vous actuellement un syndic ?{' '}
                    <span className="text-red-500">*</span>
                  </p>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="avezSyndicActuel"
                        value="oui"
                        checked={formData.avezSyndicActuel === 'oui'}
                        onChange={() =>
                          handleRadioChange('avezSyndicActuel', 'oui')
                        }
                        className="w-4 h-4 text-teal-700 cursor-pointer"
                      />
                      <span className="ml-3 text-gray-700">Oui</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="avezSyndicActuel"
                        value="non"
                        checked={formData.avezSyndicActuel === 'non'}
                        onChange={() =>
                          handleRadioChange('avezSyndicActuel', 'non')
                        }
                        className="w-4 h-4 text-teal-700 cursor-pointer"
                      />
                      <span className="ml-3 text-gray-700">Non</span>
                    </label>
                  </div>
                  {errors.avezSyndicActuel && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.avezSyndicActuel}
                    </p>
                  )}
                </div>

                {/* Satisfaction du syndic actuel (conditional) */}
                {formData.avezSyndicActuel === 'oui' && (
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                      Êtes-vous satisfait de votre syndic actuel ?{' '}
                      <span className="text-red-500">*</span>
                    </p>
                    <div className="space-y-2">
                      {[
                        { value: 'tres-satisfait', label: 'Très satisfait' },
                        { value: 'satisfait', label: 'Satisfait' },
                        { value: 'peu-satisfait', label: 'Peu satisfait' },
                        {
                          value: 'pas-satisfait',
                          label: 'Pas du tout satisfait',
                        },
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center cursor-pointer"
                        >
                          <input
                            type="radio"
                            name="satisfactionSyndicActuel"
                            value={option.value}
                            checked={
                              formData.satisfactionSyndicActuel === option.value
                            }
                            onChange={() =>
                              handleRadioChange(
                                'satisfactionSyndicActuel',
                                option.value
                              )
                            }
                            className="w-4 h-4 text-teal-700 cursor-pointer"
                          />
                          <span className="ml-3 text-gray-700">
                            {option.label}
                          </span>
                        </label>
                      ))}
                    </div>
                    {errors.satisfactionSyndicActuel && (
                      <p className="text-red-500 text-sm mt-2">
                        {errors.satisfactionSyndicActuel}
                      </p>
                    )}
                  </div>
                )}

                {/* Motif principal de recherche */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Motif principal de votre recherche{' '}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="motifRecherche"
                    value={formData.motifRecherche}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                      errors.motifRecherche
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-teal-500'
                    }`}
                  >
                    <option value="">Sélectionnez</option>
                    <option value="insatisfaction-syndic">
                      Insatisfaction du syndic actuel
                    </option>
                    <option value="charges-elevees">Charges trop élevées</option>
                    <option value="manque-transparence">
                      Manque de transparence
                    </option>
                    <option value="manque-reactivite">
                      Manque de réactivité
                    </option>
                    <option value="nouvelle-copropriete">
                      Nouvelle copropriété
                    </option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.motifRecherche && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.motifRecherche}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Vos besoins */}
          {currentStep === 3 && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center mr-3 text-lg font-bold">
                  3
                </span>
                Vos besoins
              </h3>

              <div className="space-y-6">
                {/* Services */}
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-3">
                    Quels services vous intéressent ?{' '}
                    <span className="text-red-500">*</span>
                  </p>
                  <div className="space-y-3">
                    {[
                      { value: 'gestion-courante', label: 'Gestion courante' },
                      { value: 'audit-charges', label: 'Audit de charges' },
                      {
                        value: 'optimisation-contrats',
                        label: 'Optimisation des contrats',
                      },
                      {
                        value: 'suivi-technique',
                        label: 'Suivi technique et travaux',
                      },
                      {
                        value: 'accompagnement-juridique',
                        label: 'Accompagnement juridique',
                      },
                      {
                        value: 'transition-syndic',
                        label: 'Transition de syndic',
                      },
                    ].map((service) => (
                      <label
                        key={service.value}
                        className="flex items-center cursor-pointer p-3 border-2 border-gray-200 rounded-lg hover:border-teal-500 transition"
                      >
                        <input
                          type="checkbox"
                          name={service.value}
                          checked={formData.servicesInteres.includes(
                            service.value
                          )}
                          onChange={() => handleServiceChange(service.value)}
                          className="w-4 h-4 text-teal-700 rounded cursor-pointer"
                        />
                        <span className="ml-3 text-gray-700 font-medium">
                          {service.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  {errors.servicesInteres && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.servicesInteres}
                    </p>
                  )}
                </div>

                {/* Commentaires */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Commentaires ou besoins spécifiques
                  </label>
                  <textarea
                    name="commentaires"
                    value={formData.commentaires}
                    onChange={handleInputChange}
                    placeholder="Décrivez vos besoins spécifiques..."
                    rows={5}
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-500 transition resize-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Vos coordonnées */}
          {currentStep === 4 && (
            <div className="animate-fadeIn">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-teal-700 text-white flex items-center justify-center mr-3 text-lg font-bold">
                  4
                </span>
                Vos coordonnées
              </h3>

              <div className="space-y-6">
                {/* Nom et Prénom */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      placeholder="Dupont"
                      className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                        errors.nom
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-gray-300 focus:border-teal-500'
                      }`}
                    />
                    {errors.nom && (
                      <p className="text-red-500 text-sm mt-1">{errors.nom}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="prenom"
                      value={formData.prenom}
                      onChange={handleInputChange}
                      placeholder="Jean"
                      className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                        errors.prenom
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-gray-300 focus:border-teal-500'
                      }`}
                    />
                    {errors.prenom && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.prenom}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jean@example.com"
                    className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                      errors.email
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-teal-500'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    placeholder="+33 1 23 45 67 89"
                    className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                      errors.telephone
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-teal-500'
                    }`}
                  />
                  {errors.telephone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.telephone}
                    </p>
                  )}
                </div>

                {/* Rôle */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Votre rôle <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-2 border-2 rounded-lg focus:outline-none transition ${
                      errors.role
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-teal-500'
                    }`}
                  >
                    <option value="">Sélectionnez</option>
                    <option value="copropriétaire">Copropriétaire</option>
                    <option value="conseil-syndical">
                      Membre du conseil syndical
                    </option>
                    <option value="president-syndical">
                      Président du conseil syndical
                    </option>
                    <option value="proprietaire-bailleur">
                      Propriétaire bailleur
                    </option>
                    <option value="autre">Autre</option>
                  </select>
                  {errors.role && (
                    <p className="text-red-500 text-sm mt-1">{errors.role}</p>
                  )}
                </div>

                {/* RGPD Checkbox */}
                <div>
                  <label className="flex items-start cursor-pointer p-4 border-2 border-teal-200 rounded-lg bg-teal-50">
                    <input
                      type="checkbox"
                      name="acceptRgpd"
                      checked={formData.acceptRgpd}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-teal-700 rounded mt-1 cursor-pointer flex-shrink-0"
                    />
                    <span className="ml-3 text-gray-700 text-sm">
                      J'accepte que mes données soient traitées par Harmonia
                      Syndic dans le cadre de ma demande de devis.{' '}
                      <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.acceptRgpd && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.acceptRgpd}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between gap-4 mt-8 pt-8 border-t-2 border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition ${
                currentStep === 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-300 text-gray-800 hover:bg-gray-400'
              }`}
            >
              ← Précédent
            </button>

            {currentStep < 4 ? (
              <button
                onClick={handleNext}
                className="flex-1 bg-gradient-to-r from-teal-700 to-teal-600 hover:from-blue-800 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
              >
                Suivant →
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="flex-1 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2"
              >
                <span>Envoyer ma demande</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-gray-600 text-sm">
          <p>
            ✓ Aucun engagement | Réponse rapide | Devis gratuit et personnalisé
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
