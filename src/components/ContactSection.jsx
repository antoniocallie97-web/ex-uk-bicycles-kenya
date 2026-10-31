
import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Truck,
  CheckCircle2,
} from 'lucide-react';

import { BUSINESS_INFO } from '../data/bicycles';

const DEFAULT_PHONE = '0719618690';
const DEFAULT_WHATSAPP = '254719618690';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    bikeInterest: 'Mountain Bike (Rough roads, trails, commuting)',
    message: '',
  });

  const [formError, setFormError] = useState('');

  const phone = BUSINESS_INFO?.phone || DEFAULT_PHONE;

  // WhatsApp requires the international number without +, spaces, or dashes.
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

  const openingHours =
    location.openHours ||
    'Contact us on WhatsApp to confirm opening hours.';

  const updateField = (field, value) => {
    setFormData((previous) => ({
      ...previous,
      [field]: value,
    }));

    if (formError) {
      setFormError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError('');

    const name = formData.name.trim();
    const customerPhone = formData.phone.trim();
    const message = formData.message.trim();

    if (!name) {
      setFormError('Please enter your name.');
      return;
    }

    if (!whatsappNumber) {
      setFormError(
        'The WhatsApp number is unavailable. Please contact us by phone.'
      );
      return;
    }

    const formattedText = [
      'Hello Ex-UK Bicycles Kenya!',
      '',
      `My name is ${name}.`,
      customerPhone ? `My phone number is ${customerPhone}.` : '',
      `I am interested in: ${formData.bikeInterest}.`,
      '',
      `My message: ${
        message ||
        'Please share your currently available bicycles, specifications, and prices.'
      }`,
    ]
      .filter(Boolean)
      .join('\n');

    const url =
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        formattedText
      )}`;

    // Opens WhatsApp with the enquiry prepared for the customer to send.
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="contact"
      className="border-b border-neutral-200 bg-neutral-50 py-16"
    >
      <div className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <div className="text-xs font-bold uppercase tracking-wider text-blue-600">
            Get In Touch
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
            Contact Ex-UK Bicycles Kenya
          </h2>

          <p className="text-balance text-sm leading-relaxed text-neutral-600 sm:text-base">
            Looking for a mountain bike, road bike, hybrid, gravel bike,
            or a bicycle for a child? Contact us to check availability,
            request photos, compare prices, or get help choosing a bicycle.
          </p>
        </div>

        {/* Contact Details and Enquiry Form */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-5">
            {/* WhatsApp Card */}
            <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white">
                  <MessageCircle className="h-6 w-6" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs font-medium uppercase tracking-wide text-emerald-400">
                    Contact Us on WhatsApp
                  </div>

                  <div className="break-words text-xl font-bold">
                    {phone}
                  </div>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate-300">
                Ask about bicycle prices, frame sizes, condition,
                components, additional photos, and delivery arrangements.
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white shadow-sm transition-colors hover:bg-emerald-500"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Location, Hours and Delivery */}
            <div className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
              {/* Location */}
              <div className="flex items-start gap-3.5">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                <div className="min-w-0 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Business Location
                  </div>

                  <div className="text-sm font-bold text-neutral-900">
                    {city}, {neighbourhood}
                  </div>

                  <p className="text-xs leading-relaxed text-neutral-600">
                    {landmark}, Kenya.
                  </p>

                  <p className="text-xs leading-relaxed text-neutral-500">
                    Contact us before visiting to confirm the meeting
                    point and bicycle availability.
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex items-start gap-3.5 border-t border-neutral-100 pt-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                <div className="min-w-0 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Opening Hours
                  </div>

                  <div className="text-sm font-semibold text-neutral-900">
                    {openingHours}
                  </div>

                  <p className="text-xs text-neutral-500">
                    Arrange your visit with us in advance.
                  </p>
                </div>
              </div>

              {/* Delivery Options */}
              <div className="flex items-start gap-3.5 border-t border-neutral-100 pt-4">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />

                <div className="min-w-0 space-y-1">
                  <div className="text-xs font-bold uppercase tracking-wider text-neutral-500">
                    Delivery Options
                  </div>

                  <p className="text-xs leading-relaxed text-neutral-600">
                    Ask about delivery to Athi River, Nairobi, and other
                    locations in Kenya. Delivery fees, available courier
                    services, and estimated delivery times are confirmed
                    when you enquire.
                  </p>
                </div>
              </div>

              {/* Phone Call */}
              <div className="border-t border-neutral-100 pt-4">
                <a
                  href={`tel:${String(phone).replace(/[^\d+]/g, '')}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-100 px-4 py-2.5 text-xs font-semibold text-neutral-900 transition-colors hover:bg-neutral-200"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>Call Us: {phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Form */}
          <div className="space-y-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Bicycle Enquiry
              </span>

              <h3 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Send Us Your Request
              </h3>

              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                Complete the form to prepare a WhatsApp message with your
                bicycle requirements. Review and send it in WhatsApp.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name and Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs font-semibold text-neutral-800"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(event) =>
                      updateField('name', event.target.value)
                    }
                    maxLength={100}
                    required
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="contact-phone"
                    className="text-xs font-semibold text-neutral-800"
                  >
                    Phone Number (Optional)
                  </label>

                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    placeholder="e.g. 0719618690"
                    value={formData.phone}
                    onChange={(event) =>
                      updateField('phone', event.target.value)
                    }
                    maxLength={25}
                    className="w-full rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>

              {/* Bicycle Type */}
              <div className="space-y-1.5">
                <label
                  htmlFor="bike-interest"
                  className="text-xs font-semibold text-neutral-800"
                >
                  What Type of Bicycle Are You Looking For?
                </label>

                <select
                  id="bike-interest"
                  name="bikeInterest"
                  value={formData.bikeInterest}
                  onChange={(event) =>
                    updateField('bikeInterest', event.target.value)
                  }
                  className="w-full cursor-pointer rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                >
                  <option value="Mountain Bike (Rough roads, trails, commuting)">
                    Mountain Bike (Rough roads, trails, commuting)
                  </option>

                  <option value="Road Racing Bike (Tarmac, speed, fitness)">
                    Road Racing Bike (Tarmac, speed, fitness)
                  </option>

                  <option value="Hybrid / City Commuter (Upright, luggage rack)">
                    Hybrid / City Commuter
                  </option>

                  <option value="Gravel & All-Road Adventure Bike">
                    Gravel & All-Road Adventure Bike
                  </option>

                  <option value="Kids / Youth Bicycle">
                    Kids / Youth Bicycle
                  </option>

                  <option value="Specific Model on Catalogue">
                    Specific Model on Catalogue
                  </option>

                  <option value="General Advice on Sizing & Stock">
                    General Advice on Sizing & Stock
                  </option>

                  <option value="Folding Bicycle">
                    Folding Bicycle
                  </option>

                  <option value="Bicycle Parts and Accessories">
                    Bicycle Parts and Accessories
                  </option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold text-neutral-800"
                >
                  Message or Rider Height
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  maxLength={2000}
                  placeholder="For example: I am 5 ft 10 in tall and need a mountain bike for daily commuting. My budget is KSh 10,000. Please share suitable options and prices."
                  value={formData.message}
                  onChange={(event) =>
                    updateField('message', event.target.value)
                  }
                  className="w-full resize-y rounded-lg border border-neutral-200 bg-neutral-50 px-3.5 py-2.5 text-xs focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />

                <p className="text-right text-[11px] text-neutral-400">
                  {formData.message.length}/2000 characters
                </p>
              </div>

              {/* Form Error */}
              {formError && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-700"
                >
                  {formError}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-emerald-700 active:bg-emerald-800"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Continue to WhatsApp</span>
              </button>

              {/* Trust Information */}
              <div className="flex flex-col items-center justify-center gap-3 pt-1 text-[11px] text-neutral-400 sm:flex-row sm:gap-4">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-blue-600" />
                  No website account needed
                </span>

                <span className="flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3 text-blue-600" />
                  You review the message before sending
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
