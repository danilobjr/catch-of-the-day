import * as React from 'react';
import { SFC } from 'react';
import { IFish } from './../../models';
import { InventoryBox } from './InventoryBox';

type InventoryListItemProps = {
  item?: IFish;
  isAddBox?: boolean;
  onClickButton: (fish: IFish) => void;
  onUpdateData?: (updatedFish: IFish) => void;
};

export const InventoryListItem: SFC<InventoryListItemProps> = (props) => (
  <li className="inventory-list-item">{renderInventoryBox(props)}</li>
);

const renderInventoryBox = (props: InventoryListItemProps) =>
  props.isAddBox
    ? <InventoryBox onClickButton={props.onClickButton} />
    : <InventoryBox
      buttonText="Remove Fish"
      fishItem={props.item}
      onClickButton={props.onClickButton}
      onUpdateData={props.onUpdateData}
    />;


