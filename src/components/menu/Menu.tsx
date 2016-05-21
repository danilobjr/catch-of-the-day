import * as React from 'react';
import { Section } from './../common';
import { MenuHeader } from './MenuHeader';

export class Menu extends React.Component<any, any> {
    render() {
        return (
            <Section>
                <MenuHeader />
            </Section>
        );
    }
}