import { Fish } from './Fish';

// TODO: remove this?
export class FishFactory {
  static create(): Fish {
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
