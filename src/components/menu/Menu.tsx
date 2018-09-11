import * as React from 'react';
import { SFC } from 'react';
import { Section } from 'components';
import { MenuHeader } from './MenuHeader';
import { MenuList } from './MenuList';
import { Fish } from 'models';

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

