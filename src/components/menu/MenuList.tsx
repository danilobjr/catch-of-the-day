import * as React from 'react';
import { MenuItem } from './MenuItem';
import { IFish } from './../../models';

interface IProps {
    items: IFish[];
}

export class MenuList extends React.Component<IProps, any> {
    render() {
        return <ul>{this.renderMenuItems()}</ul>;
    }
    
    renderMenuItems() {
        return this.props.items.map(item => <MenuItem key={item.id} fish={item} />);
    }
}