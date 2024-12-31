import React, { useState } from 'react';
import { Car as CarType } from './types';
import { cars as initialCars } from './data';
import { CarCard } from './components/CarCard';
import { RentalForm } from './components/RentalForm';
import { ReturnButton } from './components/ReturnButton';
import { Car as CarIcon } from 'lucide-react';

function App() {
  const [cars, setCars] = useState<CarType[]>(initialCars);
  const [selectedCar, setSelectedCar] = useState<CarType | null>(null);
  const [rentals, setRentals] = useState<Array<{ car: CarType; customerName: string; days: number }>>([]);

  const handleRentCar = (car: CarType) => {
    setSelectedCar(car);
  };

  const handleRentalSubmit = (name: string, days: number) => {
    if (selectedCar) {
      setCars(cars.map(car => 
        car.carId === selectedCar.carId 
          ? { ...car, isAvailable: false }
          : car
      ));

      setRentals([...rentals, {
        car: selectedCar,
        customerName: name,
        days: days
      }]);

      setSelectedCar(null);
    }
  };

  const handleReturnCar = (carId: string) => {
    // Update car availability
    setCars(cars.map(car => 
      car.carId === carId 
        ? { ...car, isAvailable: true }
        : car
    ));

    // Remove from rentals
    setRentals(rentals.filter(rental => rental.car.carId !== carId));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <CarIcon className="w-8 h-8 text-blue-600" />
            <h1 className="ml-2 text-2xl font-bold text-gray-900">Car Rental System</h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section>
          <h2 className="text-xl font-semibold mb-6">Available Cars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cars.map(car => (
              <CarCard 
                key={car.carId} 
                car={car} 
                onRent={handleRentCar}
              />
            ))}
          </div>
        </section>

        {rentals.length > 0 && (
          <section className="mt-12">
            <h2 className="text-xl font-semibold mb-6">Active Rentals</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Car
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Days
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {rentals.map((rental, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {rental.car.brand} {rental.car.model}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {rental.customerName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {rental.days}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        ${(rental.car.basePricePerDay * rental.days).toFixed(2)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <ReturnButton onReturn={() => handleReturnCar(rental.car.carId)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}
      </main>

      {selectedCar && (
        <RentalForm
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
          onSubmit={handleRentalSubmit}
        />
      )}
    </div>
  );
}

export default App;