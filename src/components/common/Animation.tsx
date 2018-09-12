import * as React from 'react';
import * as ReactCssTransitionGroup from 'react-addons-css-transition-group';
import { SFC } from 'react';

type AnimationProps = {
  transitionName: string;
};

export const Animation: SFC<AnimationProps> = ({ children, ...otherProps }) => (
  <ReactCssTransitionGroup
    {...otherProps}
    transitionEnterTimeout={500}
    transitionLeaveTimeout={500}
  >
    {children}
  </ReactCssTransitionGroup>
);

Animation.displayName = 'Animation';
