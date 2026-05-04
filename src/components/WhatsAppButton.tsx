'use client';

import { useState } from 'react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = '33661320186';
    const message = encodeURIComponent('Bonjour, je souhaite des informations sur vos services de syndic de copropriété.');
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div
        className="relative"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-full right-0 mb-3 bg-secondary text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg animate-in fade-in duration-200"
            style={{ animation: 'fadeInUp 0.2s ease-out' }}
          >
            <style>{`
              @keyframes fadeInUp {
                from {
                  opacity: 0;
                  transform: translateY(5px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            `}</style>
            Contactez-nous sur WhatsApp
            <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-secondary"></div>
          </div>
        )}

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
          aria-label="Contactez-nous sur WhatsApp"
          title="Contactez-nous sur WhatsApp"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.781 1.158l-.338-.052c-1.766 0-3.592 1.827-3.592 3.593 0 1.473.577 2.875 1.599 3.954l-.052.338c-.674 2.474.365 4.869 2.785 6.241.733.403 1.487.649 2.241.849.754.2 1.508.225 2.262 0 1.766 0 3.592-1.827 3.592-3.593 0-1.474-.577-2.876-1.599-3.955l.052-.338c.674-2.474-.365-4.869-2.785-6.241-.733-.402-1.487-.648-2.241-.848-.754-.2-1.508-.225-2.262 0z" />
          </svg>
        </button>

        {/* Pulse Animation Background */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75" style={{ animation: 'pulse 2s cubic-bezier(0, 0, 0.2, 1) infinite' }}></div>
      </div>
    </div>
  );
}
