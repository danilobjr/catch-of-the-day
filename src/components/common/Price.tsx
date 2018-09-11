import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { Currency } from 'components';

type PriceProps = {
  value: number;
  className?: string;
};

// TODO: is Currency need to exist? It's used just here!!!
export const Price: SFC<PriceProps> = ({ className, value }) => (
  <Currency className={classNames('price', className)} value={value} />
);
