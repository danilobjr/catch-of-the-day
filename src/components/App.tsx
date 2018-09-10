import * as React from 'react';
import * as classNames from 'classnames';
import { Component } from 'react';
import { v4 as generateId } from 'uuid';
import { Button } from './common';
import { Menu } from './menu';
import { Order } from './order';
import { Inventory } from './inventory';
import { dataSource } from './../dataSource';
import { IFish } from './../models';

const initialState = {
  fishs: [] as IFish[],
  fishsInOrder: [] as IFish[],
  isFoldedUp: false,
};

type AppState = Readonly<typeof initialState>;

export class App extends Component<{}, AppState> {
  readonly state: AppState = initialState;

  async componentDidMount() {
    const fishs = await dataSource.fishs.getAll();
    const newState = { ...this.state, fishs };
    this.setState(newState);
  }

  render() {
    return (
      <div className={classNames('app', { 'foldedUp': this.state.isFoldedUp })}>
        <div className="content">
          <Menu
            items={this.state.fishs}
            onClickAddToOrderButton={this.addFishItemToOrder}
          />

          <Order
            items={this.state.fishsInOrder}
            onClickRemoveItem={this.removeFishFromOrder}
          />

          <Inventory
            items={this.state.fishs}
            onClickAddFish={this.addNewFishToInventory}
            onClickRemoveFish={this.removeFishFromInventory}
            onUpdateFishData={this.updateFish}
          />
        </div>

        <Button
          className="fold-button"
          onClick={this.toggleFoldPerspective}
        >
          Fold
        </Button>
      </div>
    );
  }

  addFishItemToOrder = (fishItem: IFish): void => {
    const fishsInOrder = [fishItem, ...this.state.fishsInOrder];
    const newState = { ...this.state, fishsInOrder };
    this.setState(newState);
  }

  removeFishFromOrder = (fishId: string): void => {
    const fishsInOrder = this.state.fishsInOrder.filter(fish => fish.id !== fishId);
    const newState = { ...this.state, fishsInOrder };
    this.setState(newState);
  }

  addNewFishToInventory = (newFish: IFish): void => {
    const tempId = generateId();
    newFish.id = tempId;
    const fishs = [...this.state.fishs, newFish];
    const newState = { ...this.state, fishs };
    this.setState(newState);

    dataSource.fishs.add(newFish).then(definitiveDbId => {
      const others = this.state.fishs.filter(fish => fish.id !== tempId);
      const updatedFish = { ...newFish, ...{ id: definitiveDbId } };
      const fishs = [...others, updatedFish];

      const newState = { ...this.state, fishs };
      this.setState(newState);
    });
  }

  removeFishFromInventory = (fishId: string): void => {
    const others = this.state.fishs.filter(fish => fish.id !== fishId);
    const fishs = [...others];

    const newState = { ...this.state, fishs };
    this.setState(newState);

    dataSource.fishs.remove(fishId);
  }

  updateFish = (updatedFish: IFish): void => {
    const index = this.state.fishs.findIndex(f => f.id === updatedFish.id);
    const fishs = [
      ...this.state.fishs.slice(0, index),
      updatedFish,
      ...this.state.fishs.slice(index + 1)
    ];

    let fishsInOrder = this.state.fishsInOrder.map(fish => {
      if (fish.id === updatedFish.id) {
        fish = { ...fish, ...updatedFish };
      }

      return fish;
    });

    const newState = { ...this.state, fishs, fishsInOrder };
    this.setState(newState);
  }

  toggleFoldPerspective = () => {
    const isFoldedUp = !this.state.isFoldedUp;
    const newState = { ...this.state, isFoldedUp };
    this.setState(newState);
  }
}
