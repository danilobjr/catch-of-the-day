import * as React from 'react';
import { SFC } from 'react';
import { IFish, IOrderItem } from './../../models';
import { compose, groupSame, head, map } from './../../utils/functions';
import { Animation } from './../common';
import { OrderItem } from './OrderItem';

type OrderListProps = {
  items: IFish[];
  onClickRemoveItem: (fishId: string) => void;
};

export const OrderList: SFC<OrderListProps> = (props) => (
  <ul className="order-list">
    <Animation transitionName="animation-items">
      {renderOrderItems(props)}
    </Animation>
  </ul>
);

const renderOrderItems = (props: OrderListProps) => {
  const { items, onClickRemoveItem } = props;

  const toOrderItemModel = (fishs: IFish[]): IOrderItem => Object.assign({}, head(fishs), { count: fishs.length }) as IOrderItem
  const toOrderItemComponent = (orderItem: IOrderItem) => (
    <OrderItem
      key={orderItem.id}
      item={orderItem}
      onClickRemoveItem={onClickRemoveItem}
    />
  );

  const toComponent = compose(toOrderItemComponent, toOrderItemModel);

  return compose(map(toComponent), groupSame)(items);
};

