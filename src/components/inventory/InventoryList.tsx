import * as React from 'react';
import { InventoryListItem } from './InventoryListItem';
import { IFish } from './../../models';

interface IProps {
    items: IFish[];
    onClickAddFish: (fish: IFish) => void;
}

export class InventoryList extends React.Component<IProps, any> {
    render() {
        return (
            <ul>
                {this.renderInventoryListItems()}
                <InventoryListItem isAddBox onClickButton={this.onClickAddFish} />
            </ul>
        );
    }
    
    renderInventoryListItems(): JSX.Element[] {
        return this.props.items.map(fishItem => 
            <InventoryListItem 
                key={fishItem.id} 
                item={fishItem} 
                onClickButton={() => console.warn('TODO: remove fish from inventory')} 
            />
        );
    }
    
    onClickAddFish = (fish: IFish) : void => {
        this.props.onClickAddFish(fish);
    }
}