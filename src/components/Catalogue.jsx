
import React, { useState, useMemo } from 'react';
import {
  Search,
  MessageCircle,
  Eye,
  ArrowUpDown,
  Bike,
  Sparkles,
  MapPin,
  X,
} from 'lucide-react';

import {
  BICYCLES_CATALOGUE,
  getBicycleWhatsAppEnquiry,
  BUSINESS_INFO,
} from '../data/bicycles';

import { BikeDetailModal } from './BikeDetailModal';

// Correct path: src/assets/images/hero_uk_bicycles_1793166402523.jpg
import heroBicycles from '../assets/images/hero_uk_bicycles_1793166402523.jpg';

const CATEGORIES = [
  { id: 'All', label: 'All Bicycles' },
  { id: 'Mountain', label: 'Mountain Bikes (MTB)' },
  { id: 'Road', label: 'Road & Racing' },
  { id: 'Hybrid', label: 'Hybrid & Commuter' },
  { id: 'Gravel', label: 'Gravel & All-Road' },
  { id: 'Kids', label: 'Kids & Juniors' },
];

const safeText = (value, fallback = '') => {
  if (value === null || value === undefined) return fallback;
  return String(value);
};

const formatPrice = (price) => {
  const numericPrice = Number(price);

  if (!Number.isFinite(numericPrice) || numericPrice <= 0) {
    return 'Contact for price';
  }

  return `KSh ${numericPrice.toLocaleString('en-KE')}`;
};

const getCategory = (bike) => {
  const category = safeText(bike?.category).toLowerCase();

  if (category.includes('mountain') || category === 'mtb') {
    return 'Mountain';
  }

  if (category.includes('road') || category.includes('racing')) {
    return 'Road';
  }

  if (category.includes('hybrid') || category.includes('commuter')) {
    return 'Hybrid';
  }

  if (category.includes('gravel') || category.includes('all-road')) {
    return 'Gravel';
  }

  if (
    category.includes('kids') ||
    category.includes('kid') ||
    category.includes('junior') ||
    category.includes('children')
  ) {
    return 'Kids';
  }

  return category;
};

const getConditionRank = (condition) => {
  const value = safeText(condition).toUpperCase();

  if (value.includes('A+')) return 1;
  if (value.includes('GRADE A')) return 2;
  if (value.includes('A-GRADE')) return 2;
  if (value.includes('EXCELLENT')) return 2;

  return 3;
};

