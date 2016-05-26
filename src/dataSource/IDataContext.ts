import { FishRepository } from './repos';
import { IFish } from './../models';

export interface IDataContext {
    fishs: FishRepository;
}