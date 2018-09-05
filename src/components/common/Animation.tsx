import * as React from 'react';
import * as ReactCssTransitionGroup from 'react-addons-css-transition-group';

interface IProps {
  transitionName: string;
}

export class Animation extends React.Component<IProps, any> {
  render() {
    return (
      <ReactCssTransitionGroup
        {...this.props}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}
      >
        {this.props.children}
      </ReactCssTransitionGroup>
    );
  }
}
