import * as React from 'react';
import { Currency } from './Currency';

enum PriceSize {
    small,
    normal
}

interface IProps {
    value: number;
    size?: PriceSize;
    bold?: boolean;
    className?: string;
}

export class Price extends React.Component<IProps, any> {
    render() {
        return <Currency className={this.getClassName()} value={this.props.value} />;
    }
    
    getClassName(): string {
        let classes = ['price'];
        
        this.props.className && classes.push(this.props.className);
        
        return classes.join(' ');
    }
}