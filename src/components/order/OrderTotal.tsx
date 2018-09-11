import * as React from 'react';
import { SFC } from 'react';
import { Price, ContextConsumer } from 'components';
import { Fish } from 'models';

export const OrderTotal: SFC = () => (
  <ContextConsumer>
    {({ fishs }) => (
      <div className="order-total">
        <span className="total">Total:</span>
        <Price value={sumPrices(fishs)} />
      </div>
    )}
  </ContextConsumer>
);

const sumPrices = (fishs: Fish[]) => {
  const initialValue = 0;

  return fishs
    .map(fishItem => fishItem.price)
    .reduce((accumulator: number, current: number) => accumulator + current, initialValue);
};
