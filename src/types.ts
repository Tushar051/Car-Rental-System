export interface Car {
  carId: string;
  brand: string;
  model: string;
  basePricePerDay: number;
  isAvailable: boolean;
  imageUrl: string;
}

export interface Customer {
  customerId: string;
  name: string;
}

export interface Rental {
  car: Car;
  customer: Customer;
  days: number;
}