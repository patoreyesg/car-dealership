import { v4 as uuid } from 'uuid';
import { Brand } from 'src/brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: uuid(),
    name: 'Kia',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Chevrolet',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Tesla',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'BMW',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Mercedes',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Volvo',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Audi',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Huyndai',
    createdAt: new Date().getTime(),
  },
  {
    id: uuid(),
    name: 'Citroen',
    createdAt: new Date().getTime(),
  },
];
