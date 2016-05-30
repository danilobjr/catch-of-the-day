import * as React from 'react';
import * as _ from 'lodash';
import * as ReactCssTransitionGroup from 'react-addons-css-transition-group';
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
                <ReactCssTransitionGroup transitionName="animation-items" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                    {this.renderOrderItems(this.props.items)}
                </ReactCssTransitionGroup>
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