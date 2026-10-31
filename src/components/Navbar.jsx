
import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Bike,
  MapPin,
  Clock,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/bicycles';

export const Navbar = ({ onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phone = BUSINESS_INFO?.phone || '0719618690';
  const whatsappLink =
    BUSINESS_INFO?.whatsAppLink || 'https://wa.me/254719618690';

  const location = [
    BUSINESS_INFO?.location?.city || 'Athi River',
    BUSINESS_INFO?.location?.neighbourhood || 'Makadara',
  ]
    .filter(Boolean)
    .join(', ');

  const landmark =
    BUSINESS_INFO?.location?.landmark || 'Near Mavuno Fertilizer';

  const openingHours = BUSINESS_INFO?.openHours || '';

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'Bicycle Catalogue', target: 'catalogue' },
    { label: 'Why Ex-UK', target: 'why-us' },
    { label: 'About Us', target: 'about' },
    { label: 'FAQs', target: 'faqs' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target) => {
    setMobileMenuOpen(false);

    if (typeof onNavigate === 'function') {
      onNavigate(target);
      return;
    }

    const section = document.getElementById(target);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      window.location.hash = target;
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-neutral-200 bg-white/95 backdrop-blur-md">
      {/* Top information strip */}
      <div className="border-b border-slate-800 bg-slate-900 px-4 py-2 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs font-medium sm:justify-start sm:gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-blue-400" />
              <span>{location} · {landmark}</span>
            </span>

            {openingHours && (
              <>
                <span className="hidden text-slate-600 md:inline">·</span>
                <span className="hidden items-center gap-1.5 md:flex">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  <span>{openingHours}</span>
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              className="flex items-center gap-1.5 transition-colors hover:text-white"
              aria-label={`Call ${phone}`}
            >
              <Phone className="h-3 w-3 text-blue-400" />
              <span>{phone}</span>
            </a>

            <span className="text-slate-700">|</span>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 font-medium text-emerald-400 transition-colors hover:text-emerald-300"
              aria-label="Chat with us on WhatsApp"
            >
              <MessageCircle className="h-3 w-3" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="group flex shrink-0 cursor-pointer items-center gap-2.5 whitespace-nowrap text-left text-neutral-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          aria-label="Ex-UK Bicycles Kenya home"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm transition-colors group-hover:bg-blue-700">
            <Bike className="h-6 w-6" />
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-lg font-bold tracking-tight text-neutral-950 sm:text-xl">
              <span>Ex-UK Bicycles</span>
              <span className="rounded border border-blue-200 bg-blue-50 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-blue-700">
                Kenya
              </span>
            </div>

            <p className="hidden text-[11px] tracking-tight text-neutral-500 sm:block">
              Find Your Next Ride
            </p>
          </div>
        </button>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-5 text-sm font-medium text-neutral-600 xl:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.target}
              type="button"
              onClick={() => handleNavClick(item.target)}
              className="shrink-0 cursor-pointer whitespace-nowrap py-2 transition-colors hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Main action and mobile menu */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 whitespace-nowrap rounded-lg bg-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 active:bg-emerald-800 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="cursor-pointer rounded-lg p-2 text-neutral-700 transition-colors hover:bg-neutral-100 hover:text-neutral-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 xl:hidden"
            aria-label={
              mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile and tablet navigation drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="space-y-2 border-t border-neutral-200 bg-white px-4 pt-3 pb-5 shadow-lg xl:hidden sm:px-6"
        >
          <nav aria-label="Mobile navigation" className="space-y-1">
            {navItems.map((item) => (
              <button
                key={item.target}
                type="button"
                onClick={() => handleNavClick(item.target)}
                className="block w-full cursor-pointer rounded-md px-3 py-3 text-left text-base font-medium text-neutral-800 transition-colors hover:bg-neutral-100 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex flex-col gap-2 border-t border-neutral-100 pt-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us: {phone}</span>
            </a>

            <a
              href={`tel:${phone.replace(/[^\d+]/g, '')}`}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-neutral-100 px-4 py-3 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-200"
            >
              <Phone className="h-4 w-4 text-blue-600" />
              <span>Call: {phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
