import * as React from 'react';
import { Section } from './../common';
import { MenuHeader } from './MenuHeader';
import { MenuList } from './MenuList';

export class Menu extends React.Component<any, any> {
    render() {
        return (
            <Section>
                <MenuHeader />
                <MenuList />
            </Section>
        );
    }
}