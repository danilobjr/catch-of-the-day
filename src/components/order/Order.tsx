import * as React from 'react';
import { SFC } from 'react';
import { Section, SectionHeader } from 'components';
import { OrderList } from './OrderList';
import { OrderTotal } from './OrderTotal';

export const Order: SFC = () => (
  <Section>
    <SectionHeader>Your Order</SectionHeader>
    <OrderList />
    <OrderTotal />
  </Section>
);

Order.displayName = 'Order';
