'use client';

import Link from 'next/link';
import { useState } from 'react';
import Logo from '@/components/Logo';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <Link href="/">
            <Logo size={50} />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/services" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors">
              Nos services
            </Link>
            <Link href="/estimateur-charges" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors">
              Estimateur de charges
            </Link>
            <Link href="/guides-copropriete" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors">
              Guides
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/demande-devis" className="px-6 py-2 bg-[#C4A35A] text-[#1A2535] font-semibold rounded-lg hover:opacity-90 transition-opacity">
              Demande de devis
            </Link>
          </div>

          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-4">
            <Link href="/services" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors block">
              Nos services
            </Link>
            <Link href="/estimateur-charges" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors block">
              Estimateur de charges
            </Link>
            <Link href="/guides-copropriete" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors block">
              Guides
            </Link>
            <Link href="/a-propos" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors block">
              À propos
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-[#0E7377] font-medium transition-colors block">
              Contact
            </Link>
            <Link href="/demande-devis" className="w-full text-center px-6 py-2 bg-[#C4A35A] text-[#1A2535] font-semibold rounded-lg hover:opacity-90 transition-opacity block">
              Demande de devis
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
