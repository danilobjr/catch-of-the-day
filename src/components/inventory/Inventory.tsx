import * as React from 'react';
import { Section, SectionHeader } from './../common';
import { InventoryList } from './InventoryList';

export class Inventory extends React.Component<any, any> {
    render() {
        return (
            <Section>
                <SectionHeader>Inventory</SectionHeader>
                <InventoryList />
                {/*
                <InventoryNewItem />
                */}
            </Section>
        );
    }
}