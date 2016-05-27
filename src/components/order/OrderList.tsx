import * as React from 'react';
import { OrderItem } from './OrderItem';
import { IFish } from './../../models';
import { compose, groupSame, map } from './../../utils/functions';
import * as _ from 'lodash';

interface IProps {
    items: IFish[];
}

export class OrderList extends React.Component<IProps, any> {
    render() {
        return <ul className="order-list">{this.renderOrderItems(this.props.items)}</ul>;
    }
    
    renderOrderItems(items: IFish[]) {
        const toOrderItem = (fishs: IFish[]) => <OrderItem key={fishs[0].id} item={fishs[0]} count={fishs.length} />        
        return compose(map(toOrderItem), groupSame)(items);
    }
}