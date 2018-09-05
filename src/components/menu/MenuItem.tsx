import * as React from 'react';
import { Header } from './../common';
import { IFish } from './../../models';
import { MenuImage } from './MenuImage';
import { MenuPrice } from './MenuPrice';
import { MenuAddToOrderButton } from './MenuAddToOrderButton';

interface IProps {
  fish: IFish;
  onClickAddToOrderButton: (fishItem: IFish) => void;
}

export class MenuItem extends React.Component<IProps, any> {
  render() {
    const { fish } = this.props;

    return (
      <li className="menu-item">
        <div>
          <MenuImage url={fish.imageUrl} />
        </div>

        <div>
          <Header>{fish.name}</Header>
          <p>{fish.description}</p>

          <MenuAddToOrderButton
            showSoldOutLabel={this.isFishSold()}
            onClick={this.onClickAddToOrderButton}
          >
            Add to Order
          </MenuAddToOrderButton>

          <MenuPrice value={fish.price} />
        </div>
      </li>
    );
  }

  isFishSold(): boolean {
    return !this.props.fish.available;
  }

  onClickAddToOrderButton = (): void => {
    if (this.props.fish.available) {
      this.props.onClickAddToOrderButton(this.props.fish);
    }
  }
}
