import * as React from 'react';
import { Component } from 'react';
import { Button } from 'components';
import { Fish, FishFactory } from 'models';
import { compose, prop, toInt, equals, defaultTo } from 'utils';

type InventoryBoxProps = {
  buttonText?: string;
  fishItem?: Fish;
  onClickButton: (newFishData: Fish) => void;
  onUpdateData?: (fishUpdated: Fish) => void;
};

type InventoryBoxState = Readonly<Fish>;

// TODO: turn it in a PureComponent
export class InventoryBox extends Component<InventoryBoxProps, InventoryBoxState> {
  readonly state: InventoryBoxState;

  constructor(props: InventoryBoxProps) {
    super(props);

    this.state = this.props.fishItem;
  }

  static defaultProps: Partial<InventoryBoxProps> = {
    buttonText: '+ Add Item',
    fishItem: FishFactory.create(),
    onUpdateData: () => null,
  }

  render() {
    const fishItem = this.state;
    console.log(fishItem.price);

    return (
      <div className="inventory-box">
        <div className="fields">
          <div className="row">
            <input
              type="text"
              placeholder="Fish Name"
              value={fishItem.name}
              onChange={this.handleTargetValueChange('name')}
            />

            <input
              type="number"
              placeholder="Fish Price"
              value={fishItem.price}
              onChange={this.handlePriceChange}
            />

            <select
              value={this.state.available ? 'fresh' : 'sold'}
              onChange={this.handleAvailabilityChange}
            >
              <option value="fresh">Fresh!</option>
              <option value="sold">Sold Out!</option>
            </select>
          </div>

          <textarea
            rows={2}
            placeholder="Description"
            value={fishItem.description}
            onChange={this.handleTargetValueChange('description')}
          />

          <input
            type="url"
            placeholder="Url to Image"
            value={fishItem.imageUrl}
            onChange={this.handleTargetValueChange('imageUrl')}
          />
        </div>

        <Button onClick={this.handleClick}>{this.props.buttonText}</Button>
      </div>
    );
  }

  handleChange = (propertyName: string) => (value: string | number) => {
    const newState = { ...this.state, ...{ [propertyName]: value } };
    this.setState(newState);
    this.props.onUpdateData && this.props.onUpdateData(newState);
  }

  handleTargetValueChange = (statePropName: string) => compose(
    this.handleChange(statePropName),
    prop('target.value'),
  ) as any;

  handlePriceChange = compose(
    this.handleChange('price'),
    defaultTo(0),
    toInt,
    prop('target.value'),
  ) as any;

  handleAvailabilityChange = compose(
    this.handleChange('available'),
    equals('fresh'),
    prop('target.value'),
  ) as any;

  handleClick = (): void => {
    this.props.onClickButton(this.state);
    this.setState(FishFactory.create());
  }
}
