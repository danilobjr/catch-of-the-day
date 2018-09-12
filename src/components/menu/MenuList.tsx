import * as React from 'react';
import { SFC } from 'react';
import { MenuItem } from './MenuItem';
import { ContextConsumer } from 'components';

export const MenuList: SFC = () => (
  <ContextConsumer>
    {({ fishs, addFishToOrder }) => (
      <ul>
        {fishs.map(fish =>
          <MenuItem
            key={fish.id}
            fish={fish}
            onClickAddToOrderButton={addFishToOrder}
          />
        )}
      </ul>
    )}
  </ContextConsumer>
);

MenuList.displayName = 'MenuList';
