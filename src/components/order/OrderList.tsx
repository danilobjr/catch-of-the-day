import * as React from 'react';
import { SFC } from 'react';
import { Animation } from 'components';
import { OrderItem } from './OrderItem';
import { Fish, OrderItem as OrderItemModel } from 'models';
import { compose, groupSame, head, map } from 'utils';

type OrderListProps = {
  items: Fish[];
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

  const toOrderItemModel = (fishs: Fish[]) => ({ ...head(fishs), ...{ count: fishs.length } });
  const toOrderItemComponent = (orderItem: OrderItemModel) => (
    <OrderItem
      key={orderItem.id}
      item={orderItem}
      onClickRemoveItem={onClickRemoveItem}
    />
  );

  const toComponent = compose(toOrderItemComponent, toOrderItemModel);

  return compose(map(toComponent), groupSame)(items);
};

