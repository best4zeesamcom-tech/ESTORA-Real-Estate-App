
// ==========================================
// ESTORA - CENTRAL APP CONSTANTS
// ==========================================

// ==========================================
// APP COLORS
// ==========================================

export const COLORS = {
  primary: '#173D32',
  primaryDark: '#183D32',
  dark: '#102D25',

  secondary: '#D9BC8B',
  gold: '#B18B59',
  goldLight: '#A98754',
  exploreGold: '#C69B62',

  background: '#F7F5EF',
  white: '#FFFFFF',

  text: '#202923',
  textSecondary: '#77776F',
  muted: '#858981',

  line: '#EAE7DF',
  soft: '#F0EEE8',
  exploreSoft: '#EDF1EC',
  paleGold: '#F4EDE1',

  border: '#D3CFC5',
  imagePlaceholder: '#D7D0C3',

  // Property Details additional colors
  verifiedBackground: '#E8EFE9',
  mapBackground: '#EAE9E0',
  galleryPlaceholder: '#DDDAD2',
  agentPlaceholder: '#DDDDDD',
  priceBorder: '#EEEAE0',
  priceTagText: '#987344',
  descriptionText: '#60665F',
  danger: '#E65E5E',
};

// ==========================================
// APP IMAGES
// ==========================================

export const IMAGES = {
  // Splash Screens
  splash1:
    'https://images.openai.com/static-rsc-4/WzSkNwhRahTZtUwmjsgAuAhFCZeZ31kGkrMYjftfz_l6awado8VzkHNbS23Se5y6k-V3LioETRAa7u41rSmhaQiyylxPUHNiqTYHs9pOjLsaut0NtyGf9O_bnkuAlgm_lNn_l4ZSSTIH_9d-V7WZoIC3iRfrIA0wtJT-W1RWqcZWeJerX-xAAgPbe1_GtwUc?purpose=fullsize',

  splash2:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=90',

  splash3:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=90',

  // Home Screen Images
  homeHero:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=90',

  editorCollection:
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=90',

  propertyGrandResidence:
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90',

  propertyModernRetreat:
    'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90',

  propertyGardenVilla:
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=90',

  propertyFamilyHome:
    'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=90',

  // Home Locations
  locationDubai:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=85',

  locationNewYork:
    'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=700&q=85',

  locationLondon:
    'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=700&q=85',

  locationToronto:
    'https://images.unsplash.com/photo-1517090504586-fde19ea6066f?w=700&q=85',

  // Neighborhood Images
  neighborhoodPalmJumeirah:
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=700&q=85',

  neighborhoodManhattan:
    'https://images.unsplash.com/photo-1522083165195-3424ed129620?w=700&q=85',

  // Property Details Agent
  agentSarah:
    'https://images.unsplash.com/photo-1657378145489-2af93295cebf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
};

// ==========================================
// APP BRAND
// ==========================================

export const BRAND = {
  name: 'ESTORA',
  subtitle: 'REAL ESTATE',
  tagline: 'Find a place that feels like home.',
  exploreTagline: 'Discover spaces. Find your place.',
};

// ==========================================
// APP CONFIGURATION
// ==========================================

export const APP_CONFIG = {
  onboardingScreens: 3,
};

// ==========================================
// SHARED UI VALUES
// ==========================================

export const UI = {
  cardRadius: 27,
  buttonRadius: 15,

  iconBadgeBackground: '#EDE7DA',
  imageOverlay: 'rgba(15, 28, 21, 0.13)',
  glassBackground: 'rgba(255,255,255,0.18)',
  glassBorder: 'rgba(255,255,255,0.35)',

  // Home Screen Overlays
  homeHeroOverlay: 'rgba(9, 31, 25, 0.57)',
  imageShade: 'rgba(0,0,0,0.19)',
  locationOverlay: 'rgba(0,0,0,0.27)',
  editorOverlay: 'rgba(12,38,30,0.63)',
  notificationBorder: 'rgba(255,255,255,0.4)',
  favoriteBackground: 'rgba(20,35,29,0.4)',
  whiteTextMuted: 'rgba(255,255,255,0.84)',
  whiteTextSoft: 'rgba(255,255,255,0.85)',

  // Explore Screen
  exploreLocationOverlay: 'rgba(12,25,20,0.28)',
  explorePlaceholder: '#C9C7BD',

  // Property Details Screen
  propertyGalleryButton: 'rgba(255,255,255,0.96)',
  propertyGalleryCounter: 'rgba(16,45,37,0.83)',
  propertyGalleryDots: 'rgba(16,45,37,0.55)',
  propertyGalleryInactiveDot: 'rgba(255,255,255,0.55)',
};

