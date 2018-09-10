import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { Currency } from './Currency';

type PriceProps = {
  value: number;
  className?: string;
};

export const Price: SFC<PriceProps> = ({ className, value }) => (
  <Currency className={classNames('price', className)} value={value} />
);
