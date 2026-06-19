export interface Product {
  id: string;
  name: string;
  category: 'led-bulb' | 'tube-light' | 'sensor-light' | 'radar-sensor' | 'panel-light' | 'flood-light';
  price: number;
  wattage: string;
  lumens: string;
  lifespan: string;
  colorTemp: string;
  description: string;
  features: string[];
  image: string;
  badge?: string;
  rating: number;
  inStock: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  productCount: number;
}