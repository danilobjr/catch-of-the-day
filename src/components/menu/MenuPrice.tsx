import * as React from 'react';
import { Price } from './../common';

interface IProps {
    value: number;
}

export class MenuPrice extends React.Component<IProps, any> {
    render() {
        return <Price className="menu-price" value={this.props.value} />;
    }
}