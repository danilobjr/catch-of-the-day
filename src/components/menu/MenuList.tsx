import * as React from 'react';
import { SFC } from 'react';
import { MenuItem } from './MenuItem';
import { Fish } from 'models';

type MenuListProps = {
  items: Fish[];
  onClickAddToOrderButton: (fishItem: Fish) => void;
}

export const MenuList: SFC<MenuListProps> = ({ items, onClickAddToOrderButton }) => (
  <ul>
    {items.map(item =>
      <MenuItem
        key={item.id}
        fish={item}
        onClickAddToOrderButton={onClickAddToOrderButton}
      />
    )}
  </ul>
);
