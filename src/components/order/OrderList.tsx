import * as React from 'react';
import * as _ from 'lodash';
import { Animation } from './../common';
import { OrderItem } from './OrderItem';
import { IFish, IOrderItem } from './../../models';
import { compose, groupSame, map, head } from './../../utils/functions';

interface IProps {
    items: IFish[];
    onClickRemoveItem: (fishId: string) => void;
}

export class OrderList extends React.Component<IProps, any> {
    render() {
        return (
            <ul className="order-list">
                <Animation transitionName="animation-items">
                    {this.renderOrderItems(this.props.items)}
                </Animation>
            </ul>
        );
    }
    
    renderOrderItems(items: IFish[]) {
        const { onClickRemoveItem } = this.props;
        
        const toOrderItemModel = (fishs: IFish[]): IOrderItem => _.assign({}, head(fishs), { count: fishs.length }) as IOrderItem
        const toOrderItemComponent = (orderItem: IOrderItem): JSX.Element => 
            <OrderItem 
                key={orderItem.id} 
                item={orderItem} 
                onClickRemoveItem={onClickRemoveItem} 
            />
            
        const toComponent = compose(toOrderItemComponent, toOrderItemModel);
        
        return compose(map(toComponent), groupSame)(items);
    }
}