// ==========================================
// HOME SCREEN - PROPERTY DATA
// ==========================================

export const PROPERTIES = [
  {
    id: '01',
    title: 'The Grand Residence',
    location: 'Beverly Hills, Los Angeles',
    price: '$1,250,000',
    type: 'For Sale',
    beds: 4,
    baths: 3,
    area: '3,200',
    rating: '4.9',
    image: IMAGES.propertyGrandResidence,
  },
  {
    id: '02',
    title: 'The Modern Retreat',
    location: 'Manhattan, New York',
    price: '$4,500 / month',
    type: 'For Rent',
    beds: 2,
    baths: 2,
    area: '1,450',
    rating: '4.8',
    image: IMAGES.propertyModernRetreat,
  },
  {
    id: '03',
    title: 'Serene Garden Villa',
    location: 'Palm Jumeirah, Dubai',
    price: '$2,800,000',
    type: 'For Sale',
    beds: 5,
    baths: 4,
    area: '4,500',
    rating: '5.0',
    image: IMAGES.propertyGardenVilla,
  },
  {
    id: '04',
    title: 'Contemporary Family Home',
    location: 'London, United Kingdom',
    price: '$890,000',
    type: 'For Sale',
    beds: 3,
    baths: 2,
    area: '2,100',
    rating: '4.9',
    image: IMAGES.propertyFamilyHome,
  },
];

// ==========================================
// HOME SCREEN - POPULAR LOCATIONS
// ==========================================

export const LOCATIONS = [
  {
    name: 'Dubai',
    count: '1,240 listings',
    image: IMAGES.locationDubai,
  },
  {
    name: 'New York',
    count: '980 listings',
    image: IMAGES.locationNewYork,
  },
  {
    name: 'London',
    count: '760 listings',
    image: IMAGES.locationLondon,
  },
  {
    name: 'Toronto',
    count: '540 listings',
    image: IMAGES.locationToronto,
  },
];

// ==========================================
// HOME SCREEN - CATEGORIES
// ==========================================

export const CATEGORIES = [
  { name: 'Apartments', icon: 'building-2' },
  { name: 'Villas', icon: 'castle' },
  { name: 'Houses', icon: 'home' },
  { name: 'Land', icon: 'trees' },
];

// ==========================================
// HOME SCREEN - NEIGHBORHOODS
// ==========================================

export const NEIGHBORHOODS = [
  {
    name: 'Palm Jumeirah',
    city: 'Dubai, UAE',
    image: IMAGES.neighborhoodPalmJumeirah,
  },
  {
    name: 'Manhattan',
    city: 'New York, USA',
    image: IMAGES.neighborhoodManhattan,
  },
];

// ==========================================
// EXPLORE SCREEN - CATEGORIES
// ==========================================

export const EXPLORE_CATEGORIES = [
  'All',
  'Houses',
  'Apartments',
  'Villas',
  'Penthouses',
];

// ==========================================
// EXPLORE SCREEN - POPULAR LOCATIONS
// ==========================================

export const EXPLORE_LOCATIONS = [
  {
    name: 'Los Angeles',
    country: 'California, USA',
    count: '120 Properties',
    image: IMAGES.splash3,
  },
  {
    name: 'New York',
    country: 'New York, USA',
    count: '86 Properties',
    image: IMAGES.splash2,
  },
  {
    name: 'Miami',
    country: 'Florida, USA',
    count: '64 Properties',
    image: IMAGES.propertyFamilyHome,
  },
];

