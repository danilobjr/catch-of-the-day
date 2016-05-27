import * as React from 'react';
import { Section, SectionHeader } from './../common';
import { OrderList } from './OrderList';
import { OrderTotal } from './OrderTotal';
import { IFish } from './../../models';

interface IProps {
    items: IFish[];
}

export class Order extends React.Component<IProps, any> {
    render() {
        return (
            <Section>
                <SectionHeader>Your Order</SectionHeader>                
                <OrderList items={this.props.items} />
                <OrderTotal />
            </Section>
        );
    }
}