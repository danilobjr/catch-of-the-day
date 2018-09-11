import * as React from 'react';
import { HTMLAttributes, SFC } from 'react';

type HeaderProps = HTMLAttributes<HTMLElement>;

export const Header: SFC<HeaderProps> = ({ children, ...otherProps }) => (
  <h2 {...otherProps}>{children}</h2>
);

Header.displayName = 'Header';
