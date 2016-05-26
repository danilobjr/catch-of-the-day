import * as React from 'react';
import { Section } from './../common';
import { MenuHeader } from './MenuHeader';
import { MenuList } from './MenuList';
import { IFish } from './../../models';

interface IProps {
    items: IFish[];
}

export class Menu extends React.Component<IProps, any> {
    render() {
        return (
            <Section>
                <MenuHeader />
                <MenuList items={this.props.items} />
            </Section>
        );
    }
}