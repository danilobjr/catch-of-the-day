import * as React from 'react';
import { SFC } from 'react';
import { Fish } from './../../models';
import { Section, SectionHeader } from './../common';
import { InventoryList } from './InventoryList';

type InventoryProps = {
  items: Fish[];
  onClickAddFish: (fish: Fish) => void;
  onClickRemoveFish: (fishId: string) => void;
  onUpdateFishData: (updatedFish: Fish) => void;
};

export const Inventory: SFC<InventoryProps> = (props) => (
  <Section>
    <SectionHeader>Inventory</SectionHeader>

    <InventoryList
      items={props.items}
      onClickAddFish={props.onClickAddFish}
      onClickRemoveFish={props.onClickRemoveFish}
      onUpdateFishData={props.onUpdateFishData}
    />
  </Section>
);

