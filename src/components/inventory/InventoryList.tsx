import * as React from 'react';
import { InventoryListItem } from './InventoryListItem';

export class InventoryList extends React.Component<any, any> {
    render() {
        return (
            <ul>
                <InventoryListItem />
                <InventoryListItem />
                <InventoryListItem />
                <InventoryListItem />
                <InventoryListItem isAddBox />
            </ul>
        );
    }
}