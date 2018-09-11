import * as React from 'react';
import { SFC } from 'react';
import { Section, SectionHeader } from 'components';
import { InventoryList } from './InventoryList';

export const Inventory: SFC = () => (
  <Section>
    <SectionHeader>Inventory</SectionHeader>
    <InventoryList />
  </Section>
);

