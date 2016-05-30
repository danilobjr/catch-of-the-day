import * as React from 'react';
import { Button } from './../common';

interface IProps extends React.HTMLAttributes {
    text: string;
    showSoldOutLabel?: boolean;
}

export class MenuAddToOrderButton extends React.Component<IProps, any> {
    render() {
        return <Button {...this.props} className={this.renderCssClasses()} text={this.renderText()} />
    }
    
    renderCssClasses(): string {
        const isSoldClass = this.props.showSoldOutLabel ? 'sold-out' : ''; 
        const cssCLasses = ['add-to-order', isSoldClass, this.props.className];
        return cssCLasses.join(' ');
    }
    
    renderText(): string {
        return this.props.showSoldOutLabel ? 'Sold Out!' : this.props.text;
    }
}