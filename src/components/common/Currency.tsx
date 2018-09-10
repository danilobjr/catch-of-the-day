import * as React from 'react';
import { HTMLAttributes } from 'react';
import { format } from 'currency-formatter';
import { SFC } from 'react';

type ChangedProps = {
  value?: any;
} & HTMLAttributes<HTMLSpanElement>;

type CurrencyProps = {
  currency?: string;
  value: number;
} & ChangedProps;

export const Currency: SFC<CurrencyProps> = ({ value, ...otherProps }) => (
  <span {...otherProps}>{formatValue({ value, ...otherProps })}</span>
);

Currency.defaultProps = {
  value: 0,
  currency: 'USD'
};

const formatValue = ({ value, currency }: CurrencyProps) =>
  format(value, { code: currency });
