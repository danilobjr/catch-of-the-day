import * as React from 'react';
import { IOrderItem } from './../../models';
import { Price, IconButton } from './../common';

interface IProps {
    item: IOrderItem;
    onClickRemoveItem: (fishId: string) => void;
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
                <IconButton name="times" onClick={this.onClickRemoveItem} />
            </li>
        );
    }
    
    onClickRemoveItem = () => {
        const { item, onClickRemoveItem } = this.props;
        onClickRemoveItem(item.id);
    }
}