import * as React from 'react';
import { v4 as generateId } from 'uuid';
import { Fish } from 'models';
import { data } from 'data';

const initialState = {
  fishs: [] as Fish[],
  fishsInOrder: [] as Fish[],
  isFoldedUp: false,
};

type ContextProviderState = Readonly<typeof initialState>;

const context = {
  ...initialState,
  addFishToOrder: (fish: Fish) => null as void,
  removeFishFromOrder: (id: string) => null as void,
  addFishToInventory: (fish: Fish) => null as void,
  removeFishFromInventory: (id: string) => null as void,
  updateFish: (updatedFish: Fish) => null as void,
  toggleFold: () => null as void,
};

export type Context = typeof context;

const appContext = React.createContext(context);

export const ContextConsumer = appContext.Consumer;

export class ContextProvider extends React.Component<{}, ContextProviderState> {
  readonly state = initialState;

  componentDidMount() {
    const fishs = data.fishs;
    const newState = { ...this.state, fishs };
    this.setState(newState);
  }

  render() {
    return (
      <appContext.Provider
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
      </appContext.Provider>
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
