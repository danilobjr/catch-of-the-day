import * as React from 'react';
import * as _ from 'lodash';
import * as uuid from 'node-uuid';
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
                <Inventory 
                    items={this.state.fishs} 
                    onClickAddFish={this.addNewFishToInventory} 
                />
            </div>
        );
    }
    
    addFishItemToOrder = (fishItem: IFish) : void => {
        const fishsInOrder = [fishItem, ...this.state.fishsInOrder];
        const newState = _.assign({}, this.state, { fishsInOrder }) as IState;
        
        this.setState(newState);
    }
    
    removeFishFromOrder = (fishId: string): void => {
        const fishsInOrder = this.state.fishsInOrder.filter(fish => fish.id !== fishId);
        const newState = _.assign({}, this.state, { fishsInOrder }) as IState;
        
        this.setState(newState);
    }
    
    addNewFishToInventory = (newFish: IFish) : void => {
        console.warn('TODO: make dataSource methods return a promise');
        console.warn('TODO: optimistic update with client-side id and then update state with the real "back-end" id');
        const tempId = uuid.v4();
        newFish.id = tempId;
        
        const fishs = [...this.state.fishs, newFish];
        const newState = _.assign({}, this.state, { fishs }) as IState;
        
        this.setState(newState);
        
        dataSource.fishs.add(newFish);
    }
}