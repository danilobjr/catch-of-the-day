import * as React from 'react';
import { IFish } from './../../models';
import { Price } from './../common';

interface IProps {
    items: IFish[];
}

export class OrderTotal extends React.Component<IProps, any> {
    render() {
        return (
            <div className="order-total">
                <span className="total">Total:</span>
                <Price value={this.sumPrices()} />
            </div>
        );
    }
    
    sumPrices(): number {
        const initialValue = 0;
        
        return this.props.items
            .map(fishItem => fishItem.price)
            .reduce((accumulator: number, current: number) => accumulator + current, initialValue);
    }
}