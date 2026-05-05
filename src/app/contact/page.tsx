'use client';

import { FormEvent, useState } from 'react';

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  objet: string;
  message: string;
  rgpd: boolean;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    objet: 'Demande d\'information',
    message: '',
    rgpd: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
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
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.nom ||
      !formData.prenom ||
      !formData.email ||
      !formData.telephone ||
      !formData.message
    ) {
      setError('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    if (!formData.rgpd) {
      setError('Veuillez accepter la politique de confidentialité.');
      return;
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      setSubmitted(true);
      setError('');
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.');
    }
  };

  const contactInfo = [
    {
      icon: '📍',
      title: 'Adresse',
      content: '144 avenue Charles de Gaulle, 92200 Neuilly-sur-Seine',
    },
    {
      icon: '📞',
      title: 'Téléphone',
      content: '01 89 71 43 54',
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'harmonia.syndic@whitebird.immo',
    },
    {
      icon: '🕒',
      title: 'Horaires',
      content: 'Lun-Ven 9h-18h | Urgences 7j/7 9h-19h',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: '#0E7377' }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg sm:text-xl text-blue-100">
            Nous sommes à votre écoute pour répondre à vos questions et vos demandes
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#0E7377' }}>
                Envoyez-nous un message
              </h2>

              {submitted ? (
                <div
                  className="p-6 rounded-lg text-white mb-8"
                  style={{ backgroundColor: '#0E7377' }}
                >
                  <h3 className="font-bold text-lg mb-2">✓ Merci !</h3>
                  <p>
                    Votre message a été envoyé avec succès. Nous vous
                    répondrons dans les 24 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      {error}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="nom"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Nom *
                      </label>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2"
                        onFocus={(e) =>
                          e.target.style.boxShadow = '0 0 0 3px rgba(14, 115, 119, 0.1)'
                        }
                        onBlur={(e) => (e.target.style.boxShadow = 'none')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="prenom"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Prénom *
                      </label>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        onFocus={(e) =>
                          e.target.style.boxShadow = '0 0 0 3px rgba(14, 115, 119, 0.1)'
                        }
                        onBlur={(e) => (e.target.style.boxShadow = 'none')}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        onFocus={(e) =>
                          e.target.style.boxShadow = '0 0 0 3px rgba(14, 115, 119, 0.1)'
                        }
                        onBlur={(e) => (e.target.style.boxShadow = 'none')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="telephone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        id="telephone"
                        name="telephone"
                        value={formData.telephone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                        onFocus={(e) =>
                          e.target.style.boxShadow = '0 0 0 3px rgba(14, 115, 119, 0.1)'
                        }
                        onBlur={(e) => (e.target.style.boxShadow = 'none')}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="objet"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Objet *
                    </label>
                    <select
                      id="objet"
                      name="objet"
                      value={formData.objet}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
                      onFocus={(e) =>
                        e.target.style.boxShadow = '0 0 0 3px rgba(14, 115, 119, 0.1)'
                      }
                      onBlur={(e) => (e.target.style.boxShadow = 'none')}
                    >
                      <option>Demande d'information</option>
                      <option>Demande de devis</option>
                      <option>Réclamation</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none resize-none"
                      onFocus={(e) =>
                        e.target.style.boxShadow = '0 0 0 3px rgba(14, 115, 119, 0.1)'
                      }
                      onBlur={(e) => (e.target.style.boxShadow = 'none')}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="rgpd"
                      name="rgpd"
                      checked={formData.rgpd}
                      onChange={handleChange}
                      className="mt-1 w-5 h-5 rounded border-gray-300"
                    />
                    <label
                      htmlFor="rgpd"
                      className="text-sm text-gray-700"
                    >
                      J'accepte la politique de confidentialité et consens au
                      traitement de mes données personnelles. *
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 text-white font-semibold rounded-lg transition-transform hover:scale-105"
                    style={{ backgroundColor: '#0E7377' }}
                  >
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8" style={{ color: '#0E7377' }}>
                Nos coordonnées
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gray-50 rounded-lg border-l-4"
                    style={{ borderLeftColor: '#C4A35A' }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-3xl flex-shrink-0">{info.icon}</div>
                      <div>
                        <h3
                          className="font-bold text-lg mb-1"
                          style={{ color: '#0E7377' }}
                        >
                          {info.title}
                        </h3>
                        <p className="text-gray-700">{info.content}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Google Maps Placeholder */}
              <div
                className="w-full h-64 rounded-lg bg-gray-300 flex items-center justify-center text-gray-600 text-center"
              >
                <div>
                  <div className="text-4xl mb-2">🗺️</div>
                  <p>Carte Google Maps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
