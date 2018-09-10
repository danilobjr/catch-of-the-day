import { Fish } from './Fish';

export type OrderItem = {
  count: number;
} & Fish;
