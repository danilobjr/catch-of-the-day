import * as React from 'react';
import { SFC } from 'react';
import { OrderItem as OrderItemModel } from 'models';
import { IconButton, Price } from 'components';

type OrderItemProps = {
  item: OrderItemModel;
  onClickRemoveItem: (fishId: string) => void;
};

export const OrderItem: SFC<OrderItemProps> = (props) => (
  <li className="order-item">
    <div className="count">{props.item.count}</div>
    <span>lbs</span>
    <span className="fish-name">{props.item.name}</span>
    <span><Price value={props.item.price * props.item.count} /></span>
    <IconButton name="times" onClick={onClickRemoveItem(props)} />
  </li>
);

OrderItem.displayName = 'OrderItem';

const onClickRemoveItem = ({ item, onClickRemoveItem }: OrderItemProps) => () =>
  onClickRemoveItem(item.id);

