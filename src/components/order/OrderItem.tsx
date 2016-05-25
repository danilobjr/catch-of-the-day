import * as React from 'react';

export class OrderItem extends React.Component<any, any> {
    render() {
        return (
            <li className="order-item">
                <span>2</span>
                <span>lbs</span>
                <span className="fish-name">Fish name</span>
                <span>$32.00</span>
            </li>
        );
    }
}