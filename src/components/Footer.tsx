import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A2535] text-white mt-20">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-2 text-[#C4A35A]">Harmonia Syndic & Gestion</h3>
            <p className="text-gray-300 text-sm mb-3">
              Membre du réseau White Bird
            </p>
            <p className="text-gray-300 text-sm">
              Votre partenaire de confiance pour la gestion sereine de votre copropriété.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#C4A35A]">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#C4A35A] transition-colors">
                  Syndic de copropriété
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#C4A35A] transition-colors">
                  Assemblées générales
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#C4A35A] transition-colors">
                  Travaux & entretien
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-[#C4A35A] transition-colors">
                  Comptabilité transparente
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#C4A35A]">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/guides-copropriete" className="text-gray-300 hover:text-[#C4A35A] transition-colors">
                  Guides pratiques
                </Link>
              </li>
              <li>
                <Link href="/guides-copropriete" className="text-gray-300 hover:text-[#C4A35A] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-[#C4A35A] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="text-gray-300 hover:text-[#C4A35A] transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#C4A35A]">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="block">144 avenue Charles de Gaulle</span>
                <span className="block">92200 Neuilly-sur-Seine</span>
              </li>
              <li>
                <a href="tel:+33189714354" className="hover:text-[#C4A35A] transition-colors">
                  01 89 71 43 54
                </a>
              </li>
              <li>
                <a href="mailto:harmonia.syndic@whitebird.immo" className="hover:text-[#C4A35A] transition-colors">
                  harmonia.syndic@whitebird.immo
                </a>
              </li>
              <li className="pt-2">
                <span className="text-xs">Urgences : 7j/7 de 9h à 19h</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media */}
        <div className="border-t border-[#0E7377]/40 pt-8 mb-6">
          <p className="text-sm text-gray-300 mb-4 font-medium">
            Suivez-nous pour des conseils copropriété, des alertes réglementaires et les coulisses d&apos;un syndic qui fait les choses différemment.
          </p>
        </div>
        <div className="flex gap-4 mb-8">
          <a
            href="https://www.facebook.com/share/1BEKAeeRNb/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Harmonia Syndic"
            className="w-10 h-10 rounded-full bg-[#0E7377] flex items-center justify-center hover:bg-[#C4A35A] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/109222050/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Harmonia Syndic"
            className="w-10 h-10 rounded-full bg-[#0E7377] flex items-center justify-center hover:bg-[#C4A35A] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/harmonia_syndic_et_gestion_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Harmonia Syndic"
            className="w-10 h-10 rounded-full bg-[#0E7377] flex items-center justify-center hover:bg-[#C4A35A] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a
            href="https://www.google.com/search?sca_esv=91f788fc0d48d683&authuser=0&hl=fr&gl=fr&output=search&q=HARMONIA+SYNDIC+%26+GESTION&ludocid=8806120368095164277&lsig=AB86z5VprmHJjZF7XsXvVbQJhjGi"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Google My Business Harmonia Syndic"
            className="w-10 h-10 rounded-full bg-[#0E7377] flex items-center justify-center hover:bg-[#C4A35A] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
            </svg>
          </a>
        </div>

        <div className="border-t border-[#0E7377] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Harmonia Syndic & Gestion. Tous droits réservés.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/mentions-legales#confidentialite" className="hover:text-[#C4A35A] transition-colors">
                Politique de confidentialité
              </Link>
              <Link href="/mentions-legales" className="hover:text-[#C4A35A] transition-colors">
                Mentions légales
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
