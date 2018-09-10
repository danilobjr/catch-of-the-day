import * as React from 'react';
import { Component } from 'react';
import { Button, FlexBox } from './../common';
import { IFish, FishFactory } from './../../models';

type InventoryBoxProps = {
  fishItem?: IFish;
  buttonText?: string;
  onClickButton: (newFishData: IFish) => void;
  onUpdateData?: (fishUpdated: IFish) => void;
};

type InventoryBoxState = Readonly<IFish>;

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
          <FlexBox>
            <input type="text" placeholder="Fish Name" value={fishItem.name} onChange={(e) => this.updateStateOnInputChange('name', e.target.value)} />
            <input type="number" placeholder="Fish Price" value={fishItem.price} onChange={(e) => this.updateStateOnInputChange('price', parseInt(e.target.value, 10))} />

            <select
              value={this.state.available ? 'fresh' : 'sold'}
              onChange={(e) => this.updateStateOnInputChange('available', e.target.value === 'fresh' ? true : false)}
            >
              <option value="fresh">Fresh!</option>
              <option value="sold">Sold Out!</option>
            </select>
          </FlexBox>

          <FlexBox>
            <textarea rows={2} placeholder="Description" value={fishItem.description} onChange={(e) => this.updateStateOnInputChange('description', e.target.value)} />
          </FlexBox>

          <FlexBox>
            <input type="url" placeholder="Url to Image" value={fishItem.imageUrl} onChange={(e) => this.updateStateOnInputChange('imageUrl', e.target.value)} />
          </FlexBox>
        </div>

        <FlexBox>
          <Button onClick={this.onClickButton}>{this.props.buttonText}</Button>
        </FlexBox>
      </div>
    );
  }

  updateStateOnInputChange(propertyName: string, value: any): void {
    const newState = Object.assign({}, this.state, { [propertyName]: value }) as InventoryBoxState;
    this.setState(newState);
    this.props.onUpdateData && this.props.onUpdateData(newState);
  }

  onClickButton = (): void => {
    this.props.onClickButton(this.state);
    this.setState(FishFactory.create());
  }
}
