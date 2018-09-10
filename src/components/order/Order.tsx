import * as React from 'react';
import { SFC } from 'react';
import { Fish } from './../../models';
import { Section, SectionHeader } from './../common';
import { OrderList } from './OrderList';
import { OrderTotal } from './OrderTotal';

type OrderProps = {
  items: Fish[];
  onClickRemoveItem: (fishId: string) => void;
};

export const Order: SFC<OrderProps> = ({ items, onClickRemoveItem }) => (
  <Section>
    <SectionHeader>Your Order</SectionHeader>
    <OrderList items={items} onClickRemoveItem={onClickRemoveItem} />
    <OrderTotal items={items} />
  </Section>
);
