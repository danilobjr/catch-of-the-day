import * as React from 'react';
import { InventoryBox } from './InventoryBox';
import { IFish } from './../../models';

interface IProps {
    item?: IFish;
    isAddBox?: boolean;
    onClickButton: (fish: IFish) => void;
}

export class InventoryListItem extends React.Component<IProps, any> {
    render() {
        return <li className="inventory-list-item">{this.renderInventoryBox()}</li>;
    }
    
    renderInventoryBox(): JSX.Element {
        return this.props.isAddBox 
            ? <InventoryBox onClickButton={this.props.onClickButton} /> 
            : <InventoryBox 
                buttonText="Remove Fish" 
                fishItem={this.props.item} 
                onClickButton={this.props.onClickButton} 
              />;
    }
}