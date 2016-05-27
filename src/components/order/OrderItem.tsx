import * as React from 'react';
import { IOrderItem } from './../../models';
import { Price } from './../common';

interface IProps {
    item: IOrderItem;
}

export class OrderItem extends React.Component<IProps, any> {
    render() {
        const { item } = this.props;
        
        return (
            <li className="order-item">
                <span>{item.count}</span>
                <span>lbs</span>
                <span className="fish-name">{item.name}</span>
                <span><Price value={item.price * item.count} /></span>
            </li>
        );
    }
}