import * as React from 'react';
import { SFC } from 'react';
import { IFish } from './../../models';
import { InventoryListItem } from './InventoryListItem';

type InventoryListProps = {
  items: IFish[];
  onClickAddFish: (fish: IFish) => void;
  onClickRemoveFish: (fishId: string) => void;
  onUpdateFishData: (updatedFish: IFish) => void;
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

const onClickRemoveFish = (props: InventoryListProps) => (fish: IFish) =>
  props.onClickRemoveFish(fish.id);
