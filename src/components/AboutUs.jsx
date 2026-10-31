import React from 'react';
import {
  Shield,
  Wrench,
  CheckCircle2,
  MessageCircle,
  MapPin,
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/bicycles';

export const AboutUs = () => {
  const whatsappLink =
    BUSINESS_INFO.whatsAppLink || 'https://wa.me/254719618690';

  const phone = BUSINESS_INFO.phone || '0719618690';

  const location =
    BUSINESS_INFO.location || {
      city: 'Athi River',
      neighbourhood: 'Makadara',
      landmark: 'Near Mavuno Fertilizer',
      country: 'Kenya',
    };

  const locationText = [
    location.city,
    location.neighbourhood,
    location.landmark,
    location.country,
  ]
    .filter(Boolean)
    .join(', ');

  const sizingGuide = [
    {
      size: 'Small (S)',
      height: `4'11" – 5'5" (150–165 cm)`,
      mtb: '14"–16" frame',
      road: '48–52 cm frame',
    },
    {
      size: 'Medium (M)',
      height: `5'6" – 5'10" (167–178 cm)`,
      mtb: '17"–18" frame',
      road: '53–55 cm frame',
    },
    {
      size: 'Large (L)',
      height: `5'10" – 6'2" (178–188 cm)`,
      mtb: '19"–20" frame',
      road: '56–58 cm frame',
    },
    {
      size: 'X-Large (XL)',
      height: `6'2" – 6'6"+ (188–198 cm)`,
      mtb: '21"+ frame',
      road: '59–62 cm frame',
    },
  ];

  const inspectionItems = [
    'Frame condition and visible structural damage inspection',
    'Crankset, pedals and bottom bracket checks',
    'Wheel alignment and rim condition checks',
    'Brake function and cable condition checks',
    'Gear shifting and derailleur operation checks',
    'Handlebar, headset and stem checks',
    'Tire condition, pressure and puncture checks',
    'Road test where appropriate and safe',
  ];

  return (
    <section
      id="about"
      className="border-b border-neutral-200 bg-neutral-50 py-16"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Our Story & Standards
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
            About Ex-UK Bicycles Kenya
          </h2>

          <p className="text-balance text-sm leading-relaxed text-neutral-600 sm:text-base">
            We help Kenyan cyclists, commuters and families find suitable
            Ex-UK bicycles at affordable prices. Contact us to confirm
            availability, condition and specifications before purchasing.
          </p>
        </div>

        {/* Story & Inspection Section */}
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="space-y-5 lg:col-span-6">
            <h3 className="text-2xl font-bold tracking-tight text-neutral-950">
              Quality Bicycles for Everyday Riding
            </h3>

            <p className="text-sm leading-relaxed text-neutral-600">
              Choosing a bicycle involves more than finding an attractive
              design. Frame size, riding comfort, braking performance and
              overall condition are important factors to consider before
              making a purchase.
            </p>

            <p className="text-sm leading-relaxed text-neutral-600">
              At <strong>Ex-UK Bicycles Kenya</strong>, we aim to help
              customers find bicycles for commuting, fitness, family rides
              and outdoor adventures. Our catalogue includes different
              bicycle styles and prices to suit different needs.
            </p>

            <p className="text-sm leading-relaxed text-neutral-600">
              Before purchasing, contact us to confirm the exact model,
              available frame sizes, bicycle condition, components and
              current price. We can also help you choose an option based on
              your height and intended use.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
              <div className="space-y-1 rounded-xl border border-neutral-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <Shield className="h-4 w-4 text-blue-600" />
                  Honest Information
                </div>

                <p className="text-xs text-neutral-500">
                  Ask us about the bicycle's condition, specifications and
                  suitability before placing your order.
                </p>
              </div>

              <div className="space-y-1 rounded-xl border border-neutral-200 bg-white p-4">
                <div className="flex items-center gap-2 text-sm font-bold text-neutral-900">
                  <Wrench className="h-4 w-4 text-blue-600" />
                  Condition Checks
                </div>

                <p className="text-xs text-neutral-500">
                  Contact us for details about the checks and servicing
                  completed on your preferred bicycle.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

              <div>
                <h4 className="text-sm font-bold text-neutral-900">
                  Visit Us
                </h4>

                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  {locationText}
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  Contact us for directions and to confirm visiting hours
                  before travelling.
                </p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Ex-UK Bicycles Kenya on WhatsApp"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white shadow-sm transition-colors hover:bg-emerald-700"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat with Us ({phone})</span>
              </a>
            </div>
          </div>

          {/* Inspection Card */}
          <div className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-6">
            <div className="border-b border-neutral-100 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Bicycle Condition
              </span>

              <h4 className="mt-1 text-xl font-bold text-neutral-950">
                What to Check Before Riding
              </h4>

              <p className="mt-1 text-xs text-neutral-500">
                Important areas to check when evaluating a used bicycle:
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 text-xs text-neutral-700 sm:grid-cols-2">
              {inspectionItems.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-blue-200/80 bg-blue-50/80 p-4 text-xs leading-relaxed text-blue-900">
              <strong>Our Advice:</strong> Confirm the bicycle's condition,
              brakes, gears, tire condition and suitability before riding.
              Ask us any questions about your preferred bicycle before
              completing your purchase.
            </div>
          </div>
        </div>

        {/* Bicycle Frame Sizing Guide */}
        <div className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Buyer's Fit Guide
            </span>

            <h3 className="text-xl font-bold text-neutral-950 sm:text-2xl">
              How to Choose the Right Frame Size
            </h3>

            <p className="text-xs text-neutral-600 sm:text-sm">
              The right bicycle size helps improve comfort, control and
              riding posture. Use these ranges as a starting point; sizing
              varies by bicycle model and manufacturer.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 text-xs sm:grid-cols-2 md:grid-cols-4">
            {sizingGuide.map((item) => (
              <div
                key={item.size}
                className="space-y-1.5 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
              >
                <div className="text-sm font-bold text-neutral-900">
                  {item.size}
                </div>

                <div className="font-mono font-semibold text-blue-600">
                  {item.height}
                </div>

                <p className="leading-relaxed text-neutral-500">
                  MTB: {item.mtb}
                  <br />
                  Road/Hybrid: {item.road}
                </p>
              </div>
            ))}
          </div>

          {/* Sizing CTA */}
          <div className="flex flex-col items-center justify-between gap-4 pt-2 sm:flex-row">
            <span className="text-xs text-neutral-500">
              Unsure which bicycle fits you? Send us your height and we'll
              help you explore suitable options.
            </span>

            <a
              href={`${whatsappLink}?text=${encodeURIComponent(
                'Hello! I would like help choosing the right bicycle size. My height is: '
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ask for bicycle sizing advice on WhatsApp"
              className="flex shrink-0 items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>Ask About Sizing</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;