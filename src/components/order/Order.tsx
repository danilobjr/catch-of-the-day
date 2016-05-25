import * as React from 'react';
import { Section, SectionHeader } from './../common';
import { OrderList } from './OrderList';

export class Order extends React.Component<any, any> {
    render() {
        return (
            <Section>
                <SectionHeader>Your Order</SectionHeader>
                
                <OrderList />
                {/*
                <OrderTotal />
                */}
            </Section>
        );
    }
}