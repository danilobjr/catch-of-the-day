import * as React from 'react';
import { Header } from './../common';
import { MenuImage } from './MenuImage';

export class MenuItem extends React.Component<any, any> {
    render() {
        return (
            <li className="menu-item">
                {/*
                <MenuImage url="http://prazeresdamesa.uol.com.br/wordpress/wp-content/uploads/arquivos/imagem_10833.jpg" />
                */}
                <Header>Menu Item</Header>
                <p>Item description</p>
                {/*
                <AddToOrderButton />
                <Price value={2500} />
                */}
            </li>
        );
    }
}