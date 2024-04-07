import { v4 as uuid } from 'uuid';
import { Car } from 'src/cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Tesla',
    model: 'S',
  },
  {
    id: uuid(),
    brand: 'BMW',
    model: 'X5',
  },
  {
    id: uuid(),
    brand: 'Mercedes',
    model: 'C',
  },
  {
    id: uuid(),
    brand: 'Audi',
    model: 'Q7',
  },
  {
    id: uuid(),
    brand: 'Kia',
    model: 'Karens',
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Spin',
  },
];
