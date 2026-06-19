import { create } from 'zustand';
import { Product } from '@/types';

interface StoreState {
  cart: Product[];
  wishlist: string[];
  searchQuery: string;
  selectedCategory: string | null;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  toggleWishlist: (id: string) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string | null) => void;
}

export const useStore = create<StoreState>((set) => ({
  cart: [],
  wishlist: [],
  searchQuery: '',
  selectedCategory: null,
  
  addToCart: (product) =>
    set((state) => ({
      cart: [...state.cart, product],
    })),
    
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((p) => p.id !== id),
    })),
    
  toggleWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.includes(id)
        ? state.wishlist.filter((w) => w !== id)
        : [...state.wishlist, id],
    })),
    
  setSearchQuery: (query) => set({ searchQuery: query }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));