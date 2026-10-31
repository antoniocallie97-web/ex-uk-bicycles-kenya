/**
 * Ex-UK Bicycles Kenya — Inventory Data
 * Callie Technologies
 *
 * File: src/data/products.js
 *
 * Images are stored in: src/assets/images/
 * Uses Vite to resolve image URLs correctly in development and production.
 */

const imageModules = import.meta.glob(
  '../assets/images/*',
  {
    eager: true,
    query: '?url',
    import: 'default',
  }
);

/**
 * Return the Vite-generated URL for an image in src/assets/images.
 * Pass the exact filename, including spaces and extension.
 */
export function getBicycleImage(filename) {
  const imagePath = `../assets/images/${filename}`;
  const imageUrl = imageModules[imagePath];

  if (!imageUrl) {
    console.error(
      `[Ex-UK Bicycles] Image not found: ${imagePath}. ` +
      'Check the filename and ensure the image exists in src/assets/images/.'
    );

    return '';
  }

  return imageUrl;
}

/* --------------------------------------------------
   BUSINESS INFORMATION
-------------------------------------------------- */

export const BUSINESS_INFO = {
  name: 'Ex-UK Bicycles Kenya',
  shortName: 'Ex-UK Bicycles',
  phone: '0719618690',
  internationalPhone: '+254719618690',
  whatsappNumber: '254719618690',
  location: 'Athi River, Makadara',
  landmark: 'Near Mavuno Fertilizer',
  country: 'Kenya',
};

/* --------------------------------------------------
   WHATSAPP ENQUIRY HELPERS
-------------------------------------------------- */

/**
 * Create a WhatsApp enquiry for a specific bicycle.
 */
