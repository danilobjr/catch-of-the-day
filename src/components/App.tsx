import * as React from 'react';
import { Menu } from './menu';
import { Order } from './order';
import { Inventory } from './inventory';
import { dataSource } from './../dataSource';
import { IFish } from './../models';

interface IState {
    fishs: IFish[];
}

export class App extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
    
        this.state = {
            fishs: []
        };
    }
    
    componentDidMount() {
        const fishs = [...dataSource.fishs.getAll()];
        this.setState({ fishs });
    }
    
    render() {
        return (
            <div className="app">
                <Menu items={this.state.fishs} />
                <Order />                
                <Inventory />
            </div>
        );
    }
}