export const Catalogue = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedBike, setSelectedBike] = useState(null);

  const location = [
    BUSINESS_INFO?.location?.city || 'Athi River',
    BUSINESS_INFO?.location?.neighbourhood || 'Makadara',
  ]
    .filter(Boolean)
    .join(', ');

  const landmark =
    BUSINESS_INFO?.location?.landmark || 'Near Mavuno Fertilizer';

  const whatsappLink =
    BUSINESS_INFO?.whatsAppLink || 'https://wa.me/254719618690';

  const bicycles = Array.isArray(BICYCLES_CATALOGUE)
    ? BICYCLES_CATALOGUE.filter(
        (bike) => bike && typeof bike === 'object'
      )
    : [];

  const filteredBicycles = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return bicycles
      .filter((bike) => {
        const matchesCategory =
          selectedCategory === 'All' ||
          getCategory(bike) === selectedCategory;

        const searchableFields = [
          bike.name,
          bike.brand,
          bike.model,
          bike.category,
          bike.frameSize,
          bike.groupset,
          bike.wheelSize,
          bike.stockCode,
          bike.shortDescription,
          bike.description,
        ];

        const matchesSearch =
          !query ||
          searchableFields.some((field) =>
            safeText(field).toLowerCase().includes(query)
          );

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name-asc') {
          return safeText(a.name).localeCompare(safeText(b.name));
        }

        if (sortBy === 'price-low') {
          return (Number(a.price) || 0) - (Number(b.price) || 0);
        }

        if (sortBy === 'price-high') {
          return (Number(b.price) || 0) - (Number(a.price) || 0);
        }

        if (sortBy === 'grade') {
          return (
            getConditionRank(a.condition) -
            getConditionRank(b.condition)
          );
        }

        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;

        return 0;
      });
  }, [bicycles, selectedCategory, searchQuery, sortBy]);

  return (
    <section
      id="catalogue"
      className="border-b border-neutral-200 bg-neutral-50 py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center">
          <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600">
            <MapPin className="h-3.5 w-3.5" />
            <span>{location}</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-neutral-950 sm:text-4xl">
            Ex-UK Bicycle Catalogue
          </h2>

          <p className="text-balance text-sm leading-relaxed text-neutral-600 sm:text-base">
            Explore our bicycle selection, compare specifications, and
            contact us directly on WhatsApp to confirm availability,
            pricing, and delivery arrangements.
          </p>

          <p className="text-xs text-neutral-500">{landmark}</p>
        </div>

        {/* Search, Sort and Filters */}
        <div className="mb-8 space-y-4 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm sm:p-5">
          <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />

              <input
                type="search"
                aria-label="Search bicycles"
                placeholder="Search by brand, model, size, or components..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full rounded-lg border border-neutral-200 bg-neutral-50 py-2 pl-10 pr-10 text-sm transition-all placeholder:text-neutral-400 hover:bg-neutral-100/60 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />

              {searchQuery && (
                <button
                  type="button"
                  aria-label="Clear search"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-neutral-400 hover:text-neutral-700"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Sorting */}
            <div className="flex shrink-0 items-center gap-2">
              <ArrowUpDown className="h-3.5 w-3.5 text-neutral-500" />

              <label
                htmlFor="bicycle-sort"
                className="text-xs text-neutral-500"
              >
                Sort by:
              </label>

              <select
                id="bicycle-sort"
                value={sortBy}
                onChange={(event) => setSortBy(event.target.value)}
                className="cursor-pointer rounded-lg border border-neutral-200 bg-neutral-50 px-2.5 py-2 text-xs font-medium text-neutral-800 focus:border-blue-600 focus:outline-none"
              >
                <option value="featured">Featured First</option>
                <option value="grade">Condition: Best First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
              </select>
            </div>
          </div>

          {/* Category Buttons */}
          <div
            className="flex items-center gap-1.5 overflow-x-auto pb-1"
            aria-label="Filter bicycles by category"
          >
            {CATEGORIES.map((category) => {
              const isActive = selectedCategory === category.id;

              return (
                <button
                  key={category.id}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`shrink-0 whitespace-nowrap rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between gap-3 px-1 text-xs text-neutral-500">
          <span aria-live="polite">
            Showing{' '}
            <strong className="font-semibold text-neutral-900">
              {filteredBicycles.length}
            </strong>{' '}
            {filteredBicycles.length === 1 ? 'bicycle' : 'bicycles'}
          </span>

          <span className="hidden text-right sm:inline">
            Contact us to confirm current stock and condition.
          </span>
        </div>

        {/* Bicycle Grid */}
        {filteredBicycles.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {filteredBicycles.map((bike, index) => {
              const bikeName = safeText(bike.name, 'Ex-UK Bicycle');
              const bikeBrand = safeText(bike.brand, 'Bicycle');
              const condition = safeText(
                bike.condition,
                'Ask for condition'
              );
              const frameSize = safeText(bike.frameSize, 'Ask us');
              const groupset = safeText(
                bike.groupset,
                'Contact for details'
              );
              const wheelSize = safeText(
                bike.wheelSize,
                'Not specified'
              );

              const image = bike.image || heroBicycles;

              const bikeWhatsAppLink =
                getBicycleWhatsAppEnquiry?.(bike) || whatsappLink;

              const handleImageError = (event) => {
                const target = event.currentTarget;

                if (target.dataset.fallbackApplied === 'true') {
                  target.style.visibility = 'hidden';
                  return;
                }

                target.dataset.fallbackApplied = 'true';
                target.src = heroBicycles;
              };

              return (
                <article
                  key={bike.id ?? `${bikeName}-${index}`}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
                >
                  {/* Product Image */}
                  <div
                    role="button"
                    tabIndex={0}
                    aria-label={`View details for ${bikeName}`}
                    onClick={() => setSelectedBike(bike)}
                    onKeyDown={(event) => {
                      if (
                        event.key === 'Enter' ||
                        event.key === ' '
                      ) {
                        event.preventDefault();
                        setSelectedBike(bike);
                      }
                    }}
                    className="relative flex aspect-[4/3] cursor-pointer items-center justify-center overflow-hidden bg-neutral-100 p-5"
                  >
                    <img
                      src={image}
                      alt={bikeName}
                      loading="lazy"
                      onError={handleImageError}
                      className="h-full w-full object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                    />

                    {/* Stock Code */}
                    {bike.stockCode && (
                      <div className="absolute left-3 top-3 rounded border border-neutral-200/80 bg-white/90 px-2 py-0.5 font-mono text-[11px] font-medium text-neutral-600 backdrop-blur-sm">
                        {bike.stockCode}
                      </div>
                    )}

                    {/* Featured Label */}
                    {bike.isFeatured && (
                      <div className="absolute right-3 top-3 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                        Featured
                      </div>
                    )}

                    {/* Quick View */}
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        setSelectedBike(bike);
                      }}
                      className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-neutral-900/85 p-2 text-xs font-medium text-white opacity-100 shadow-sm transition hover:bg-neutral-950 sm:opacity-0 sm:group-hover:opacity-100 sm:group-focus-within:opacity-100"
                      title="View bicycle specifications"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      <span>Details</span>
                    </button>
                  </div>

                  {/* Product Information */}
                  <div className="flex flex-1 flex-col justify-between space-y-4 p-5">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500">
                        <span className="font-semibold text-blue-600">
                          {bikeBrand}
                        </span>

                        <span aria-hidden="true">·</span>
                        <span>{condition}</span>

                        {wheelSize !== 'Not specified' && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span>{wheelSize.split(' ')[0]}</span>
                          </>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedBike(bike)}
                        className="line-clamp-2 text-left text-base font-bold leading-snug text-neutral-950 transition-colors hover:text-blue-600 sm:text-lg"
                      >
                        {bikeName}
                      </button>

                      <p className="line-clamp-2 text-xs leading-relaxed text-neutral-600">
                        {safeText(
                          bike.shortDescription || bike.description,
                          'Contact us for more information about this bicycle.'
                        )}
                      </p>

                      {/* Specifications */}
                      <div className="space-y-2 rounded-lg border border-neutral-100 bg-neutral-50 p-3 text-xs">
                        <div className="flex items-start justify-between gap-3">
                          <span className="shrink-0 text-neutral-500">
                            Frame Size:
                          </span>

                          <span className="text-right font-medium text-neutral-800">
                            {frameSize}
                          </span>
                        </div>

                        <div className="flex items-start justify-between gap-3">
                          <span className="shrink-0 text-neutral-500">
                            Groupset:
                          </span>

                          <span className="text-right font-medium text-neutral-800">
                            {groupset}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Price and Enquiry */}
                    <div className="space-y-3 border-t border-neutral-100 pt-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-[11px] text-neutral-500">
                            Listed price
                          </p>

                          <p className="text-lg font-extrabold text-neutral-950">
                            {formatPrice(bike.price)}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedBike(bike)}
                          className="text-xs font-semibold text-neutral-600 underline underline-offset-2 hover:text-blue-600"
                        >
                          View Specs
                        </button>
                      </div>

                      <a
                        href={bikeWhatsAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Enquire about ${bikeName} on WhatsApp`}
                        className="group/btn inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow sm:text-sm"
                      >
                        <MessageCircle className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <p className="text-center text-[11px] text-neutral-500">
                        Availability and delivery confirmed on enquiry.
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="mx-auto max-w-lg space-y-4 rounded-2xl border border-neutral-200 bg-white p-12 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-neutral-100 text-neutral-400">
              <Bike className="h-6 w-6" />
            </div>

            <div className="space-y-1">
              <h3 className="text-lg font-bold text-neutral-900">
                No matching bicycles found
              </h3>

              <p className="text-xs text-neutral-500">
                {searchQuery
                  ? `We couldn't find bicycles matching "${searchQuery}". Try another search or category.`
                  : 'There are no bicycles listed in this category right now.'}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="rounded-lg border border-neutral-200 px-4 py-2.5 text-xs font-semibold text-neutral-700 hover:bg-neutral-50"
              >
                Clear Filters
              </button>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-2.5 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* Custom Sourcing Banner */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white sm:p-8 md:flex-row">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 md:justify-start">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Custom Bicycle Request</span>
            </div>

            <h3 className="text-lg font-bold sm:text-xl">
              Looking for a specific UK brand, size, or frame type?
            </h3>

            <p className="max-w-2xl text-xs text-slate-300 sm:text-sm">
              Tell us which bicycle you need, your preferred frame size,
              and your budget. Contact us to check current availability or
              discuss sourcing options.
            </p>

            <p className="text-xs text-slate-400">
              <MapPin className="mr-1 inline h-3.5 w-3.5" />
              {location} — {landmark}
            </p>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-blue-500 active:bg-blue-700"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Request a Bicycle</span>
          </a>
        </div>
      </div>

      {/* Bicycle Details Modal */}
      <BikeDetailModal
        bike={selectedBike}
        onClose={() => setSelectedBike(null)}
      />
    </section>
  );
};

export default Catalogue;
