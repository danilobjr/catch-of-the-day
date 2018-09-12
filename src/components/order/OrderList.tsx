import * as React from 'react';
import { SFC } from 'react';
import { Animation, Context, ContextConsumer } from 'components';
import { OrderItem } from './OrderItem';
import { Fish, OrderItem as OrderItemModel } from 'models';
import { compose, groupSame, head, map } from 'utils';

export const OrderList: SFC = () => (
  <ContextConsumer>
    {(context) => (
      <ul className="order-list">
        <Animation transitionName="animation-items">
          {renderOrderItems(context)}
        </Animation>
      </ul>
    )}
  </ContextConsumer>
);

OrderList.displayName = 'OrderList';

const renderOrderItems = ({ fishsInOrder, removeFishFromOrder }: Context) => {
  const toOrderItemModel = (items: Fish[]) => ({ ...head(items), ...{ count: items.length } });
  const toOrderItemComponent = (orderItem: OrderItemModel) => (
    <OrderItem
      key={orderItem.id}
      item={orderItem}
      onClickRemoveItem={removeFishFromOrder}
    />
  );

  const toComponent = compose(toOrderItemComponent, toOrderItemModel);

  return compose(map(toComponent), groupSame)(fishsInOrder);
};
