
import React, {
  createContext,
  useContext,
  useState,
} from 'react';

const FavoritesContext = createContext(null);

// TEMPORARY DEMO SAVED PROPERTIES
const DEMO_SAVED_PROPERTIES = [
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
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90',
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
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=90',
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
    image:
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&q=90',
  },
];

export function FavoritesProvider({ children }) {
  const [savedProperties, setSavedProperties] = useState(
    DEMO_SAVED_PROPERTIES
  );

  const toggleFavorite = (property) => {
    setSavedProperties((current) => {
      const alreadySaved = current.some(
        (item) => item.id === property.id
      );

      if (alreadySaved) {
        return current.filter(
          (item) => item.id !== property.id
        );
      }

      return [...current, property];
    });
  };

  const isFavorite = (id) => {
    return savedProperties.some(
      (item) => item.id === id
    );
  };

  return (
    <FavoritesContext.Provider
      value={{
        savedProperties,
        toggleFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);

  if (!context) {
    throw new Error(
      'useFavorites must be used inside FavoritesProvider'
    );
  }

  return context;
}
