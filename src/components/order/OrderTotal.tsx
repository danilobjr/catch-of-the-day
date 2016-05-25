import * as React from 'react';

export class OrderTotal extends React.Component<any, any> {
    render() {
        return (
            <div className="order-total">
                <span className="total">Total:</span>
                <span>$32.00</span>
            </div>
        );
    }
}