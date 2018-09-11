import * as React from 'react';
import { SFC } from 'react';
import { Section } from 'components';
import { MenuList } from './MenuList';

export const Menu: SFC = () => (
  <Section>
    <header className="menu-header">
      <h1>Catch of the Day</h1>
      <h3><span>Fresh seafood market</span></h3>
    </header>

    <MenuList />
  </Section>
);

