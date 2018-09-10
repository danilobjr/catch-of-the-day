import * as React from 'react';
import { Section } from './../common';
import { MenuHeader } from './MenuHeader';
import { MenuList } from './MenuList';
import { Fish } from './../../models';
import { SFC } from 'react';

type MenuProps = {
  items: Fish[];
  onClickAddToOrderButton: (fishItem: Fish) => void;
};

export const Menu: SFC<MenuProps> = ({ items, onClickAddToOrderButton }) => (
  <Section>
    <MenuHeader />
    <MenuList items={items} onClickAddToOrderButton={onClickAddToOrderButton} />
  </Section>
);

