import * as React from 'react';
import { Menu } from './menu';
import { Order } from './order';
import { Inventory } from './inventory';

export class App extends React.Component<any, any> {
    render() {
        return (
            <div className="app">
                <Menu />
                <Order />                
                <Inventory />
            </div>
        );
    }
}