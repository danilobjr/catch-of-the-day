import { IFish } from './IFish';

export class FishFactory {
    /** Returns an object of type IFish with all properties values empty. */
    static create(): IFish {
        return {
            id: '',
            name: '',
            description: '',
            price: 0,
            imageUrl: '',
            available: true
        };
    }
}