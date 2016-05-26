import * as React from 'react';
import { Section } from './../common';
import { MenuHeader } from './MenuHeader';
import { MenuList } from './MenuList';
import { IFish } from './../../models';

interface IProps {
    items: IFish[];
    onClickAddToOrderButton: (fishItem: IFish) => void;
}

export class Menu extends React.Component<IProps, any> {
    render() {
        const { items, onClickAddToOrderButton } = this.props;
        
        return (
            <Section>
                <MenuHeader />
                <MenuList items={items} onClickAddToOrderButton={onClickAddToOrderButton} />
            </Section>
        );
    }
}