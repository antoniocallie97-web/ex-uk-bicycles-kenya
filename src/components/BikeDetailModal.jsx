import React, { useEffect } from 'react';
import {
  X,
  MessageCircle,
  ShieldCheck,
  Truck,
  CheckCircle,
  Phone,
  MapPin,
} from 'lucide-react';

import {
  BUSINESS_INFO,
  getBicycleWhatsAppEnquiry,
} from '../data/bicycles';

export const BikeDetailModal = ({ bike, onClose }) => {
  useEffect(() => {
    if (!bike) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose?.();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [bike, onClose]);

  if (!bike) return null;

  const phone = BUSINESS_INFO.phone || '0719618690';
  const whatsappLink =
    getBicycleWhatsAppEnquiry(bike) ||
    BUSINESS_INFO.whatsAppLink ||
    'https://wa.me/254719618690';

  const location = BUSINESS_INFO.location || {};

  const locationText = [
    location.city || 'Athi River',
    location.neighbourhood || 'Makadara',
    location.landmark || 'Near Mavuno Fertilizer',
  ]
    .filter(Boolean)
    .join(', ');

  const formatPrice = (price) => {
    const numericPrice = Number(price);

    if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
      return 'Contact us for price';
    }

    return `KSh ${numericPrice.toLocaleString('en-KE')}`;
  };

  const fallbackImage =
    '/src/images/hero_uk_bicycles_1793166402523.jpg';

  const handleImageError = (event) => {
    const image = event.currentTarget;

    if (image.dataset.fallbackApplied === 'true') return;

    image.dataset.fallbackApplied = 'true';
    image.src = fallbackImage;
  };

  const features = Array.isArray(bike.features)
    ? bike.features
    : [];

  const specifications = [
    {
      label: 'Frame Size',
      value: bike.frameSize,
    },
    {
      label: 'Wheel & Tires',
      value: bike.wheelSize,
    },
    {
      label: 'Groupset',
      value: bike.groupset,
    },
    {
      label: 'Brake System',
      value: bike.brakes,
    },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/70 p-4 backdrop-blur-sm animate-in fade-in duration-200 sm:p-6"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bike-detail-title"
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-neutral-200 bg-white shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 cursor-pointer rounded-full border border-neutral-200 bg-white/90 p-2 text-neutral-600 shadow-sm transition-colors hover:bg-neutral-100 hover:text-neutral-950"
          aria-label="Close bicycle details"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 gap-0 md:grid-cols-12">
          {/* Bicycle Image */}
          <div className="relative flex min-h-[300px] items-center justify-center border-b border-neutral-200 bg-neutral-100 p-6 md:col-span-6 md:min-h-full md:border-b-0 md:border-r">
            <img
              src={bike.image || fallbackImage}
              alt={bike.name || 'Ex-UK bicycle'}
              className="max-h-[420px] w-full object-contain drop-shadow-md"
              loading="eager"
              onError={handleImageError}
            />

            <div className="absolute bottom-3 left-4 rounded border border-neutral-200 bg-white/90 px-2.5 py-1 font-mono text-xs text-neutral-500 backdrop-blur">
              Stock ID: {bike.stockCode || 'Not assigned'}
            </div>
          </div>

          {/* Bicycle Details */}
          <div className="space-y-5 p-6 sm:p-8 md:col-span-6">
            {/* Title and Status */}
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                {bike.brand || 'Ex-UK'} · {bike.category || 'Bicycle'}
              </div>

              <h2
                id="bike-detail-title"
                className="mt-1 text-xl font-bold text-neutral-950 sm:text-2xl"
              >
                {bike.name}
              </h2>

              <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                {bike.condition && (
                  <span className="font-medium text-neutral-800">
                    {bike.condition}
                  </span>
                )}

                {bike.condition && (
                  <span aria-hidden="true">·</span>
                )}

                <span>Ex-UK Bicycle</span>

                <span aria-hidden="true">·</span>

                <span
                  className={
                    bike.status?.toLowerCase() === 'available'
                      ? 'font-medium text-emerald-700'
                      : 'font-medium text-neutral-600'
                  }
                >
                  {bike.status || 'Contact to confirm availability'}
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2 rounded-xl border border-blue-200 bg-blue-50/70 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold uppercase tracking-wide text-blue-900">
                  Bicycle Price
                </span>

                <span className="rounded border border-blue-200 bg-white px-2 py-0.5 text-xs font-semibold text-blue-700">
                  Kenya Shillings
                </span>
              </div>

              <p className="text-2xl font-extrabold text-blue-950">
                {formatPrice(bike.price)}
              </p>

              <p className="text-xs leading-relaxed text-blue-900">
                Contact us to confirm current availability, bicycle
                condition and delivery arrangements before ordering.
              </p>
            </div>

            {/* Specifications */}
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                Key Specifications
              </div>

              <div className="grid grid-cols-2 gap-3 rounded-lg border border-neutral-200 bg-neutral-50 p-3 text-xs">
                {specifications.map((specification) => (
                  <div key={specification.label} className="min-w-0">
                    <span className="mb-1 block text-neutral-500">
                      {specification.label}
                    </span>

                    <span className="break-words font-semibold text-neutral-900">
                      {specification.value || 'Contact us for details'}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            {bike.fullDescription && (
              <p className="text-xs leading-relaxed text-neutral-600 sm:text-sm">
                {bike.fullDescription}
              </p>
            )}

            {/* Features */}
            {features.length > 0 && (
              <div className="space-y-2 pt-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-900">
                  Bicycle Features
                </h3>

                {features.map((feature, index) => (
                  <div
                    key={`${bike.stockCode || bike.id || bike.name}-feature-${index}`}
                    className="flex items-start gap-2 text-xs text-neutral-700"
                  >
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600" />

                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Location */}
            <div className="flex items-start gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />

              <div>
                <h3 className="text-xs font-bold text-neutral-900">
                  Our Location
                </h3>

                <p className="mt-1 text-xs leading-relaxed text-neutral-600">
                  {locationText}
                </p>

                <p className="mt-1 text-xs text-neutral-500">
                  Contact us for directions and to confirm visiting hours.
                </p>
              </div>
            </div>

            {/* WhatsApp Enquiry */}
            <div className="space-y-3 pt-2">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-emerald-600 px-5 py-3.5 text-sm font-bold text-white shadow transition-all hover:bg-emerald-700 active:bg-emerald-800 sm:text-base"
              >
                <MessageCircle className="h-5 w-5" />

                <span>Order on WhatsApp</span>
              </a>

              {/* Contact Details */}
              <div className="flex flex-col gap-3 border-t border-neutral-100 px-1 pt-3 text-xs text-neutral-600 sm:flex-row sm:items-center sm:justify-between">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
                  Ask about bicycle condition
                </span>

                <span className="flex items-center gap-1.5">
                  <Truck className="h-3.5 w-3.5 shrink-0 text-neutral-400" />
                  Ask about delivery
                </span>
              </div>

              <a
                href={`tel:${BUSINESS_INFO.internationalPhone || '+254719618690'}`}
                className="flex items-center justify-center gap-2 rounded-lg border border-neutral-200 px-4 py-2.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-neutral-50"
              >
                <Phone className="h-4 w-4" />

                <span>Call {phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeDetailModal;