import * as React from 'react';
import { SFC } from 'react';
import { Section } from 'components';
import { MenuHeader } from './MenuHeader';
import { MenuList } from './MenuList';

export const Menu: SFC = () => (
  <Section>
    <MenuHeader />
    <MenuList />
  </Section>
);

