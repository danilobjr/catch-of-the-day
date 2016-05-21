import * as React from 'react';
import { Header } from './../common';

export class MenuItem extends React.Component<any, any> {
    render() {
        return (
            <li className="menu-item">
                Menu Item
                {/* 
                <figure></figure>
                <Header>Menu Item</Header>
                <p>Item description</p>
                <AddToOrderButton />
                <Price value={2500} />
                */}
            </li>
        );
    }
}