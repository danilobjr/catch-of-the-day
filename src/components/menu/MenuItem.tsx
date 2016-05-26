import * as React from 'react';
import { Header, Button } from './../common';
import { MenuImage } from './MenuImage';
import { MenuPrice } from './MenuPrice';
import { IFish } from './../../models';

interface IProps {
    fish: IFish;
}

export class MenuItem extends React.Component<IProps, any> {
    render() {
        const { fish } = this.props;
        
        return (            
            <li className="menu-item">
                <div>
                    <MenuImage url={fish.imageUrl} />
                </div>
                <div>
                    <Header>{fish.name}</Header>
                    <p>{fish.description}</p>
                    <Button text="Add to Order" />
                    <MenuPrice value={fish.price} />
                </div>
            </li>
        );
    }
}