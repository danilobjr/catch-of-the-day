import * as React from 'react';
import { Component } from 'react';
import { Button, ButtonProps } from './../common';

interface IProps extends ButtonProps {
  showSoldOutLabel?: boolean;
}

export class MenuAddToOrderButton extends Component<IProps, {}> {
  render() {
    return <Button {...this.props} className={this.renderCssClasses()}>{this.renderText()}</Button>
  };

  renderCssClasses(): string {
    const isSoldClass = this.props.showSoldOutLabel ? 'sold-out' : '';
    const cssCLasses = ['add-to-order', isSoldClass, this.props.className];
    return cssCLasses.join(' ');
  }

  renderText() {
    return this.props.showSoldOutLabel ? 'Sold Out!' : this.props.children;
  }
}
