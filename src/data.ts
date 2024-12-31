import { Car } from './types';

export const cars: Car[] = [
  {
    carId: 'C001',
    brand: 'Toyota',
    model: 'Camry',
    basePricePerDay: 60.0,
    isAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&q=80&w=800'
  },
  {
    carId: 'C002',
    brand: 'Honda',
    model: 'Accord',
    basePricePerDay: 70.0,
    isAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1582639510494-c80b5de9f148?auto=format&fit=crop&q=80&w=800'
  },
  {
    carId: 'C003',
    brand: 'Nissan',
    model: 'kicks',
    basePricePerDay: 150.0,
    isAvailable: true,
    imageUrl: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&q=80&w=800'
  }
];