export function getBicycleWhatsAppEnquiry(bike) {
  const message = [
    `Hello ${BUSINESS_INFO.name},`,
    '',
    'I am interested in the following bicycle:',
    `Bicycle: ${bike.name}`,
    `Price: KSh ${Number(bike.price).toLocaleString('en-KE')}`,
    `Category: ${bike.category}`,
    '',
    'Please confirm availability and provide more details.',
    'Thank you.',
  ].join('\n');

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Create a general WhatsApp enquiry.
 */
export function getGeneralWhatsAppEnquiry() {
  const message = [
    `Hello ${BUSINESS_INFO.name},`,
    '',
    'I would like to enquire about your available Ex-UK bicycles.',
    'Please share the available models and prices.',
    '',
    'Thank you.',
  ].join('\n');

  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/* --------------------------------------------------
   BICYCLE CATALOGUE
-------------------------------------------------- */

export const BICYCLES_CATALOGUE = [
  {
    id: 1,
    name: 'Raleigh Royal Classic Road Bike',
    brand: 'Raleigh',
    category: 'Road',
    price: 14999,
    condition: 'Ex-UK',
    grade: 'A+',
    size: '54 cm',
    gearing: 'Shimano Gearing',
    description:
      'A classic Raleigh road bicycle suited to road cycling and everyday riding.',
    image: getBicycleImage('bike_road_raleigh_1793166402633.jpg'),
    featured: true,
    available: true,
  },
  {
    id: 2,
    name: 'Trek Marlin Mountain Bike',
    brand: 'Trek',
    category: 'Mountain',
    price: 13999,
    condition: 'Ex-UK',
    grade: 'A',
    size: 'Confirm with Seller',
    gearing: 'Confirm with Seller',
    description:
      'A versatile Trek mountain bicycle for everyday riding and exploring different routes.',
    image: getBicycleImage('bike_mtb_trek_1793166404099.jpg'),
    featured: true,
    available: true,
  },
  {
    id: 3,
    name: 'Boardman Hybrid Commuter Bike',
    brand: 'Boardman',
    category: 'Hybrid',
    price: 11999,
    condition: 'Ex-UK',
    grade: 'A',
    size: 'Confirm with Seller',
    gearing: 'Confirm with Seller',
    description:
      'A practical hybrid bicycle for commuting, town riding and everyday journeys.',
    image: getBicycleImage('bike_hybrid_boardman_1793166403495.jpg'),
    featured: true,
    available: true,
  },
  {
    id: 4,
    name: 'Giant Revolt Gravel Bike',
    brand: 'Giant',
    category: 'Gravel',
    price: 12999,
    condition: 'Ex-UK',
    grade: 'A',
    size: 'Confirm with Seller',
    gearing: 'Confirm with Seller',
    description:
      'A gravel-style bicycle suited to road rides and exploring a variety of surfaces.',
    image: getBicycleImage('bike_gravel_giant_1793166418648.jpg'),
    featured: true,
    available: true,
  },
  {
    id: 5,
    name: 'Frog Kids Bicycle',
    brand: 'Frog',
    category: 'Kids',
    price: 6500,
    condition: 'Ex-UK',
    grade: 'Confirm with Seller',
    size: 'Confirm with Seller',
    gearing: 'Confirm with Seller',
    description:
      'A children’s bicycle option. Contact us to confirm the available sizes and condition.',
    image: getBicycleImage('bike_kids_frog_1793166418582.jpg'),
    featured: false,
    available: true,
  },
  {
    id: 6,
    name: 'Carrera Mountain Bike',
    brand: 'Carrera',
    category: 'Mountain',
    price: 10999,
    condition: 'Ex-UK',
    grade: 'A',
    size: 'Confirm with Seller',
    gearing: 'Confirm with Seller',
    description:
      'A versatile mountain bicycle for recreational riding and everyday use.',
    image: getBicycleImage('images (10).jpeg'),
    featured: false,
    available: true,
  },
  {
    id: 7,
    name: 'Ridgeback City Commuter Bike',
    brand: 'Ridgeback',
    category: 'Hybrid',
    price: 8999,
    condition: 'Ex-UK',
    grade: 'A',
    size: 'Confirm with Seller',
    gearing: 'Confirm with Seller',
    description:
      'A city-oriented bicycle for commuting and getting around town.',
    image: getBicycleImage('images (11).jpeg'),
    featured: false,
    available: true,
  },
  {
    id: 8,
    name: 'Specialized Road Bike',
    brand: 'Specialized',
    category: 'Road',
    price: 10999,
    condition: 'Ex-UK',
    grade: 'A',
    size: 'Medium/Large',
    gearing: 'Confirm with Seller',
    description:
      'A road bicycle for riders looking for a bike suited to road cycling.',
    image: getBicycleImage('images (12).jpeg'),
    featured: false,
    available: true,
  },
];

/* --------------------------------------------------
   WHY CHOOSE US
-------------------------------------------------- */

export const WHY_CHOOSE_US_ITEMS = [
  {
    id: 1,
    title: 'Quality Ex-UK Bicycles',
    description:
      'Explore our selection of imported bicycles for different riding needs.',
  },
  {
    id: 2,
    title: 'Affordable Prices',
    description:
      'Browse bicycles at different price points and enquire directly about availability.',
  },
  {
    id: 3,
    title: 'Different Bicycle Types',
    description:
      'Find road, mountain, hybrid, gravel and kids’ bicycle options.',
  },
  {
    id: 4,
    title: 'Direct WhatsApp Enquiries',
    description:
      'Contact us directly to confirm bicycle availability, sizing and other details.',
  },
];

/* --------------------------------------------------
   FREQUENTLY ASKED QUESTIONS
-------------------------------------------------- */

export const FAQS = [
  {
    question: 'Where are you located?',
    answer:
      'We are located in Athi River, Makadara, near Mavuno Fertilizer.',
  },
  {
    question: 'How can I check whether a bicycle is available?',
    answer:
      'Send us a WhatsApp message with the bicycle name. We will help confirm availability.',
  },
  {
    question: 'What types of bicycles do you sell?',
    answer:
      'Our catalogue includes road, mountain, hybrid, gravel and kids’ bicycles.',
  },
  {
    question: 'How do I enquire about a bicycle?',
    answer:
      'Select a bicycle and use its WhatsApp enquiry link to contact us directly.',
  },
  {
    question: 'Can I confirm the bicycle size before buying?',
    answer:
      'Yes. Contact us through WhatsApp to confirm the available size and specifications.',
  },
];