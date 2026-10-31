
import React from 'react';
import {
  Bike,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowUpRight,
} from 'lucide-react';

import { BUSINESS_INFO } from '../data/bicycles';

const DEFAULT_PHONE = '0719618690';
const DEFAULT_WHATSAPP = '254719618690';

export const Footer = ({ onNavigate }) => {
  const phone = BUSINESS_INFO?.phone || DEFAULT_PHONE;

  const whatsappNumber = String(
    BUSINESS_INFO?.whatsAppNumber || DEFAULT_WHATSAPP
  ).replace(/\D/g, '');

  const whatsappLink =
    BUSINESS_INFO?.whatsAppLink ||
    `https://wa.me/${whatsappNumber}`;

  const location = BUSINESS_INFO?.location || {};

  const city = location.city || 'Athi River';
  const neighbourhood = location.neighbourhood || 'Makadara';
  const landmark = location.landmark || 'Near Mavuno Fertilizer';

  const openHours =
    location.openHours ||
    'Contact us on WhatsApp to confirm opening hours.';

  const navigateTo = (sectionId) => {
    if (typeof onNavigate === 'function') {
      onNavigate(sectionId);
      return;
    }

    // Fallback for pages that navigate using section IDs.
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });

      return;
    }

    // If the section is not found, update the URL hash.
    window.location.hash = sectionId;
  };

  const navigationLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Bicycle Catalogue', id: 'catalogue' },
    { label: 'Why Choose Ex-UK', id: 'why-us' },
    { label: 'About Our Business', id: 'about' },
    { label: 'Frequently Asked Questions', id: 'faqs' },
    { label: 'Contact & Directions', id: 'contact' },
  ];

  const bicycleCategories = [
    'Ex-UK Mountain Bikes',
    'Road & Racing Bicycles',
    'Hybrid & Urban Commuter Bicycles',
    'Gravel & All-Road Adventure Bikes',
    'Kids & Junior Bicycles',
    'Specific Brand and Model Requests',
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-xs text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Brand and Contact */}
          <div className="space-y-4 lg:col-span-4">
            <button
              type="button"
              onClick={() => navigateTo('home')}
              className="group flex cursor-pointer items-center gap-2.5 text-left"
              aria-label="Ex-UK Bicycles Kenya home"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white transition-colors group-hover:bg-blue-500">
                <Bike className="h-5 w-5" />
              </span>

              <span className="text-lg font-bold tracking-tight text-white">
                Ex-UK Bicycles Kenya
              </span>
            </button>

            <p className="max-w-sm text-xs leading-relaxed text-slate-400">
              Explore a selection of Ex-UK bicycles for commuting,
              fitness, road riding, trails, and family cycling. Browse
              our catalogue and contact us to confirm current models,
              prices, specifications, and availability.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
              >
                <MessageCircle className="h-4 w-4 shrink-0" />
                <span>WhatsApp: {phone}</span>
              </a>

              <a
                href={`tel:${String(phone).replace(/[^\d+]/g, '')}`}
                className="flex items-center gap-2 text-slate-300 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-blue-400" />
                <span>Call Us: {phone}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-3 lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h3>

            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      type="button"
                      onClick={() => navigateTo(link.id)}
                      className="cursor-pointer text-left transition-colors hover:text-blue-400 focus:outline-none focus-visible:text-blue-400"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Column 3: Bicycle Categories */}
          <div className="space-y-3 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Bicycle Categories
            </h3>

            <ul className="space-y-2.5 leading-relaxed text-slate-400">
              {bicycleCategories.map((category) => (
                <li key={category}>
                  <button
                    type="button"
                    onClick={() => navigateTo('catalogue')}
                    className="cursor-pointer text-left transition-colors hover:text-blue-400 focus:outline-none focus-visible:text-blue-400"
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            <p className="pt-1 text-[11px] leading-relaxed text-slate-500">
              Contact us to enquire about a particular brand, model,
              frame size, or bicycle type.
            </p>
          </div>

          {/* Column 4: Location and Hours */}
          <div className="space-y-3 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Location & Pickup
            </h3>

            <div className="space-y-4 text-slate-400">
              {/* Business Location */}
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                <div className="space-y-1">
                  <p className="font-semibold text-slate-200">
                    {city}, {neighbourhood}
                  </p>

                  <p className="leading-relaxed">
                    {landmark}, Kenya.
                  </p>

                  <p className="text-[11px] leading-relaxed text-slate-500">
                    Contact us before visiting to confirm the exact
                    meeting point.
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                <div className="space-y-1">
                  <p className="font-semibold text-slate-200">
                    Opening Hours
                  </p>

                  <p className="leading-relaxed">{openHours}</p>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-1">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3.5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-center text-[11px] text-slate-500 sm:flex-row sm:text-left">
          <p>
            © {new Date().getFullYear()} Ex-UK Bicycles Kenya. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 sm:justify-end">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-emerald-400"
            >
              WhatsApp: {phone}
            </a>

            <span aria-hidden="true">·</span>

            <button
              type="button"
              onClick={() => navigateTo('catalogue')}
              className="cursor-pointer transition-colors hover:text-blue-400"
            >
              Browse Bicycles
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
