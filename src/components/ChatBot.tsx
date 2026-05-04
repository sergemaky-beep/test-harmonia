'use client';

import { useState } from 'react';

interface Message {
  id: string;
  type: 'welcome' | 'bot' | 'user';
  text: string;
  showQuickActions?: boolean;
  actionButtons?: Array<{ label: string; action: string }>;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'welcome',
      text: 'Bonjour ! Je suis l\'assistant virtuel d\'Harmonia Syndic & Gestion. Comment puis-je vous aider ?',
      showQuickActions: true,
      actionButtons: [
        { label: 'Demander un devis', action: 'devis' },
        { label: 'Prendre rendez-vous', action: 'rdv' },
        { label: 'Estimer mes charges', action: 'charges' },
        { label: 'Parler à un conseiller', action: 'conseiller' },
      ],
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleQuickAction = (action: string) => {
    if (action === 'rdv') {
      const userMsg: Message = {
        id: Date.now().toString(),
        type: 'user',
        text: 'Prendre rendez-vous',
      };
      setMessages((prev) => [...prev, userMsg]);

      setTimeout(() => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: 'Parfait ! Choisissez un créneau qui vous convient :',
        };
        setMessages((prev) => [...prev, botMsg]);

        const calendarMsg: Message = {
          id: (Date.now() + 2).toString(),
          type: 'bot',
          text: '',
        };
        setMessages((prev) => [...prev, calendarMsg]);
      }, 300);
    } else if (action === 'devis') {
      const userMsg: Message = {
        id: Date.now().toString(),
        type: 'user',
        text: 'Demander un devis',
      };
      setMessages((prev) => [...prev, userMsg]);

      setTimeout(() => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: 'Je vous redirige vers notre formulaire de devis personnalisé.',
        };
        setMessages((prev) => [...prev, botMsg]);

        setTimeout(() => {
          window.location.href = '/demande-devis';
        }, 1500);
      }, 300);
    } else if (action === 'charges') {
      const userMsg: Message = {
        id: Date.now().toString(),
        type: 'user',
        text: 'Estimer mes charges',
      };
      setMessages((prev) => [...prev, userMsg]);

      setTimeout(() => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: 'Je vous redirige vers notre estimateur de charges.',
        };
        setMessages((prev) => [...prev, botMsg]);

        setTimeout(() => {
          window.location.href = '/estimateur-charges';
        }, 1500);
      }, 300);
    } else if (action === 'conseiller') {
      const userMsg: Message = {
        id: Date.now().toString(),
        type: 'user',
        text: 'Parler à un conseiller',
      };
      setMessages((prev) => [...prev, userMsg]);

      setTimeout(() => {
        const botMsg: Message = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          text: 'Notre équipe est disponible du lundi au vendredi de 9h à 18h et 7j/7 pour les urgences (9h-19h). Appelez-nous au 01 89 71 43 54 ou écrivez-nous via le formulaire de contact.',
        };
        setMessages((prev) => [...prev, botMsg]);

        const contactMsg: Message = {
          id: (Date.now() + 2).toString(),
          type: 'bot',
          text: '',
        };
        setMessages((prev) => [...prev, contactMsg]);
      }, 300);
    }
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: 'Merci pour votre message ! Un conseiller Harmonia Syndic vous répondra dans les plus brefs délais. En attendant, vous pouvez :',
        showQuickActions: true,
        actionButtons: [
          { label: 'Demander un devis', action: 'devis' },
          { label: 'Prendre rendez-vous', action: 'rdv' },
          { label: 'Estimer mes charges', action: 'charges' },
          { label: 'Parler à un conseiller', action: 'conseiller' },
        ],
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        aria-label="Ouvrir le chat"
        title="Assistant Harmonia Syndic"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div
          className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in zoom-in duration-300"
          style={{
            animation: 'fadeInScale 0.3s ease-out',
          }}
        >
          <style>{`
            @keyframes fadeInScale {
              from {
                opacity: 0;
                transform: scale(0.95) translateY(10px);
              }
              to {
                opacity: 1;
                transform: scale(1) translateY(0);
              }
            }
          `}</style>

          {/* Header */}
          <div className="relative">
            <div className="h-1 bg-accent"></div>
            <div className="bg-gradient-to-r from-primary to-secondary px-4 py-3 text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-sm">Harmonia Syndic</h3>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-xs text-light">En ligne</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
                aria-label="Fermer le chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-light/30">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.type !== 'user' && msg.text && (
                  <div className="bg-white text-secondary rounded-lg rounded-tl-none px-4 py-2 max-w-xs text-sm shadow-sm">
                    {msg.text}
                  </div>
                )}
                {msg.type === 'user' && (
                  <div className="bg-primary text-white rounded-lg rounded-tr-none px-4 py-2 max-w-xs text-sm shadow-sm">
                    {msg.text}
                  </div>
                )}
                {msg.type === 'bot' && !msg.text && msg.id === messages[messages.length - 1].id && (
                  <div className="w-full">
                    {messages[messages.length - 2]?.text === 'Parfait ! Choisissez un créneau qui vous convient :' && (
                      <a
                        href="https://calendly.com/harmonia-syndic"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-accent text-secondary rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent/90 transition-colors"
                      >
                        Ouvrir l&apos;agenda
                      </a>
                    )}
                    {messages[messages.length - 2]?.text.includes('Notre équipe est disponible') && (
                      <a
                        href="/contact"
                        className="inline-block bg-accent text-secondary rounded-lg px-4 py-2 text-sm font-medium hover:bg-accent/90 transition-colors"
                      >
                        Formulaire de contact
                      </a>
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Quick Action Buttons */}
            {messages[messages.length - 1]?.showQuickActions && messages[messages.length - 1]?.actionButtons && (
              <div className="mt-4 space-y-2">
                {messages[messages.length - 1].actionButtons.map((btn) => (
                  <button
                    key={btn.action}
                    onClick={() => handleQuickAction(btn.action)}
                    className="w-full text-left bg-white border-2 border-primary text-primary rounded-lg px-3 py-2 text-sm hover:bg-primary hover:text-white transition-colors font-medium"
                  >
                    {btn.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Votre message..."
                className="flex-1 bg-light border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={handleSendMessage}
                className="bg-primary text-white rounded-lg px-3 py-2 hover:bg-primary/90 transition-colors flex items-center justify-center"
                aria-label="Envoyer le message"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
