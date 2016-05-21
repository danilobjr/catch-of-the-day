import * as React from 'react';
import { format } from 'currency-formatter';

interface IProps extends React.HTMLAttributes{
    currency?: string;
}

export class Currency extends React.Component<IProps, any> {
    static get defaultProps() {
        const defaultProps: IProps = {
            value: '0',
            currency: 'USD'
        };
        
        return defaultProps;
    }
    
    render() {
        return <span {...this.props}>{this.formatValue()}</span>;
    }
    
    formatValue(): string {
        const {value, currency} = this.props;
        return format(value.toString(), { code: currency });
    }
} 