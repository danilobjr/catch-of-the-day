import * as React from 'react';
import { MenuItem } from './MenuItem';
import { IFish } from './../../models';

interface IProps {
    items: IFish[];
    onClickAddToOrderButton: (fishItem: IFish) => void;
}

export class MenuList extends React.Component<IProps, any> {
    render() {
        return <ul>{this.renderMenuItems()}</ul>;
    }
    
    renderMenuItems() {
        const { items, onClickAddToOrderButton } = this.props;
        
        return items.map(item => 
            <MenuItem 
                key={item.id} 
                fish={item} 
                onClickAddToOrderButton={onClickAddToOrderButton} 
            />
        );
    }
}