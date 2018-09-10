import * as React from 'react';
import { SFC } from 'react';
import { IFish } from './../../models';
import { Section, SectionHeader } from './../common';
import { InventoryList } from './InventoryList';

type InventoryProps = {
  items: IFish[];
  onClickAddFish: (fish: IFish) => void;
  onClickRemoveFish: (fishId: string) => void;
  onUpdateFishData: (updatedFish: IFish) => void;
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

