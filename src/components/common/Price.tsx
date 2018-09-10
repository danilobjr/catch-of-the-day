import * as React from 'react';
import { SFC } from 'react';
import { Currency } from './Currency';

type PriceProps = {
  value: number;
  className?: string;
};

export const Price: SFC<PriceProps> = (props) => (
  <Currency className={getClassName(props)} value={props.value} />
);

const getClassName = (props: PriceProps) => {
  const classes = ['price'];

  props.className && classes.push(props.className);

  return classes.join(' ');
};
