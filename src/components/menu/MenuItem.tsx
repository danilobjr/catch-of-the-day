import * as React from 'react';
import { SFC } from 'react';
import { Header } from 'components';
import { Fish } from 'models';
import { MenuImage } from './MenuImage';
import { MenuPrice } from './MenuPrice';
import { MenuAddToOrderButton } from './MenuAddToOrderButton';

type MenuItemProps = {
  fish: Fish;
  onClickAddToOrderButton: (fishItem: Fish) => void;
};

export const MenuItem: SFC<MenuItemProps> = (props) => (
  <li className="menu-item">
    <MenuImage url={props.fish.imageUrl} />

    <div className="body">
      <Header>{props.fish.name}</Header>
      <p>{props.fish.description}</p>

      <MenuAddToOrderButton
        showSoldOutLabel={isFishSold(props)}
        onClick={onClickAddToOrderButton(props)}
      >
        Add to Order
      </MenuAddToOrderButton>

      <MenuPrice value={props.fish.price} />
    </div>
  </li>
);

const isFishSold = ({ fish }: MenuItemProps) => !fish.available;

const onClickAddToOrderButton = (props: MenuItemProps) => () => {
  if (props.fish.available) {
    props.onClickAddToOrderButton(props.fish);
  }
};
