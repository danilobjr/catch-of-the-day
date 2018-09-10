import * as React from 'react';
import { IFish } from './../../models';
import { Price } from './../common';
import { SFC } from 'react';

type OrderTotalProps = {
  items: IFish[];
};

export const OrderTotal: SFC<OrderTotalProps> = (props) => (
  <div className="order-total">
  <span className="total">Total:</span>
  <Price value={sumPrices(props)} />
  </div>
);

const sumPrices = (props: OrderTotalProps) => {
  const initialValue = 0;

  return props.items
    .map(fishItem => fishItem.price)
    .reduce((accumulator: number, current: number) => accumulator + current, initialValue);
};
