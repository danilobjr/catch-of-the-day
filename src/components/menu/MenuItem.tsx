import * as React from 'react';
import { Header, Button } from './../common';
import { MenuImage } from './MenuImage';
import { MenuPrice } from './MenuPrice';
import { IFish } from './../../models';

interface IProps {
    fish: IFish;
    onClickAddToOrderButton: (fishItem: IFish) => void;
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
                    <Button text="Add to Order" onClick={this.onClickAddToOrderButton} />
                    <MenuPrice value={fish.price} />
                </div>
            </li>
        );
    }
    
    onClickAddToOrderButton = (): void => {
        this.props.onClickAddToOrderButton(this.props.fish);
    }
}