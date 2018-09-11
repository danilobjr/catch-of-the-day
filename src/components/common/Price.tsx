import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLAttributes, SFC } from 'react';
import { format } from 'currency-formatter';

type ChangedProps = {
  value?: any;
} & HTMLAttributes<HTMLSpanElement>;

type PriceProps = {
  currency?: string;
  value: number;
} & ChangedProps;

export const Price: SFC<PriceProps> = ({ className, value, ...otherProps }) => (
  <span
    {...otherProps}
    className={classNames('price', className)}
  >
    {formatValue({ value, ...otherProps })}
  </span>
);

Price.displayName = 'Price';

Price.defaultProps = {
  value: 0,
  currency: 'USD'
};

const formatValue = ({ value, currency }: PriceProps) =>
  format(value, { code: currency });
