import * as React from 'react';
import { Header, Button } from './../common';
import { MenuImage } from './MenuImage';
import { MenuPrice } from './MenuPrice';

export class MenuItem extends React.Component<any, any> {
    render() {
        return (
            <li className="menu-item">
                <div>
                    <MenuImage url="http://prazeresdamesa.uol.com.br/wordpress/wp-content/uploads/arquivos/imagem_10833.jpg" />
                </div>
                <div>
                    <Header>Menu Item</Header>
                    <p>Item description</p>
                    <Button text="Add to Order" />
                    <MenuPrice value={25} />
                </div>
            </li>
        );
    }
}