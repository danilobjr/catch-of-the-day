import * as React from 'react';
import { Header } from './../common';
import { IFish } from './../../models';
import { MenuImage } from './MenuImage';
import { MenuPrice } from './MenuPrice';
import { MenuAddToOrderButton } from './MenuAddToOrderButton';
import { SFC } from 'react';

type MenuItemProps = {
  fish: IFish;
  onClickAddToOrderButton: (fishItem: IFish) => void;
};

export const MenuItem: SFC<MenuItemProps> = (props) => (
  <li className="menu-item">
    <div>
      <MenuImage url={props.fish.imageUrl} />
    </div>

    <div>
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
