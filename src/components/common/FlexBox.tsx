import * as React from 'react';
import { HTMLAttributes, SFC } from 'react';

type FlexBoxProps = HTMLAttributes<HTMLDivElement>;

export const FlexBox: SFC<FlexBoxProps> = ({ children, className }) => (
  <div className={`flex-container ${className}`}>{children}</div>
);
