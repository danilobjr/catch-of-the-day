import * as React from 'react';
import { MenuItem } from './MenuItem';
import { IFish } from './../../models';
import { SFC } from 'react';

type MenuListProps = {
  items: IFish[];
  onClickAddToOrderButton: (fishItem: IFish) => void;
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
