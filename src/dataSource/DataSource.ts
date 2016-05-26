import { IDataContext } from './IDataContext';
import { IDataCollections } from './IDataCollections';
import { FishRepository } from './repos';
import { IFish } from './../models';
import * as uuid from 'node-uuid';

const data: IDataCollections = {
    fishs: [
        {
            id: uuid.v1(),
            name: 'Pargo',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi cupiditate ducimus totam voluptate!',
            price: 25,
            imageUrl: 'http://www.bossame.com.br/wp-content/uploads/2013/07/Chez-L%C2%B4Ami-Martin_-Fil%C3%A9-de-Pargo-com-arroz-negro-e-lula-a-Dor%C3%A9_-cr%C3%A9dito-Roberto-Prince.jpg'
        }
    ] as IFish[]
};

class DataContext implements IDataContext {
    fishs = new FishRepository('fishs', data);
}

export const dataSource = new DataContext();