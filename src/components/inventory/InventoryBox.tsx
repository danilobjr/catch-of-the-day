import * as React from 'react';
import { Button, FlexBox } from './../common';

interface IProps {
    buttonText: string;
}

export class InventoryBox extends React.Component<IProps, any> {
    render() {
        return (
            <div className="inventory-box">
                <div className="fields">
                    <FlexBox>
                        <input type="text" placeholder="Fish Name" />
                        <input type="number" placeholder="Fish Price" />
                        <select>
                            <option value="fresh">Fresh!</option>
                            <option value="sold">Sold Out!</option>
                        </select>
                    </FlexBox>
                    <FlexBox>
                        <textarea rows="2" placeholder="Description" />
                    </FlexBox>
                    <FlexBox>
                        <input type="url" placeholder="Url to Image" />
                    </FlexBox>
                </div>
                <FlexBox>
                    <Button text={this.props.buttonText} />
                </FlexBox>
            </div>
        );
    }
}