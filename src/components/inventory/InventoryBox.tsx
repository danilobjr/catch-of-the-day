import * as React from 'react';
import { Component } from 'react';
import { Button } from 'components';
import { Fish, FishFactory } from 'models';

type InventoryBoxProps = {
  fishItem?: Fish;
  buttonText?: string;
  onClickButton: (newFishData: Fish) => void;
  onUpdateData?: (fishUpdated: Fish) => void;
};

type InventoryBoxState = Readonly<Fish>;

export class InventoryBox extends Component<InventoryBoxProps, InventoryBoxState> {
  readonly state: InventoryBoxState;

  constructor(props: InventoryBoxProps) {
    super(props);

    this.state = this.props.fishItem;
  }

  static get defaultProps() {
    const defaultProps = {
      fishItem: FishFactory.create(),
      buttonText: '+ Add Item'
    };

    return defaultProps;
  }

  render() {
    const fishItem = this.state;

    return (
      <div className="inventory-box">
        <div className="fields">
          <div className="row">
            <input type="text" placeholder="Fish Name" value={fishItem.name} onChange={(e) => this.updateStateOnInputChange('name', e.target.value)} />
            <input type="number" placeholder="Fish Price" value={fishItem.price} onChange={(e) => this.updateStateOnInputChange('price', parseInt(e.target.value, 10))} />

            <select
              value={this.state.available ? 'fresh' : 'sold'}
              onChange={(e) => this.updateStateOnInputChange('available', e.target.value === 'fresh' ? true : false)}
            >
              <option value="fresh">Fresh!</option>
              <option value="sold">Sold Out!</option>
            </select>
          </div>

          <textarea rows={2} placeholder="Description" value={fishItem.description} onChange={(e) => this.updateStateOnInputChange('description', e.target.value)} />
          <input type="url" placeholder="Url to Image" value={fishItem.imageUrl} onChange={(e) => this.updateStateOnInputChange('imageUrl', e.target.value)} />
        </div>

        <Button onClick={this.onClickButton}>{this.props.buttonText}</Button>
      </div>
    );
  }

  updateStateOnInputChange(propertyName: string, value: any): void {
    const newState = { ...this.state, ...{ [propertyName]: value } };
    this.setState(newState);
    this.props.onUpdateData && this.props.onUpdateData(newState);
  }

  onClickButton = (): void => {
    this.props.onClickButton(this.state);
    this.setState(FishFactory.create());
  }
}
