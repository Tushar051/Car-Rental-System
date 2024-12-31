import React from 'react';
import { Car } from '../types';
import { Car as CarIcon, DollarSign, Check, X } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onRent: (car: Car) => void;
}

export function CarCard({ car, onRent }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={car.imageUrl} 
        alt={`${car.brand} ${car.model}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <CarIcon className="w-5 h-5 text-gray-600" />
          <h3 className="text-lg font-semibold">{car.brand} {car.model}</h3>
        </div>
        <div className="flex items-center gap-2 text-gray-600 mb-2">
          <DollarSign className="w-4 h-4" />
          <span>${car.basePricePerDay}/day</span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          {car.isAvailable ? (
            <div className="flex items-center text-green-600">
              <Check className="w-4 h-4" />
              <span className="ml-1">Available</span>
            </div>
          ) : (
            <div className="flex items-center text-red-600">
              <X className="w-4 h-4" />
              <span className="ml-1">Rented</span>
            </div>
          )}
        </div>
        <button
          onClick={() => onRent(car)}
          disabled={!car.isAvailable}
          className={`w-full py-2 px-4 rounded-md ${
            car.isAvailable
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-300 cursor-not-allowed text-gray-500'
          }`}
        >
          {car.isAvailable ? 'Rent Now' : 'Not Available'}
        </button>
      </div>
    </div>
  );
}