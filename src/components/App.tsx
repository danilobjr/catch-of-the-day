import * as React from 'react';
import * as classNames from 'classnames';
import { SFC } from 'react';
import { ContextConsumer, Button, Inventory, Menu, Order } from 'components';

export const App: SFC = () => (
  <ContextConsumer>
    {({ isFoldedUp, toggleFold }) => (
      <div className={classNames('app', { 'folded-up': isFoldedUp })}>
        <main>
          <Menu />
          <Order />
          <Inventory />
        </main>

        <Button className="fold-button" onClick={toggleFold}>Fold</Button>
      </div>
    )}
  </ContextConsumer>
);

App.displayName = 'App';
