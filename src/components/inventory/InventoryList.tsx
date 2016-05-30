import * as React from 'react';
import { InventoryListItem } from './InventoryListItem';
import { IFish } from './../../models';

interface IProps {
    items: IFish[];
    onClickAddFish: (fish: IFish) => void;
    onClickRemoveFish: (fishId: string) => void;
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
                onClickButton={this.onClickRemoveFish}
            />
        );
    }
    
    onClickAddFish = (fish: IFish) : void => {
        this.props.onClickAddFish(fish);
    }
    
    onClickRemoveFish = (fish: IFish): void => {
        this.props.onClickRemoveFish(fish.id);
    }
}