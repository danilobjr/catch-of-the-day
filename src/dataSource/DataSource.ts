import { DataContext } from './DataContext';
import { DataCollections } from './DataCollections';
import { FishRepository } from './repos';
import { Fish } from './../models';
import { v4 as generateId } from 'uuid';

const data: DataCollections = {
  fishs: [
    {
      id: generateId(),
      name: 'Pargo',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cupiditate ducimus totam voluptate!',
      price: 25,
      imageUrl: 'http://www.bossame.com.br/wp-content/uploads/2013/07/Chez-L%C2%B4Ami-Martin_-Fil%C3%A9-de-Pargo-com-arroz-negro-e-lula-a-Dor%C3%A9_-cr%C3%A9dito-Roberto-Prince.jpg',
      available: true
    }
  ] as Fish[]
};

class DataSource implements DataContext {
  fishs = new FishRepository('fishs', data);
}

export const dataSource = new DataSource();
