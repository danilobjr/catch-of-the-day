import * as React from 'react';
import { InventoryBox } from './InventoryBox';

interface IProps {
    isAddBox?: boolean;
}

export class InventoryListItem extends React.Component<IProps, any> {
    render() {
        return <li className="inventory-list-item">{this.renderInventoryBox()}</li>;
    }
    
    renderInventoryBox(): JSX.Element {
        return this.props.isAddBox 
            ? <InventoryBox buttonText="+ Add Item" /> 
            : <InventoryBox buttonText="Remove Fish" />;
    }
}