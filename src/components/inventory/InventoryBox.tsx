import * as React from 'react';
import * as _ from 'lodash';
import { Button, FlexBox } from './../common';
import { IFish, FishFactory } from './../../models';

interface IProps {
    fishItem?: IFish;
    buttonText?: string;
    onClickButton: (newFishData: IFish) => void;
    onUpdateData?: (fishUpdated: IFish) => void;
}

interface IState extends IFish {    
}

export class InventoryBox extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
    
        this.state = this.props.fishItem;
    }
    
    static get defaultProps() {
        const defaultProps = {
            fishItem: FishFactory.create(),
            buttonText: '+ Add Item'
        };
        
        return defaultProps;
    }
    
    render() {
        const fishItem = this.state;
        
        return (
            <div className="inventory-box">
                <div className="fields">
                    <FlexBox>
                        <input type="text" placeholder="Fish Name" value={fishItem.name} onChange={(e) => this.updateStateOnInputChange('name', e.target.value)} />
                        <input type="number" placeholder="Fish Price" value={fishItem.price} onChange={(e) => this.updateStateOnInputChange('price', parseInt(e.target.value, 10))} />
                        <select 
                            value={this.state.available ? 'fresh' : 'sold'} 
                            onChange={(e) => this.updateStateOnInputChange('available', e.target.value === 'fresh' ? true : false)}
                        >
                            <option value="fresh">Fresh!</option>
                            <option value="sold">Sold Out!</option>
                        </select>
                    </FlexBox>
                    <FlexBox>
                        <textarea rows="2" placeholder="Description" value={fishItem.description} onChange={(e) => this.updateStateOnInputChange('description', e.target.value)} />
                    </FlexBox>
                    <FlexBox>
                        <input type="url" placeholder="Url to Image" value={fishItem.imageUrl} onChange={(e) => this.updateStateOnInputChange('imageUrl', e.target.value)} />
                    </FlexBox>
                </div>
                <FlexBox>
                    <Button text={this.props.buttonText} onClick={this.onClickButton} />
                </FlexBox>
            </div>
        );
    }
    
    updateStateOnInputChange(propertyName: string, value: any): void {
        const newState = _.assign({}, this.state, { [propertyName]: value }) as IState;        
        this.setState(newState);
        
        this.props.onUpdateData && this.props.onUpdateData(newState);
    }
    
    onClickButton = () : void => {
        this.props.onClickButton(this.state);
        this.setState(FishFactory.create());
    }
}