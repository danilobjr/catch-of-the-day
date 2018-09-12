import * as React from 'react';
import { SFC } from 'react';
import { Fish } from 'models';
import { Context, ContextConsumer } from 'components';
import { InventoryListItem } from './InventoryListItem';

export const InventoryList: SFC = () => (
  <ContextConsumer>
    {(context) => (
      <ul>
        {renderInventoryListItems(context)}
        <InventoryListItem isAddBox onClickButton={context.addFishToInventory} />
      </ul>
    )}
  </ContextConsumer>
);

InventoryList.displayName = 'InventoryList';

const renderInventoryListItems = (context: Context) =>
  context.fishs.map((fish: Fish) =>
    <InventoryListItem
      key={fish.id}
      item={fish}
      onClickButton={handleClickRemoveFish(context)}
      onUpdateData={context.updateFish}
    />
  );

const handleClickRemoveFish = (context: Context) => (fish: Fish) =>
  context.removeFishFromInventory(fish.id);
