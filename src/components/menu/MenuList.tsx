import * as React from 'react';
import { MenuItem } from './MenuItem';

export class MenuList extends React.Component<any, any> {
    render() {
        return (
            <ul>
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </ul>
        );
    }
}