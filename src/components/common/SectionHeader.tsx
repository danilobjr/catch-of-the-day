import * as React from 'react';
import { HTMLAttributes, SFC } from 'react';
import { Header } from 'components';

type SectionHeaderProps = HTMLAttributes<HTMLElement>;

export const SectionHeader: SFC<SectionHeaderProps> = ({ children, ...otherProps }) => (
  <header {...otherProps} className="section-header">
    <Header>{children}</Header>
  </header>
);

SectionHeader.displayName = 'SectionHeader';
