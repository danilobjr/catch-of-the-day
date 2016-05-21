import * as React from 'react';
import { Currency } from './Currency';

interface IProps {
    value: number;
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