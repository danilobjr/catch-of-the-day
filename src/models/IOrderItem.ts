import { IFish } from './IFish';

export interface IOrderItem extends IFish {
    count: number;
}