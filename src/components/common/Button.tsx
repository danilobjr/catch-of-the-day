import * as React from 'react';
import { HTMLAttributes, SFC } from 'react';

export type ButtonProps = HTMLAttributes<HTMLButtonElement>;

export const Button: SFC<ButtonProps> = ({ children, ...otherProps }) => (
  <button {...otherProps}>{children}</button>
);

Button.displayName = 'Button';
