
import React from 'react';
import {
  MessageCircle,
  ShieldCheck,
  Wrench,
  Truck,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/bicycles';

// Correct Vite image path: src/assets/images/
import heroImage from '../assets/images/hero_uk_bicycles_1793166402523.jpg';

export const Hero = ({ onExploreCatalogue, onWhyChooseUs }) => {
  const whatsappLink =
    BUSINESS_INFO?.whatsAppLink ||
    'https://wa.me/254719618690';

  const location = [
    BUSINESS_INFO?.location?.city || 'Athi River',
    BUSINESS_INFO?.location?.neighbourhood || 'Makadara',
  ]
    .filter(Boolean)
    .join(', ');

  const landmark =
    BUSINESS_INFO?.location?.landmark || 'Near Mavuno Fertilizer';

  const handleExplore = () => {
    if (typeof onExploreCatalogue === 'function') {
      onExploreCatalogue();
      return;
    }

    document.getElementById('catalogue')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleWhyChooseUs = () => {
    if (typeof onWhyChooseUs === 'function') {
      onWhyChooseUs();
      return;
    }

    document.getElementById('why-us')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-neutral-200 bg-white pt-6 pb-12 lg:pt-10 lg:pb-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left column: Main message and actions */}
          <div className="space-y-6 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span>
                Ex-UK Bicycles in Kenya · Ask About Current Availability
              </span>
            </div>

            <h1 className="text-balance text-3xl font-extrabold leading-[1.15] tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Ex-UK Bicycles.{' '}
              <span className="text-blue-600">
                Find Your Next Ride
              </span>{' '}
              for Kenyan Roads.
            </h1>

            <p className="max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              Explore road, mountain, hybrid, gravel, and kids' bicycles.
              Whether you need a bike for commuting, fitness, adventure, or
              everyday use, contact us to check current models, prices,
              condition, and sizing before you buy.
            </p>

            {/* Key customer benefits */}
            <div className="grid grid-cols-1 gap-2.5 pt-1 text-sm text-neutral-700 sm:grid-cols-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                <span>Multiple bicycle styles to explore</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                <span>Ask about condition and specifications</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                <span>Confirm sizing before purchasing</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600" />
                <span>Ask about delivery options</span>
              </div>
            </div>

            {/* Main action buttons */}
            <div className="flex flex-col items-stretch gap-3 pt-3 sm:flex-row sm:items-center">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Ex-UK Bicycles Kenya on WhatsApp"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow sm:text-base"
              >
                <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                <span>Enquire on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={handleExplore}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-neutral-100 px-6 py-3.5 text-sm font-semibold text-neutral-800 transition-colors hover:bg-neutral-200 active:bg-neutral-300 sm:text-base"
              >
                <span>View Bicycle Catalogue</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <p className="flex items-center gap-1.5 pt-1 text-xs text-neutral-500">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Contact us for current prices, availability, and bicycle photos.
            </p>
          </div>

          {/* Right column: Hero image */}
          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100 shadow-md lg:h-[480px] lg:aspect-auto">
              <img
                src={heroImage}
                alt="Bicycles available from Ex-UK Bicycles Kenya"
                className="h-full w-full object-cover object-center"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-950/85 via-neutral-950/40 to-transparent p-5 text-white">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-blue-300">
                  Ex-UK Bicycles Kenya
                </div>

                <p className="text-sm font-medium leading-snug text-neutral-100">
                  Explore available bicycles and contact us to confirm the
                  details of the bike you want.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Information and benefits row */}
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-neutral-200 pt-8 md:grid-cols-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-600">
              <ShieldCheck className="h-5 w-5 shrink-0" />
              <span className="font-mono-num text-2xl font-bold text-neutral-950">
                Choice
              </span>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-700">
              Explore Bicycle Types
            </div>

            <p className="text-xs text-neutral-500">
              Browse different styles and ask about the available models.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-600">
              <Wrench className="h-5 w-5 shrink-0" />
              <span className="font-mono-num text-2xl font-bold text-neutral-950">
                Details
              </span>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-700">
              Condition and Features
            </div>

            <p className="text-xs text-neutral-500">
              Ask about each bicycle's condition, components, and sizing.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-600">
              <Truck className="h-5 w-5 shrink-0" />
              <span className="font-mono-num text-2xl font-bold text-neutral-950">
                Delivery
              </span>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-700">
              Ask About Delivery
            </div>

            <p className="text-xs text-neutral-500">
              Confirm available delivery methods, charges, and destination
              coverage before ordering.
            </p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-blue-600">
              <MessageCircle className="h-5 w-5 shrink-0" />
              <span className="font-mono-num text-2xl font-bold text-neutral-950">
                Direct
              </span>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wide text-neutral-700">
              WhatsApp Enquiries
            </div>

            <p className="text-xs text-neutral-500">
              Ask for current prices, photos, measurements, and availability.
            </p>
          </div>
        </div>

        {/* Location strip */}
        <div className="mt-8 flex flex-col gap-3 rounded-xl border border-neutral-200 bg-neutral-50 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <Truck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

            <div>
              <p className="text-sm font-semibold text-neutral-900">
                Find us in {location}
              </p>

              <p className="mt-0.5 text-xs text-neutral-600">
                {landmark}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleWhyChooseUs}
            className="inline-flex shrink-0 cursor-pointer items-center gap-1 self-start text-sm font-semibold text-blue-700 hover:text-blue-900 sm:self-auto"
          >
            <span>Why Choose Us?</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
