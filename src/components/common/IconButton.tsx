import * as React from 'react';
import { FlexBox } from './FlexBox';

interface IProps {
    name: string;
    onClick?: (event: Event) => void;
}

export class IconButton extends React.Component<IProps, any> {
    render() {
        return (
            <FlexBox className="icon-button">
                <span className={`fa fa-${this.props.name}`} onClick={this.onClick}></span>
            </FlexBox>
        );
    }
    
    onClick = (event: any): void => {
        this.props.onClick(event);
    }
}