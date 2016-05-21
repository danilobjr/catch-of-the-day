import * as React from 'react';

interface IProps {
    text: string;
}

export class Button extends React.Component<IProps, any> {
    render() {
        return <button>{this.props.text}</button>
    }
};