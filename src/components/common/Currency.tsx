import * as React from 'react';
import { HTMLAttributes } from 'react';
import { format } from 'currency-formatter';

interface ChangedProps extends HTMLAttributes<HTMLSpanElement> {
  value?: any;
}

interface IProps extends ChangedProps {
  currency?: string;
  value: number;
}

export class Currency extends React.Component<IProps, any> {
  static get defaultProps() {
    const defaultProps: IProps = {
      value: 0,
      currency: 'USD'
    };

    return defaultProps;
  }

  render() {
    const { value, ...otherProps } = this.props;
    return <span {...otherProps}>{this.formatValue()}</span>;
  }

  formatValue(): string {
    const { value, currency } = this.props;
    return format(value, { code: currency });
  }
}
