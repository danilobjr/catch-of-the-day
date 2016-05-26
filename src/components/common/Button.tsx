import * as React from 'react';

interface IProps extends React.HTMLAttributes {
    text: string;
}

export class Button extends React.Component<IProps, any> {
    render() {
        return <button {...this.props}>{this.props.text}</button>
    }
};