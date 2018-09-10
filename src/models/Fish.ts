import { Entity } from './../dataSource';

export type Fish = {
  name: string;
  description?: string;
  price: number;
  imageUrl: string;
  available: boolean;
} & Entity;
