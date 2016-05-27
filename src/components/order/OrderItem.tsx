import * as React from 'react';
import { IFish } from './../../models';
import { Price } from './../common';

interface IProps {
    item: IFish;
    count: number;
}

export class OrderItem extends React.Component<IProps, any> {
    render() {
        const { item, count } = this.props;
        
        return (
            <li className="order-item">
                <span>{count}</span>
                <span>lbs</span>
                <span className="fish-name">{item.name}</span>
                <span><Price value={item.price * count} /></span>
            </li>
        );
    }
}