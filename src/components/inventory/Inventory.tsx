import * as React from 'react';
import { Section, SectionHeader } from './../common';
import { InventoryList } from './InventoryList';
import { IFish } from './../../models';

interface IProps {
    items: IFish[];
    onClickAddFish: (fish: IFish) => void;
    onClickRemoveFish: (fishId: string) => void;
}

export class Inventory extends React.Component<IProps, any> {
    render() {
        return (
            <Section>
                <SectionHeader>Inventory</SectionHeader>
                <InventoryList 
                    items={this.props.items}
                    onClickAddFish={this.props.onClickAddFish}
                    onClickRemoveFish={this.props.onClickRemoveFish}
                />
            </Section>
        );
    }
}