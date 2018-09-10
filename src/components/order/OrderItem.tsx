import * as React from 'react';
import { SFC } from 'react';
import { OrderItem as OrderItemModel } from './../../models';
import { Animation, IconButton, Price } from './../common';

type OrderItemProps = {
  item: OrderItemModel;
  onClickRemoveItem: (fishId: string) => void;
};

export const OrderItem: SFC<OrderItemProps> = (props) => (
  <li className="order-item">
    <div className="count">
      <Animation transitionName="animation-count">
        <div key={props.item.count}>{props.item.count}</div>
      </Animation>
    </div>
    <span>lbs</span>
    <span className="fish-name">{props.item.name}</span>
    <span><Price value={props.item.price * props.item.count} /></span>
    <IconButton name="times" onClick={onClickRemoveItem(props)} />
  </li>
);

const onClickRemoveItem = ({ item, onClickRemoveItem }: OrderItemProps) => () =>
  onClickRemoveItem(item.id);

