import * as React from 'react';
import { Section, SectionHeader } from './../common';
import { OrderList } from './OrderList';
import { OrderTotal } from './OrderTotal';
import { IFish } from './../../models';

interface IProps {
    items: IFish[];
    onClickRemoveItem: (fishId: string) => void;
}

export class Order extends React.Component<IProps, any> {
    render() {
        const { items, onClickRemoveItem } = this.props;
        
        return (
            <Section>
                <SectionHeader>Your Order</SectionHeader>                
                <OrderList items={items} onClickRemoveItem={onClickRemoveItem} />
                <OrderTotal items={items} />
            </Section>
        );
    }
}