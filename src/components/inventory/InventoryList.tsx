import * as React from 'react';
import { SFC } from 'react';
import { Fish } from 'models';
import { InventoryListItem } from './InventoryListItem';

type InventoryListProps = {
  items: Fish[];
  onClickAddFish: (fish: Fish) => void;
  onClickRemoveFish: (fishId: string) => void;
  onUpdateFishData: (updatedFish: Fish) => void;
};

export const InventoryList: SFC<InventoryListProps> = (props) => (
  <ul>
    {renderInventoryListItems(props)}
    <InventoryListItem isAddBox onClickButton={props.onClickAddFish} />
  </ul>
);


const renderInventoryListItems = (props: InventoryListProps) =>
  props.items.map(fishItem =>
    <InventoryListItem
      key={fishItem.id}
      item={fishItem}
      onClickButton={onClickRemoveFish(props)}
      onUpdateData={props.onUpdateFishData}
    />
  );

const onClickRemoveFish = (props: InventoryListProps) => (fish: Fish) =>
  props.onClickRemoveFish(fish.id);
