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
    
    componentDidMount() {
        dataSource.fishs.getAll().then(fishs => {            
            const newState = _.assign({}, this.state, { fishs }) as IState;            
            this.setState(newState);
        });
    }
    
    render() {
        return (
            <div className="app">
                <Menu items={this.state.fishs} onClickAddToOrderButton={this.addFishItemToOrder} />
                <Order items={this.state.fishsInOrder} onClickRemoveItem={this.removeFishFromOrder} />
                <Inventory 
                    items={this.state.fishs} 
                    onClickAddFish={this.addNewFishToInventory} 
                    onClickRemoveFish={this.removeFishFromInventory}
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
        const tempId = uuid.v4();
        newFish.id = tempId;
        const fishs = [...this.state.fishs, newFish];
        
        const newState = _.assign({}, this.state, { fishs }) as IState;        
        this.setState(newState);
        
        dataSource.fishs.add(newFish).then(definitiveDbId => {
            const others = this.state.fishs.filter(fish => fish.id !== tempId);
            const updatedFish = _.assign({}, newFish, { id: definitiveDbId });
            const fishs = [...others, updatedFish];
            
            const newState = _.assign({}, this.state, { fishs }) as IState;
            this.setState(newState);
        });
    }
    
    removeFishFromInventory = (fishId: string): void => {
        const others = this.state.fishs.filter(fish => fish.id !== fishId);
        const fishs = [...others];
                
        const newState = _.assign({}, this.state, { fishs }) as IState;        
        this.setState(newState);
        
        dataSource.fishs.remove(fishId);
    }
}