import { IEntity } from './../dataSource';

export interface IFish extends IEntity {    
    name: string;
    description?: string;
    price: number;
    imageUrl: string;
}