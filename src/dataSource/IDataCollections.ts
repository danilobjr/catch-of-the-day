import { IFish } from './../models';

export interface IDataCollections {
  fishs: IFish[];
  [index: string]: any;
}
