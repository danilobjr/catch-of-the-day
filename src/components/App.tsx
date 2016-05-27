import * as React from 'react';
import * as _ from 'lodash';
import { Menu } from './menu';
import { Order } from './order';
import { Inventory } from './inventory';
import { dataSource } from './../dataSource';
import { IFish } from './../models';

interface IState {
    fishs: IFish[];
    fishsInOrder: IFish[];
}

export class App extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
    
        this.state = {
            fishs: [],
            fishsInOrder: []
        };
    }
    
    componentWillMount() {
        const fishs = [...dataSource.fishs.getAll()];
        const newState = _.assign({}, this.state, { fishs }) as IState;
        
        this.setState(newState);
    }
    
    render() {
        return (
            <div className="app">
                <Menu items={this.state.fishs} onClickAddToOrderButton={this.addFishItemToOrder} />
                <Order items={this.state.fishsInOrder} onClickRemoveItem={this.removeFishFromOrder} />
                <Inventory />
            </div>
        );
    }
    
    addFishItemToOrder = (fishItem: IFish) : void => {
        const { fishsInOrder } = this.state;
        
        fishsInOrder.push(fishItem);
        const newState = _.assign({}, this.state, { fishsInOrder }) as IState;
        
        this.setState(newState);
    }
    
    removeFishFromOrder = (fishId: string): void => {
        const fishsInOrder = this.state.fishsInOrder.filter(fish => fish.id !== fishId);
        const newState = _.assign({}, this.state, { fishsInOrder }) as IState;
        
        this.setState(newState);
    }
}