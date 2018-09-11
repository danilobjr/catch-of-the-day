import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { Button } from './common';
import { Menu } from './menu';
import { Order } from './order';
import { Inventory } from './inventory';
import { AppConsumer } from './AppContext';

export const App: SFC = () => (
  // TODO: move this consumer to Menu, Order and Inventory?
  <AppConsumer>
    {({
      fishs,
      fishsInOrder,
      isFoldedUp,
      addFishToInventory,
      addFishToOrder,
      removeFishFromOrder,
      removeFishFromInventory,
      toggleFold,
      updateFish,
    }) => (
      <div className={classNames('app', { 'folded-up': isFoldedUp })}>
        <main>
          <Menu
            items={fishs}
            onClickAddToOrderButton={addFishToOrder}
          />

          <Order
            items={fishsInOrder}
            onClickRemoveItem={removeFishFromOrder}
          />

          <Inventory
            items={fishs}
            onClickAddFish={addFishToInventory}
            onClickRemoveFish={removeFishFromInventory}
            onUpdateFishData={updateFish}
          />
        </main>

        <Button
          className="fold-button"
          onClick={toggleFold}
        >
          Fold
        </Button>
      </div>
    )}
  </AppConsumer>
);
