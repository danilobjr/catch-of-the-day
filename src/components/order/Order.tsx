import * as React from 'react';
import { Section, SectionHeader } from './../common';
import { OrderList } from './OrderList';
import { OrderTotal } from './OrderTotal';

export class Order extends React.Component<any, any> {
    render() {
        return (
            <Section>
                <SectionHeader>Your Order</SectionHeader>
                
                <OrderList />
                <OrderTotal />
            </Section>
        );
    }
}