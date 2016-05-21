import * as React from 'react';
import { InventoryBox } from './InventoryBox';

export class InventoryListItem extends React.Component<any, any> {
    render() {
        return <li className="inventory-list-item"><InventoryBox buttonText="Remove Fish" /></li>;
    }
}