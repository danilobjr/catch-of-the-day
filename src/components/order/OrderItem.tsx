import * as React from 'react';
import { IOrderItem } from './../../models';
import { Price, IconButton, Animation } from './../common';

interface IProps {
    item: IOrderItem;
    onClickRemoveItem: (fishId: string) => void;
}

export class OrderItem extends React.Component<IProps, any> {
    render() {
        const { item } = this.props;
        
        return (
            <li className="order-item">
                <div className="count">
                    <Animation transitionName="animation-count">
                        <div key={item.count}>{item.count}</div>
                    </Animation>
                </div>
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