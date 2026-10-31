
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/bicycles';

const DEFAULT_PHONE = '0719618690';
const DEFAULT_WHATSAPP = '254719618690';

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const phone = BUSINESS_INFO?.phone || DEFAULT_PHONE;

  const whatsappNumber = String(
    BUSINESS_INFO?.whatsAppNumber || DEFAULT_WHATSAPP
  ).replace(/\D/g, '');

  const whatsappLink =
    BUSINESS_INFO?.whatsAppLink ||
    `https://wa.me/${whatsappNumber}`;

  return (
    <aside
      aria-label="WhatsApp quick connect"
      className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2"
    >
      {/* Dismissible Prompt Balloon */}
      {showTooltip && (
        <div className="hidden max-w-xs items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3.5 py-2 text-xs text-neutral-900 shadow-lg sm:flex">
          <span
            aria-hidden="true"
            className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-500"
          />

          <span className="font-medium leading-relaxed">
            Need help picking a bike? Chat with us on WhatsApp.
          </span>

          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="ml-1 shrink-0 cursor-pointer rounded p-1 text-neutral-400 transition-colors hover:text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600"
            aria-label="Dismiss WhatsApp prompt"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with Ex-UK Bicycles Kenya on WhatsApp at ${phone}`}
        title={`Chat with us on WhatsApp: ${phone}`}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl transition-all duration-200 hover:scale-105 hover:bg-emerald-500 hover:shadow-2xl active:scale-95 active:bg-emerald-700 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
      >
        <MessageCircle
          aria-hidden="true"
          className="h-7 w-7 transition-transform duration-200 group-hover:scale-110"
        />

        {/* Online-Style Indicator */}
        <span
          aria-hidden="true"
          className="absolute right-1 top-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-300"
        />
      </a>
    </aside>
  );
};

export default FloatingWhatsApp;
