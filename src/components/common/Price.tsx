import * as React from 'react';

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
        return <span className={this.getClassName()}>{this.formatValue()}</span>;
    }
    
    getClassName(): string {
        let classes = ['price'];
        
        this.props.className && classes.push(this.props.className);
        
        return classes.join(' ');
    }
    
    formatValue(): string {
        return this.props.value.toString();
    }
}