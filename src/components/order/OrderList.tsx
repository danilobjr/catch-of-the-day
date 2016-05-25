import * as React from 'react';
import { OrderItem } from './OrderItem';

export class OrderList extends React.Component<any, any> {
    render() {
        return (
            <ul className="order-list">
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </ul>
        );
    }
}