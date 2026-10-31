
import React, { useState } from 'react';
import {
  ChevronDown,
  MessageCircle,
  MapPin,
} from 'lucide-react';

import { FAQS, BUSINESS_INFO } from '../data/bicycles';

const DEFAULT_PHONE = '0719618690';
const DEFAULT_WHATSAPP = '254719618690';

const DEFAULT_FAQS = [
  {
    question: 'What types of bicycles do you sell?',
    answer:
      'We offer a selection of Ex-UK bicycles, which may include mountain bikes, road bikes, hybrid bicycles, gravel bikes, and children’s bicycles. Contact us to confirm the models currently available.',
  },
  {
    question: 'How much do your bicycles cost?',
    answer:
      'Listed bicycle prices generally range from KSh 6,500 to KSh 14,999, depending on the model and condition. Please check the catalogue and contact us to confirm the current price of a specific bicycle.',
  },
  {
    question: 'Can I see more photos before buying?',
    answer:
      'Yes. Contact us on WhatsApp to request additional photos and ask about the frame, tyres, gears, brakes, and overall condition of a bicycle before making your decision.',
  },
  {
    question: 'Can you help me choose the right bicycle size?',
    answer:
      'Yes. Tell us your height, intended use, and preferred bicycle type. We can help you enquire about suitable frame sizes and available models.',
  },
  {
    question: 'Do you deliver bicycles?',
    answer:
      'Contact us to ask about delivery to Athi River, Nairobi, and other parts of Kenya. Delivery availability, charges, courier arrangements, and estimated delivery times must be confirmed before ordering.',
  },
  {
    question: 'How do I order a bicycle?',
    answer:
      'Choose a bicycle from the catalogue and click the WhatsApp enquiry button, or use our contact form. Confirm availability, price, condition, payment arrangements, and delivery details with us before completing your purchase.',
  },
  {
    question: 'Where are you located?',
    answer:
      'Our listed location is Athi River, Makadara, near Mavuno Fertilizer, Kenya. Please contact us on WhatsApp before travelling to confirm the exact meeting point.',
  },
  {
    question: 'Can I request a specific brand or model?',
    answer:
      'Yes. Send us the bicycle brand, model, frame size, and your budget. We can check whether it is available or discuss possible sourcing options.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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

  const faqs =
    Array.isArray(FAQS) && FAQS.length > 0
      ? FAQS.filter(
          (faq) =>
            faq &&
            typeof faq.question === 'string' &&
            typeof faq.answer === 'string'
        )
      : DEFAULT_FAQS;

  const toggleAccordion = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      id="faqs"
      className="border-b border-neutral-200 bg-white py-16"
    >
      <div className="mx-auto max-w-4xl space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="space-y-3 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Got Questions? We Have Answers
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="text-balance text-sm leading-relaxed text-neutral-600 sm:text-base">
            Find out more about our Ex-UK bicycles, prices, bicycle
            sizing, ordering, and delivery options. If you need more
            information, contact us directly on WhatsApp.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <div
                key={`${faq.question}-${index}`}
                className="overflow-hidden rounded-2xl border border-neutral-200 transition-colors"
              >
                <h3>
                  <button
                    id={questionId}
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex w-full cursor-pointer items-center justify-between gap-4 bg-neutral-50/50 px-5 py-4 text-left transition-colors hover:bg-neutral-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 sm:px-6 sm:py-5"
                  >
                    <span className="text-sm font-bold leading-snug text-neutral-900 sm:text-base">
                      {faq.question}
                    </span>

                    <ChevronDown
                      aria-hidden="true"
                      className={`h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                </h3>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="whitespace-pre-line border-t border-neutral-100 bg-white px-5 pb-5 pt-4 text-xs leading-relaxed text-neutral-600 sm:px-6 sm:text-sm"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Location Information */}
        <div className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-4">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

          <div className="space-y-1">
            <h3 className="text-sm font-bold text-neutral-900">
              Our Location
            </h3>

            <p className="text-xs leading-relaxed text-neutral-600">
              {city}, {neighbourhood}, {landmark}, Kenya.
            </p>

            <p className="text-xs leading-relaxed text-neutral-500">
              Contact us before visiting to confirm the exact meeting
              point and current bicycle availability.
            </p>
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-center sm:flex-row sm:text-left">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-neutral-900">
              Still Have Questions?
            </h3>

            <p className="text-xs leading-relaxed text-neutral-600">
              Contact us for current prices, available bicycles,
              specifications, and ordering assistance.
            </p>

            <p className="text-xs text-neutral-500">
              Phone: {phone}
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ask Ex-UK Bicycles Kenya a question on WhatsApp"
            className="inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Ask Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
