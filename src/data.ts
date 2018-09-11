import { v4 as generateId } from 'uuid';
import { Fish } from 'models';

export const data = {
  fishs: [
    {
      id: generateId(),
      name: 'Pargo',
      description: 'Lorem ipsum dolor sit amet!',
      price: 25,
      imageUrl: 'http://www.bossame.com.br/wp-content/uploads/2013/07/Chez-L%C2%B4Ami-Martin_-Fil%C3%A9-de-Pargo-com-arroz-negro-e-lula-a-Dor%C3%A9_-cr%C3%A9dito-Roberto-Prince.jpg',
      available: true
    }
  ] as Fish[]
};
