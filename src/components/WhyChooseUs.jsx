
import React from 'react';
import {
  ShieldCheck,
  Wrench,
  Check,
  X,
  MessageCircle,
  Bike,
  Settings,
  BadgeCheck,
  Heart,
} from 'lucide-react';
import {
  WHY_CHOOSE_US_ITEMS,
  BUSINESS_INFO,
} from '../data/bicycles';

const DEFAULT_ITEMS = [
  {
    title: 'Explore Different Bicycle Types',
    description:
      'Choose from road, mountain, hybrid, gravel, and kids’ bicycles, depending on the models currently available.',
  },
  {
    title: 'Check the Details Before Buying',
    description:
      'Ask about each bicycle’s brand, frame size, components, condition, and suitability for your intended use.',
  },
  {
    title: 'Find a Bike for Your Riding Style',
    description:
      'Compare options for commuting, exercise, recreational rides, and off-road adventures.',
  },
  {
    title: 'Understand the Condition',
    description:
      'Ex-UK bicycles may show signs of previous use. Ask for current photos and details about the specific bike.',
  },
  {
    title: 'Confirm Your Budget',
    description:
      'Compare bicycle models and prices before choosing an option that works for your needs.',
  },
  {
    title: 'Get Help With Your Enquiry',
    description:
      'Contact us to ask about sizing, specifications, availability, and delivery arrangements.',
  },
];

const COMPARISON_ROWS = [
  {
    feature: 'Bicycle condition',
    exuk: 'Condition varies by individual bicycle; inspect before purchase.',
    generic: 'Condition and quality vary by model and seller.',
  },
  {
    feature: 'Frame and materials',
    exuk: 'Check the frame material and model specifications for each bike.',
    generic: 'Check the frame material and specifications for each bike.',
  },
  {
    feature: 'Gears and components',
    exuk: 'Confirm the fitted components and their condition before buying.',
    generic: 'Confirm the fitted components and their condition before buying.',
  },
  {
    feature: 'Braking system',
    exuk: 'Check the brake type, operation, and wear on the specific bicycle.',
    generic: 'Check the brake type, operation, and wear on the specific bicycle.',
  },
  {
    feature: 'Maintenance',
    exuk: 'Ask whether inspection or servicing has been completed.',
    generic: 'Ask the seller about inspection and servicing.',
  },
  {
    feature: 'Value for money',
    exuk: 'Compare the price, condition, features, and expected maintenance.',
    generic: 'Compare the price, condition, features, and expected maintenance.',
  },
];

export const WhyChooseUs = () => {
  const whatsappLink =
    BUSINESS_INFO?.whatsAppLink ||
    'https://wa.me/254719618690';

  const phone =
    BUSINESS_INFO?.phone || '0719618690';

  const sourceItems = Array.isArray(WHY_CHOOSE_US_ITEMS)
    ? WHY_CHOOSE_US_ITEMS.filter(
        (item) =>
          item &&
          typeof item.title === 'string' &&
          typeof item.description === 'string'
      )
    : [];

  const items =
    sourceItems.length > 0 ? sourceItems : DEFAULT_ITEMS;

  const whatsappMessage = encodeURIComponent(
    'Hello Ex-UK Bicycles Kenya. I would like to ask about available bicycles, prices, sizes, and condition.'
  );

  const enquiryLink = whatsappLink.includes('?')
    ? `${whatsappLink}&text=${whatsappMessage}`
    : `${whatsappLink}${whatsappLink.includes('text=') ? '&' : '?'}text=${whatsappMessage}`;

  return (
    <section
      id="why-us"
      className="border-b border-neutral-200 bg-white py-16"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
            A Better-Informed Bicycle Purchase
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
            Why Choose Ex-UK Bicycles Kenya?
          </h2>

          <p className="text-balance text-sm leading-relaxed text-neutral-600 sm:text-base">
            The right bicycle depends on your budget, riding style, size,
            and the condition of the individual bike. Explore your options
            and ask questions before making a decision.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <article
              key={`${item.title}-${index}`}
              className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 transition-all hover:border-blue-200 hover:shadow-sm"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-200 bg-white font-mono-num font-bold text-blue-600 shadow-sm">
                {String(index + 1).padStart(2, '0')}
              </div>

              <h3 className="text-lg font-bold leading-snug text-neutral-900">
                {item.title}
              </h3>

              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Comparison section */}
        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 p-6 text-white shadow-xl sm:p-10">
          <div className="mb-8 max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Know What You Are Buying
            </span>

            <h3 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              Compare Bicycles Before You Buy
            </h3>

            <p className="text-xs leading-relaxed text-slate-400 sm:text-sm">
              Ex-UK bicycles and other used or new bicycles differ by
              brand, model, condition, specifications, and price. Compare
              individual bikes rather than relying on general assumptions.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-slate-800">
            <table className="w-full min-w-[680px] border-collapse text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th
                    scope="col"
                    className="px-4 py-4 font-semibold"
                  >
                    What to Check
                  </th>

                  <th
                    scope="col"
                    className="bg-slate-800/40 px-4 py-4 font-bold text-blue-400"
                  >
                    Ex-UK Bicycle
                  </th>

                  <th
                    scope="col"
                    className="px-4 py-4 font-semibold text-slate-300"
                  >
                    Other Bicycles
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800/80">
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.feature} className="align-top">
                    <th
                      scope="row"
                      className="px-4 py-4 font-medium text-slate-300"
                    >
                      {row.feature}
                    </th>

                    <td className="bg-slate-800/20 px-4 py-4 text-slate-100">
                      <div className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                        <span>{row.exuk}</span>
                      </div>
                    </td>

                    <td className="px-4 py-4 text-slate-400">
                      <div className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" />
                        <span>{row.generic}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs leading-relaxed text-slate-400">
            This is a checklist, not a claim that one category is always
            superior. Inspect the actual bicycle and confirm its condition,
            components, and price before purchasing.
          </p>

          {/* WhatsApp call to action */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 sm:flex-row">
            <div className="flex items-start gap-3">
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" />

              <div>
                <p className="text-sm font-semibold text-white">
                  Need help choosing a bicycle?
                </p>

                <p className="mt-1 text-xs leading-relaxed text-slate-400">
                  Ask about available models, sizing, specifications,
                  condition, and prices.
                </p>
              </div>
            </div>

            <a
              href={enquiryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-xs font-bold text-white transition-colors hover:bg-emerald-500 sm:text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Enquire on WhatsApp · {phone}</span>
            </a>
          </div>
        </div>

        {/* Customer reassurance cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex items-start gap-3 rounded-xl border border-neutral-200 p-4">
            <ShieldCheck className="h-5 w-5 shrink-0 text-blue-600" />
            <div>
              <h3 className="text-sm font-bold text-neutral-900">
                Ask Before You Buy
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                Request details about the specific bicycle you are
                interested in.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-neutral-200 p-4">
            <Settings className="h-5 w-5 shrink-0 text-blue-600" />
            <div>
              <h3 className="text-sm font-bold text-neutral-900">
                Compare Specifications
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                Check frame size, gears, brakes, tyres, and overall
                condition.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-neutral-200 p-4">
            <Heart className="h-5 w-5 shrink-0 text-blue-600" />
            <div>
              <h3 className="text-sm font-bold text-neutral-900">
                Choose With Confidence
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                Make your decision based on your needs and the details
                confirmed by the seller.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
