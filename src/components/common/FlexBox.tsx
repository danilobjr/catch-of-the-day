import * as React from 'react';
import * as classNames from 'classnames';
import { HTMLAttributes, SFC } from 'react';

type FlexBoxProps = HTMLAttributes<HTMLDivElement>;

export const FlexBox: SFC<FlexBoxProps> = ({ children, className, ...otherProps }) => (
  <div
    {...otherProps}
    className={classNames('flex-container', className)}
  >
    {children}
  </div>
);

FlexBox.displayName = 'FlexBox';