// ==========================================
// EXPLORE SCREEN - PROPERTY DATA
// ==========================================

export const EXPLORE_PROPERTIES = [
  {
    id: '1',
    title: 'The Glass House',
    location: 'Beverly Hills, Los Angeles',
    price: '$1,250,000',
    type: 'For Sale',
    category: 'Houses',
    beds: 4,
    baths: 3,
    area: '3,200',
    rating: '4.9',
    image: IMAGES.propertyGrandResidence,
  },
  {
    id: '2',
    title: 'Modern City Residence',
    location: 'Manhattan, New York',
    price: '$4,500 / mo',
    type: 'For Rent',
    category: 'Apartments',
    beds: 2,
    baths: 2,
    area: '1,450',
    rating: '4.8',
    image: IMAGES.propertyModernRetreat,
  },
  {
    id: '3',
    title: 'Serenity Pool Villa',
    location: 'Miami Beach, Florida',
    price: '$2,850,000',
    type: 'For Sale',
    category: 'Villas',
    beds: 5,
    baths: 4,
    area: '4,100',
    rating: '5.0',
    image: IMAGES.propertyFamilyHome,
  },
  {
    id: '4',
    title: 'The Urban Penthouse',
    location: 'Downtown, Los Angeles',
    price: '$6,200 / mo',
    type: 'For Rent',
    category: 'Penthouses',
    beds: 3,
    baths: 3,
    area: '2,100',
    rating: '4.9',
    image: IMAGES.propertyGardenVilla,
  },
];

// ==========================================
// PROPERTY DETAILS SCREEN - DEFAULT PROPERTY
// ==========================================

export const DEFAULT_PROPERTY = {
  id: '01',
  title: 'Modern Luxury Villa',
  location: 'Los Angeles, CA, United States',
  price: '$1,250,000',
  type: 'For Sale',
  beds: 4,
  baths: 3,
  area: '3,200',
  rating: '4.9',
  image: IMAGES.propertyGrandResidence,
};

// ==========================================
// PROPERTY DETAILS SCREEN - GALLERY
// ==========================================

export const PROPERTY_GALLERY_IMAGES = [
  IMAGES.propertyGrandResidence,
  IMAGES.propertyModernRetreat,
  IMAGES.propertyGardenVilla,
  IMAGES.propertyFamilyHome,
  'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1600&q=90',
];

// ==========================================
// PROPERTY DETAILS SCREEN - AMENITIES
// ==========================================

export const PROPERTY_AMENITIES = [
  { title: 'Garage', icon: 'CarFront' },
  { title: 'Swimming Pool', icon: 'Waves' },
  { title: 'High-Speed WiFi', icon: 'Wifi' },
  { title: 'Fitness Center', icon: 'Dumbbell' },
];

// ==========================================
// PROPERTY DETAILS SCREEN - DESCRIPTION
// ==========================================

export const PROPERTY_DESCRIPTION =
  'Experience the perfect blend of luxury and comfort in this stunning modern villa. Featuring spacious interiors, premium finishes, and a beautiful outdoor space, this home is designed for sophisticated living. Every detail has been thoughtfully considered to create an exceptional living experience.';

// ==========================================
// PROPERTY DETAILS SCREEN - AGENT
// ==========================================

export const PROPERTY_AGENT = {
  name: 'Sarah Johnson',
  role: 'Senior Real Estate Agent',
  rating: '4.9',
  ratingLabel: 'Verified Agent',
  image: IMAGES.agentSarah,
};

// ==========================================
// PROPERTY DETAILS SCREEN - ALERT TEXT
// ==========================================

export const PROPERTY_DETAILS_TEXT = {
  contactTitle: 'Contact Agent',
  contactMessage:
    'Sarah Johnson is available to help you with this property.',

  scheduleTitle: 'Schedule a Visit',
  scheduleMessage:
    'Property visit scheduling will be connected in the next step.',

  shareTitle: 'Share Property',
  shareMessage:
    'Property sharing will be connected soon.',

  amenitiesTitle: 'All Amenities',
  amenitiesMessage:
    'Garage, swimming pool, high-speed WiFi, fitness center and more.',
};
