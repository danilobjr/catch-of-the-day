import * as React from 'react';
import { SFC } from 'react';
import { Price } from 'components';

type MenuPriceProps = {
  value: number;
};

export const MenuPrice: SFC<MenuPriceProps> = (props) => (
  <Price className="menu-price" value={props.value} />
);

MenuPrice.displayName = 'MenuPrice';
