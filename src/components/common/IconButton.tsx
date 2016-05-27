import * as React from 'react';
import { FlexBox } from './FlexBox';

interface IProps {
    name: string;
}

export class IconButton extends React.Component<IProps, any> {
    render() {
        return (
            <FlexBox className="icon-button">
                <span className={`fa fa-${this.props.name}`}></span>
            </FlexBox>
        );
    }
}