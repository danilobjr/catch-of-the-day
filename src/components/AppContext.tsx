import * as React from 'react';
import { Fish } from '../models';
import { dataSource } from '../dataSource';
import { v4 as generateId } from 'uuid';

const initialState = {
  fishs: [] as Fish[],
  fishsInOrder: [] as Fish[],
  isFoldedUp: false,
};

type AppProviderState = Readonly<typeof initialState>;

const AppContext = React.createContext({
  ...initialState,
  addFishToOrder: (fish: Fish) => null,
  removeFishFromOrder: (id: string) => null,
  addFishToInventory: (fish: Fish) => null,
  removeFishFromInventory: (id: string) => null,
  updateFish: (updatedFish: Fish) => null,
  toggleFold: () => null,
});

export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.Component<{}, AppProviderState> {
  readonly state = initialState;

  async componentDidMount() {
    // TODO: dataSource will be removed. Get fish from other source
    const fishs = await dataSource.fishs.getAll();
    const newState = { ...this.state, fishs };
    this.setState(newState);
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          ...this.state,
          addFishToOrder: this.addFishToOrder,
          removeFishFromOrder: this.removeFishFromOrder,
          addFishToInventory: this.addFishToInventory,
          removeFishFromInventory: this.removeFishFromInventory,
          updateFish: this.updateFish,
          toggleFold: this.toggleFold,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    )
  }

  addFishToOrder = (fishItem: Fish): void => {
    const fishsInOrder = [fishItem, ...this.state.fishsInOrder];
    const newState = { ...this.state, fishsInOrder };
    this.setState(newState);
  }

  removeFishFromOrder = (fishId: string): void => {
    const fishsInOrder = this.state.fishsInOrder.filter(fish => fish.id !== fishId);
    const newState = { ...this.state, fishsInOrder };
    this.setState(newState);
  }

  addFishToInventory = (newFish: Fish): void => {
    const tempId = generateId();
    newFish.id = tempId;
    const fishs = [...this.state.fishs, newFish];
    const newState = { ...this.state, fishs };
    this.setState(newState);
  }

  removeFishFromInventory = (fishId: string): void => {
    const others = this.state.fishs.filter(fish => fish.id !== fishId);
    const fishs = [...others];

    const newState = { ...this.state, fishs };
    this.setState(newState);
  }

  updateFish = (updatedFish: Fish): void => {
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

  toggleFold = () => {
    const isFoldedUp = !this.state.isFoldedUp;
    const newState = { ...this.state, isFoldedUp };
    this.setState(newState);
  }
}
