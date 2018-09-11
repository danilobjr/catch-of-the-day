import * as React from 'react';
import { SFC } from 'react';
import { Price } from 'components';
import { Fish } from 'models';

type OrderTotalProps = {
  items: Fish[];
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
